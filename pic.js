
const image = document.querySelector("#image");

image.addEventListener('mouseover' , function(){
    image.src=  'https://img.freepik.com/premium-photo/imran-khan-birthday-jail-high-resolution-full-hd-image_951641-41.jpg';
 
})

image.addEventListener('mouseout' , function(){
    image.src = 'https://i.pinimg.com/736x/0f/81/20/0f8120b2e00c0ef28b19ce8c7c550292.jpg';
})