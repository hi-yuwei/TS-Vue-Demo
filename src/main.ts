import dsBridge from "dsbridge"
window.dsBridge = dsBridge

import Vue from "vue"
import App from "./App.vue"
import router from "./router"

import token from "@/utils/token"
token.setToken()

import "@/utils/rem"
import "@/utils/dayjs"
import "@/utils/filters"

import Message from "@/components/Message"
Vue.use(Message)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
