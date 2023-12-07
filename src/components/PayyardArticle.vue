<template>
  <div class="gpt3__blog-container_article">
    <div class="gpt3__blog-container_article-image">
      <img src="../assets/images/blog01.png" alt="blog_image" />
    </div>
    <div class="gpt3__blog-container_article-content">
      <div>
        <p>{{ date }}</p>
        <h3>{{ text }}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  imgUrl: String,
  date: String,
  text: String,
});
</script>

<style lang="scss" scoped>
.gpt3__blog-container_article {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: var(--color-footer);
.gpt3__blog-container_article:hover {
    box-shadow: 0 0 10px 5px rgba(245, 241, 241, 0.3) inset, 0 0 20px 10px rgba(245, 131, 131, 0.7);
    transition: box-shadow 0.3s ease-in-out;
  }
.gpt3__blog-container_article-image {
    width: 100%;
    height: 100%;
    background: var(--color-bg);
}

.gpt3__blog-container_article-image img {
    width: 100%;
    height: 100%;
}

.gpt3__blog-container_article-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    height: 100%;
}

.gpt3__blog-container_article-content p {
    font-family: var(--font-family);
    font-size: 11.65px;
    font-weight: 700;
    line-height: 35px;
    color: #fff;
}
.gpt3__blog-container_article-content h3 {
    font-family: var(--font-family);
    font-size: 25.11px;
    font-weight: 800;
    line-height: 30.30px;
    color: #fff;
    margin-bottom: 5rem;
    cursor: pointer;
}
.gpt3__blog-container_article-content p:last-child {
    cursor: pointer;
}

@media screen and (max-width: 550px) {
      .gpt3__blog-container_article-content h3 {
        font-size: 18px;
        line-height: 25p;
    }
}
</style>
