import React from 'react';
import './css/bootstrap.min.css';
import './css/Search.css';

export default function NewsCard(props){
    const news = props.news;
    let rows = news.map((news, i) =>  {
        return <NewsDetail news= {news} key={i}/> 
    });
    return <div key={rows.id}>{rows}</div>;
}

function NewsDetail (props) {
    const news = props.news;
    return(
            <section className="container">
                <div className="news_title" key={`${news.title}_${news.url}`}> <a href={news.url}>{news.title}</a></div>
                <div className="row news_num">
                    <div className="news_author" key={`${news.author}_${news.url}`}>{news.author}</div>
                    <div className="news_time" key={`${news.createdTime}_${news.url}`}>{news.createdTime.slice(0,10)}</div>
                    <div className="news_comment" key={`${news.comments}_${news.url}`}>{news.comments}&nbsp;comments</div>
                    <div className="news_url" key={news.url}><a href={news.url}>{news.url}</a></div>
                </div>    
            </section>
        );
}
