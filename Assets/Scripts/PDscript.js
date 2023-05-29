let products = [
  {
    id: 1,
    Image: "",
    name: `Air Pods Max`,
    discription: ``,
    price: `1000`,
  },

  {
    id: 2,
    Image: "",
    name: ``,
    discription: ``,
    price: ``,
  },

  {
    id: 3,
    Image: "",
    name: ``,
    discription: ``,
    price: ``,
  },

  {
    id: 4,
    Image: "",
    name: ``,
    discription: ``,
    price: ``,
  },

  {
    id: 5,
    Image: "",
    name: ``,
    discription: ``,
    price: ``,
  },
  {
    id: 6,
    Image: "",
    name: ``,
    discription: ``,
    price: ``,
  },
  {
    id: 7,
    Image: "",
    name: ``,
    discription: ``,
    price: ``,
  },
  {
    id: 8,
    Image: "",
    name: ``,
    discription: ``,
    price: ``,
  },
  

];

let productsGroup = document.querySelector('.products');
products.forEach((data)=>{
    productsGroup.innerHTML+= 
`<div class="card border-primary m-3 mx-4 mt-5 ms-5" style="width:300px ">
    <img class="card-img-top" src="/Assets/Images/ervo-rocks-Zam8TvEgN5o-unsplash.jpg" alt="Card image">
    <div class="card-body">
      <h4 class="card-title">Air Pods Max</h4>
      <p class="card-text">This is the air pods Max</p>
      <p class="card-price"></p>
      <a href="#" class="btn btn-primary w-100">Add To Cart</a>
    </div>`
})
 
