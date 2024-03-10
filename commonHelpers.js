import{a as h,S as b,i as g}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();async function m(i,t){const a="42692774-4141696abcbee76e8cc433895",r="https://pixabay.com/api/",e="photo",s="horizontal",o="true";return(await h.get(`${r}?key=${a}&q=${i}&page=${t}&per_page=15&image_type=${e}&orientation=${s}&safesearch=${o}`)).data}function f(i){const t=i.map(({webformatURL:a,tags:r,largeImageURL:e,likes:s,views:o,comments:u,downloads:p})=>`<li class = "gallery-item">
                    <a class="gallery-link" href=${e}>
                        <img
                        src="${a}"
                        class="gallery-image"
                        alt="${r}"
                        />
                    </a>
                    <div class="description">
                        <div class="field">
                        <span class="label"><b>Likes</b></span>
                        <span class="value">${s}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Views</b></span>
                        <span class="value">${o}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Comments</b></span>
                        <span class="value">${u}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Downloads</b></span>
                        <span class="value">${p}</span>
                        </div>
                    </div>
                    
                </li>`).join("");y.insertAdjacentHTML("beforeend",t),v.refresh()}const v=new b(".gallery a",{captionsData:"alt"}),L=document.querySelector(".form"),d=document.querySelector(".loader"),l=document.querySelector(".btn"),y=document.querySelector(".gallery");let c,n;L.addEventListener("submit",async i=>{try{d.classList.remove("isInvisible"),i.preventDefault(),y.innerHTML="",n=i.target.elements.query.value.split(" ").join("+"),c=1,n==""&&alert("Fill out the search input!");const a=await m(n,c);n!=""&&(f(a.hits),l.classList.remove("isInvisible"),d.classList.add("isInvisible")),a.hits==""&&(l.classList.add("isInvisible"),g.show({transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",position:"topRight",messageColor:"white",backgroundColor:"rgba(255, 110, 110, 1)",message:"Sorry, there are no images matching your search query. Please try again!"}))}catch(t){console.log(t)}});l.addEventListener("click",async i=>{try{d.classList.remove("isInvisible"),i.preventDefault(),c+=1;const t=await m(n,c);f(t.hits),d.classList.add("isInvisible");const a=Math.round(t.totalHits/15);if(c>a)return l.disabled=!0,l.classList.add("isInvisible"),g.error({position:"topRight",message:"We're sorry, there are no more posts to load"});const s=document.querySelector(".gallery-image").getBoundingClientRect().height;window.scrollBy({top:2*s,behavior:"smooth"})}catch(t){console.log(t)}});
//# sourceMappingURL=commonHelpers.js.map
