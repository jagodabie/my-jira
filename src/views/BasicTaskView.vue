<template>
  <div class="task-list-container">
    <h1>Moje zadania:</h1>
    <ul class="task-list-basic">
      <ListItem
        v-for="(task, index) in basicTasks"
        :item="task"
        :key="index"
        @openModal="handleOpenModal()"
      />
    </ul>
    <br />
    <Modal @closeModal="handleCloseModal()" />
  </div>
</template>

<script lang="ts">
import Form from "@/components/ui/Form.vue";
import { Component, Vue } from "vue-property-decorator";
import { Task } from "@/types/Task";
import ListItem from "@/components/ui/ListItem.vue";
import Modal from "@/components/ui/Modal.vue";

@Component({
  components: {
    Form,
    ListItem,
    Modal,
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
  handleOpenModal() {
    (document.getElementById("task-modal") as HTMLInputElement).style.display =
      "block";
  }

  handleCloseModal() {
    (document.getElementById("task-modal") as HTMLInputElement).style.display =
      "none";
  }

  created() {
    this.getTasks("/tasks/");
  }
}
</script>
<style scoped lang="scss">
.task-list-container {
  width: 30%;
  margin: auto;
}
ul {
  list-style-type: none;
}
</style>
