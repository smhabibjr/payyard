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
  name: 'SettingsPage',
  setup() {
    const pageTitle = ref('This is settings page!');
    return {
      pageTitle,
    };
  },
});
</script>

<style scoped>

</style>
