import './app.css';
import { useState } from "react";
import AnimalShow from './AnimalShow';

const animalArray = ['bird', 'cat', 'dog', 'gator', 'horse']; 

function getRandomAnimal(){
    
    return animalArray[Math.floor(Math.random()*animalArray.length)] ;
}
// console.log(getRandomAnimal());

function App(){
    
    const [animals, setNewAnimal] = useState([]);

    const afterClick = () => {
        setNewAnimal([...animals, getRandomAnimal()]);
    }


    const renderedAnimals = animals.map((animals, index) => {
        return <AnimalShow type={animals} key = {index}/>
    })
    // console.log(renderedAnimals)
    return (
        <div className='app'>
            
            <button onClick={afterClick}>add Animal</button>
            {/* <div> {animal}</div> */}
            <div className='animal-list'>{renderedAnimals} </div>
        </div>
    );
}

export default App;