<template>
  <div>
    <div class="row flex flex-center q-pt-xl q-pb-sm">
      <div class="col-xs-12 col-sm-12 col-md-8 flex flex-center">
        <div class="header-content">
          <h2 class="text-center">
            <span class="text-white">Explained</span>
            <span class="gradient__text"> in 120 seconds</span>
          </h2>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="row flex flex-center q-pa-md">
    <div class="col-xs-12 col-sm-12 col-md-8 flex flex-center">
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/HisbShlgVuk?si=vYJXBXTRIn0wdIAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.bordar{
  border: solid 1px #ccc;
}
.header-content h2 {
    font-family: var(--font-family);
    font-weight: 800;
    font-size: 43px;
    line-height: 75px;
    letter-spacing: -0.04em;
}
.video-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.video-container:hover {
  border: 2px solid;
  border-image-source: linear-gradient(to right, rgb(228, 14, 14), rgb(220, 11, 220));
  border-image-slice: 1;
}
.video-container {
  border: 2px solid;
  border-image-source: linear-gradient(to right,rgb(220, 11, 220), rgb(228, 14, 14));
  border-image-slice: 1;
}
</style>
