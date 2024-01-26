<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="q-pa-md ">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          TelePay
        </q-toolbar-title>

        <q-btn outline rounded label="Sign up" to="/login" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">

</script>
