import dayjs from "dayjs"

const _dayjs = (date: any, c?: string) => {
  if (typeof date === "string" && date.includes("T")) {
    date = date
      .replace(/-/g, "/")
      .replace("T", " ")
      .substring(0, date.length - 9)
  }
  return dayjs(date, c)
}
window.dayjs = _dayjs
