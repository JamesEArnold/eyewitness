// src/infrastructure/repositories/product.repository.ts

import { Http } from '@/domain/repositories/httpRepository';
import { QueueRepository } from '@/domain/repositories/queueRepository';
import { httpAxios } from '../../infrastructure/instances/httpAxios';
import { queueRepository } from '@/infrastructure/repositories/queueRepository';

const client: Http = httpAxios;

export const queueRepositorySqs: QueueRepository = queueRepository(client);
