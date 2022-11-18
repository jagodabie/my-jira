<!-- TODO(@Listen - implementation) : For now  events emit logic sufficient.  -->
<template>
  <div id="task-modal" class="modal">
    <div class="modal-content">
      <span class="close" @click="$emit('closeModal')">&times;</span>
      <h1>{{ modalTitle }}</h1>
      <Form @closeModal="$emit('closeModal')" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Form from "@/components/ui/Form.vue";

@Component({
  components: {
    Form,
  },
})
export default class Modal extends Vue {
  @Prop({ default: "Task's title" })
  public modalTitle!: string;
  @Prop({ default: true })
  public modalClosed!: boolean;

  handleCloseModal() {
    console.log("TEST");
  }
}
</script>
<style scoped lang="scss">
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 40%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
