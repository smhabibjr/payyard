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
        <q-item-section class="flex flex-center q-mt-md" avatar>
          <q-avatar size="100px">
            <img src="https://cdn.quasar.dev/img/avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-label class="flex flex-center" header>
          Md Habibur Rahman Habib
          <span>Payyard ID: 0961898</span>
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
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

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import DarkLightMode from 'src/components/DarkLightMode.vue';

const linksList = [
  {
    title: 'Dashboard',
    caption: 'See your revenue',
    icon: 'dashboard ',
    link: '/#/',
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
    link: '#/new-invoice',
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
    title: 'Blog',
    caption: 'Read & Write Blog',
    icon: 'create',
    link: '#/blog/',
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
    link: 'https://forum.quasar.dev',
  },
];

export default defineComponent({
  name: 'DashboardLayout',

  components: {
    EssentialLink,
    DarkLightMode,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer,
    };
  },
});
</script>
