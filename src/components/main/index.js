import React from 'react';
import Sidebar from './Sidebar';
import PrimaryView from './PrimaryView';
import { fetchData } from '../utils';
import { connect } from 'react-redux';

class Main extends React.Component {
  componentDidMount() {
    this.makeApiCall();
  }

  makeApiCall = async () => {
    const newsData = await fetchData();
    this.props.dispatch({ type: newsData });
  };

  setCategoryAsActive = categoryItem => () =>
    this.props.dispatch({
      type: { activeCategory: categoryItem },
    });

  render() {
    const { newsData, activeCategory } = this.props;
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

const mapStateToProps = state => ({
  newsData: state.newsData,
  activeCategory: state.activeCategory,
  isLoaded: state.isLoaded,
});

export default connect(mapStateToProps)(Main);
