<template>
  <q-page class="q-ma-md">
    <PageTitle :title="pageTitle" />
  </q-page>
</template>

<script lang="ts">

import PageTitle from 'src/components/PageTitle.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MyClientsPage',
  components: { PageTitle },
  setup() {
    const pageTitle = ref('My Clients');
    return {
      pageTitle,
    };
  },
});
</script>

<style scoped>

</style>
