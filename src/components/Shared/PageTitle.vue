<template>
  <q-toolbar-title>
      {{ title }}
    </q-toolbar-title>
</template>

<script setup lang="ts">

defineProps({
  title: {
    type: String,
    required: true,
  },
});

</script>
