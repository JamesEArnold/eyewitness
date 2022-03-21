export interface ITerminal {
  sendCommand(command: string): Promise<string>,
}
