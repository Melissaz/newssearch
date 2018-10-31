import axios from 'axios';

const NEWSSEARCH_BASE_URL=
'http://hn.algolia.com/api/v1/search?query=';

export function fetchConditionData(keyWords,pageNum){
    const url = `${NEWSSEARCH_BASE_URL}${keyWords}&page=${pageNum}&tags=story`;
    
    return axios.get(url).then(response => response.data);
}
