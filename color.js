// let test = document.querySelector(".btn3")

// const element = document.getElementById("btn3");
// element.addEventListener("click", function() {
//     test.classList.toggle("myStyle")
// });

// const element1 = document.getElementById("btn2");
// element1.addEventListener("click", function() {

//     document.getElementById("btn2").classList.toggle("myStyle")
// });

// const element2 = document.getElementById("btn3");
// element2.addEventListener("click", function() {
//     document.getElementById("btn3").classList.toggle("myStyle")
// });

// document.querySelectorAll(".box").forEach(box =>
//     box.addEventListener("click", () => box.classList.toggle("myStyle"))
//   )

// let btn = document.querySelectorAll(".box");

// for (let i = 0; i < btn.length; i++) {

//   btn[i].addEventListener("click", () => {

//     if ( btn[i].innerHTML == "Click Me")
//     {
//       btn[i].innerHTML = "clicked";
//       // btn[i].style.backgroundColor = "red";
//       // btn[i].style.color = "black";

//     } else if( btn[i].innerHTML == "clicked") {
//       btn[i].style.backgroundColor = "#efefef";
//       btn[i].innerText = "Click Me";
//       btn[i].style.color = "black";

//     }
//   });
// }





let btn = document.querySelectorAll(".box");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {

    if (btn[i].innerHTML === "Click Me") {
      
      btn[i].innerHTML = "clicked";
      btn[i].classList.add("myStyle");

    } else if (btn[i].innerHTML === "clicked") {

      btn[i].innerHTML = "Click Me";
      btn[i].classList.remove("myStyle");
    }
  });
}
