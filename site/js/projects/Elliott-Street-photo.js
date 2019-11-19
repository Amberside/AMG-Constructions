$(document).ready(function () {
  const photoData = [
    {
      name: "Purrsloud",
      slide: "1",
      photoUrl: "../../img/projects/Elliott-Street/Elliott0.jpg"
    },
    {
      name: "Barksalot",
      slide: "2",
      photoUrl: "../../img/projects/Elliott-Street/Elliott1.jpg"
    },
    {
      name: "Meowsalot",
      slide: "3",
      photoUrl: "../../img/projects/Elliott-Street/Elliott2.jpg"
    },
    {
      name: "Meowsalot",
      slide: "4",
      photoUrl: "../../img/projects/Elliott-Street/Elliott3.jpg"
    },
    {
      name: "Meowsalot",
      slide: "5",
      photoUrl: "../../img/projects/Elliott-Street/Elliott4.jpg"
    },
    {
      name: "Meowsalot",
      slide: "6",
      photoUrl: "../../img/projects/Elliott-Street/Elliott5.jpg"
    },
    {
      name: "Meowsalot",
      slide: "7",
      photoUrl: "../../img/projects/Elliott-Street/Elliott6.jpg"
    },
    {
      name: "Meowsalot",
      slide: "8",
      photoUrl: "../../img/projects/Elliott-Street/Elliott7.jpg"
    },
    {
      name: "Meowsalot",
      slide: "9",
      photoUrl: "../../img/projects/Elliott-Street/Elliott8.jpg"
    },
    {
      name: "Meowsalot",
      slide: "10",
      photoUrl: "../../img/projects/Elliott-Street/Elliott9.jpg"
    },
    {
      name: "Meowsalot",
      slide: "11",
      photoUrl: "../../img/projects/Elliott-Street/Elliott10.jpg"
    },
    {
      name: "Meowsalot",
      slide: "12",
      photoUrl: "../../img/projects/Elliott-Street/Elliott11.jpg"
    },
    {
      name: "Meowsalot",
      slide: "13",
      photoUrl: "../../img/projects/Elliott-Street/Elliott12.jpg"
    },
    {
      name: "Meowsalot",
      slide: "14",
      photoUrl: "../../img/projects/Elliott-Street/Elliott13.jpg"
    },
    {
      name: "Meowsalot",
      slide: "15",
      photoUrl: "../../img/projects/Elliott-Street/Elliott14.jpg"
    },
    {
      name: "Meowsalot",
      slide: "16",
      photoUrl: "../../img/projects/Elliott-Street/Elliott15.jpg"
    },
    {
      name: "Meowsalot",
      slide: "17",
      photoUrl: "../../img/projects/Elliott-Street/Elliott16.jpg"
    },
    {
      name: "Meowsalot",
      slide: "18",
      photoUrl: "../../img/projects/Elliott-Street/Elliott17.jpg"
    },
    {
      name: "Meowsalot",
      slide: "19",
      photoUrl: "../../img/projects/Elliott-Street/Elliott18.jpg"
    },
    {
      name: "Meowsalot",
      slide: "20",
      photoUrl: "../../img/projects/Elliott-Street/Elliott19.jpg"
    },

  ];


  // reading the json data to the page (please dont fix <div) it works as is 
  function photoTemplate(photo) {
    return `
    
      
    <div class="row">
      <div class="column">
        <img src="${photo.photoUrl}" style="width:100%" onclick="openModal();currentSlide(${photo.slide})" class="hover-shadow cursor" alt="${photo.name}" >
      </div
    </div

`;
  }
  //model window for images (pleade dont fix the </div) it work as is
  function photoModel(photo) {
    return `
    <div id="myModal" class="modal">
    <span class="close cursor" onclick="closeModal()">&times;</span>
    <div class="modal-content">
        <a class="prev" onclick="plusSlides(-1) ">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
        <div class="mySlides">
                    <div class="numbertext">${photo.slide} / ${count = Object.keys(photoData).length}</div>
                    <img src="${photo.photoUrl}" style="width:100%">
                </div>
    </div
</div
    `;
  }

  document.getElementById("photo").innerHTML = `

    ${photoData.map(photoTemplate).join("")}

`;
  document.getElementById("photomodel").innerHTML = `

    ${photoData.map(photoModel).join("")}

`;

})
