import { parseISO, format } from 'date-fns'

export default function Date(props) {
  const date = parseISO(props.dateString)
  return <time className={props.className} dateTime={props.dateString}>{format(date, 'LLLL, yyyy')}</time>
}