<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'APP',
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  .h20 {
    height: 20px;
  }

  body {
    color: #666;
  }

  .fr {
    float: right;
  }

  .fl {
    float: left;
  }

  a:focus,
  a:hover {
    color: #666;
    text-decoration: none;
  }

  a {
    color: #666;
    text-decoration: none;
  }
</style>
