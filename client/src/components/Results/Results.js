import React from 'react';
import moment from 'moment';
import './Results.css';

const Results = (props) => {
  return (
    <div className='row'>
      <div className='col s12 header'>
        <h4>Search Results</h4>
      </div>
      {props.data.map((article, index) => (
        <div className='col s12 article' key={index}>
          <h5>{article.headline.main}</h5>
          <p>Published: {moment(article.pub_date).format('MM/DD/YYYY h:MMA')}</p>
          <a className='waves-effect waves-light btn-small readBtn' href={article.web_url} rel='noopener noreferrer' target='_blank'>Read</a>
          <button className='waves-effect waves-light btn-small saveBtn' onClick={() => props.handleSaveArticle(article._id)}>Save</button>
          <hr />
        </div>)
      )}
    </div>
  );
};

export default Results;