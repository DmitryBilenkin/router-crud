import './Card.css'

export default function Card(props) {
    const cardClass = props.className + ' card'
  return (
    <div className={cardClass} >{props.children}</div>
  )
}
