$(document).ready(function () {
  const photoData = [
    {
      name: "Purrsloud",
      slide: "1",
      photoUrl: "../../img/projects/Karnak-Road-Ashburton/Karnak-RD0.jpg"
    },
    {
      name: "Barksalot",
      slide: "2",
      photoUrl: "../../img/projects/Karnak-Road-Ashburton/Karnak-RD1.jpg"
    },
    {
      name: "Meowsalot",
      slide: "3",
      photoUrl: "../../img/projects/Karnak-Road-Ashburton/Karnak-RD2.jpg"
    },
    {
      name: "Meowsalot",
      slide: "4",
      photoUrl: "../../img/projects/Karnak-Road-Ashburton/Karnak-RD3.jpg"
    },
    {
      name: "Meowsalot",
      slide: "5",
      photoUrl: "../../img/projects/Karnak-Road-Ashburton/Karnak-RD4.jpg"
    },
    {
      name: "Meowsalot",
      slide: "6",
      photoUrl: "../../img/projects/Karnak-Road-Ashburton/Karnak-RD5.jpg"
    },
    {
      name: "Meowsalot",
      slide: "7",
      photoUrl: "../../img/projects/Karnak-Road-Ashburton/Karnak-RD6.jpg"
    },
    {
      name: "Meowsalot",
      slide: "8",
      photoUrl: "../../img/projects/Karnak-Road-Ashburton/Karnak-RD7.jpg"
    },
    {
      name: "Meowsalot",
      slide: "9",
      photoUrl: "../../img/projects/Karnak-Road-Ashburton/Karnak-RD8.jpg"
    },

    {
      name: "Meowsalot",
      slide: "11",
      photoUrl: "../../img/projects/Karnak-Road-Ashburton/Karnak-RD10.jpg"
    },
    {
      name: "Meowsalot",
      slide: "12",
      photoUrl: "../../img/projects/Karnak-Road-Ashburton/Karnak-RD11.jpg"
    },
    {
      name: "Meowsalot",
      slide: "15",
      photoUrl: "../../img/projects/Karnak-Road-Ashburton/Karnak-RD14.jpg"
    },
    {
      name: "Meowsalot",
      slide: "16",
      photoUrl: "../../img/projects/Karnak-Road-Ashburton/Karnak-RD15.jpg"
    },
  ];


  // reading the json data to the page
  function photoTemplate(photo) {
    return `
      <div class="column pl-3">
        <img src="${photo.photoUrl}" style="width:100%" onclick="openModal();currentSlide(${photo.slide})" class="hover-shadow cursor" alt="${photo.name}" >
      </div>


`;
  }
  //model window for images 
  function photoModel() {
    return `
    
    ${photoData.map(photo =>
      `
          <div class="mySlides">
                      <div class="numbertext">${photo.slide} / ${count = Object.keys(photoData).length}</div>
                      <img src="${photo.photoUrl}" style="width:100% ">
                  </div>
      `
    ).join('')}`
  }

  document.getElementById("photo").innerHTML = `

    ${photoData.map(photoTemplate).join("")}

`;
  document.getElementById("photomodel").innerHTML = `

    ${photoData.map(photoModel).join("")}

`;

})
