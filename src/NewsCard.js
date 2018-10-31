import React from 'react';
import './css/bootstrap.min.css';

export default function NewsCard(props){
    const news = props.news;
    let rows = news.map((news) =><div> {news.title}</div>);
    return <div>{rows}</div>;
}



