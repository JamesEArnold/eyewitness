import express, { Express } from 'express';
import attachRoutes from '@/api';
import config from '@/config';
import cors from 'cors';

export const expressLoader = async (app: Express) => {
  app.enable('trust proxy');

  app.use(cors());

  app.use(express.json());
  app.use(config.eyewitnessApi, attachRoutes());
};
