<!-- eslint-disable max-len -->
<template>
 <q-page class="gradient__bg">
  <Navbar />
  <Header />
  <Brand />
  <WhatPayyard />
  <WhyPayyard />
  <PayyardPosibility />
  <PayyardCTA />
  <PayyardBlog />
  <PayyardFooter />
 </q-page>
</template>

<script setup lang="ts">
import Navbar from '../../components/HomePage/NavBar.vue';
import Header from '../../components/HomePage/HeaderHero.vue';
import Brand from '../../components/HomePage/Brand/BrandIndex.vue';
import WhatPayyard from '../../components/HomePage/WhatPayyard.vue';
import WhyPayyard from '../../components/HomePage/WhyPayyard.vue';
import PayyardPosibility from '../../components/HomePage/PayyardPosibility.vue';
import PayyardCTA from '../../components/HomePage/PayyardCTA.vue';
import PayyardBlog from '../../components/HomePage/PayyardBlog.vue';
import PayyardFooter from '../../components/HomePage/PayyardFooter.vue';
</script>

<style lang="scss" scoped>
</style>
