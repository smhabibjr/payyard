<template>
  <div class="gpt3__blog section__padding" id="blog">
    <div class="gpt3__blog-heading">
      <h1 class="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div class="gpt3__blog-container">
      <div class="gpt3__blog-container_groupA">
        <PayyardArticle imgUrl="../assets/images/blog01"
        date="Sep 26, 2021"
        text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div class="gpt3__blog-container_groupB">
        <PayyardArticle
        imgUrl="../assets/images/blog02"
        date="Sep 26, 2021"
        text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <PayyardArticle
        imgUrl="../assets/images/blog03"
        date="Sep 26, 2021"
        text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <PayyardArticle
        imgUrl="../assets/images/blog04"
        date="Sep 26, 2021"
        text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <PayyardArticle
        imgUrl="../assets/images/blog05"
        date="Sep 26, 2021"
        text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PayyardArticle from './PayyardArticle.vue';
</script>

<style lang="scss" scoped>
.gpt3__blog {
    display: flex;
    flex-direction: column;
}
.gpt3__blog-heading {
    width: 100%;
    text-align: left;
    margin-bottom: 5rem;
}

.gpt3__blog-heading h1 {
    font-size: 62px;
    line-height: 75px;
    font-family: var(--font-family);
    font-weight: 800;
}

.gpt3__blog-container {
    display: flex;
    flex-direction: row;
}

.gpt3__blog-container_groupA {
    flex: 0.75;
    margin-right: 2rem;
}

.gpt3__blog-container_groupB {
    flex: 1;
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
}

@media screen and (max-width: 990px) {
    .gpt3__blog-container {
        flex-direction: column-reverse;
    }
    .gpt3__blog-container_groupA {
        margin: 2rem 0;
    }

    .gpt3__blog-container_groupA .gpt3__blog-container_PayyardArticle  {
       width: 48%;
    }

    .gpt3__blog-container_groupA .gpt3__blog-container_PayyardArticle-image {
        height: 250px;
    }
}

@media screen and (max-width: 700px) {
    .gpt3__blog-container_groupB {
        grid-template-columns: repeat(1, 1fr);
    }
    .gpt3__blog-container_groupA .gpt3__blog-container_PayyardArticle  {
       width: 100%;
    }
    .gpt3__blog-heading h1 {
        font-size: 46px;
        line-height: 52px;
    }
}

@media screen and (max-width: 550px) {
    .gpt3__blog-heading h1 {
        font-size: 34px;
        line-height: 42px;
    }
}
</style>
