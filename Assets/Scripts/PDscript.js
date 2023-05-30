let products = [
  {
    id: 1,
    Image: "https://i.postimg.cc/Y2LSPgb2/ervo-rocks-Zam8-Tv-Eg-N5o-unsplash1.jpg",
    name: `Air Pods Max`,
    discription: `AirPods Max are Apple's premium over-ear headphones, combining high-fidelity audio with advanced features such as active noise cancellation, spatial audio, and seamless integration with Apple devices, offering a luxurious and immersive listening experience.`,
    price: `$1000`,
  },

  {
    id: 2,
    Image: "https://i.postimg.cc/nrqph4Pv/jason-leung-x-R4-JHzr69-Og-unsplash1.jpg",
    name: `Beats by Dr Dre`,
    discription: `Beats by Dr. Dre are renowned headphones and audio products known for their stylish design, powerful sound quality, and deep bass. With their signature Beats sound, they offer a dynamic and immersive listening experience for music enthusiasts and professionals alike.`,
    price: `$600`,
  },

  {
    id: 3,
    Image: "https://i.postimg.cc/q7QrtBw5/dmitry-chernyshov-m-P7a-PSUm7a-E-unsplash1.jpg",
    name: `MacBook Pro`,
    discription: `The MacBook Pro is Apple's flagship laptop, known for its powerful performance, sleek design, and cutting-edge features. With its high-resolution Retina display, advanced processors, and innovative Touch Bar, it offers professionals and creative individuals a versatile and efficient computing experience.`,
    price: `$1200`,
  },

  {
    id: 4,
    Image: "https://i.postimg.cc/d1L0wTFB/jan-vlacuha-7c-SLfi5m-WOA-unsplash1.jpg",
    name: `MacBook Air`,
    discription: `The MacBook Air is Apple's ultra-portable laptop, renowned for its thin and lightweight design, making it ideal for users on the go. With a long battery life, brilliant Retina display, and powerful M1 chip, it offers a seamless and efficient computing experience for everyday tasks and productivity.`,
    price: `$700`,
  },

  {
    id: 5,
    Image: "https://i.postimg.cc/ZK0W42bm/v-a-tao-Oxvl-DO8-Rw-Kg-unsplash.jpg",
    name: `iPhone 11`,
    discription: `The iPhone 11 is a powerful and feature-packed smartphone from Apple, featuring a dual-camera system, A13 Bionic chip, and an immersive Liquid Retina display. With its impressive performance, advanced photography capabilities, and all-day battery life, it delivers a premium iPhone experience at a more affordable price point.`,
    price: `$500`,
  },
  {
    id: 6,
    Image: "https://i.postimg.cc/Kz6mbqJG/thom-bradley-1-NZcjdo2h-KQ-unsplash1.jpg",
    name: `iPhone 11 Pro`,
    discription: `The iPhone 11 Pro is Apple's top-of-the-line smartphone, offering a stunning Super Retina XDR display, a triple-camera system for exceptional photography and videography, and the powerful A13 Bionic chip for seamless performance. With its premium design, advanced features, and enhanced battery life, the iPhone 11 Pro is a flagship device that caters to users seeking the ultimate iPhone experience.`,
    price: `$800`,
  },
  {
    id: 7,
    Image: "https://i.postimg.cc/7LP6tWQj/klim-musalimov-8xc-AHUk4w-Uk-unsplash1.jpg",
    name: `Airpods`,
    discription: `AirPods are Apple's popular wireless earbuds, offering a seamless and convenient audio experience. With their effortless setup, automatic connection, and intuitive touch controls, they provide clear sound quality and easy access to Siri for hands-free assistance on the go.`,
    price: `$300`,
  },
  {
    id: 8,
    Image: "https://i.postimg.cc/d3CtTPLZ/reza-shahmoradi-v-ZJl-Ooy-Otaw-unsplash1.jpg",
    name: `Beats Fit Pro`,
    discription: `Beats Fit Pro are wireless earphones designed for active individuals, offering a secure and comfortable fit with adjustable ear hooks and multiple ear tip options. With their water and sweat resistance, powerful sound quality, and convenient controls, they are the perfect companion for workouts and active lifestyles.`,
    price: `$250`,
  },
];

let productsGroup = document.querySelector(".products");
products.forEach((data) => {
  productsGroup.innerHTML += `<div class="card border-primary m-3 mx-4 mt-5 ms-5" style="width:300px ">
    <img class="card-img-top" src="${data.Image}" alt="Card image">
    <div class="card-body">
      <h4 class="card-title">${data.name}</h4>
      <p class="card-text">${data.discription}</p>
      <p class="card-price">${data.price}</p>
      <a href="#" class="btn btn-primary w-100">Add To Cart</a>
    </div>`;
});
