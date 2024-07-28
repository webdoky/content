import fs from "node:fs/promises";
import path from "node:path";

import { betterAjvErrors } from "@apideck/better-ajv-errors";
import AJV from "ajv";
import addFormats from "ajv-formats";
import grayMatter from "gray-matter";
import YAML from "js-yaml";
import * as prettier from "prettier";

export function getRelativePath(filePath) {
  return path.relative(process.cwd(), filePath);
}

export function getAjvValidator(schema) {
  const ajv = new AJV({ allowUnionTypes: true, allErrors: true });
  addFormats.default(ajv);
  return ajv.compile(schema);
}

function areAttributesInOrder(frontMatter, order) {
  const attributes = Object.keys(frontMatter).filter((item) =>
    order.includes(item),
  );
  const orderedAttributes = order.filter((item) => frontMatter[item]);
  return orderedAttributes.every((item, index) => item === attributes[index]);
}

export async function checkFrontMatter(filePath, { config, fix, validator }) {
  let content = await fs.readFile(filePath, "utf8");
  const document = grayMatter(content);
  const fmObject = document.data;
  const order = config["attribute-order"];

  // validate and collect errors
  const valid = validator(fmObject);
  const validationErrors = betterAjvErrors({
    schema: validator.schema,
    data: fmObject,
    errors: validator.errors,
  });
  let errors = [];
  if (!valid) {
    errors = validationErrors.map((error) => {
      let message = error.message.replace("{base}", "Front matter");
      if (error.context.allowedValues) {
        message += `:\n\t${error.context.allowedValues.join(", ")}`;
      }
      return message;
    });
  }

  const isInOrder = areAttributesInOrder(fmObject, order);
  let fixableError = null;

  if (!fix && !isInOrder) {
    fixableError = `${getRelativePath(
      filePath,
    )}\n\t Front matter attributes are not in required order: ${order.join(
      "->",
    )}`;
  }

  //  if --fix option is true, then fix the order and prettify
  if (fix) {
    const fmOrdered = {};
    config["attribute-order"].forEach((attribute) => {
      const value = fmObject[attribute];
      if (value) {
        if (
          attribute === "status" &&
          Array.isArray(value) &&
          value.length > 0
        ) {
          fmOrdered[attribute] = value.sort();
        } else if (
          attribute === "browser-compat" ||
          attribute === "spec-urls"
        ) {
          fmOrdered[attribute] =
            Array.isArray(value) && value.length === 1 ? value[0] : value;
        } else {
          fmOrdered[attribute] = value;
        }
      }
    });

    let yml = YAML.dump(fmOrdered, {
      skipInvalid: true,
      lineWidth: config.lineWidth,
      quotingType: '"',
    });
    yml = yml.replaceAll(/\s+$/g, "");
    yml = await prettier.format(yml, { parser: "yaml" });
    content = `---\n${yml}---\n${document.content}`;
  } else {
    content = null;
  }

  return [
    errors.length > 0
      ? `Error: ${getRelativePath(filePath)}\n${errors.join("\n")}`
      : null,
    fixableError,
    content,
  ];
}
