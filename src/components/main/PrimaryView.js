import React from 'react';
import PropTypes from 'prop-types';
import { fetchData } from '../utils';

class PrimaryView extends React.Component {
  state = {
    newsData: [],
    isModalOpen: false,
  };

  componentDidMount() {
    this.makeApiCall();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeCategory !== this.props.activeCategory) {
      this.makeApiCall();
    }
  }

  makeApiCall = async () => {
    const { activeCategory } = this.props;
    const newsData = await fetchData('top-headlines', activeCategory);
    this.setState({ newsData });
  };

  render() {
    const { newsData } = this.state;
    console.log(newsData);

    return (
      <div className="primary-view">
        <div className="primary-view-grid">
          {newsData.map((articleItem, index) => (
            <article className="primary-view-grid__item" key={index}>
              <img
                src={articleItem.urlToImage}
                className="image"
                alt={articleItem.title}
              />
              <div title={articleItem.description} className="title">
                {articleItem.description}
              </div>
              <p className="description">{articleItem.content}</p>
            </article>
          ))}
        </div>
      </div>
    );
  }
}

// eslint-disable-next-line no-lone-blocks
{
  /* <select onChange={this.selectItem}>
  {
    selectOptionData.map((sItem, index) => (
      <option value={sItem} key={index}>
        {sItem}
      </option>
    ))
  }
</select> */
}

PrimaryView.propTypes = {
  activeCategory: PropTypes.string,
};

export default PrimaryView;
