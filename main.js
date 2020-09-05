// use mouseenter and mouseleave  \
//                                  >=> scratch that use click
// or mouseover and mouseout      /

// const second = document.querySelector("#second")
document.querySelector("#main").addEventListener("click", function (e) {
  const header = e.target.className.includes("outter")
  if (header) {
    const idSelector = e.target.id
    console.log(idSelector)
    document.querySelector("idSelector").removeAttribute("display")
  }

  // if (change.classList.contains("outterA")) {
  //   change.classList.add("innerA")
  //   change.classList.remove("inner1")
  // }
})

// change.classList.add("containerA")
// change.classList.remove("container1")
