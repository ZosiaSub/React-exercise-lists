import React from 'react';

const baseStars = Array(5).fill('☆')
const blackStar = "★"
const getStars = rating =>
    baseStars.map((item, index) => rating > index ? blackStar : item
    )


const Stars = (props) => (
    <div>
        {getStars(props.rating)}
    </div>
);

export default Stars;