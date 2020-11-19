import React from 'react';
import Category from './Category.jsx';

var Categories = (props) => {

  var getAvgRatingPerCategory = (categories, reviews) => {

    categories.forEach(category => category.rating = 0);

    reviews.forEach(review => {
      review.category_ratings.forEach((category, idx) => {
        categories[idx].rating += category.rating;
      });
    });

    categories.forEach(category => category.rating /= reviews.length);
  }

  getAvgRatingPerCategory(props.categories, props.reviews);

  return (<div>
    {props.categories.map(category => (
      // return <div key={category.name}>{category.rating}</div>
      <Category
        key={category.name}
        category={category}
      />))}
  </div>);
};

export default Categories;