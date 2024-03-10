import {gallery, lightbox}  from "../main";


export default function galleryMarkUp(images) {
    const markup= images
        .map(
            ({ webformatURL, tags, largeImageURL, likes, views, comments, downloads }) => {
                return`<li class = "gallery-item">
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
}
