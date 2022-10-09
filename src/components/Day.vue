<template>
  <div class="days">
    <div
      v-for="(dayofWeek, index) in daysOfWeek"
      :key="index"
      class="day-column"
      :class="{ lastColumn: index === 7 }"
    >
      <div class="day-header">{{ dayofWeek }}</div>
      <div class="day-content">
        <div v-if="dayofWeek === 'Time'" class="day-content-hour">
          <div v-for="(hour, index) in hours" :key="index" class="day-hour">
            <div
              v-for="(el, index) in 4"
              :key="index"
              class="day-timeline"
              :class="{ lastElement: index === 3 }"
            >
              <span> {{ `${hour}: ${handleMinutes(index)}` }} </span>
            </div>
          </div>
        </div>
        <div
          v-else
          class="day-content-hour"
          v-for="(hour, index) in hours"
          :key="index"
        >
          <div
            v-for="(el, index) in 4"
            :key="index"
            class="day-timeline"
            :class="{ lastElement: index === 3 }"
          >
            <span>Jagoda</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Days extends Vue {
  handleMinutes(index: number): string {
    if (index === 3) return "00";
    return String((index + 1) * 15);
  }
  daysOfWeek: string[] = [
    "Time",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  hours: number[] = [
    5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ];
}
</script>

<style lang="scss" scoped>
@import "@/components/scss/_variables.scss";
.days {
  display: flex;
  direction: column;
  justify-content: center;
}

.day-header {
  padding: 20px 50px;
  font-size: 20px;
  font-weight: 800;
  box-sizing: border-box;
  border-top: $border-gray44;
  border-left: $border-gray44;
}

.day-content {
  height: auto;
  border-top: $border-gray44;
  border-left: $border-gray44;
}
.day-timeline,
.day-hour-quarter {
  border-bottom: $border-gray;
  padding: 2px;
  box-sizing: content-box;
  span {
    font-size: 12px;
  }
}
.lastElement {
  border-bottom: $border-gray44;
}
.lastColumn {
  border-right: $border-gray44;
}
</style>
