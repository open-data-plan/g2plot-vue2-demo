<template>
  <div>
    <LineChartDemo />
    <PieChartDemo />
  </div>
</template>
<script>
import { defineComponent } from "vue-demi";
import LineChartDemo from "./components/line-chart";
import PieChartDemo from "./components/pie-chart";

export default defineComponent({
  name: "App",
  components: {
    LineChartDemo,
    PieChartDemo,
  },
});
</script>
