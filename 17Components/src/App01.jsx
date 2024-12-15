let counter =0;

function Cup(){
  counter += 1
  return (<h2>Tea cup for guest #{counter} </h2> )
}

export default function App(){
  return (
    <section>
      <Cup />
      <Cup />
      <Cup />
    </section>
  )
}





