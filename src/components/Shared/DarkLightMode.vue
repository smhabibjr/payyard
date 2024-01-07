<template>
  <div>
    <q-toggle
      v-model="darkMode"
      color="dark"
      keep-color
    />
    Dark
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const darkMode = ref(false);

watch(darkMode, () => {
  $q.dark.set(darkMode.value);
});
</script>
