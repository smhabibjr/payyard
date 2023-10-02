<template>
  <q-page class="q-ma-md">
    <PageTitle :title="pageTitle" />

    <div class="shadow-2">
      content goes to here!
    </div>

  </q-page>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';
import PageTitle from 'src/components/PageTitle.vue';

export default defineComponent({
  name: 'SettingsPage',
  components: {
    PageTitle,
  },
  setup() {
    const pageTitle = ref('My Account');
    return {
      pageTitle,
    };
  },
});
</script>

<style scoped>

</style>
