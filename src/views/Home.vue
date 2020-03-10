<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your " :age.sync="age" @hiBeck="hi"></HelloWorld>
    <p>年龄：{{age}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      age: 3
    }
  },
  methods: {
    hi(message) {
      console.log(message)
    }
  }
}
</script>
