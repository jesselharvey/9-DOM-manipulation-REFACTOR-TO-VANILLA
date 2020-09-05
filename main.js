// use mouseenter and mouseleave  \
//                                  >=> scratch that use click
// or mouseover and mouseout      /

// const second = document.querySelector("#second")

document.querySelector("#main").addEventListener("click", function (e) {
  const header = e.target.className.includes("outter")
  const idSelector = `#` + e.target.id + `-a`
  if (header) {
    console.log(idSelector)
    document.querySelector(idSelector).classList.toggle("hide")
  }
  // else {
  //   document.querySelector(idSelector).classList.toggle("hide")
  // }
})
// if (change.classList.contains("outterA")) {
//   change.classList.add("innerA")
//   change.classList.remove("inner1")
// }

// change.classList.add("containerA")
// change.classList.remove("container1")
