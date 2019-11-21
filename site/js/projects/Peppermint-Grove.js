$(document).ready(function () {
  const photoData = [
    {
      name: "Purrsloud",
      slide: "1",
      photoUrl: "../../img/projects/Peppermint-Grove/Peppermint-Grove0.jpg"
    },
    {
      name: "Barksalot",
      slide: "2",
      photoUrl: "../../img/projects/Peppermint-Grove/Peppermint-Grove1.jpg"
    },
    {
      name: "Meowsalot",
      slide: "3",
      photoUrl: "../../img/projects/Peppermint-Grove/Peppermint-Grove2.jpg"
    },
    {
      name: "Meowsalot",
      slide: "4",
      photoUrl: "../../img/projects/Peppermint-Grove/Peppermint-Grove3.jpg"
    },
    {
      name: "Meowsalot",
      slide: "5",
      photoUrl: "../../img/projects/Peppermint-Grove/Peppermint-Grove4.jpg"
    },
    {
      name: "Meowsalot",
      slide: "6",
      photoUrl: "../../img/projects/Peppermint-Grove/Peppermint-Grove5.jpg"
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
