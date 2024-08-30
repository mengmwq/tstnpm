import waterp from "./src/components/Watermark.vue";
waterp.install = function (Vue) {
  Vue.component(waterp.name, waterp);
};
export default waterp;
