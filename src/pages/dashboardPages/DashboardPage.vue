<template>
  <q-page class="q-ma-md">
    <page-title :title="pageTitle" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import PageTitle from 'src/components/PageTitle.vue';

export default defineComponent({
  name: 'DashboardPage',
  components: { PageTitle },
  setup() {
    const pageTitle = ref('Dashboard');
    return {
      pageTitle,
    };
  },
});
</script>
