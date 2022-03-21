import { Router } from 'express';
import { awsCommandInput } from '@/services/aws-command-input';
import healthCheck from '@/api/routes/health-check';
import listQueues from '@/api/routes/list-queues';

export default () => {
  const app: Router = Router();
  healthCheck(app);
  listQueues(app, awsCommandInput);
  return app;
};
