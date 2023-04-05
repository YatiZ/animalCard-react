import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';
import { useState } from 'react';
import './AnimalShow.css';

const svgImg = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
};

function AnimalShow({type}){
    const [count, setHeart] = useState(0);
    
    const handleCLick = () =>{
        return setHeart(count+1);
    }

    return (
        <div onClick={handleCLick} className='animal-show'>
            <img className='animal' src={svgImg[type]} alt='animal' />
            <img className='heart' src= {heart} alt='heart' style={{width: 10 + 10* count + 'px'}} />
        </div>
    )
}
export default AnimalShow;