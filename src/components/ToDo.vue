<template>
  <div class="todo">
    <h3>Lista de tarefas</h3>
    <InputText
      placeholder="What do you need to do?"
      type="text"
      v-model="newTask"
    />

    <Button icon="pi pi-plus" iconPos="center" @click="save" />
    <Button class="p-button-danger" label="Clear List" @click="clearToDo" />

    <div :key="index" class="task-list" v-for="(task, index) in tasks">
      <Checkbox :binary="true" :id="index" class="c" v-model="task.checked" />

      <label
        class="label-task"
        :class="[task.checked ? 'label-task-check' : '']"
      >
        {{ task.newTask }}
      </label>
      <ConfirmPopup>
        <template #message="slotProps">
          <div class="pop-up">
            <p>{{ slotProps.message.message }}</p>
            <InputText v-model="newTaskDescription" />
          </div>
        </template>
      </ConfirmPopup>

      <Button icon="pi pi-pencil" @click="editTask($event, index)" />
      <Button
        class="p-button-danger"
        icon="pi pi-times"
        @click="clearTask(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDo",

  data() {
    return {
      newTask: "",
      tasks: [],
      newTaskDescription: "",
    };
  },

  methods: {
    save() {
      if (this.newTask !== "") {
        this.tasks.push({
          newTask: this.newTask,
          checked: false,
        });
        this.newTask = "";
      } else {
        alert("Insira uma tarefa!");
      }
    },
    clearToDo() {
      this.tasks = [];
    },
    clearTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(event, index) {
      this.newTaskDescription = this.tasks[index].newTask;
      this.$confirm.require({
        target: event.currentTarget,
        message: "Do you really want to edit?",
        accept: () => {
          this.tasks[index].newTask = this.newTaskDescription;
        },
      });
    },
  },
};
</script>