(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALzSURBVGhD7ZnLyw5RHMcfRO6XsnHdyqWUNf4ArFxKlLst/gCibIiFJFEoysrGbYGdoiQLC7eVkktuyTUp4vs573Nqes2ZOWfmzDznqedTn9455/0985zvPDPzXH6dAQN6x0S5XV6RL+Uv+bdhv8pH8rhcJmtDgDcy+yS/5acGJUT2+fCmnC+DGSPPSLuj23KTnCNHyaYZL5fIA/KDZA1f5AoZxFnJgzk6a5joIZPlOcl6OK2XSi84nXjQZ7mYiRxGyxFDm61xWLKud3IaE0VMkPaaWMtEDuPka3lPTmWiJThwNyRrO8pEEdskhVwTLuZKavCBjBmGa6OIBfKP/CbHMuHiqmSBm80on2yQmGHmyZ/yiBm5uSt53pVm5OCFpGiWGeVjg3yUT7vbMcKwMPZ13YzcHJTU7TUjB9wVeJ8ousXaIISeIWOF8Q2yU1J30owcUMDdqohsEIgVxjfIBkndRTNyUCUIxAiTRBCoGyaZIFAnTFJBoGqY5IIAYZ7JkDBJBoHQMMkGgZAwSQcB3zDJBJku+WSch0+YJILw/YAPfE8ki86jLEwSQfiidV8yz623SphkTi0WxeL4n2+Y80x0SepiDwlzSfKDhiWpIOAbZjjJBYEqYZIMAqFhkg0CIWGSDgK+YZIPAj5h+iIIlIXpmyBQFKavgoArTPQg/BxZRN0gkBfGN8hGSd0FM3JAD4Ii18dxiBEEhofZ0d0uC7JHUlf4Q/ZjSRFNFhczJTXPzage2TA/un/LgpyS1O0yIwf07Cjab0ZuDsmtQ5u1yYYpCzJSvpLULWLCBd0git5LOkVtkQ1zmQkHdAmo4QtcKbckxbS72oQwx+RyM/qf2fKtZG1e7UC6p9yCeQCnUNsttjwIQbvavmLea1olbT+d1jCdol7ANbFF2lfioZwig+B6ofHIDmh33ZE0WehPrGvQ9XK3PC3thY3X5CRZCc5b7tffpd1h23Jhr5ZRTnEaj7zz7pMnJEerSTl4vE8slAMG9I5O5x+pz/+FJRzmsAAAAABJRU5ErkJggg=="},20:function(e,a,t){e.exports=t.p+"static/media/background.803d5671.jpg"},22:function(e,a,t){e.exports=t(52)},27:function(e,a,t){},29:function(e,a,t){},3:function(e,a,t){},4:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(17),s=t.n(r),o=(t(27),t(5)),i=t(6),l=t(8),m=t(7),u=t(9),d=(t(29),t(1)),h=(t(3),t(4),t(21)),g=t(18),v=t.n(g);function y(e){return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-1"},c.a.createElement("img",{src:v.a,alt:"search"})),c.a.createElement("div",{className:"col-sm-4"},c.a.createElement("div",{className:"search-title"},"Hacker News Search")),c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("div",{className:"search-nav input-group mb-3"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("button",{className:"btn btn-outline-light",type:"button",onClick:function(){e.handleSearch(e.keyWords,e.pageNum)}},c.a.createElement(h.a,null))),c.a.createElement("input",{type:"text",className:"form-control","aria-describedby":"basic-addon1",value:e.keyWords,onChange:e.handleWordsChange,onKeyPress:e.onKeyPress}))))}function N(e){var a=e.news.map(function(e,a){return c.a.createElement(p,{news:e,key:a})});return c.a.createElement("div",{key:a.id},a)}function p(e){var a=e.news;return c.a.createElement("section",{className:"container"},c.a.createElement("div",{className:"news_title",key:"".concat(a.title,"_").concat(a.url)}," ",c.a.createElement("a",{href:a.url},a.title)),c.a.createElement("div",{className:"row news_num"},c.a.createElement("div",{className:"news_author",key:"".concat(a.author,"_").concat(a.url)},a.author),c.a.createElement("div",{className:"news_time",key:"".concat(a.createdTime,"_").concat(a.url)},a.createdTime.slice(0,10)),c.a.createElement("div",{className:"news_comment",key:"".concat(a.comments,"_").concat(a.url)},a.comments,"\xa0comments"),c.a.createElement("div",{className:"news_url",key:a.url},c.a.createElement("a",{href:a.url},a.url))))}var f=t(19),A=t.n(f),b="http://hn.algolia.com/api/v1/search?query=";function k(e){var a=e.pageNum+1,t=e.maxPageNum;return c.a.createElement("div",null,a," of ",t)}function E(e){return c.a.createElement("section",{className:"row"},c.a.createElement("button",{className:"btn btn-outline-secondary btn-sm previous",onClick:function(){e.handlePrevious(e.pageNum)}},"Previous"),c.a.createElement("span",{className:"pagenum"},c.a.createElement(k,{pageNum:e.pageNum,maxPageNum:e.maxPageNum})),c.a.createElement("button",{type:"button",className:"btn btn-outline-secondary btn-sm next",onClick:function(){e.handleNext(e.pageNum,e.maxPageNum)}},"Next"))}var w=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e)))._handleKeyPress=function(e){"Enter"===e.key&&t.handleSearch(t.state.keyWords,t.state.pageNum)},t.state={keyWords:"",news:[],pageNum:0,maxPageNum:50},t.handleWordsChange=t.handleWordsChange.bind(Object(d.a)(Object(d.a)(t))),t.handleSearch=t.handleSearch.bind(Object(d.a)(Object(d.a)(t))),t.handlePrevious=t.handlePrevious.bind(Object(d.a)(Object(d.a)(t))),t.handleNext=t.handleNext.bind(Object(d.a)(Object(d.a)(t))),t._handleKeyPress=t._handleKeyPress.bind(Object(d.a)(Object(d.a)(t))),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleWordsChange",value:function(e){var a=e.target.value;this.setState({keyWords:a,pageNum:0})}},{key:"handleSearch",value:function(e,a){var t=this;(function(e,a){var t="".concat(b).concat(e,"&page=").concat(a,"&tags=story");return A.a.get(t).then(function(e){return e.data})})(e,a).then(function(e){return t.onConditionLoad(e)}).catch(function(e){alert(e.message)})}},{key:"onConditionLoad",value:function(e){var a=e.nbPages;if(0===a)return alert("No matching search. Please try different keywords.");var t=e.hits.map(function(e){return{title:e.title,author:e.author,createdTime:e.created_at,comments:e.num_comments,url:e.url}});this.setState({news:t,maxPageNum:a})}},{key:"handlePrevious",value:function(e){e<=0?this.setState({pageNum:0}):(e-=1,this.setState({pageNum:e},this.handleSearch(this.state.keyWords,e)))}},{key:"handleNext",value:function(e,a){e>=a-1?this.setState({pageNum:a-1}):(e+=1,this.setState({pageNum:e},this.handleSearch(this.state.keyWords,e)))}},{key:"componentDidMount",value:function(){this.handleSearch(this.state.keyWords,this.state.pageNum)}},{key:"render",value:function(){var e=this.state,a=e.keyWords,t=e.pageNum,n=e.news,r=e.maxPageNum;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"search-header"},c.a.createElement(y,{handleWordsChange:this.handleWordsChange,handleSearch:this.handleSearch,onKeyPress:this._handleKeyPress,keyWords:a,pageNum:t})),c.a.createElement("div",{className:"newscard"},c.a.createElement(N,{key:n.id,news:n})),c.a.createElement("div",{className:"center"},c.a.createElement(E,{handlePrevious:this.handlePrevious,pageNum:t,maxPageNum:r,handleNext:this.handleNext}))))}}]),a}(n.Component),S=t(20),P={backgroundImage:"url(".concat(t.n(S).a,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"noRepeat"},j=function(e){function a(){return Object(o.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){document.title="Hacker News Search"}},{key:"render",value:function(){return c.a.createElement("div",{style:P},c.a.createElement("div",{className:"search__container"},c.a.createElement(w,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.103f9393.chunk.js.map