import * as env from 'env-var';

export default {
  eyewitnessApi: env.get('EYEWITNESS_API').default('/api').asString(),
  eyewitnessPort: env.get('EYEWITNESS_PORT').default('8080').asString(),
  localstackUrl: env.get('LOCALSTACK_URL').default('localhost').asString(),
  localstackPort: env.get('LOCALSTACK_PORT').default('4566').asString(),
  logLevel: env.get('LOG_LEVEL').default('debug').asString(),
};
