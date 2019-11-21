$(document).ready(function () {
  const photoData = [
    {
      name: "Purrsloud",
      slide: "1",
      photoUrl: "../../img/projects/Coldstream/Coldstream0.jpg"
    },
    {
      name: "Barksalot",
      slide: "2",
      photoUrl: "../../img/projects/Coldstream/Coldstream1.jpg"
    },
    {
      name: "Meowsalot",
      slide: "3",
      photoUrl: "../../img/projects/Coldstream/Coldstream2.jpg"
    },
    {
      name: "Meowsalot",
      slide: "4",
      photoUrl: "../../img/projects/Coldstream/Coldstream3.jpg"
    },
    {
      name: "Meowsalot",
      slide: "5",
      photoUrl: "../../img/projects/Coldstream/Coldstream4.jpg"
    },
    {
      name: "Meowsalot",
      slide: "6",
      photoUrl: "../../img/projects/Coldstream/Coldstream5.jpg"
    },
    {
      name: "Meowsalot",
      slide: "7",
      photoUrl: "../../img/projects/Coldstream/Coldstream6.jpg"
    },
    {
      name: "Meowsalot",
      slide: "8",
      photoUrl: "../../img/projects/Coldstream/Coldstream7.jpg"
    },
    {
      name: "Meowsalot",
      slide: "9",
      photoUrl: "../../img/projects/Coldstream/Coldstream8.jpg"
    },
    {
      name: "Meowsalot",
      slide: "10",
      photoUrl: "../../img/projects/Coldstream/Coldstream9.jpg"
    },
    {
      name: "Meowsalot",
      slide: "11",
      photoUrl: "../../img/projects/Coldstream/Coldstream10.jpg"
    },
    {
      name: "Meowsalot",
      slide: "12",
      photoUrl: "../../img/projects/Coldstream/Coldstream11.jpg"
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
