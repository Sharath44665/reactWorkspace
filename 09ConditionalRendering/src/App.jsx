function Item({name, isPacked}){
  return (
    <li className="item">
      {name}{isPacked && '✅'}{!isPacked && '❌'}
      {/* from above, if the condition is false, the whole expression becomes false. */}
    </li>
  )
}

// function Item({name, isPacked}){
//   if (isPacked){
//     return <li className="item"> <del>{name} ✅ </del></li>
//   }
//   return <li className="item">{name}❌ </li>
// }

export default function PackingList(){
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="space suit"/>
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  )
}

