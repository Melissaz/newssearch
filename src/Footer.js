import React from 'react';

import NumOfPage from './NumOfPage';

import './css/bootstrap.min.css';
import './css/Search.css';

export default function Footer(props){
        return(
            <section className = "row">
                <button className="btn btn-outline-secondary btn-sm previous" onClick= {()=> {props.handlePrevious(props.pageNum)}}>Previous</button>
                <span className="pagenum">
                    <NumOfPage pageNum={props.pageNum} maxPageNum={props.maxPageNum} />
                </span>
                <button type="button" className="btn btn-outline-secondary btn-sm next" onClick= {()=> {props.handleNext(props.pageNum, props.maxPageNum)}}>Next</button>
            </section>
        )
}