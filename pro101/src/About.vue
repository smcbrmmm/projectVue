<template>
  <div>
    <h1>About me</h1>

  <ul>
    <li v-for="item of items" :key="item.name">
          {{ item.name}} >> {{ item.quantity}}
    </li>
  </ul>

  </div>
</template>

<script>
export default {
  data () {
    return {
      date:"2 August 2020",
      items: [
        {
          name: 'ABC',
          quantity : 10
        },
        {
          name: 'DEF',
          quantity : 36
        }
      ]
    }
  }

}
</script>

<style>

</style>