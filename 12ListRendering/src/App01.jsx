const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];


export default function DemoList(){
  const listItems = people.map( person => <li>{person}</li>);
  return <ul>{listItems}</ul>
}