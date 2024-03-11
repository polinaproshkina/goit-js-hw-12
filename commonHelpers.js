import{a as h,S as b,i as u}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function m(i,s){const r="42692774-4141696abcbee76e8cc433895",a="https://pixabay.com/api/",e="photo",t="horizontal",o="true";return(await h.get(`${a}?key=${r}&q=${i}&page=${s}&per_page=15&image_type=${e}&orientation=${t}&safesearch=${o}`)).data}function f(i){const s=i.map(({webformatURL:r,tags:a,largeImageURL:e,likes:t,views:o,comments:p,downloads:g})=>`<li class = "gallery-item">
                    <a class="gallery-link" href=${e}>
                        <img
                        src="${r}"
                        class="gallery-image"
                        alt="${a}"
                        />
                    </a>
                    <div class="description">
                        <div class="field">
                        <span class="label"><b>Likes</b></span>
                        <span class="value">${t}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Views</b></span>
                        <span class="value">${o}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Comments</b></span>
                        <span class="value">${p}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Downloads</b></span>
                        <span class="value">${g}</span>
                        </div>
                    </div>
                    
                </li>`).join("");y.insertAdjacentHTML("beforeend",s),v.refresh()}const v=new b(".gallery a",{captionsData:"alt"}),L=document.querySelector(".form"),d=document.querySelector(".loader"),n=document.querySelector(".btn"),y=document.querySelector(".gallery");let c,l;L.addEventListener("submit",async i=>{try{i.preventDefault(),d.classList.remove("isInvisible"),y.innerHTML="",l=i.target.elements.query.value.split(" ").join("+"),c=1,l==""&&alert("Fill out the search input!");const r=await m(l,c);if(l!=""&&(f(r.hits),n.classList.remove("isInvisible"),d.classList.add("isInvisible")),r.hits==""&&(n.classList.add("isInvisible"),u.show({transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",position:"topRight",messageColor:"white",backgroundColor:"rgba(255, 110, 110, 1)",message:"Sorry, there are no images matching your search query. Please try again!"})),c>=Math.round(r.totalHits/15))return n.disabled=!0,n.classList.add("isInvisible"),u.error({position:"topRight",message:"We're sorry, there are no more posts to load"})}catch(s){console.log(s)}});n.addEventListener("click",async i=>{try{d.classList.remove("isInvisible"),i.preventDefault(),c+=1;const s=await m(l,c);if(d.classList.add("isInvisible"),f(s.hits),s.hits.length<15)return n.classList.add("isInvisible"),u.error({position:"topRight",message:"We're sorry, there are no more posts to load"});const e=document.querySelector(".gallery-image").getBoundingClientRect().height;window.scrollBy({top:2*e,behavior:"smooth"})}catch(s){console.log(s)}});
//# sourceMappingURL=commonHelpers.js.map
