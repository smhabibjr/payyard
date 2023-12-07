<template>
 <div class="gpt3__possibility section__padding" id="possibility">
    <div class="gpt3__possibility-image">
      <img src="../../assets/images/possibility.png" alt="possibility" />
    </div>
    <div class="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 class="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing.
        Not thoughts all exercise blessing.
        Indulgence way everything joy alteration boisterous the attachment.
        Party we years to order allow asked of.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.gpt3__possibility {
    display: flex;
    flex-direction: row;
}

.gpt3__possibility-image {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 2rem;
}

.gpt3__possibility-image img {
    width: 100%;
    height: 100%;
}

.gpt3__possibility-content {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;
}

.gpt3__possibility-content h4 {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #71E5FF;
}

.gpt3__possibility-content h4:last-child {
    color: #ff8A71;
}

.gpt3__possibility-content h1 {
    font-family: var(--font-family);
    font-weight: 800;
    font-size: 34px;
    line-height: 45px;
    margin: 1rem 0;
}

.gpt3__possibility-content p {
    color: var(--color-text);
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 2rem;
}

@media screen and (max-width: 950px) {
    .gpt3__possibility {
        flex-direction: column;
    }

    .gpt3__possibility-image {
        margin: 1rem 0;
    }
    .gpt3__possibility-image img {
        width: unset;
        height: unset;
    }

    .gpt3__possibility-content {
        margin-top: 2rem;
    }
}
@media screen and (max-width: 700px) {
    .gpt3__possibility-image img {
        width: 100%;
        height: 100%;
    }
}
</style>
