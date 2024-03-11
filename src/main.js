import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

import getImages from './js/pixabay-api';
import galleryMarkUp from './js/render-functions';

export const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt' });

const searchform = document.querySelector(".form");
const loader = document.querySelector(".loader");
const moreBtn = document.querySelector(".btn");
export const gallery = document.querySelector(".gallery");

let currentPage;
let searchQuery;

// const totalPages = Math.round(images.totalHits / 15);

searchform.addEventListener('submit', async (event) => {
    try {
        event.preventDefault(); 
        loader.classList.remove("isInvisible");
        gallery.innerHTML = "";
        const query = (event.target.elements.query.value).split(" ");
        searchQuery = query.join("+");
        currentPage = 1;

        if (searchQuery == "") {
            alert("Fill out the search input!")
        }
        const images = await getImages(searchQuery, currentPage);
        if (searchQuery != "") {
    
            galleryMarkUp(images.hits);
            moreBtn.classList.remove("isInvisible");
            loader.classList.add("isInvisible");

        }
        if (images.hits == "") {
            moreBtn.classList.add("isInvisible");
            iziToast.show({
                transitionIn: 'fadeInLeft',
                transitionOut: 'fadeOutRight',
                position: 'topRight',
                messageColor: 'white',
                backgroundColor: 'rgba(255, 110, 110, 1)',
                message: 'Sorry, there are no images matching your search query. Please try again!'
            })
        }
        if (currentPage >= Math.round(images.totalHits / 15)) {
            moreBtn.disabled = true;
            moreBtn.classList.add("isInvisible");
            return iziToast.error({
                position: "topRight",
                message: "We're sorry, there are no more posts to load"
            });
        } 

    }  catch (error) {
        console.log(error);
  }
});



moreBtn.addEventListener('click', async (event) => {
    try { 
        loader.classList.remove("isInvisible");
        event.preventDefault();
        currentPage += 1;
        
        const images = await getImages(searchQuery, currentPage);
        loader.classList.add("isInvisible");
        galleryMarkUp(images.hits);
        if (images.hits.length<15) { 
            moreBtn.classList.add("isInvisible");
            return iziToast.error({
                position: "topRight",
                message: "We're sorry, there are no more posts to load"
            });
        }
        
        const img = document.querySelector(".gallery-image");
        const imgSize = img.getBoundingClientRect();
        const cardHeight = imgSize.height;
        
        window.scrollBy({
            top: 2 * cardHeight,
            behavior: "smooth",
        });
    }catch (error) {
        console.log(error);
  }
});


