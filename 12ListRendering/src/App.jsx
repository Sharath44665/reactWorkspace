const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];


export default function ChecmistList(){
  let allChemistsList = people.filter(chem => chem.profession === "chemist")
  allChemistsList = allChemistsList.map(p => <li key={p.id}>{p.name}</li>);
  console.log(allChemistsList)
  return (
    <section>
      demo
      <ul>
        {allChemistsList}
      </ul>
    </section>
    
  );
}

