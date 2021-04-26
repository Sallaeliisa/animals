import React from 'react';


const AnimalsCard = ({name, aclass, desc, img, link}) => {
    const truncate = (str, no_words) => {
        return str.split(' ').splice(0, no_words).join(' ');
    };

    return (
        <div className='post'>
            <img src={img}></img>
            <h1>{name}</h1>
            <p>{aclass}</p>
            <p>{truncate(desc, 15)} ...</p>
            <a href={link}>Read more</a>
        </div>
    );
};

export default AnimalsCard;