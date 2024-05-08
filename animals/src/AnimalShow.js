import { useState } from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg';

const svgMap = {
    bird: bird,
    cat: cat,
    cow: cow,
    dog: dog,
    gator: gator,
    horse // which is equivalent to horse: horse
}



function AnimalShow({ type }){
    const [countClick, setCountClick] = useState(0);
    function bigHeart(){
        setCountClick(countClick+1)
    }
    return (
        <div onClick={bigHeart}>
            <img alt='animal' src={svgMap[type]} />
            <img alt='heart symbol' src={heart} style={{width: 10+10*countClick + 'px'}}/>
        </div>
    );
}

export default AnimalShow;