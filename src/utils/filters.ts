import Vue from "vue"

const formatDate = (date: string, formate: string = "DD MMM YYYY") => {
  if (!date) return "--"
  return window.dayjs(date).format(formate)
}

const toMoney = (num: number | string) => {
  if (num) {
    num = typeof num == "string" ? parseFloat(num) : num
    num = num.toFixed(2)
    num = parseFloat(num)
    num = num.toLocaleString()
    if (num.indexOf(".") == -1) {
      num = num + ".00"
    } else {
      let [int, decimal] = num.split(".")
      num = decimal.length < 2 ? num + "0" : num
    }
    return `\u20B9 ${num}`
  } else if (num == 0) {
    return "0"
  } else {
    return "--"
  }
}

// 手机号打码
const encodePhone = (str: string) => {
  if (str) {
    return str.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2")
  }
}

const encodeCard = (str: string) => {
  if (!str) return
  return str.substr(-4)
}

// 身份证只显示后4位，其余打码
const encodeIdCard = (str: string) => {
  if (str) {
    let len = String(str).length - 4
    let reg = new RegExp(`\\d{${len}}(\\d{3}([0-9]|X))`, "i")

    return String(str).replace(reg, `${"*".repeat(len)}$1`)
  }
}

const encodePhoneOrIdCard = (value: string) => {
  if (value) {
    let len = String(value).length - 7
    let reg = new RegExp(`(\\d{3})\\d{${len}}(\\d{3}([0-9]|X))`, "i")
    return String(value).replace(reg, `$1${"*".repeat(len)}$2`)
  }
  return "/"
}

const filters: any = {
  formatDate,
  toMoney,
  encodePhone,
  encodeCard,
  encodeIdCard,
  encodePhoneOrIdCard
}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
