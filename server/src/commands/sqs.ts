import config from '@/config';

const BASE_COMMAND = `aws --endpoint-url=http://${config.localstackUrl}:${config.localstackPort} sqs`;

export default {
  listQueues: `${BASE_COMMAND} list-queues`,
};
