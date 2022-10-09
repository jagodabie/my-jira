<template>
  <div class="hours">
    <div class="hour-row" v-for="(hour, index) in hours" :key="index">
      <div class="hour-container">{{ hour }}</div>
      <div class="day-of-week__hour"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Hours extends Vue {
  @Prop({ default: [] })
  hours!: number[];
}
</script>
<style lang="scss">
.hours {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.hour-row {
  display: flex;
  border-left: $border-gray44;
  border-right: $border-gray44;
  border-top: $border-gray44;
}
.hour-container {
  font-size: 20px;
  padding: 20px;
  border-right: $border-gray44;
  text-align: left;
  box-sizing: border-box;
  line-height: 1;
  width: calc($day-of-week-width);
}

.day-of-week__hour {
  width: auto;
  width: 80%;
}
</style>
