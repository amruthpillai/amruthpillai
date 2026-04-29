export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })
}

export function formatMonthYear(date: Date): string {
  return date.toLocaleDateString("en-GB", { year: "numeric", month: "short" })
}

export function formatYear(date: Date): string {
  return date.toLocaleDateString("en-GB", { year: "numeric" })
}
