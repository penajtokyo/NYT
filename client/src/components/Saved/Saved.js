import React from 'react';
import moment from 'moment';
import './Saved.css'

const Saved = (props) => {
  return (
    <div className='row'>
      <div className='col s12 header'>
        <h4>Saved Articles</h4>
      </div>
      {props.data.map((article, index) => (
        <div className='col s12 article' key={index}>
          <h5>{article.title}</h5>
          <p>Published: {moment(article.date).format('MM/DD/YYYY h:MMA')}</p>
          <a className='waves-effect waves-light btn-small readBtn' href={article.url} rel='noopener noreferrer' target='_blank'>Read</a>
          <button className='waves-effect waves-light btn-small deleteBtn' onClick={() => props.handleDelete(article._id)}>Delete</button>
          <hr />
        </div>)
      )}
    </div>
  )
};

export default Saved