
import { people } from './data.js';
import { getImageUrl } from './utils.js';

function getMyList(personList){
  const listItems = personList.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return listItems;
}

export default function List() {
  let chemist = people.filter(p => p.profession === "chemist");
  let others = people.filter(p => p.profession !== "chemist");
  const chemistItems = getMyList(chemist)
  const otherItems = getMyList(others)
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{chemistItems}</ul>
      <hr />
      <h1>Others</h1>
      <ul>{otherItems} </ul>
    </article>
  );
}
