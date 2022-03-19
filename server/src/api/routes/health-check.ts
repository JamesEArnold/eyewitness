import { Request, Response, Router } from 'express';
import { logger } from '@/utils/logger';

const healthCheck = (router: Router): void => {
  const healthCheckRouter: Router = Router();
  router.use('/status', healthCheckRouter);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  healthCheckRouter.get('/', (req: Request, res: Response): Response => {
    logger.info('🫀 Health Check');
    return res.status(200).send('OK').end();
  });
};

export default healthCheck;
