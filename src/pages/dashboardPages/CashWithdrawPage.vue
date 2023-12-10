<template>
  <q-page class="q-pa-sm">
    <PageTitle :title="pageTitle" />
    <div class="shadow-up-1 q-mt-sm">
      <currency-converter />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PageTitle from 'src/components/PageTitle.vue';
import CurrencyConverter from 'src/components/Dashboard/CurrencyConverter.vue';

const pageTitle = ref('Transfer Calculator');

</script>

<style scoped>

</style>
