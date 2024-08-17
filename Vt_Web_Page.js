const mainContainer = document.querySelector(".edn-anime");
document.addEventListener("scroll", function () {
  const movingImage = document.getElementById("moving-mbl");
  const rect = mainContainer.getBoundingClientRect();

  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    movingImage.classList.add("animate-image");
  } else {
    movingImage.classList.remove("animate-image");
  }
});

const empContainer = document.querySelector(".edn-anime");
document.addEventListener("scroll", function () {
  const movingEmpImage = document.getElementById("moving-mbl-emp");

  const rect = mainContainer.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    movingEmpImage.classList.add("animate-image");
  } else {
    movingEmpImage.classList.remove("animate-image");
  }
});

// Spext

document.addEventListener("scroll", function () {
  const movingSpextImage = document.getElementById("moving-mbl-spext");
  const rect = empContainer.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    movingSpextImage.classList.add("animate-image");
  } else {
    movingSpextImage.classList.remove("animate-image");
  }
});
document.addEventListener("scroll", function () {
  const movingEDNImage = document.getElementById("moving-mbl-EDN");
  const rect = empContainer.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    movingEDNImage.classList.add("animate-image");
  } else {
    movingEDNImage.classList.remove("animate-image");
  }
});

document.addEventListener("scroll", function () {
  const movingQueryImage = document.getElementById("moving-mbl-QueryQ");
  const rect = empContainer.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    movingQueryImage.classList.add("animate-image");
  } else {
    movingQueryImage.classList.remove("animate-image");
  }
});

let currentDiv = 1;
const totalDivs = 5;

function showDivs(divNum) {
  const divs = document.querySelectorAll(".inner-div");
  const middleDiv = document.querySelector(".mid-animate-hero");
  divs.forEach((div, index) => {
    div.classList.remove("show", "hide");
    div.style.display = "none";
    if (index + 1 === divNum) {
      div.classList.add("show");
      div.style.display = "block";
    }
  });
}

function hideDivs(divNum) {
  const currentDiv = document.getElementById(`div-${divNum}`);
  currentDiv.classList.add("hide");
}

showDivs(currentDiv);

setInterval(() => {
  hideDivs(currentDiv);

  currentDiv++;

  if (currentDiv > totalDivs) {
    currentDiv = 1;
  }

  setTimeout(() => {
    showDivs(currentDiv);
  }, 1000);
}, 3000);

// let currentDiv = 1;
// const totalDivs = 5;

// function showDivs(divNums) {
//   const divs = document.querySelectorAll(".inner-div");

//   divs.forEach((div) => {
//     div.style.display = "none";
//   });

//   document.getElementById(`div-${divNums}`).style.display = "block";
// }

// showDivs(currentDiv);

// setInterval(() => {
//   currentDiv++;

//   if (currentDiv > totalDivs) {
//     currentDiv = 1;
//   }
//   showDivs(currentDiv);
// }, 3000);
