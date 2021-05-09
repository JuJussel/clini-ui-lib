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
      tableData: [
        {name: 'Peter', age: '36', perf: 'Awesome', ok: true},
        {name: 'Paul', age: '22', perf: 'Soso', ok: true, selected: false},
        {name: 'Eri', age: '34', perf: 'Good', ok: true},
        {name: 'Guy', age: '54', perf: 'Awesome', ok: false},
        {name: 'Kathi', age: '41', perf: 'Ok', ok: false}
      ]
    }
  },
  methods: {
    handleClose() {
      this.visible = false
    }
  }

});
</script>

<template>
  <div id="app" style="position: relative">
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

    <div style="height: 400px; width: 300px; display: none">
      <cui-card>
        <template v-slot:header>
          <h2>患者一覧</h2>
        </template>
        <div>

          <cui-input v-model="input" label="名前" required icon="fas fa-sign-out-alt" append="kg"></cui-input>
          <cui-input v-model="input" disabled></cui-input>

          <div>{{input}}</div>
        </div>
        <cui-button @click="visible = true" label="Show" />
        <template v-slot:footer>
          <h2>Footer</h2>
        </template>
      </cui-card>
    </div>

    <cui-card style="height: 500px" noPadding>
      <cui-table :data="tableData">
        <template #header>
          <h2>The Table</h2>
        </template>
        <template #thead>
          <cui-th sort="name">Name</cui-th>
          <cui-th sort="age">Age</cui-th>
          <cui-th>Performance</cui-th>
          <cui-th>Is OK</cui-th>
          <cui-th></cui-th>
        </template>
        <template v-slot:row="{ row }">
            <td> {{ row.name }} </td>
            <td> {{ row.age }} </td>
            <td> {{ row.perf }} </td>
            <td> {{ row.ok }} </td>
            <td><cui-button label="delete" @click.stop=""/></td>
        </template>
        <template v-slot:expand="{ expand }">
          <div> {{ expand.name }} </div>
        </template>
        <!-- <template #footer>
          This table has stuff
        </template> -->
      </cui-table>
    </cui-card>

    <cui-modal :visible="visible" @close="handleClose">
      <cui-card style="width: 400px; height: 300px">
        <template #header>Header</template>
          Hello
        </cui-card>
    </cui-modal>
  </div>
</template>
