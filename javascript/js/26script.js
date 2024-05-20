// const mySlider = new Splide('.splide',{
//     perPage:3,
//     arrows:false,
//     pagination:false,
//     mySlider.mount();
// })
document.addEventListener( 'DOMContentLoaded', function() {
    const splide = new Splide( '.splide', {
      perPage:2,
      arrows:false,
      pagination:false,
      gap: "110px",
    });
    splide.mount();
  } );
