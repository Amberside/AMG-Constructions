$(document).ready(function () {
  const photoData = [
    {
      name: "Purrsloud",
      slide: "1",
      photoUrl: "../../img/projects/Range-Road/Range-Road0.jpg"
    },
    {
      name: "Barksalot",
      slide: "2",
      photoUrl: "../../img/projects/Range-Road/Range-Road1.jpg"
    },
    {
      name: "Meowsalot",
      slide: "3",
      photoUrl: "../../img/projects/Range-Road/Range-Road2.jpg"
    },
    {
      name: "Meowsalot",
      slide: "4",
      photoUrl: "../../img/projects/Range-Road/Range-Road3.jpg"
    },
    {
      name: "Meowsalot",
      slide: "5",
      photoUrl: "../../img/projects/Range-Road/Range-Road4.jpg"
    },
    {
      name: "Meowsalot",
      slide: "6",
      photoUrl: "../../img/projects/Range-Road/Range-Road5.jpg"
    },
    {
      name: "Meowsalot",
      slide: "7",
      photoUrl: "../../img/projects/Range-Road/Range-Road6.jpg"
    },
    {
      name: "Meowsalot",
      slide: "8",
      photoUrl: "../../img/projects/Range-Road/Range-Road7.jpg"
    },
    {
      name: "Meowsalot",
      slide: "9",
      photoUrl: "../../img/projects/Range-Road/Range-Road8.jpg"
    },
    {
      name: "Meowsalot",
      slide: "10",
      photoUrl: "../../img/projects/Range-Road/Range-Road9.jpg"
    },
    {
      name: "Meowsalot",
      slide: "11",
      photoUrl: "../../img/projects/Range-Road/Range-Road10.jpg"
    },
    {
      name: "Meowsalot",
      slide: "12",
      photoUrl: "../../img/projects/Range-Road/Range-Road11.jpg"
    },
    {
      name: "Meowsalot",
      slide: "13",
      photoUrl: "../../img/projects/Range-Road/Range-Road12.jpg"
    },
    {
      name: "Meowsalot",
      slide: "14",
      photoUrl: "../../img/projects/Range-Road/Range-Road13.jpg"
    },
    {
      name: "Meowsalot",
      slide: "15",
      photoUrl: "../../img/projects/Range-Road/Range-Road14.jpg"
    },
    {
      name: "Meowsalot",
      slide: "16",
      photoUrl: "../../img/projects/Range-Road/Range-Road15.jpg"
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
