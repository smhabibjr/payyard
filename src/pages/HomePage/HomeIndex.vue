<!-- eslint-disable max-len -->
<template>
 <q-page>
  <Navbar />
  <Header />
  <Brand />
  <WhatPayyard />
 </q-page>
</template>

<script setup lang="ts">
import Navbar from '../../components/HomePage/NavBar.vue';
import Header from '../../components/HomePage/HeaderHero.vue';
import Brand from '../../components/HomePage/Brand/BrandIndex.vue';
import WhatPayyard from '../../components/HomePage/WhatPayyard.vue';
</script>

<style lang="scss" scoped>
</style>
