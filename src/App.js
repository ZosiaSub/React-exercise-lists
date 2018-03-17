import React, { Component } from 'react';
import './App.css';
import FetchForm from "./components/FetchForm";
import ListItem from "./components/ListItem";
import { sortComparator } from './Utils';
import TextForm from './components/TextForm';
import Statistic from './components/Statistics';

const API_URL = 'https://sandbox-rkrajewski.firebaseio.com/photos.json?orderBy=%22id%22&startAt=0&endAt='

class App extends Component {

    state = {
        fetchedData: [],
        visibleData: []
    }

    fetchData = (numberOfItemsToFetch) => {
            fetch(API_URL + numberOfItemsToFetch)
                .then(response => response.json())
                .then(Object.values)
                .then(fetchedData => fetchedData.sort(sortComparator))
                .then(fetchedData => {
                    this.setState({
                        fetchedData,
                        visibleData:fetchedData

                })

                })
    }

    filterData = (filterByText) => {
        const { fetchedData } = this.state
        const visibleData = fetchedData.filter(item => {
            return item.title.toLowerCase()
                .indexOf(filterByText.toLowerCase()) !== -1
        })
        console.log(visibleData);
        this.setState({
            visibleData
        })
    }




  render() {

    const { visibleData } = this.state

    return (
      <div className="App">
        <FetchForm onSubmit={this.fetchData}/>
        <TextForm onSubmit={this.filterData}/>

          <div>
              {visibleData.map(({id, title, image, rating}) => (
                  <ListItem
                  key={id}
                  title={title}
                  image={image}
                  rating={rating}
                  ></ListItem>
              ))}
          </div>
          <Statistic data={visibleData}/>
      </div>
    );
  }
}

export default App;
