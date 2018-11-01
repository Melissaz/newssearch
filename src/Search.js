import React, { Component } from 'react';


import './css/bootstrap.min.css';
import './css/Search.css';

import Nav from './Nav';
import NewsCard from './NewsCard';
import {fetchConditionData} from './api/news';
import Footer from './Footer';



export default class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            keyWords:'',
            news:[],
            pageNum:0,
            maxPageNum:50
        };
        this.handleWordsChange = this.handleWordsChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);
    }

    //input 
    handleWordsChange(event){
        const value = event.target.value;
        this.setState({keyWords: value, pageNum:0});
    }

    //search button
    handleSearch(keyWords, pageNum){ 
        fetchConditionData(keyWords,pageNum).then(data => this.onConditionLoad(data))
                                .catch(error =>{
                                    alert(error.message)
                                }); 
    }

    onConditionLoad(props){
        const maxPageNum = props.nbPages;
        if(maxPageNum === 0){
        return  alert('No matching search. Please try different keywords.');
        }

        const hits = props.hits;
        const news = hits.map(news=> {
        return{
            title: news.title,
            author: news.author,
            createdTime: news.created_at,
            comments: news.num_comments,
            url: news.url
            }
        })
        this.setState({news, maxPageNum});
    }


    //key press
    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleSearch(this.state.keyWords, this.state.pageNum);
        }
      }
      
    //previous button  
    handlePrevious(pageNum){
        if(pageNum <= 0){
             this.setState({pageNum:0}); 
             return;   
        }
        pageNum = pageNum -1;
        this.setState({pageNum:pageNum},
            this.handleSearch(this.state.keyWords, pageNum));
    }

    //next button
    handleNext(pageNum,maxPageNum){
        if(pageNum >= maxPageNum-1){
            this.setState({pageNum: maxPageNum-1}); 
            return;
        }
        pageNum = pageNum +1 ;
        this.setState({pageNum:pageNum},
            this.handleSearch(this.state.keyWords, pageNum));
    }

    componentDidMount() {
        this.handleSearch(this.state.keyWords, this.state.pageNum);
    };

        render(){
            const {keyWords, pageNum, news, maxPageNum} = this.state;
            return(
                <React.Fragment>
                    <div className="container">
                        <div className="search-header"> 
                            <Nav handleWordsChange={this.handleWordsChange} 
                                    handleSearch={this.handleSearch} 
                                        onKeyPress={this._handleKeyPress} 
                                            keyWords={keyWords}
                                                pageNum={pageNum} />
                        </div>
                        <div className="newscard">
                            <NewsCard key= {news.id} news = {news}/>
                        </div>
                        <div className="center">
                            <Footer handlePrevious={this.handlePrevious}
                                        pageNum={pageNum}
                                            maxPageNum={maxPageNum}
                                                handleNext={this.handleNext} />
                        </div>
                    </div>
                </React.Fragment>
            )
        }

}
