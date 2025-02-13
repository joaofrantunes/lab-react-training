import React from 'react';
import "./Rating.css";

function Rating(props) {
  const rating = props.children;

  return (
    <div>
      {rating >= 1 ? '★' : '☆'}
      {rating >= 2 ? '★' : '☆'}
      {rating >= 3 ? '★' : '☆'}
      {rating >= 4 ? '★' : '☆'}
      {rating >= 5 ? '★' : '☆'}
    </div>
  );
}

export default Rating;