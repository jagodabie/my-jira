<template>
  <div class="report-container">
    <h1>Time Report - Week</h1>
    <table>
      <tr>
        <th v-for="(day, index) in daysOfWeek" :key="index">
          <div class="day-header">
            <span>{{ day }}</span>
            <span v-if="index - 1 === currentweekDay">{{ currentDate }}</span>
          </div>
        </th>
      </tr>
      <tr v-for="(timeRecord, index) in timeRecords" :key="index">
        <td v-for="(day, index) in daysOfWeek" :key="index"></td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { TimeRecord } from "@/types/Task";
import { Vue, Component } from "vue-property-decorator";
@Component({
  components: {},
})
export default class TimeReport extends Vue {
  daysOfWeek: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  timeRecords: TimeRecord[] = [];

  get currentDate(): string {
    return new Date().toLocaleDateString();
  }

  get currentweekDay(): number {
    return new Date().getDay();
  }

  get currentmonthDay(): number {
    return new Date().getDate();
  }
  get currentMonth(): number {
    return new Date().getMonth();
  }
  setDatesForWeek() {
    if (
      this.currentmonthDay !== 31 &&
      (this.currentMonth === 1 ||
        this.currentMonth === 3 ||
        this.currentMonth === 5 ||
        this.currentMonth === 7 ||
        this.currentMonth === 8 ||
        this.currentMonth === 10 ||
        this.currentMonth === 12)
    )
      if (this.currentweekDay === 0) {
        return this.currentmonthDay;
      } else if (this.currentweekDay === 1) {
        return this.currentmonthDay + 1;
      } else if (this.currentweekDay === 2) {
        return this.currentmonthDay + 2;
      } else if (this.currentweekDay === 3) {
        return this.currentmonthDay + 3;
      } else if (this.currentweekDay === 4) {
        return this.currentmonthDay + 4;
      } else if (this.currentweekDay === 5) {
        return this.currentmonthDay + 5;
      } else if (this.currentweekDay === 6) {
        return this.currentmonthDay + 6;
      }
    // if(this.weekDay === 0 )
    // let day
    // switch (new Date().getDay()) {
    //   case 0 && currentDate:
    //     day = "Sunday";
    //     break;
    //   case 1:
    //     day = "Monday";
    //     break;
    //   case 2:
    //     day = "Tuesday";
    //     break;
    //   case 3:
    //     day = "Wednesday";
    //     break;
    //   case 4:
    //     day = "Thursday";
    //     break;
    //   case 5:
    //     day = "Friday";
    //     break;
    //   case 6:
    //     day = "Saturday";
    // }
  }

  setCalendarDays() {
    let day;
    switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
    }
    return day;
  }

  async getTimeTaskRecord(url: string) {
    this.axios
      .get(url)
      .then(({ data }) => {
        this.timeRecords = data;
      })
      .catch((err) => alert(`Something went wrong, ${err.message}`));
  }

  created() {
    this.getTimeTaskRecord("/tasks-time/");
  }
}
</script>
<style scoped lang="scss">
@import "@/components/scss/_variables.scss";
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
}

td,
th {
  border: $border-gray44;
  text-align: left;
  padding: 1.5rem;
  text-align: center;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.day-header span {
  display: block;
}
.day-header :nth-child(2) {
  color: $bg-gray44;
  font-weight: 100;
}
</style>
