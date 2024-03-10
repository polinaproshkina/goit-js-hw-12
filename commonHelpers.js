import{a as m,S as f,i as y}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();async function p(a,t){const r="42692774-4141696abcbee76e8cc433895",o="https://pixabay.com/api/",e="photo",s="horizontal",n="true";return(await m.get(`${o}?key=${r}&q=${a}&page=${t}&per_page=15&image_type=${e}&orientation=${s}&safesearch=${n}`)).data.hits}function g(a){const t=a.map(({webformatURL:r,tags:o,largeImageURL:e,likes:s,views:n,comments:u,downloads:d})=>`<li class = "gallery-item">
                    <a class="gallery-link" href=${e}>
                        <img
                        src="${r}"
                        class="gallery-image"
                        alt="${o}"
                        />
                    </a>
                    <div class="description">
                        <div class="field">
                        <span class="label"><b>Likes</b></span>
                        <span class="value">${s}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Views</b></span>
                        <span class="value">${n}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Comments</b></span>
                        <span class="value">${u}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Downloads</b></span>
                        <span class="value">${d}</span>
                        </div>
                    </div>
                    
                </li>`).join("");c.insertAdjacentHTML("beforeend",t),h.refresh()}const h=new f(".gallery a",{captionsData:"alt"}),b=document.querySelector(".form");document.querySelector(".loader");const v=document.querySelector(".btn"),c=document.querySelector(".gallery");let i,l;b.addEventListener("submit",async a=>{try{a.preventDefault(),c.innerHTML="";const t=a.target.elements.query.value;l=t,i=1;const r=await p(l,i);g(r),c.textContent==""?y.show({transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",position:"topRight",messageColor:"white",backgroundColor:"rgba(255, 110, 110, 1)",message:"Sorry, there are no images matching your search query. Please try again!"}):t===""&&alert("Fill out the search input!")}catch(t){console.log(t)}});v.addEventListener("click",async a=>{try{a.preventDefault(),i+=1;const t=await p(l,i);g(t);const e=document.querySelector(".gallery-image").getBoundingClientRect().height;window.scrollBy({top:2*e,behavior:"smooth"})}catch(t){console.log(t)}});
//# sourceMappingURL=commonHelpers.js.map
