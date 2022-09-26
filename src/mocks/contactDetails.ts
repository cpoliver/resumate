import { ContactDetails, ContactDetailsCustom, ContactDetailsEmail, ContactDetailsPhone } from "types/contactDetails"

const phone: ContactDetailsPhone = {
  type: "phone",
  countryCode: "+44",
  number: "7123 456789",
}

const email: ContactDetailsEmail = {
  type: "email",
  emailAddress: "user@test.com",
}

const skype: ContactDetailsCustom = {
  type: "custom",
  label: "Skype",
  value: "testuser",
}

const telegram: ContactDetailsCustom = {
  type: "custom",
  label: "Telegram",
  value: "testuser",
}

const standard: ContactDetails[] = [phone, email]

const full: ContactDetails[] = [...standard, skype, telegram]

export const contactDetails = {
  standard,
  full,
}
