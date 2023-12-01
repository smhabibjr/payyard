<template>
  <q-page class="q-pa-sm">
    <PageTitle :title="pageTitle" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import PageTitle from 'src/components/PageTitle.vue';

export default defineComponent({
  name: 'CashWithdraw',
  components: {
    PageTitle,
  },
  setup() {
    const pageTitle = ref('Cash Withdraw');
    return {
      pageTitle,
    };
  },
});
</script>

<style scoped>

</style>
