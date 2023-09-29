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

        <div>
          <q-toggle
            v-model="darkMode"
            color="dark"
            keep-color
          />
          Dark Page
        </div>
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
import { defineComponent, ref, watch } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import { useQuasar } from 'quasar';

const linksList = [
  {
    title: 'Dashboard',
    caption: 'quasar.dev',
    icon: 'dashboard ',
    link: 'https://quasar.dev',
  },
  {
    title: 'My Clients',
    caption: 'chat.quasar.dev',
    icon: 'people',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Send Invoice',
    caption: 'github.com/quasarframework',
    icon: 'description',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Withdraw to Bank',
    caption: 'github.com/quasarframework',
    icon: 'account_balance',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Settings',
    caption: 'forum.quasar.dev',
    icon: 'settings',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Logout',
    caption: 'forum.quasar.dev',
    icon: 'exit_to_app',
    link: 'https://forum.quasar.dev',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const $q = useQuasar();
    const darkMode = ref(false);

    watch(darkMode, () => {
      $q.dark.set(darkMode.value);
    });

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer,
      darkMode,
    };
  },
});
</script>
