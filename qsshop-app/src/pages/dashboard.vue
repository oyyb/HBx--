<template>
  <div class="all-page">dashboard</div>
</template>

<script>
  import store from "@/api/store.js"
  export default {
    data() {
      return {

      }
    },
    mounted() {
      store.listdata().then((res) => {
        console.log(res);
      })
    },
    methods: {}
  }
</script>

<style>
</style>
