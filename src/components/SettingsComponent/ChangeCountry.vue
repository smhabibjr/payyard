<template>
  <div>
    <div>
      <div class="q-mb-sm" header>
        Change Country
      </div>
    </div>
    <div class="column" style="height: 150px">
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
  name: 'ChangeCountry',
  setup() {
    return {
    };
  },
});
</script>
