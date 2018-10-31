import React from 'react';
import './css/bootstrap.min.css';

export default function NumOfPage(props){
    const num = props.pageNum + 1;
    const maxPageNum = props.maxPageNum;

    return (
    <div>{num} of {maxPageNum}</div>);
}
