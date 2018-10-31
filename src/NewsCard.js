import React from 'react';
import './css/bootstrap.min.css';

export default function NewsCard(props){
    const news = props.news;
    let rows = news.map((news,i) =><div key={i}>{news.title}</div>);

    return <div>{rows}</div>;
}


