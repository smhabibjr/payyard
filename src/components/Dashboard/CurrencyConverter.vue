<template>
  <q-card>
    <div class="row">
      <div class="col col-xs-12 col-sm-6 col-md-6">
        <q-card-section>
          <q-select outlined
            v-model="selectedSendingValue"
            :options="sendingOptions"
            label="You send"
            @update:model-value="getExchangeRate()"
          />
        </q-card-section>
      </div>
      <div class="col col-xs-12 col-sm-6 col-md-6">
        <q-card-section>
          <q-select
            outlined
            v-model="selectedReceiveValue"
            :options="recipientOptions"
            label="Recipient gets"
            @update:model-value="getExchangeRate()"
          />
        </q-card-section>
      </div>
    </div>
    <div class="row">
      <div class="col col-xs-12 col-sm-6 col-md-6">
        <q-card-section>
          <q-input
            outlined
            v-model="inputedAmount"
            label="Amount"
            @keyup="updateReceivedAmount"
          />
        </q-card-section>
      </div>
      <div class="col col-xs-12 col-sm-6 col-md-6">
        <q-card-section>
          <q-input outlined v-model="receivedAmount" label="You will receive" />
        </q-card-section>
      </div>
    </div>
    <div class="row">
      <div class="col col-xs-12 col-sm-12 col-md-12 flex justify-center">
        <q-card-section class="q-ma-none q-pa-none">
          <p class="q-ma-none q-pa-none text-caption text-weight-light text-dark">Exchange rate {{ selectedSendingValue }} 1 = {{ todayRate }} {{ selectedReceiveValue }}</p>
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
          <q-btn icon="print" label="Print" />
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
import { ref, onMounted } from 'vue';

const selectedSendingValue = ref('USD');
const selectedReceiveValue = ref('BDT');

const inputedAmount = ref<number | null>(null);
const receivedAmount = ref<number | null>(null);
const todayRate = ref<number | null>(null);

const sendingOptions = ['Euro', 'USD'];
const recipientOptions = ['BDT', 'PAK'];

function exchangeRate(fromCurrency, toCurrency) {
  let receivedExchangeRate = '';
  const todayRates = {
    usdToBdt: 110.09,
    usdToPak: 283.99,
    euroToBdt: 118.61,
    euroToPak: 305.96,
  };
  if (fromCurrency === 'USD' && toCurrency === 'BDT') {
    receivedExchangeRate = todayRates.usdToBdt;
  } else if (fromCurrency === 'USD' && toCurrency === 'PAK') {
    receivedExchangeRate = todayRates.usdToPak;
  } else if (fromCurrency === 'Euro' && toCurrency === 'BDT') {
    receivedExchangeRate = todayRates.euroToBdt;
  } else if (fromCurrency === 'Euro' && toCurrency === 'PAK') {
    receivedExchangeRate = todayRates.euroToPak;
  }

  return receivedExchangeRate;
}
const updateReceivedAmount = () => {
  receivedAmount.value = todayRate.value * inputedAmount.value;
};

function getExchangeRate() {
  todayRate.value = exchangeRate(selectedSendingValue.value, selectedReceiveValue.value);
  updateReceivedAmount();
}

onMounted(() => {
  getExchangeRate();
});

</script>
