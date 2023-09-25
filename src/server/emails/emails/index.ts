import CardDetailsEmail from "./card_details";

// type that englobes all keys
export type Email = keyof typeof emails;
export type EmailProps<T extends Email> = Parameters<typeof emails[T]>[0];

export const emails = {
  card_details: CardDetailsEmail,
} as const;

export default emails;
