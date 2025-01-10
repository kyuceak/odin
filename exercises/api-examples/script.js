const img = document.querySelector("img");
const btn_gen = document.querySelector("#btn-gen");
const search = document.querySelector("#btn-search");

// const generateGif = (gif) => {
//   fetch(
//     `https://api.giphy.com/v1/gifs/translate?api_key=P9Hy1xJj2D3IcSFilq5BsDxdgLWL5CHS&s=${gif}`,
//     {
//       mode: "cors",
//     }
//   )
//     .then(function (response) {
//       return response.json();
//     })
//     .then((response) => {
//       img.src = response.data.images.original.url;
//     });
// };


async function getCats(gif) {
    const response = await fetch( `https://api.giphy.com/v1/gifs/translate?api_key=P9Hy1xJj2D3IcSFilq5BsDxdgLWL5CHS&s=${gif}`,
        {
          mode: "cors",
        });
    
    const gifData = await response.json();

     img.src = gifData.data.images.original.url;

}

btn_gen.addEventListener("click", () => {
    getCats("cat");
});

search.addEventListener("click", () => {

    const search_input = document.getElementsByName("search")[0];

    getCats(search_input.value);



});