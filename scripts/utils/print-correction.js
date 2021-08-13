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
  console.info(`${contextStart}${chalk.yellow(contextEssence)}${contextEnd}`);
  console.info(
    correction.context.text.slice(
      correction.context.offset,
      correction.context.offset + correction.context.length
    )
  );
  if (correction.replacements && correction.replacements.length > 0) {
    console.info(
      chalk.green(
        correction.replacements
          .map((replacement) => `${replacement.value}?`)
          .join(" ")
      )
    );
  }
  console.info("====================================");
}
