import { Request, Response, Router } from 'express';
import { ITerminal } from '@/interfaces/iterminal';
import commands from '@/commands/sqs';

const listQueues = (router: Router, terminal: ITerminal): void => {
  const listQueuesRouter: Router = Router();
  router.use('/', listQueuesRouter);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  listQueuesRouter.get('/', async (req: Request, res: Response): Promise<Response> => {
    const listedQueues: string = await terminal.sendCommand(commands.listQueues);
    return res.status(200).send(listedQueues).end();
  });
};

export default listQueues;
