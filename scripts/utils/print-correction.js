import chalk from "chalk";

export default function printCorrection(correction) {
  if (correction.shortMessage) {
    console.info(chalk.black.bgYellow(correction.shortMessage));
  }
  console.info(chalk.yellow(correction.message));
  console.info(chalk.gray(correction.rule.description));
  const contextStart = correction.context.text.slice(
    0,
    correction.context.offset
  );
  const contextEssence = correction.context.text.slice(
    correction.context.offset,
    correction.context.offset + correction.context.length
  );
  const contextEnd = correction.context.text.slice(
    correction.context.offset + correction.context.length
  );
  console.info(
    `${contextStart}${chalk.bgYellow.black(contextEssence)}${contextEnd}`
  );
  if (correction.replacements && correction.replacements.length > 0) {
    console.info(
      `${chalk.red(
        correction.context.text.slice(
          correction.context.offset,
          correction.context.offset + correction.context.length
        )
      )} -> ${chalk.green(
        correction.replacements
          .map((replacement) => `${replacement.value}?`)
          .join(" ")
      )}`
    );
  } else {
    console.info(
      chalk.red(
        correction.context.text.slice(
          correction.context.offset,
          correction.context.offset + correction.context.length
        )
      )
    );
  }
  console.info("====================================");
}
