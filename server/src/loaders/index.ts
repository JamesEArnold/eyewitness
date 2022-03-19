import { Express } from 'express';
import { expressLoader } from '@/loaders/express';
import { logger } from '@/utils/logger';

export const attachLoaders = async (app: Express) => {
  await expressLoader(app);
  logger.info('👀 Loaders attached');
};
