<template>
  <div id="app">
    <div class="container">
      <EmailEditor />
    </div>
  </div>
</template>

<script>
import unlayer from 'vue-email-editor'

export default {
  name: 'app',
  components: {
    EmailEditor: unlayer.EmailEditor
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
#app {
  height: 100%;
}
#app .container {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
}
#editor {
  flex: 1;
  display: flex;
}
</style>
