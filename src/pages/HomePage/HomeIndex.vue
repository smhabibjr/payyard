<template>
 <q-page class="bg-primary">
  <NavBar />
  <HeaderHero />
  <ExplainedVideo />
  <WhyPayyard />
  <PayyardCTA />
  <PayyardBlog />
  <PayyardFooter />
 </q-page>
</template>
<script setup lang="ts">
import NavBar from 'src/components/HomePage/NavBar.vue';
import ExplainedVideo from 'src/components/HomePage/ExplainedVideo.vue';
import HeaderHero from 'src/components/HomePage/HeaderHero.vue';
import WhyPayyard from 'src/components/HomePage/WhyPayyard.vue';
import PayyardCTA from 'src/components/HomePage/PayyardCTA.vue';
import PayyardBlog from 'src/components/HomePage/PayyardBlog.vue';
import PayyardFooter from 'src/components/HomePage/PayyardFooter.vue';
</script>
<style lang="scss" scoped>
</style>
