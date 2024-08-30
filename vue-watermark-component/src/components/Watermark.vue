<template>
  <div style="position: relative">
    <slot></slot>
    <div :style="watermarkStyle">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "Watermark",
  props: {
    text: {
      type: String,
      default: "Default Watermark",
    },
    textStyle: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    watermarkStyle() {
      return {
        position: "absolute",
        zIndex: 10,
        color: "rgba(0, 0, 0, 0.15)",
        fontSize: "20px",
        userSelect: "none",
        pointerEvents: "none",
        ...this.textStyle,
      };
    },
  },
};
</script>

<style scoped></style>
