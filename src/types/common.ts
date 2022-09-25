export type Month = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11

export type Duration = {
  from: {
    month: Month
    year: number
  }
  to: {
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
  name: string
  icon?: string
}
