import React, { Component }  from 'react';

const ratingNames = [
    'Not rated yet',
    'very poor',
    'poor',
    'avg',
    'good',
    'very good',
]

class Statistic extends Component {

    render() {
        return (
                <div>
                    {ratingNames.map(item =>
                        <div key={item}>{item}</div>
                    )}
                </div>



        );
    }

}

export default Statistic;
