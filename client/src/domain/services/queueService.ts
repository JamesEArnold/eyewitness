import { Queue } from '@/domain/models/queue';
import { QueueRepository } from '@/domain/repositories/queueRepository';

export const queueService = (repository: QueueRepository): QueueRepository => ({
  listQueues: async () => await repository.listQueues(),
  getQueueAttributesByQueueName: async (queue: Queue) =>
    await repository.getQueueAttributesByQueueName(queue),
});
