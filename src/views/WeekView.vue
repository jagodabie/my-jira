<template>
  <div class="timeraport-container">
    <Days />
  </div>
</template>

<script lang="ts">
import { Task } from "@/types/Task";
import Days from "@/components/Day";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Days,
  },
})
export default class WeekView extends Vue {
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
  task: Task = {
    id: "1",
    name: "Bike",
    prority: "high",
    time: "4",
    startDate: new Date(),
    endDate: new Date(),
    category: "sport",
  };
  hours: number[] = [
    5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ];
}
</script>
