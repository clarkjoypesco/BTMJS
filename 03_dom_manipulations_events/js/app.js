const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

//CLICK
// clearBtn.addEventListener("click", runEvent);

//Double Click
// clearBtn.addEventListener("dblclick", runEvent);

//MouseDown
// clearBtn.addEventListener("mousedown", runEvent);

//Mouseup
// clearBtn.addEventListener("mouseup", runEvent);

// //MouseEnter
// card.addEventListener("mouseenter", runEvent);

// //Mouseleave
// card.addEventListener("mouseleave", runEvent);

// //MouseOver
// card.addEventListener("mouseover", runEvent);

// //MouseOut
// card.addEventListener("mouseout", runEvent);

card.addEventListener("mousemove", runEvent);

//Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, 40)`;
}
