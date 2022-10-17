<template>
  <div class="task-list-container">
    <h1>Moje zadania:</h1>
    <ul class="task-list-basic">
      <ListItem v-for="(task, index) in basicTasks" :item="task" :key="index" />
    </ul>

    <br />
  </div>
</template>

<script lang="ts">
import Form from "@/components/ui/Form.vue";
import { Component, Vue } from "vue-property-decorator";
import { Task } from "@/types/Task";
import ListItem from "@/components/ui/ListItem.vue";
@Component({
  components: {
    Form,
    ListItem,
  },
})
export default class BasicTaskView extends Vue {
  public basicTasks = [];
  async getTasks(url: string): Promise<Task[]> {
    const response = await fetch(url);
    const data = await response.text();
    try {
      this.basicTasks = JSON.parse(data);
      console.log(this.basicTasks);
      return JSON.parse(data);
    } catch (err) {
      console.log(err);
      return [];
    }
  }
  created() {
    this.getTasks("http://localhost:3000/tasks/");
    console.log("created");
  }
}
</script>
<style scoped lang="scss">
.task-list-container {
  width: 30%;
  margin-left: auto;
  margin-right: auto;
}
ul {
  list-style-type: none;
}
</style>
