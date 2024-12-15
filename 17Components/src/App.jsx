function Cup({guest}){
  return ( <h2>Tea cup for guest #{guest}</h2>)
}

export default function TeaGathering(){
  let cups = [];
  for (let idx =1; idx < 11; idx += 1){
    cups.push(<Cup key={idx} guest ={idx} />)
  }

  return cups;
}