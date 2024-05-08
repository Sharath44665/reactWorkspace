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
    return (
        <div>
            <img alt='animal' src={svgMap[type]} />
        </div>
    );
}

export default AnimalShow;