<template>
  <q-page>
    <div>
      <h5> {{ title }} </h5>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CashWithdraw',
  setup() {
    const title = ref('Cash your withdraw');
    return {
      title,
    };
  },
});
</script>

<style scoped>

</style>
