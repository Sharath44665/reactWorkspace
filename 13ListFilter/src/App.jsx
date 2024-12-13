// Splitting a list in two 

import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}


// import {people} from './data.js';
// // import {getImageUrl} from './utils.js';
// import { getImageUrl } from './utils.js';

// export default function personsList(){
//   const listItems = people.map( 
//     (person) => {
//       return (
//         <li key={person.id}>
//           <b>{person.name}</b>
//           <img src={getImageUrl(person)} alt={person.name} />
//           <p> <i>{person.profession}</i>  known for {person.accomplishment} </p>
//         </li>
//       )
//     }
//   );

//   return <ul>{listItems} </ul>
// }