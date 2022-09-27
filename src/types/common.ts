export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type Duration = {
  from: {
    month: Month
    year: number
  }
  to?: {
    month: Month
    year: number
  }
}

export type Organisation = {
  name: string
  url?: string
  icon?: string
}

export type Technology = {
  type: string
  name: string
}
