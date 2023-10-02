<template>
  <q-page>
    <div>
      <h6> {{ pageTitle }} </h6>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'NewInvoicePage',
  // components: [ goes to here! ]
  setup() {
    const pageTitle = ref('Create invoice page');
    return {
      pageTitle,
    };
  },
});

</script>
