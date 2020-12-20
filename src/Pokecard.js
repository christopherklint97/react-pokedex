/* Shows a single Pokemon, with their name, image, and type. */
function Pokecard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
        alt=""
      />
      <p>Type: {props.type}</p>
      <p>EXP: {props.base_experience}</p>
    </div>
  );
}

export default Pokecard;
