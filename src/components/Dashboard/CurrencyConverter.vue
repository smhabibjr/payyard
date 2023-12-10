<template>
  <q-card>
    <div class="row">
      <div class="col col-xs-12 col-sm-6 col-md-6">
        <q-card-section>
          <q-select outlined v-model="selectedSendingValue" :options="sendingOptions" label="You send" />
        </q-card-section>
      </div>
      <div class="col col-xs-12 col-sm-6 col-md-6">
        <q-card-section>
          <q-select outlined v-model="selectedrecipientValue" :options="recipientOptions" label="Recipient gets" />
        </q-card-section>
      </div>
    </div>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedSendingValue = ref(null);
const selectedrecipientValue = ref(null);

const sendingOptions = ['Euro', 'USD'];
const recipientOptions = ['BDT', 'PAK'];

</script>
