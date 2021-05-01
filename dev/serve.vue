<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { CliniUiLibSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  CliniUiLibSample,
  // }
});
</script>

<template>
  <div id="app">
    <cui-menu-bar @change="handelChange">
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
    <div style="height: 400px; width: 300px">
      <cui-card>
        <template v-slot:header>
          <h2>患者一覧</h2>
        </template>
        <div>Body</div>
        <template v-slot:footer>
          <h2>Footer</h2>
        </template>
      </cui-card>
    </div>
  </div>
</template>
