import React from 'react';

const ratingNames = [
    'Not rated yet',
    'very poor',
    'poor',
    'avg',
    'good',
    'very good',
]

const getStats = data => data.reduce((prev, current) => {

    const ratingName = ratingNames[current.rating]
    if (prev[ratingName]) {
        prev[ratingName] += 1
    } else {
        prev[ratingName] = 1
    }

    return prev

}, {})

const Statistic = (props) => { //stateless component/ function component

        const stats = getStats(props.data)

        return (
                <div>
                    {ratingNames.map(item =>
                        <div key={item}>{item}: {stats[item] || 0}</div>
                    )}
                </div>
        );

}

export default Statistic;
