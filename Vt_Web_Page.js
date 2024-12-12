// Sticky Navigation
const sectionHero = document.querySelector(".hero-section")
const header = document.querySelector(".header")
const obs  = new IntersectionObserver(function(entries){
  const ent = entries[0]
  if(ent.isIntersecting===false){
    header.classList.add("sticky")
  } else{
  header.classList.remove("sticky")
  }
},
{
  root:null,
  threshold:0,
  rootMargin:"-300px"
})

obs.observe(sectionHero)
// Hamburger menu
const humberger = document.querySelector(".hamburger");
const navUl = document.querySelector(".nav-ul");

humberger.addEventListener("click", function () {
  humberger.classList.toggle("active");
  navUl.classList.toggle("active");
});

document.querySelectorAll(".nav-ul-items").forEach((n) => {
  n.addEventListener("click", function () {
    humberger.classList.remove("active");
    navUl.classList.remove("active");
  });
});


// Animations
const radios = document.querySelectorAll('input[name="slider"]');
let currentIndex = 0;

function goToNextSlide() {
  radios[currentIndex].checked = false;
  currentIndex = (currentIndex + 1) % radios.length;
  radios[currentIndex].checked = true;
}
setInterval(goToNextSlide, 3000);




const btnDemo = document.querySelector(".btn-popup-click")
const btnGoals = document.querySelector(".btn-goals")
const popupIcons = document.querySelector(".popup-icon")



// script.js

// Get references to modal, buttons, and close button
const modal = document.getElementById("myModal");
const openModalBtnHero = document.getElementById("openModalBtnHero");
const openModalBtnMain = document.getElementById("openModalBtnMain");
const closeModalBtn = document.getElementById("closeModalBtn");

// Function to open the modal
function openModal() {
  modal.style.display = "flex"; // Show the modal
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none"; // Hide the modal
}

// Event listeners to open the modal
btnDemo.addEventListener("click", openModal);
btnGoals.addEventListener("click", openModal);

// Event listener to close the modal
closeModalBtn.addEventListener("click", closeModal);

// Close the modal when clicking outside the modal content
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    closeModal();
  }
});


const formData = {}

document.getElementById("myform").addEventListener("change" , function(e){
  const { name, value } = e.target;
  formData[name] = value; 
})

document.getElementById("myform").addEventListener("submit", async function(e){
  e.preventDefault()
  try {
    const response = await fetch("https://veevotech.com/process_contact",{
      method:'POST', 
      headers:{
       'Content-Type': 'application/json',
      },
      body:JSON.stringify(formData)
    })

    if (!response.ok) {
      throw new Error('Network response was not ok');
  }

  const result = await response.json();
  console.log('Success:', result)
  
  document.querySelector(".popup-btn").addEventListener('click' , function(){
    if(Popup.classList.contains("popup-close")){
      Popup.classList.remove("popup-close")
    }else{
      Popup.classList.add("popup-close")
    }
  })
  } catch (error) {
    console.log("ERROR:", error )
  }
})
