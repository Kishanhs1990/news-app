import React from 'react';
import PropTypes from 'prop-types';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

class Sidebar extends React.Component {
  state = {
    categories: [],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.newsData !== this.props.newsData) {
      this.uniqueByCategory();
    }
  }

  uniqueByCategory = () => {
    const { newsData } = this.props;

    if (newsData && newsData.length) {
      const listOfCategories = newsData.map(item => item.category);
      const uniqueCategories = new Set(listOfCategories);

      this.setState({
        categories: [...uniqueCategories],
      });
    }
  };

  render() {
    const { newsData, setCategoryAsActive, activeCategory } = this.props;
    const { categories } = this.state;

    return (
      <Router>
        <aside className="sidebar">
          <ul className="sidebar-category">
            {newsData && newsData.length ? (
              categories.map((categoryItem, index) => (
                <Route>
                  <Redirect exact from="/" to="/general" />
                  <Link
                    to={categoryItem}
                    onClick={setCategoryAsActive(categoryItem)}
                  >
                    <li
                      key={index}
                      className={`sidebar-category--item ${activeCategory ===
                        categoryItem && 'active'} `}
                    >
                      {categoryItem}
                    </li>
                  </Link>
                </Route>
              ))
            ) : (
              <div className="loader" />
            )}
          </ul>
        </aside>
      </Router>
    );
  }
}

Sidebar.propTypes = {
  newsData: PropTypes.array,
  activeCategory: PropTypes.string,
  setCategoryAsActive: PropTypes.func,
};

export default Sidebar;
