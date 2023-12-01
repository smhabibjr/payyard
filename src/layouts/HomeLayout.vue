<template>
  <q-layout class="q-landing-page" view="hHh lpR fFf">
    <q-header elevated class="navbar" style="background-color: transparent;">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Tele AG
        </q-toolbar-title>

        <q-btn outline rounded label="Sign up" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">

</script>

<style scoped>

.q-landing-page {
  background-color:hsla(230,41%,6%,1);
}

</style>
