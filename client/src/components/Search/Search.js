import React from 'react';
import './Search.css';

const Search = (props) => {
    return (
        <div className='searchForm'>
            <div className='row'>
                <div className='col s12 center'>
                    <h5>Find Articles</h5>
                </div>
            </div>
            <div className='row'>
                <form className='col s12'>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <input
                            name='query'
                            id='keyWord'
                            value={props.query}
                            onChange={props.handleInput}
                            placeholder='Key Word(s)'
                            type='text'
                            className='validate'
                            required={true}
                            aria-required={true}
                            />
                            <span className='helper-text' data-error='Required'></span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s6'>
                            <input
                            name='startYear'
                            id='startYear'
                            value={props.startYear}
                            onChange={props.handleInput}
                            placeholder='Start Year'
                            type='number'
                            className='validate'
                            required={true}
                            aria-required={true}
                            />
                            <span className='helper-text' data-error='Required'></span>
                        </div>
                        <div className='input-field col s6'>
                            <input
                            name='endYear'
                            id='endYear'
                            value={props.endYear}
                            onChange={props.handleInput}
                            placeholder='End Year'
                            type='number'
                            className='validate'
                            required={true}
                            aria-required={true}
                            />
                            <span className='helper-text' data-error='Required'></span>
                        </div>
                    </div>
                    <button className='btn waves-effect waves-light submitBtn' name='submit' onClick={props.handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
};

export default Search;