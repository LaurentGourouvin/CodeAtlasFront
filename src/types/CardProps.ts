/**
 * Props for the <Card> component
 * @property sign - Whether to display the signature at the bottom of the card
 * @property title - Main title of the card
 * @property author - Author of the card
 * @property content - Main content (can be used as slot or plain text)
 */
export interface CardProps {
  sign: boolean
  title: string
  author: string
  content: string
}