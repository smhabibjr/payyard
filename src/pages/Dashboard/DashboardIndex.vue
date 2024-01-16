<template>
  <q-page class="q-pa-sm">
    <PageTitle title="Dashboard" />
    <div class="row">
      <div class="col col-xs-12 col-sm-6 col-md-6 q-pa-sm">
        <BalanceCard cardTitle="Payyard Balance" totalBalance="1000" subtitle="Total Available Balance" />
      </div>
      <div class="col col-xs-12 col-sm-6 col-md-6 q-pa-sm">
        <BalanceCard cardTitle="Last withdraw" totalBalance="250" subtitle="15.01.2024" />
      </div>
    </div>

  <PageTitle title="Recent activity" />
      <q-card class="q-mb-sm">
        <q-card-section>
          <q-item>
            <q-item-section>
              <q-item-label>Total Available Balance</q-item-label>
              <q-item-label class="text-h6"> ${{ totalBalance }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card>

      <q-card class="q-mb-sm">
        <q-card-section>
          <q-item>
            <q-item-section>
              <q-item-label>Total Available Balance</q-item-label>
              <q-item-label class="text-h6"> ${{ totalBalance }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card>

      <q-card class="q-mb-sm">
        <q-card-section>
          <q-item>
            <q-item-section>
              <q-item-label>Total Available Balance</q-item-label>
              <q-item-label class="text-h6"> ${{ totalBalance }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card>

  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PageTitle from 'src/components/Shared/PageTitle.vue';
import BalanceCard from 'src/components/Dashboard/DashboardIndex/BalanceCard.vue';

const totalBalance = ref(1000);
</script>
