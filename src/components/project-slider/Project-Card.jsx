export default function Card({ img, alt, name }) {
  return (
    <div className="card">
      <img src={img} alt={alt} className="img" />
      <p>{name}</p>
    </div>
  );
}
