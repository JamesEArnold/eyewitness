#!/usr/bin/env bash
  
set -euo pipefail
  
# enable debug
# set -x
  
echo "configuring sns/sqs"
echo "==================="

LOCALSTACK_HOST=localhost
AWS_REGION=us-east-1
LOCALSTACK_DUMMY_ID=000000000000
  
get_all_queues() {
    awslocal --endpoint-url=http://${LOCALSTACK_HOST}:4566 sqs list-queues
}
  
  
create_queue() {
    local QUEUE_NAME_TO_CREATE=$1
    awslocal --endpoint-url=http://${LOCALSTACK_HOST}:4566 sqs create-queue --queue-name ${QUEUE_NAME_TO_CREATE}
}
  
guess_queue_arn_from_name() {
    local QUEUE_NAME=$1
    echo "arn:aws:sns:${AWS_REGION}:${LOCALSTACK_DUMMY_ID}:$QUEUE_NAME"
}
  
QUEUE_NAME="queue123"
TOPIC_NAME="topic56789"
  
echo "creating queue $QUEUE_NAME"
QUEUE_URL=$(create_queue ${QUEUE_NAME})
echo "created queue: $QUEUE_URL"
  
echo "all topics are:"
echo "$(get_all_topics)"
  
echo "all queues are:"
echo "$(get_all_queues)"