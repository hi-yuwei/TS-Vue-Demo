import axios from "./http"

export const getArticle = (params: any) => {
  return axios.get("/other/app/article/get", { params })
}
