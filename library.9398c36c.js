!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return r[e]=i,n.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i),i("4Nugj"),i("cP2Tz");var o=i("cP2Tz"),a=i("4Nugj"),s=new(0,o.SStorage);(0,a.getRefs)().libraryLogo.addEventListener("click",(function(){s.clear()})),i("KXFuB"),i("e3MQG");var c=i("bpxeT"),u=i("2TvXO"),l=i("lRkNt"),f=i("5uvrp"),d=(a=i("4Nugj"),i("ilDAP")),p=(d=i("ilDAP"),i("kyTY7")),b=(p=i("kyTY7"),i("g1n8n")),g=(b=i("g1n8n"),(0,a.getRefs)());function h(){return(h=e(c)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f.fbFilmsAuth.isLogin){e.next=12;break}return e.prev=1,e.next=4,l.fbFilmsData.getFilms(l.PLACE_Q);case 4:if(!(r=e.sent)){e.next=7;break}return e.abrupt("return",r);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}g.libraryBtnQ.addEventListener("click",(function(){g.libraryBtnW.classList.remove("current-btn"),g.libraryBtnQ.classList.add("current-btn"),f.fbFilmsAuth.isLogin&&((0,d.spinnerOn)(),(0,b.emptyLibraryHide)(),g.library.innerHTML="",function(){return h.apply(this,arguments)}().then((function(e){return e.films.map((function(e){return{id:e.id,posters:e.posters,title:e.title,genres:e.genres,year:e.year,vote:e.vote}}))})).then((function(e){e.forEach((function(e){1===e.genres.length&&(e.genres=[e.genres[0].name]),2===e.genres.length&&(e.genres=[e.genres[0].name,e.genres[1].name]),e.genres.length>2&&(e.genres=[e.genres[0].name,e.genres[1].name,"Other"])})),(0,d.spinnerOff)(),(0,p.renderMarkupList)(g.library,e,p.markupCreating)})))}));c=i("bpxeT"),u=i("2TvXO"),l=i("lRkNt"),f=i("5uvrp"),a=i("4Nugj"),d=i("ilDAP"),d=i("ilDAP"),p=i("kyTY7"),p=i("kyTY7"),b=i("g1n8n"),b=i("g1n8n");i("4zSSb"),i("53Mtm"),i("4zSSb");var m=(0,a.getRefs)();function v(){return y.apply(this,arguments)}function y(){return(y=e(c)(e(u).mark((function n(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f.fbFilmsAuth.isLogin){e.next=12;break}return e.prev=1,e.next=4,l.fbFilmsData.getFilms(l.PLACE_W);case 4:if(!(r=e.sent)){e.next=7;break}return e.abrupt("return",r);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function L(e){return e.forEach((function(e){1===e.genres.length&&(e.genres=[e.genres[0].name]),2===e.genres.length&&(e.genres=[e.genres[0].name,e.genres[1].name]),e.genres.length>2&&(e.genres=[e.genres[0].name,e.genres[1].name,"Other"])}))}setTimeout((function(){f.fbFilmsAuth.isLogin&&((0,d.spinnerOn)(),(0,b.emptyLibraryHide)(),m.library.innerHTML="",v().then((function(e){return e.films.map((function(e){return{id:e.id,posters:e.posters,title:e.title,genres:e.genres,year:e.year,vote:e.vote}}))})).then((function(e){L(e),(0,d.spinnerOff)(),(0,p.renderMarkupList)(m.library,e,p.markupCreating)})))}),1e3),m.libraryBtnW.addEventListener("click",(function(){m.libraryBtnW.classList.add("current-btn"),m.libraryBtnQ.classList.remove("current-btn"),f.fbFilmsAuth.isLogin&&((0,d.spinnerOn)(),(0,b.emptyLibraryHide)(),m.library.innerHTML="",v().then((function(e){return e.films.map((function(e){return{id:e.id,posters:e.posters,title:e.title,genres:e.genres,year:e.year,vote:e.vote}}))})).then((function(e){L(e),(0,d.spinnerOff)(),(0,p.renderMarkupList)(m.library,e,p.markupCreating)})))})),i("4zSSb");c=i("bpxeT");var w=i("8MBJY"),x=i("a2hTj"),k=(u=i("2TvXO"),a=i("4Nugj"),i("dIxxU")),T={};T=function e(n,r,t){function i(a,s){if(!r[a]){if(!n[a]){var c=void 0;if(!s&&c)return c(a,!0);if(o)return o(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var l=r[a]={exports:{}};n[a][0].call(l.exports,(function(e){return i(n[a][1][e]||e)}),l,l.exports,e,n,r,t)}return r[a].exports}for(var o=void 0,a=0;a<t.length;a++)i(t[a]);return i}({1:[function(e,n,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.create=r.visible=void 0;var t=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=document.createElement("div");return r.innerHTML=e.trim(),!0===n?r.children:r.firstChild},i=function(e,n){var r=e.children;return 1===r.length&&r[0].tagName===n},o=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};r.visible=o,r.create=function(e,n){var r=function(e,n){var r=t('\n\t\t<div class="basicLightbox '.concat(n.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),o=r.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return o.appendChild(e)}));var a=i(o,"IMG"),s=i(o,"VIDEO"),c=i(o,"IFRAME");return!0===a&&r.classList.add("basicLightbox--img"),!0===s&&r.classList.add("basicLightbox--video"),!0===c&&r.classList.add("basicLightbox--iframe"),r}(e=function(e){var n="string"==typeof e,r=e instanceof HTMLElement==1;if(!1===n&&!1===r)throw new Error("Content must be a DOM element/node or string");return!0===n?Array.from(t(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(n)),a=function(e){return!1!==n.onClose(s)&&function(e,n){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===o(e)||e.parentElement.removeChild(e),n()}),410),!0}(r,(function(){if("function"==typeof e)return e(s)}))};!0===n.closable&&r.addEventListener("click",(function(e){e.target===r&&a()}));var s={element:function(){return r},visible:function(){return o(r)},show:function(e){return!1!==n.onShow(s)&&function(e,n){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),n()}))}),10),!0}(r,(function(){if("function"==typeof e)return e(s)}))},close:a};return s}},{}]},{},[1])(1),i("aYHWX");(0,a.getRefs)();var E=new(function(){"use strict";function n(){e(w)(this,n),this.filmID=0}return e(x)(n,[{key:"showTrailer",value:function(){var n=this;return e(c)(e(u).mark((function r(){var t,i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.fetchTrailer();case 3:if(0!==(t=e.sent).length&&void 0!==t){e.next=8;break}return console.log(t.length),alert("Sorry, trailer not found."),e.abrupt("return");case 8:i="",t.forEach((function(e){"Trailer"===e.type&&e.name.includes("Official")&&(i=e.key)})),i||(i=t[0].key),T.create('\n                <div>\n                    <iframe class="youtube-modal" src="https://www.youtube.com/embed/'.concat(i,'" frameborder="0" allowfullscreen></iframe>\n                </div>\n            ')).show(),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),alert("Sorry, trailer not found.");case 18:case"end":return e.stop()}}),r,null,[[0,15]])})))()}},{key:"fetchTrailer",value:function(){var n=this;return e(c)(e(u).mark((function r(){var t,i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(n.filmID,"/videos?api_key=").concat("c1b8c874be54ebc5c34c225dbd6a36f5","&language=en-US"),e.next=3,k.default.get(t);case 3:return i=e.sent,e.abrupt("return",i.data.results);case 5:case"end":return e.stop()}}),r)})))()}}]),n}());document.querySelector(".testplayer").addEventListener("click",(function(e){E.filmID=593643,E.showTrailer()}))}();
//# sourceMappingURL=library.9398c36c.js.map
