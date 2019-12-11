import React from 'react';
import Sidebar from './Sidebar';
import PrimaryView from './PrimaryView';
import { fetchData } from '../utils';

class Main extends React.Component {
  state = {
    newsData: [],
    isLoaded: false,
    activeCategory: 'general',
  };

  componentDidMount() {
    this.makeApiCall();
  }

  makeApiCall = async () => {
    const newsData = await fetchData();
    this.setState({ newsData });
  };

  setCategoryAsActive = categoryItem => () =>
    this.setState({ activeCategory: categoryItem });

  render() {
    const { newsData, activeCategory } = this.state;
    console.log(this.state);

    return (
      <main className="main">
        <Sidebar
          newsData={newsData}
          activeCategory={activeCategory}
          setCategoryAsActive={this.setCategoryAsActive}
        />
        <PrimaryView activeCategory={activeCategory} />
      </main>
    );
  }
}

export default Main;
