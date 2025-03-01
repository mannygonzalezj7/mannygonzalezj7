export default function Card({ ...props }) {
  return (
    <div className="card" onClick={props.onClick}>
      <img src={props.img} alt={props.alt} className="img" />
      <p>{props.name}</p>
    </div>
  );
}
