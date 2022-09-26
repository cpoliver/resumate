export type ContactType = "email" | "phone" | "custom"

export type ContactDetailsPhone = {
  type: "phone"
  countryCode: string
  number: string
}

export type ContactDetailsEmail = {
  type: "email"
  emailAddress: string
}

export type ContactDetailsCustom = {
  type: "custom"
  label: string
  value: string
}

export type ContactDetails = ContactDetailsPhone | ContactDetailsEmail | ContactDetailsCustom
