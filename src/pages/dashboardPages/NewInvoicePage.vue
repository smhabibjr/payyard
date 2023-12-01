<template>
  <q-page class="q-pa-sm">
    <PageTitle :title="pageTitle" />
  </q-page>
</template>

<script lang="ts">
import PageTitle from 'src/components/PageTitle.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'NewInvoicePage',
  components: {
    PageTitle,
  },
  setup() {
    const pageTitle = ref('Create Invoice');
    return {
      pageTitle,
    };
  },
});

</script>
