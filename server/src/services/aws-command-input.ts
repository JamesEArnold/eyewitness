import { ITerminal } from '@/interfaces/iterminal';
import { exec } from 'child_process';
import { promisify } from 'util';

export const cli = promisify(exec);

export const awsCommandInput: ITerminal = {
  sendCommand: async (command: string) => (await cli(command)).stdout,
};
