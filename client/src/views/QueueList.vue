<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { Queue } from '@/domain/models/queue';
import { queueRepositorySqs } from '@/infrastructure/instances/queueRepositorySqs';
import { queueService } from '@/domain/services/queueService';

const availableQueues = ref<Queue[]>();

onMounted(async () => {
  availableQueues.value = await queueService(queueRepositorySqs).listQueues();
});
</script>

<template>
  <div v-if="availableQueues">
    {{ availableQueues }}
  </div>
</template>

<style lang="scss">

</style>
