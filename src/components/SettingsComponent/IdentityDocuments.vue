<template>
  <div>
    <div>
      <div class="q-mb-sm" header>
        Identity Documents
      </div>
    </div>
    <div class="column" style="height: 150px">
      <div class="col-4 col-md-6">
        <q-input outlined v-model="text" :dense="dense" value="'First name '" />
      </div>
      <div class="col-4 col-md-6">
        <q-input outlined v-model="text" :dense="dense" />
      </div>
      <div class="col-4 col-md-6">
        <q-input outlined v-model="text" :dense="dense" />
      </div>
      <div class="col-4 col-md-6">
        <q-input outlined v-model="text" :dense="dense" />
      </div>
      <div class="col-4 col-md-6">
        <q-input outlined v-model="text" :dense="dense" />
      </div>
    </div>
    <q-btn color="secondary" label="Save Data" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IdentityDocuments',
  setup() {
    return {
    };
  },
});
</script>
