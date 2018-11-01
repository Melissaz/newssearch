import React from 'react';

import {FaSearch} from 'react-icons/fa';
import news from './images/news.png';

import './css/bootstrap.min.css';
import './css/Search.css';

export default function Nav(props){
        return(
            <div className="row">
                <div className="col-sm-1">
                    <img src={news} alt="search"/>
                </div>
                
                <div className="col-sm-4">
                    <div className="search-title">
                        Hacker News Search
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="search-nav input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-light" type="button" 
                                onClick= {()=> {props.handleSearch(props.keyWords, props.pageNum)}}><FaSearch /></button>
                        </div>
                        <input type="text" className="form-control" aria-describedby="basic-addon1" 
                            value = {props.keyWords} onChange={props.handleWordsChange} onKeyPress={props.onKeyPress}/>
                    </div>
                </div>   
            </div>   
        )
}