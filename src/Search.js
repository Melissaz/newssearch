import React, { Component } from 'react';
import {FaSearch} from 'react-icons/fa';

import './css/bootstrap.min.css';
import './css/Search.css';

import NewsCard from './NewsCard';
import {fetchConditionData} from './api/news';
import NumOfPage from './NumOfPage';

import news from './images/news.png';


export default class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            keyWords: '',
            news:[{
                title:'',
                author:'',
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
        this.setState({pageNum:0});     
        fetchConditionData(keyWords,pageNum).then(data => this.onConditionLoad(data))
                                .catch(error =>{
                                    alert(error.message)
                                });    
    }

    onConditionLoad(props){
        const hits = props.hits;
        const news = 
        [
            {title: hits.map((news) => 
            <section className="container">
                <div className="news_title"> <a href={news.url}>{news.title}</a></div>
                <div className="row news_num">
                    <div className="news_author">{news.author}</div>
                    <div className="news_time">{news.created_at}</div>
                    <div className="news_comment">{news.num_comments}&nbsp;comments</div>
                    <div className="news_url"><a href={news.url}>{news.url}</a></div>
                </div>    
            </section>
            ), 
        }] ;
 
        const maxPageNum = props.nbPages;
        this.setState({news, maxPageNum});
    }

    _handleKeyPress= (e) => {
        if (e.key === 'Enter') {
            this.componentDidMount();
        }
      }
      
    handlePrevious(pageNum){
        if(pageNum <= 0){
             this.setState( {pageNum:0}); 
             return;   
        }
        pageNum = pageNum -1;
        this.setState( {pageNum:pageNum},
            this.componentDidMount())
    }

    handleNext(pageNum,maxPageNum){
        if(pageNum >= maxPageNum-1){
            this.setState( {pageNum: maxPageNum-1}); 
            return;
        }
        pageNum = pageNum +1 ;
        this.setState({pageNum: pageNum},
            this.componentDidMount())
    }

    componentDidMount() {
        this.setState({pageNum: 0}); 
        this.handleSearch(this.state.keyWords, this.state.pageNum);
    };

        render(){
            return(
                <React.Fragment>
                    <div className="container">
                        <div className="search-header"> 
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
                                                onClick= {()=> {this.handleSearch(this.state.keyWords, this.state.pageNum)}}><FaSearch /></button>
                                        </div>
                                        <input type="text" className="form-control" aria-describedby="basic-addon1" 
                                            value = {this.state.keyWords} onChange={this.handleWordsChange} onKeyPress={this._handleKeyPress}/>
                                    </div>
                                </div>   
                            </div>   
                        </div>

                        <div className="newscard">
                            <NewsCard news = {this.state.news}/>
                        </div>
                        <div className="row center">
                            <button className="btn btn-outline-secondary btn-sm previous" onClick= {()=> {this.handlePrevious(this.state.pageNum)}}>Previous</button>
                            <span className="pagenum">
                                <NumOfPage pageNum={this.state.pageNum} maxPageNum={this.state.maxPageNum} />
                            </span>
                            <button type="button" className="btn btn-outline-secondary btn-sm next" onClick= {()=> {this.handleNext(this.state.pageNum, this.state.maxPageNum)}}>Next</button>
                        </div>
                    </div>
                </React.Fragment>
            )
        }

}
