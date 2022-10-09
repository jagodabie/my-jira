<template>
  <form @submit.prevent="onSubmit">
    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
    </p>
    <ul>
      <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>
    <InputBase v-model="taskTitle" label="Tasks title" type="text" />
    <InputBase
      v-model="spentTimeHours"
      label="Time spent on"
      type="number"
    /><span>h</span> <InputBase v-model="spentTimeMinutes" type="number" /><span
      >min</span
    >

    <!-- <label for="description">Task description </label>
    <textarea
      placeholder="Task's description"
      :value="taskDescription"
      @input="handleInput($event)"
    /> -->
    <!-- <label for="description">Task description </label> -->

    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import InputBase from "./InputBase.vue";

@Component({
  components: {
    InputBase,
  },
})
export default class Form extends Vue {
  public taskTitle = "";
  public taskDescription = "";
  public spentTimeHours = 0;
  public spentTimeMinutes = 0;
  public errors: string[] = [];
  public handleInput($event: Event) {
    this.taskTitle = ($event.target as HTMLInputElement).value;
  }
  checkField() {
    if (this.taskTitle) {
      return this.errors.push("Task title can not be empty field.");
    }
    return;
  }
  public onSubmit() {
    this.checkField();
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
</style>
