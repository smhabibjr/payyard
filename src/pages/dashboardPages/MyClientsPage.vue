<template>
  <q-page>
    <div>
      <h1>{{ pageTitle }}</h1>
    </div>
  </q-page>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MyClientsPage',
  setup() {
    const pageTitle = ref('This is my client page!');
    return {
      pageTitle,
    };
  },
});
</script>

<style scoped>

</style>
