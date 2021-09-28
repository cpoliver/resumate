import i18next from "i18next"
import { initReactI18next } from "react-i18next"

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

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: { en, it },
    lng: "en",
    interpolation: { escapeValue: false },
  })

export { i18next }
