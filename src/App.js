import React, { Component } from 'react';
import './App.css';
import FetchForm from "./components/FetchForm";
import ListItem from "./components/ListItem";
import { sortComparator } from './Utils';
import FilterForm from './components/FilterForm';
import Statistic from './components/Statistics';

const API_URL = 'https://sandbox-rkrajewski.firebaseio.com/photos.json?orderBy=%22id%22&startAt=0&endAt='

class App extends Component {

    state = {
        fetchedData: [],
        visibleData: [],
        value: ""
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

    onChangeFilterData = (e) => {
        const filterFormValue = e.target.value
        const { fetchedData } = this.state
        const visibleData = fetchedData.filter(item => {
            return item.title.toLowerCase()
                .indexOf(filterFormValue.toLowerCase()) !== -1
        })

        this.setState({
            visibleData,
            filterFormValue
        })
    }

    render() {

    const { fetchedData, visibleData } = this.state


    return (
      <div className="App">
        <FetchForm onSubmit={this.fetchData}/>
          {!!fetchedData.length && <FilterForm
            onChange={this.onChangeFilterData}
            filterFormValue={this.state.value}
        />}

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
          {!!visibleData.length  && <Statistic  data={visibleData}/>}
      </div>
    );
  }
}

export default App;
