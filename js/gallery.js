function activateGallery() {
    //alert("Hello from the gallery file!");
    let thumbnails = document.querySelector("#gallery-thumbs").querySelectorAll("img");

    //let mainImage = document.querySelector("#gallery-photo").querySelector("img");
    //let mainImage = document.querySelector("#gallery-photo img");
    let mainImage = document.querySelector("#gallery-photo > img");

    //update image info
    let galleryInfo = document.querySelector("#gallery-info");
    let title       = galleryInfo.querySelector(".title");
    let description = galleryInfo.querySelector(".description");

    thumbnails.forEach(function(thumbnail){
        thumbnail.addEventListener("click", function(){
            //code to set clicked image as main image
            let newImageSrc = thumbnail.dataset.largeVersion;
            let newImageAlt = thumbnail.alt;
            mainImage.setAttribute("src", newImageSrc);
            mainImage.setAttribute("alt", newImageAlt);

            //change which image is current.
            currentClass = "current";
            document.querySelector(".current").classList.remove(currentClass);
            thumbnail.parentNode.classList.add(currentClass);

            //update image info
            title.innerHTML = thumbnail.dataset.title;
            description.innerHTML = thumbnail.dataset.description;
        });
    });
}
