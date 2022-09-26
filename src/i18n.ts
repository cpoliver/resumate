import i18next from "i18next"

// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const en = {
  translation: {
    Test: "ENGLISH",
  },
}

const it: typeof en = {
  translation: {
    Test: "ITALIANO",
  },
}

// eslint-disable-next-line import/no-named-as-default-member
i18next.init({
  resources: { en, it },
  lng: "en",
  interpolation: { escapeValue: false },
})

export { i18next }
