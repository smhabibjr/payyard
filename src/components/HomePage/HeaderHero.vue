<template>
  <div>
    <div class="gradient__bg_center">
      <div class="row flex flex-center q-pa-lg q-py-xl">
        <div class="col-xs-12 col-sm-12 col-md-8 flex flex-center">
          <div class="header-content">
            <h1 class="gradient__text text-center">Let&apos;s get paid using TelePay</h1>
            <p class=" text-center">{{ title }}</p>
          </div>
        </div>
      </div>
      <div class="row flex flex-center q-mb-lg">
        <div class="col-xs-12 col-sm-12 col-md-8 flex flex-center">
          <div>
            <q-btn
                rounded
                size="22px"
                class="q-px-xl q-py-xs"
                color="purple"
                label="Get access today"
                to="/login"
              />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = 'The missing platform to get paid for Freelancers';
</script>

<style lang="scss" scoped>
.border {
  border: 1px solid red;
}

.header-content h1 {
    font-family: var(--font-family);
    font-weight: 800;
    font-size: 62px;
    line-height: 75px;
    letter-spacing: -0.04em;
}
.header-content p {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: var(--color-text);
    margin-top: 1.5rem;
}

</style>
