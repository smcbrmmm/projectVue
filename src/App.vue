<template>
  <div>

    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      url: 'https://google.com',
      isShow:false
    }
  }
}
</script>

<style>

</style>
