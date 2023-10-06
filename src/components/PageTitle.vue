<template>
  <q-toolbar-title>
      {{ title }}
    </q-toolbar-title>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageTitle',
  props: {
    title: {
      type: String,
      default: 'Title name empty',
    },
  },
  setup() {
    return {
    };
  },
});
</script>
