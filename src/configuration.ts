import * as env from 'env-var';

export const endpointUrl = env.get('ENDPOINT_URL').default('localhost').asString();
export const localstackPort = env.get('LOCALSTACK_PORT').default('4566').asString();
