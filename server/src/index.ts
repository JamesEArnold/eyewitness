import express, { Express } from 'express';
import { attachLoaders } from '@/loaders';
import config from '@/config';
import { logger } from '@/utils/logger';

const startEyewitness = async () => {
  const app: Express = express();

  await attachLoaders(app);

  app.listen(config.eyewitnessPort, () => {
    logger.info('Server started');
  });
};

startEyewitness();
