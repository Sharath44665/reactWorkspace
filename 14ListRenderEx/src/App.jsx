
import { people } from './data.js';
import { getImageUrl } from './utils.js';

function Scientist({scienceType, items}){
  let myList = items;
  let persons = myList.map(
    (p) => {
      return(
        <li key={p.id}>
          <img src={getImageUrl(p)} alt={p.name} />
          Name: <b>{p.name}</b> 
        <p>{p.profession} works in {p.accomplishment} </p>
        </li>
      );
      
    } 
  )
  
  return (
    <>
    <h2>{scienceType}</h2>
    <ul>{persons} </ul>
    </>
    
  );

}

export default function List() {
  let chemist = people.filter(p => p.profession === "chemist");
  let others = people.filter(p => p.profession !== "chemist");
  
  return (
    <article>
      <h1>Scientists</h1>
      <Scientist scienceType="chemists" items={chemist} />
      <hr />
      <Scientist scienceType="Others" items={others} />
      
    </article>
  );
}
