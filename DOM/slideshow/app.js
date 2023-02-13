const previousButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const pic = document.querySelector('.image');
const imageName = document.querySelector('.name');

let imageIndex = 0;
const images = [{
    "url":"https://cdn.vox-cdn.com/thumbor/wfdno1ZRwlsTsvWs_GPLH7FhLws=/0x0:1920x1080/1400x933/filters:focal(744x161:1050x467):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/64773889/ply_black_widow_avengers.0.jpg",
    "image_title":"Black Widow"
},{
   "url":"https://images.squarespace-cdn.com/content/v1/59d7e2c7e45a7c0ce235bb55/1552056695609-2KJMOHURUOTUGJCJUQWQ/Captain-Marvel-Film-Review.jpg",
    "image_title":"Caption Marvel" 
},{
    "url":"https://cdn.murphysmultiverse.com/wp-content/uploads/2022/12/scarletwitchdead.jpg",
    "image_title":"Scarlet Witch"
},{
    "url":"https://media.wired.com/photos/59270140f3e2356fd800b27f/3:2/w_1600%2Cc_limit/CAHP.jpg",
    "image_title":"Caption America"
},{
    "url":"https://assets.vogue.in/photos/5d81e9680757f000087797c0/1:1/w_909,h_909,c_limit/f.jpg",
    "image_title":"Iron Man"
},{
    "url":"https://cdn.marvel.com/content/1x/006hbb_ons_mas_mob_01_0.jpg",
    "image_title":"Hulk"
}]

const loadImage =(image)=>{
    pic.src = image.url;
    imageName.innerText = image.image_title;
}

loadImage(images[imageIndex])

const previousImage =()=>{
    imageIndex--;
    if(imageIndex < 0){
        imageIndex = images.length - 1;
    }
    loadImage(images[imageIndex])
}

const nextImage =()=>{
    imageIndex++;
    if(imageIndex > images.length -1){
        imageIndex = 0;
    }
    loadImage(images[imageIndex])
}


previousButton.addEventListener('click',previousImage)
nextButton.addEventListener('click', nextImage)