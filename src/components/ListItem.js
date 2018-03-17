import React, { Component }  from 'react';


class ListItem extends Component {


    render() {

        const { title, image, rating } = this.props;

        return (
            <div>
                <div>
                    {image ?
                        <img src={image} alt="error"/> : //paiętaj o ":" :)
                        <span>No image :(</span>
                    }
                </div>
                <div>{title}</div>
                <div>{rating}</div>
            </div>




        );
    }


}

export default ListItem;
