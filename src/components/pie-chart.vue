<template>
  <PieChart v-bind="config" :data="data" />
</template>
<script>
import { defineComponent } from "vue-demi";
import { PieChart } from "@opd/g2plot-vue";

export default defineComponent({
  name: "PieChartDemo",
  components: {
    PieChart,
  },
  data() {
    return {
      data: [
        { type: "分类一", value: 27 },
        { type: "分类二", value: 25 },
        { type: "分类三", value: 18 },
        { type: "分类四", value: 15 },
        { type: "分类五", value: 10 },
        { type: "其他", value: 5 },
      ],
      config: {
        appendPadding: 10,
        angleField: "value",
        colorField: "type",
        radius: 0.75,
        label: {
          type: "spider",
          content: "{name} {percentage} {value}",
        },
        interactions: [
          { type: "element-selected" },
          { type: "element-active" },
        ],
      },
    };
  },
});
</script>
