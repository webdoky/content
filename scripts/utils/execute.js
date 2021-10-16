import childProcess from 'child_process';

import debug from './debug';

export default async function execute(command) {
  debug(command);
  const statusCode = await new Promise((resolve, reject) => {
    const process = childProcess.exec(command);
    process.on('error', reject);
    process.on('close', resolve);
    process.stdout?.on?.('data', (data) => console.debug(data));
    process.stderr?.on?.('data', (data) => console.warn(data));
  });
  if (statusCode) {
    throw new Error('Failure');
  }
}
