<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Payyard.io
        </q-toolbar-title>

        <DarkLightMode />

        <!--<div>Quasar v{{ $q.version }}</div>-->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <ProfileAvator />
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DarkLightMode from 'src/components/Shared/DarkLightMode.vue';
import ProfileAvator from 'src/components/Shared/ProfileAvator.vue';
import EssentialLink from '../components/Shared/EssentialLink.vue';

const linksList = [
  {
    title: 'Dashboard',
    caption: 'See your revenue',
    icon: 'dashboard ',
    link: '/#/dashboard',
  },
  {
    title: 'My Clients',
    caption: 'Track your all clients',
    icon: 'people',
    link: '#/my-clients',
  },
  {
    title: 'Send Invoice',
    caption: 'Create & send invoice to clients',
    icon: 'description',
    link: '#/create-invoice',
  },
  {
    title: 'Withdraw to Bank',
    caption: 'Withdraw your revenue',
    icon: 'account_balance',
    link: '#/cash-withdraw',
  },
  {
    title: 'Forum',
    caption: 'Join our facebook community',
    icon: 'record_voice_over',
    link: '#/community-forum',
  },
  {
    title: 'Settings',
    caption: '',
    icon: 'settings',
    link: '#/settings',
  },
  {
    title: 'Logout',
    caption: '',
    icon: 'exit_to_app',
    link: '',
  },
];

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

</script>
