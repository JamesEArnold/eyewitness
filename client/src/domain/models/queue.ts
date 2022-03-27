export type Queue = {
  url: string,
  name?: string,
  attributes?: QueueAttributes
}

export type QueueDTO = {
  QueueUrls: string[]
}

export type QueueAttributes = {
  delaySeconds: number,
  maximumMessageSize: number,
  messageRetentionPeriod: number,
  receiveMessageWaitTimeSeconds: number,
  redrivePolicy: RedrivePolicy,
  visibilityTimeout: number,
}

export type RedrivePolicy = {
  deadLetterTargetArn: string,
  maxReceiveCount: string,
}
