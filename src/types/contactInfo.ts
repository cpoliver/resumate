export type ContactInfoType = "email" | "phone" | "custom"

export type ContactInfoPhone = {
  type: "phone"
  countryCode: string
  number: string
}

export type ContactInfoEmail = {
  type: "email"
  emailAddress: string
}

export type ContactInfoCustom = {
  type: "custom"
  label: string
  value: string
}

export type ContactInfo = ContactInfoPhone | ContactInfoEmail | ContactInfoCustom
