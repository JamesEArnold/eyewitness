import { Queue, QueueAttributes, QueueDTO } from '@/domain/models/queue';
import { Http } from '@/domain/repositories/httpRepository';
import { QueueRepository } from '@/domain/repositories/queueRepository';

export const queueRepository = (client: Http): QueueRepository => ({
  listQueues: async () => {
    const queues: QueueDTO = await client.get<QueueDTO>('');
    const queueMap = queues.QueueUrls.map((queueUrl: string): Queue => ({ url: queueUrl }));
    return queueMap;
  },

  getQueueAttributesByQueueName: async (queue: Queue) => await client.get<QueueAttributes>('/api/get-queue-attributes', { url: queue.url }),
});
