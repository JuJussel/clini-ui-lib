<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { CliniUiLibSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  data() {
    return{
      visible: false,
      input: 'Hello',
      rules: {
        name: {
          requied: true,
          validateFunction: 
        }
      }
    }
  },
  methods: {
    handleClose() {
      this.visible = false
      console.log(this.visible);
    }
  }

  // components: {
  //  CliniUiLibSample,
  // }
});
</script>

<template>
  <div id="app">
    <cui-menu-bar>
      <template v-slot:left>
        <cui-menu-bar-item icon="fa fa-home menu-icon" />
        <cui-menu-bar-item icon="fas fa-user-clock" label="受付" value="reception"/>
        <cui-menu-bar-item icon="fa fa-home menu-icon" label="患者" />
        <cui-menu-bar-item icon="fa fa-home menu-icon" label="医療" />
      </template>
      <template v-slot:center>CliniClean</template>
      <template v-slot:right>
        <cui-button icon="fas fa-sign-out-alt" white/>
        <cui-menu-bar-item icon="fas fa-sign-out-alt" />
      </template>
    </cui-menu-bar>
    <cui-button-group>
      <cui-button-group-item icon="fas fa-sign-out-alt" label="Button1" value="1"></cui-button-group-item>
      <cui-button-group-item label="Button2" value="2"></cui-button-group-item>
      <cui-button-group-item label="Button3" value="3"></cui-button-group-item>
      <cui-button-group-item label="Button4" value="4"></cui-button-group-item>
    </cui-button-group>

    <div style="height: 400px; width: 300px">
      <cui-card>
        <template v-slot:header>
          <h2>患者一覧</h2>
        </template>
        <div>

          <cui-form ref="form" :rules="rules">
            <cui-input v-model="input" prop="name" label="名前" required></cui-input>
            <cui-input v-model="input"></cui-input>
          </cui-form>
          <cui-button @click="$refs.form.validate()" label="Validate"></cui-button>

          <div>{{input}}</div>
        </div>
        <cui-button @click="visible = true" label="Show" />
        <template v-slot:footer>
          <h2>Footer</h2>
        </template>
      </cui-card>
    </div>
    <cui-modal :visible="visible" @close="handleClose">
      <cui-card style="width: 400px; height: 300px">
        <template #header>Header</template>
          Hello
        </cui-card>
    </cui-modal>
  </div>
</template>
