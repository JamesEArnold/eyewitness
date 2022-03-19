import { Router } from 'express';
import healthCheck from '@/api/routes/health-check';

export default () => {
  const app: Router = Router();
  healthCheck(app);
  return app;
};
