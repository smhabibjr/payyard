<template>
  <div className="gpt3__brand section__padding">
    <div>
      <img :src="google" />
    </div>
    <div>
      <img :src="slack" />
    </div>
    <div>
      <img :src="atlassian" />
    </div>
    <div>
      <img :src="dropbox" />
    </div>
    <div>
      <img :src="shopify" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  google,
  dropbox,
  atlassian,
  slack,
  shopify,
} from './index';
</script>

<style lang="scss" scoped>
.gpt3__brand {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.gpt3__brand div {
    flex: 1;
    max-width: 150px;
    min-width: 120px;
    margin: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
