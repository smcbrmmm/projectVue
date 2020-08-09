<template>
  <div>

    <router-view></router-view>

  </div>
</template>

<script>
import Counter from './Counter.vue'

export default {
  name: 'app',
  data () {
    return {
      url: 'https://google.com',
      isShow:false
    }
  },
  components : {
    Counter
  }
}
</script>

<style>

</style>
