<template>
  <div>
    <button @click="handleConfigChange">change config</button>
    <button @click="handleDataChange">change data</button>
    <LineChart v-bind="config" :data="data" />
  </div>
</template>
<script>
import { defineComponent } from "vue-demi";
import { LineChart } from "@opd/g2plot-vue";

export default defineComponent({
  name: "LineChartDemo",
  components: {
    LineChart,
  },
  data() {
    return {
      data: [
        { year: "1991", value: 3 },
        { year: "1992", value: 4 },
        { year: "1993", value: 3.5 },
        { year: "1994", value: 5 },
        { year: "1995", value: 4.9 },
        { year: "1996", value: 6 },
        { year: "1997", value: 7 },
        { year: "1998", value: 9 },
        { year: "1999", value: 11 },
      ],
      config: {
        height: 350,
        autoFit: true,
        xField: "year",
        yField: "value",
        smooth: true,
      },
    };
  },
  methods: {
    handleConfigChange() {
      this.config.smooth = !this.config.smooth;
    },
    handleDataChange() {
      this.data = [
        ...this.data,
        {
          year: (+this.data[this.data.length - 1].year + 1).toString(),
          value: 10 + +(Math.random() * 10).toFixed(0),
        },
      ];
    },
  },
});
</script>
