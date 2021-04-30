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
    <cui-button icon="fas fa-lock" />
  </div>
</template>
