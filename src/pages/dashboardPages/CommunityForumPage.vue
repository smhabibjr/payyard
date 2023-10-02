<template>
  <q-page class="q-ma-md">
    <PageTitle :title="pageTitle" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import PageTitle from 'src/components/PageTitle.vue';

export default defineComponent({
  name: 'CommunityForumPage',
  components: {
    PageTitle,
  },
  setup() {
    const pageTitle = ref('Community forum ');
    return {
      pageTitle,
    };
  },
});
</script>
