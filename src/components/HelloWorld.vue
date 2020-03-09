<template>
  <div class="hello">
    <p>123456</p>
    <h1>{{ msg }}</h1>

    <input v-model.number="syncedage" />

    <input type="text" v-model="school" />

    <button type="button" @click="sayHeillo">打招呼</button>

    <p>
      For a guide and recipes on how to configure / customize this project,
      <br />check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync, Watch, Emit } from "vue-property-decorator"

@Component
export default class HelloWorld extends Vue {
  school = "yuwei"

  @Prop({
    type: String,
    default: "yuwei",
    required: true
  })
  msg!: string

  @PropSync("age", { type: [Number, String], default: 30 }) syncedage!: number | string

  @Watch("school")
  updateSchool(newValue: string, oldValue: string) {
    console.log(newValue)
    console.log(oldValue)
  }

  created() {
    console.log("created 声明周期")
  }
  mounted() {
    console.log("mounted 声明周期")
  }

  @Emit("hiBeck")
  sayHeillo() {
    return "您好，yuwei"
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
