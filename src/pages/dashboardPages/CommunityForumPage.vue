<template>
  <q-page>
    <div>
      <h4> {{ title }} </h4>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CommunityForumPage',
  setup() {
    const title = ref('Community forum ');
    return {
      title,
    };
  },
});
</script>
