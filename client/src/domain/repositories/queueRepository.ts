import { Queue, QueueAttributes } from '@/domain/models/queue';

export interface QueueRepository {
  listQueues: () => Promise<Queue[]>;
  getQueueAttributesByQueueName: (queue: Queue) => Promise<QueueAttributes>;
}
