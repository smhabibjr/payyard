<template>
  <q-card>
    <q-card-section>
      <q-item>
        <q-item-section>
          <q-item-label class="text-h5">{{ cardTitle }}</q-item-label>
          <q-item-label class="text-h6"> ${{ totalBalance }}</q-item-label>
          <q-item-label>{{ subtitle }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">

defineProps({
  cardTitle: {
    type: String,
    required: true,
  },
  totalBalance: {
    type: Number,
    required: true,
  },
  subtitle: {
    type: String,
  },

});

</script>

<style scoped>

</style>
