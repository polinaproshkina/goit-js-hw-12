import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt' });

const form = document.querySelector('form');
const loader = document.querySelector('.loader');
const fetchPostsBtn = document.querySelector(".btn");
const gallery = document.querySelector(".gallery");
const formBtn = document.querySelector(".button");


let page = 1;
let per_page = 15;

formBtn.addEventListener("click", async () => {
    event.preventDefault();
    if (form.input.value !== "") {
        loader.classList.remove("isInvisible");
        galleryMarkUp();
        form.reset();
        gallery.innerHTML = "";
    } else if (form.input.value === "") {
        loader.classList.add("isInvisible");
        alert("Fill out the search input!");
    };

})

async function galleryMarkUp() {
    try {
        const posts = await fetchPosts();
        if (posts.length === 0) {
            iziToast.show({
                transitionIn: 'fadeInLeft',
                transitionOut: 'fadeOutRight',
                position: 'topRight',
                messageColor: 'white',
                backgroundColor: 'rgba(255, 110, 110, 1)',
                message: 'Sorry, there are no images matching your search query. Please try again!'
            })
        }
        renderPosts(posts);
        page ++;
        if (posts.length != 0) {
            if (page > 1) {
                fetchPostsBtn.classList.remove("isInvisible");
                fetchPostsBtn.addEventListener("click", (event) => {
                    page++;
                    renderPosts(posts);
                    const img = document.querySelector(".gallery-image");
                    const gp = img.getBoundingClientRect();
                    const cardHeight = gp.height;
                    console.log(gp);
                    window.scrollBy({
                    top: 2*cardHeight,
                    behavior: "smooth",
                    });
                    


                })
        }
       }
  } catch (error) {
    console.log(error);
  }
}

function readForm() {
    const inputValue = form.input.value;
    return inputValue;
};

async function fetchPosts() {
   const  key = '42692774-4141696abcbee76e8cc433895';
    const BASE_URL = 'https://pixabay.com/api/';
    const q = readForm();
    const image_type = 'photo';
    const orientation = 'horizontal';
    const safesearch = 'true';

  const response = await axios.get(`${BASE_URL}?key=${key}&q=${q}&page${page}&per_page=${per_page}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}`);
    return response.data.hits;
}

function renderPosts(posts) {
  const markup = posts.map(({ webformatURL, tags, largeImageURL, likes, views, comments, downloads}) => {
      return `<li class = "gallery-item">
                    <a class="gallery-link" href=${largeImageURL}> 
                        <img
                        src="${webformatURL}" 
                        class="gallery-image"
                        alt="${tags}"
                        />
                    </a>
                    <div class="description">
                        <div class="field">
                        <span class="label"><b>Likes</b></span>
                        <span class="value">${likes}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Views</b></span>
                        <span class="value">${views}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Comments</b></span>
                        <span class="value">${comments}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Downloads</b></span>
                        <span class="value">${downloads}</span>
                        </div>
                    </div>
                    
                </li>`
  }).join("");
    gallery.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
    loader.classList.add("isInvisible");
   
}

