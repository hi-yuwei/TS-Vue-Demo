const tokenName: string = "token"

const setToken = (): void => {
  if (window.dsBridge.hasNativeMethod("syncToken")) {
    let token = window.dsBridge.call("syncToken")
    localStorage.setItem(tokenName, token)
  }
}

const getToken = (): string => {
  return localStorage.getItem(tokenName) || ""
}

const removeToken = (): void => {
  localStorage.removeItem(tokenName)
}

export default {
  setToken,
  getToken,
  removeToken
}
