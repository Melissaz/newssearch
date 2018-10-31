import React, { Component } from 'react';
import {FaSearch} from 'react-icons/fa';

import './css/bootstrap.min.css';
import './css/Search.css';

import NewsCard from './NewsCard';
import {fetchConditionData} from './api/news';
import NumOfPage from './NumOfPage';



export default class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            keyWords: '',
            news:[{
                title:'',
                newsURL:''
            }],
            pageNum:0,
            maxPageNum:50
        };
        this.handleWordsChange = this.handleWordsChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handleWordsChange(event){
        const value = event.target.value;
        this.setState({keyWords: value});
    }

    handleSearch(keyWords, pageNum){      
        fetchConditionData(keyWords,pageNum).then(data => this.onConditionLoad(data))
                                .catch(error =>{
                                    alert(error.message)
                                });    
    }

    onConditionLoad(props){
        const hits = props.hits;
        const news = [
            {title: hits.map((news) => 
            <section>
                <div>{news.title}</div>
                <div className="row">
                    <div className="col-3">{news.author}</div>
                    <div className="col-3">{news.created_at}</div>
                    <div className="col-3">{news.num_comments}</div>
                    <div className="col-3"><a href={news.url}>NewsURL</a></div>
                </div> 
                
            </section>
            ), 
        }];
        const maxPageNum = props.nbPages;
        this.setState({news, maxPageNum});
    }

    handlePrevious(pageNum){
        if(pageNum <= 0){
             this.setState( {pageNum:0}); 
             return;   
        }
        pageNum = pageNum -1;
        this.setState( {pageNum:pageNum},
            this.handleSearch(this.state.keyWords, pageNum))
    }

    handleNext(pageNum,maxPageNum){
        if(pageNum >= maxPageNum-1){
            this.setState( {pageNum: maxPageNum-1}); 
            return;
        }
        pageNum = pageNum +1 ;
        this.setState({pageNum: pageNum},
            this.handleSearch(this.state.keyWords, pageNum))
    }

        render(){
            return(
                <React.Fragment>
                    <div className="container">
                        <div className="row search-header">
                            <div className="col-3 search-title">

                            Hacker News Search
                            </div>
                        
                            <div className="col-6 ">

                                <div class="search-nav input-group mb-3">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-light" type="button" 
                                            onClick= {()=> {this.handleSearch(this.state.keyWords, this.state.pageNum)}}><FaSearch /></button>
                                    </div>
                                    <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" 
                                        value = {this.state.keyWords} onChange={this.handleWordsChange}/>
                                </div>
                                {/* <button className="search-btn" onClick= {()=> {this.handleSearch(this.state.keyWords, this.state.pageNum)}} >
                                
                                <input className="search-input" value = {this.state.keyWords} onChange={this.handleWordsChange} />
                                <FaSearch /></button>      */}
                            </div>   
                            <div className="col-2">
                            By Melissa
                            </div>
                        </div>   
                        <div>
                            <NewsCard news = {this.state.news}/>
                        </div>
                        <div className="row">
                            <button onClick= {()=> {this.handlePrevious(this.state.pageNum)}}>Previous</button>
                            <NumOfPage pageNum={this.state.pageNum} maxPageNum={this.state.maxPageNum} />
                            <button onClick= {()=> {this.handleNext(this.state.pageNum, this.state.maxPageNum)}}>Next</button>
                        </div>
                    </div>

                </React.Fragment>
            )
        }

}
