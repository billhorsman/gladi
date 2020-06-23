<template>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :width="width" :height="height">
    <circle :cx="xCenter" :cy="yCenter" :r="size / 2 + padding" :fill="fill"></circle>
    <circle fill-opacity="0.5" :cx="xCenter" :cy="yCenter" :r="size / 2" :fill="fill2"></circle>
    <circle :cx="xCenter" :cy="yCenter" :r="size / 2 - padding" :fill="fill"></circle>
    <path stroke="white" fill="transparent" :d="`M ${padding + size / 2} ${padding * 1.5} A ${size / 2 - padding / 2} ${size / 2 - padding / 2} 0, 1, 0, ${size + padding * 0.5} ${size / 2 + padding * 0.6}`" :stroke-width="padding"></path>
    <rect fill="white" :x="size / 2 + padding * 0.5" :y="size / 2 + padding * 0.5" :width="padding * 2" :height="padding" :rx="padding / 2" :ry="padding / 2"></rect>
    <rect fill="white" :x="size / 2 + 2 * padding" :y="size / 2 + padding * 0.5" :width="size / 2 - padding" :height="padding"></rect>
  </svg>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      size: 50,
    }
  },
  computed: {
    padding() {
      return this.size * 0.15;
    },
    xCenter() {
      return this.size / 2 + this.padding;
    },
    yCenter() {
      return this.size / 2 + this.padding;
    },
    fill() {
      return "#713AF3";
    },
    fill2() {
      return "#FFFFFF";
    },
    width() {
      return `${this.size + 2 * this.padding}px`;
    },
    height() {
      return `${this.size + 2 * this.padding}px`;
    }
  }
}
</script>
<style scoped>
</style>
