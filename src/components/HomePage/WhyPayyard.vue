<template>
  <div class="gpt3__features section__padding" id="features">
    <div class="gpt3__features-heading">
      <h1 class="gradient__text"> {{ featureText }} </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div class="gpt3__features-container">
      <PayyardFeature
      v-for="(feature, index) in featuresData"
      :key="index"
      :title="feature.title"
      :text="feature.text" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PayyardFeature from '../Feature/PayyardFeature.vue';

const featureText = 'The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.';
const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];
</script>

<style lang="scss" scoped>
.gpt3__features {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}

.gpt3__features-heading {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    text-align: left;
    margin-right: 5rem;
}

.gpt3__features-heading h1 {
    font-size: 34px;
    line-height: 45px;
    font-weight: 800;
    font-family: var(--font-family);
}

.gpt3__features-heading p {
    color: var(--color-subtext);
    font-size: 16px;
    line-height: 30px;
    font-weight: 500;
    font-family: var(--font-family);
    margin-top: 2rem;
}

.gpt3__features-container {
    flex: 1.5;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
}
@media screen and (max-width: 990px) {
    .gpt3__features {
        flex-direction: column;
    }

    .gpt3__features-heading {
        margin: 0 0 2rem 0;
    }
}
@media screen and (max-width: 550px) {
    .gpt3__features-heading h1 {
        font-size: 28px;
        line-height: 38px;
    }
}
</style>
