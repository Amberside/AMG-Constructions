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
    {
      name: "Meowsalot",
      slide: "7",
      photoUrl: "../../img/projects/Peppermint-Grove/Peppermint-Grove6.jpg"
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
