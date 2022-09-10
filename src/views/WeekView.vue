<template>
  <div class="timeraport-container">
    <!-- <div class="tasks-section">
      <TaskElement :task="task" id="12" />
    </div> -->
    <div
      class="day-of-week"
      v-for="(dayofWeek, index) in daysOfWeek"
      :key="index"
    >
      <div class="day-of-week__title">
        {{ dayofWeek }}
      </div>

      <div class="day-of-week__content">
        <template v-if="dayofWeek === 'Time'">
          <Hours :hours="hours" />
        </template>
        <template v-else>
          <div class="day-of-week__hour">
            <div
              v-for="(el, index) in 3"
              :key="index"
              class="day-of-week__timeline"
            ></div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Task } from "@/types/Task";
import TaskElement from "@/components/TaskElement";
import Hours from "@/components/Hours";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    TaskElement,
    Hours,
  },
})
export default class WeekView extends Vue {
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
<style scoped>
.week {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tasks-section {
  font-size: 1.5rem;
  font-weight: 800;
}
.timeraport-container {
  display: flex;
  justify-content: center;
}
.day-of-week {
  width: 15rem;
}
.day-of-week__title {
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: 800;
  border-top: 0.1px solid rgb(175, 168, 168);
  border-left: 0.1px solid rgb(175, 168, 168);
  border-bottom: 0.1px solid rgb(175, 168, 168);
}
.day-of-week:last-child {
  border-right: 0.1px solid rgb(175, 168, 168);
}
.day-of-week:first-child {
  width: 8rem;
}
.day-of-week__content {
  border-left: 0.1px solid rgb(175, 168, 168);
  border-bottom: 0.1px solid rgb(175, 168, 168);
  width: 100%;
  height: 100vh;
}
.day-of-week__timeline {
  border-bottom: 0.01px solid rgb(219, 215, 215);
  height: 33%;
}
.day-of-week__timeline:last-child {
  border-bottom: 0.01px solid rgb(175, 168, 168);
}
.day-of-week__hour {
  height: 60px;
}
</style>
