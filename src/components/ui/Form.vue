<template>
  <form @submit.prevent="onSubmit" class="form-container">
    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
    </p>
    <ul>
      <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>
    <div class="time-report-container">
      <span>Time spent on: </span>
      <br />
      <InputBase
        v-model="spentTimeHours"
        label="hours"
        :number="true"
        :max-length="2"
        :labelRight="true"
      />
      <InputBase
        v-model="spentTimeMinutes"
        label="minutes"
        :number="true"
        :max-length="2"
        :labelRight="true"
      />
      <label for="work-start-date">
        Start Date
        <InputBase v-model="startDate" type="date" id="work-start-date"
      /></label>
      <label for="work-description">Work description</label>
      <textarea v-model="taskDescription" id="work-description" rows="4">
      </textarea>
    </div>
    <button type="submit" class="form-submit">Submit</button>
  </form>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import InputBase from "./InputBase.vue";
import { TimeRecord } from "@/types/Task";
@Component({
  components: {
    InputBase,
  },
})
export default class Form extends Vue {
  public taskTitle = "";
  public taskDescription = "";
  public spentTimeHours = "";
  public spentTimeMinutes = "";
  public startDate = new Date().toISOString().split("T")[0];
  public errors: string[] = [];
  public handleInput($event: Event) {
    this.taskTitle = ($event.target as HTMLInputElement).value;
  }
  checkField() {
    const pattern = /^\d+\.?\d*$/;
    if (
      !pattern.test(this.spentTimeHours) ||
      !pattern.test(this.spentTimeMinutes)
    ) {
      return this.errors.push("Must be number value and can't be empty");
    }
    return;
  }
  public onSubmit() {
    this.checkField();

    this.$http
      .post("/tasks-time/", {
        durationInHour: this.spentTimeHours,
        durationInMinutes: this.spentTimeMinutes,
        workDate: this.startDate,
        workDescription: this.taskDescription,
      })
      .then(() => {
        alert("Record was successfully created.");
      })
      .catch((err) => {
        alert(err.message);
      });
  }
}
</script>
<style scoped lang="scss">
ul > li {
  list-style: none;
  color: red;
  font-weight: 800;
  font-size: 12px;
}
.form-container {
  display: flex;
  flex-direction: column;
  border: solid 1px;
}
.form-submit {
  width: 5rem;
  margin-left: auto;
  margin-right: auto;
}
.time-report-container {
  display: inline;
  margin-left: auto;
  margin-right: auto;
}
.time-report-container > .input-base-container {
  margin-left: 3.5rem;
}

label {
  display: block;
  margin: 0.5rem;
}
#work-start-date {
  width: 10rem;
  height: 1.5rem;
}
.form-submit {
  margin: 1rem auto;
}
</style>
