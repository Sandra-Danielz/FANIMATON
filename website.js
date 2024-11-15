
// code for responsive navigation system
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");  
}



//navigation bar auto-location system
// Get all the links in the navigation
const links = document.querySelectorAll('nav a');

// Loop through each link and add click event listener
links.forEach(link => {
  link.addEventListener('click', e => {
    // Prevent default link behavior
    e.preventDefault();

    // Get the target section ID from the href attribute
    const targetId = link.getAttribute('href').substring(1);

    // Find the target section element
    const targetSection = document.getElementById(targetId);

    // Scroll to the target section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});




//home page image slider using jquery

$(document).ready(function(){
  var currentIndex = 0;
  var images = $('.homepage div');
  var totalImages = images.length;

  // Show the first image
  $(images[currentIndex]).addClass('active');

  // Start the slideshow
  var interval = setInterval(function(){
      // Hide the current image
      $(images[currentIndex]).removeClass('active');
      // Move to the next image
      currentIndex = (currentIndex + 1) % totalImages;
      // Show the next image
      $(images[currentIndex]).addClass('active');
  }, 3000); // Change slide every 3 seconds


});





// the code for the preview system of standing fan

let previewContainerStanding = document.querySelector('.standing-preview');
let previewBoxStanding = previewContainerStanding.querySelectorAll('.standing-preview-box');

document.querySelectorAll('.standing-container .standing-fan').forEach(product =>{
  product.onclick = () =>{
    previewContainerStanding.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBoxStanding.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBoxStanding.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    previewContainerStanding.style.display = 'none';
  };
});






// the code for the preview system of ceiling fan

let previewContainerCeiling = document.querySelector('.ceiling-preview');
let previewBoxCeiling = previewContainerCeiling.querySelectorAll('.ceiling-preview-box');

document.querySelectorAll('.ceiling-container .ceiling-fan').forEach(product =>{
  product.onclick = () =>{
    previewContainerCeiling.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBoxCeiling.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBoxCeiling.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    previewContainerCeiling.style.display = 'none';
  };
});





// the code for the preview system of table-top fans fan


let previewContainerTable = document.querySelector('.table-preview');
let previewBoxTable = previewContainerTable.querySelectorAll('.table-preview-box');

document.querySelectorAll('.table-container .table-fan').forEach(product =>{
  product.onclick = () =>{
    previewContainerTable.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBoxTable.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBoxTable.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    previewContainerTable.style.display = 'none';
  };
});


















