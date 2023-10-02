<template>
  <div>
    <q-toggle
      v-model="darkMode"
      color="dark"
      keep-color
    />
    Dark Page
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'DarkLightMode',
  setup() {
    const $q = useQuasar();
    const darkMode = ref(false);

    watch(darkMode, () => {
      $q.dark.set(darkMode.value);
    });

    return {
      darkMode,
    };
  },
});
</script>
