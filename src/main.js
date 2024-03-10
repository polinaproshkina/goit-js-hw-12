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

searchform.addEventListener('submit', async (event) => {
    try {
        event.preventDefault();
        gallery.innerHTML = "";
        const query = event.target.elements.query.value;
        searchQuery = query;
        currentPage = 1;
    
        const images = await getImages(searchQuery, currentPage);
        galleryMarkUp(images);
        
        if (gallery.textContent == "") {
            iziToast.show({
                transitionIn: 'fadeInLeft',
                transitionOut: 'fadeOutRight',
                position: 'topRight',
                messageColor: 'white',
                backgroundColor: 'rgba(255, 110, 110, 1)',
                message: 'Sorry, there are no images matching your search query. Please try again!'
            })
        } else if (query === "") {
            alert("Fill out the search input!")
        }
    }  catch (error) {
        console.log(error);
  }
});


moreBtn.addEventListener('click', async (event) => {
    try { 
    event.preventDefault();
    currentPage += 1;

    const images = await getImages(searchQuery, currentPage);
    galleryMarkUp(images);
    
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


