var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r("krGWQ"),r("4aPXr");var a=r("4aPXr"),s=r("krGWQ");const i=new(0,a.SStorage);(0,s.getRefs)().libraryLogo.addEventListener("click",(function(){i.clear()})),r("2lP43"),r("3tw01"),r("cgCOF"),r("hJCi4");var l=r("hqPq9"),o=r("sgMsR"),c=(s=r("krGWQ"),r("gzWlL")),d=(c=r("gzWlL"),r("fK7aK")),m=(d=r("fK7aK"),r("4AmR3"));m=r("4AmR3");const u=(0,s.getRefs)();function g(){u.libraryBtnW.classList.remove("current-btn"),u.libraryBtnQ.classList.add("current-btn"),o.fbFilmsAuth.isLogin&&(u.library.classList.add("min-height"),(0,c.spinnerOn)(),(0,m.emptyLibraryHide)(),u.library.innerHTML="",async function(){if(o.fbFilmsAuth.isLogin)try{const e=await l.fbFilmsData.getFilms(l.PLACE_Q);if(e)return e}catch(e){console.log(e)}}().then((({films:e})=>e.map((({id:e,posters:t,title:n,genres:r,year:a,vote:s})=>({id:e,posters:t,title:n,genres:r,year:a,vote:s}))))).then((e=>{0!==e.length&&(e.forEach((e=>{1===e.genres.length&&(e.genres=[e.genres[0].name]),2===e.genres.length&&(e.genres=[e.genres[0].name,e.genres[1].name]),e.genres.length>2&&(e.genres=[e.genres[0].name,e.genres[1].name,"Other"])})),(0,c.spinnerOff)(),(0,d.renderMarkupList)(u.library,e,d.markupCreating)),0===e.length&&(u.library.classList.remove("min-height"),(0,c.spinnerOff)(),(0,m.emptyLibraryShow)())})))}u.libraryBtnQ.addEventListener("click",g);l=r("hqPq9"),o=r("sgMsR"),s=r("krGWQ"),c=r("gzWlL"),c=r("gzWlL"),d=r("fK7aK"),d=r("fK7aK"),m=r("4AmR3"),m=r("4AmR3");r("ihsYy"),r("7jxxg"),r("ihsYy");const p=(0,s.getRefs)();function f(){p.libraryBtnW.classList.add("current-btn"),p.libraryBtnQ.classList.remove("current-btn"),o.fbFilmsAuth.isLogin&&(p.library.classList.add("min-height"),(0,c.spinnerOn)(),(0,m.emptyLibraryHide)(),p.library.innerHTML="",b().then((({films:e})=>e.map((({id:e,posters:t,title:n,genres:r,year:a,vote:s})=>({id:e,posters:t,title:n,genres:r,year:a,vote:s}))))).then((e=>{0!==e.length&&(h(e),(0,c.spinnerOff)(),(0,d.renderMarkupList)(p.library,e,d.markupCreating)),0===e.length&&(p.library.classList.remove("min-height"),(0,c.spinnerOff)(),(0,m.emptyLibraryShow)())})))}async function b(){if(o.fbFilmsAuth.isLogin)try{const e=await l.fbFilmsData.getFilms(l.PLACE_W);if(e)return e}catch(e){console.log(e)}}function h(e){return e.forEach((e=>{1===e.genres.length&&(e.genres=[e.genres[0].name]),2===e.genres.length&&(e.genres=[e.genres[0].name,e.genres[1].name]),e.genres.length>2&&(e.genres=[e.genres[0].name,e.genres[1].name,"Other"])}))}p.libraryBtnW.addEventListener("click",f),r("ihsYy");s=r("krGWQ");var y=r("4Dq8E");var v=r("lBdXx");r("jrNhD");l=r("hqPq9");const L=new(0,r("6sNdw").default),w=(0,s.getRefs)(),k=new(0,y.default);let x=null,E=null;!function(){function e(){document.body.classList.toggle("modal-open"),w.modal.classList.toggle("is_hidden")}function t(e){L.filmID=E,L.showTrailer(),a()}async function n(e){if(e.target.classList.contains("remove-from-watched")){e.target.nextSibling.setAttribute("disabled","");const t=await l.fbFilmsData.removeFilm(E,"WA");console.log("result = ",t),e.target.textContent="film removed from watched",e.target.setAttribute("disabled",""),f()}}async function r(e){if(e.target.classList.contains("remove-from-queue")){e.target.previousSibling.setAttribute("disabled","");const t=await l.fbFilmsData.removeFilm(E,"QU");console.log("result = ",t),e.target.textContent="film removed from queue",e.target.setAttribute("disabled",""),g()}}function a(t){e()}function s(t){"Escape"===t.key&&(e(),document.removeEventListener("keydown",s))}function i(t){t.target===t.currentTarget&&(e(),w.modal.removeEventListener("click",i))}w.library.addEventListener("click",(function(a){const l=a.target.hasAttribute("data-id");if(E=a.target.dataset.id,a.target===a.currentTarget)return;if(!1===l)return;w.modalFilmWrapper.innerHTML="",document.addEventListener("keydown",s),w.modal.addEventListener("click",i),e(),k.getById(E).then((e=>{var a,s;x=e,a=w.modalFilmWrapper,s=function({title:e,vote:t,votes:n,popularity:r,original_title:a,genres:s,about:i,poster_path:l,posters:o,year:c}){const d=s.map((e=>e.name)).join(", ");return`<div class="modal-container">\n        <div class="poster-thumb">\n          <picture>\n              <source\n              srcset="\n              ${o[4].path} 1x,\n              ${o[5].path} 2x\n              "\n              media="(min-width: 1200px)"\n            />\n              <source\n              srcset="\n              ${o[3].path} 1x,\n              ${o[4].path} 2x\n              "\n              media="(min-width: 768px)"\n            />\n              <source\n              srcset="\n              ${o[3].path} 1x,\n              ${o[4].path} 2x\n              "\n              media="(max-width: 767px)"\n            />\n  \n            <img\n              class="movie-poster"\n              src="${o[3].path}"\n              alt="${e}"\n  \n              loading="lazy"\n            />\n          </picture>\n          <div class="trailer-overlay">\n          <button type="button" class="trailer-play-btn">\n          &#9655;\n              </button>\n          \n          </div>\n        </div>\n  \n        <div>\n          <table class="info">\n            <caption class="movie-title">\n            ${e.toUpperCase()}\n            </caption>\n            <tbody>\n              <tr class="table-row">\n                <td class="td">\n                  <p class="characteristic">Vote / Votes</p>\n                </td>\n                <td class="description">\n                  <span class="vote">${t} </span> &nbsp;\n                  <span class="characteristic">/</span> ${n}\n                </td>\n              </tr>\n              <tr class="table-row">\n                <td class="td">\n                  <p class="characteristic">Popularity</p>\n                </td>\n                <td class="description">${r}</td>\n              </tr>\n              <tr class="table-row">\n                <td class="td">\n                  <p class="characteristic">Original Title</p>\n                </td>\n                <td class="description">${a.toUpperCase()}</td>\n              </tr>\n              <tr class="table-row">\n                <td class="td">\n                  <p class="characteristic">Genre</p>\n                </td>\n                <td class="description">${d}</td>\n              </tr>\n            </tbody>\n          </table>\n          <h3 class="about">About</h3>\n          <p class="about-descr">\n            ${i}\n          </p>\n          <div class="buttons-wrapper">\n            <button\n              type="button"\n              class="button-modal remove-from-watched"\n              data-action="add-to-watched"\n            >\n            remove from Watched</button\n            ><button\n              type="button"\n              class="button-modal remove-from-queue"\n              data-action="add-to-queue"\n            >\n            remove from queue\n            </button>\n          </div>\n        </div>\n      </div>\n      `}(e),a.insertAdjacentHTML("beforeend",s);const i=w.modalFilmWrapper.querySelector(".remove-from-watched"),l=w.modalFilmWrapper.querySelector(".remove-from-queue");w.modalFilmWrapper.querySelector(".trailer-play-btn").addEventListener("click",t),i.addEventListener("click",n),l.addEventListener("click",r)})).catch(v.default)})),w.closeModalBtn.addEventListener("click",a)}();new(0,r("6sNdw").default);
//# sourceMappingURL=library.316bfc45.js.map
