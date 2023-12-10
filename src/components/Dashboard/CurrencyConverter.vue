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
    <div class="row">
      <div class="col col-xs-12 col-sm-6 col-md-6">
        <q-card-section>
          <q-input outlined v-model="inputedAmount" label="Amount" />
        </q-card-section>
      </div>
      <div class="col col-xs-12 col-sm-6 col-md-6">
        <q-card-section>
          <q-input outlined v-model="receivedAmount" label="You will receive" />
        </q-card-section>
      </div>
    </div>
    <div class="row">
      <div class="col col-xs-12 col-sm-12 col-md-12">
        <q-card-section>
          <p class="q-ma-none q-pa-none text-caption text-weight-light text-dark">Payout Partner</p>
          <p class="q-ma-none q-pa-none text-caption">Bank deposit for all Bank of Bangladesh, Bkash and Nagad Wallet</p>
        </q-card-section>
      </div>
    </div>
    <div class="row">
      <div class="col col-xs-4 col-sm-6 col-md-6">
        <q-card-section>
          <q-btn @click="printDocument" icon="print" label="Print" />
        </q-card-section>
      </div>
      <div class="col col-xs-8 col-sm-6 col-md-6 justify-end flex">
        <q-card-section>
          <q-btn color="secondary" label="Withdrawal request" />
        </q-card-section>
      </div>
    </div>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedSendingValue = ref(null);
const selectedrecipientValue = ref(null);
const inputedAmount = ref('');
const receivedAmount = ref('');

const sendingOptions = ['Euro', 'USD'];
const recipientOptions = ['BDT', 'PAK'];

</script>
