document.addEventListener("DOMContentLoaded", function () {
  // const itemHeader = document.querySelectorAll(".head")
  const items = document.querySelectorAll(".section")
  console.log(items)

  for (let i = 0; i < items.length; i++) {
    let element = items[i]
    element.addEventListener("click", function (e) {
      const itemContent = document.querySelectorAll(".content")
      for (let i = 0; i < itemContent.length; i++) {
        console.log(itemContent[i])
        let element = itemContent[i]
        element.classList.remove("active")
      }

      e.preventDefault()
      const currentContent = element.querySelectorAll(".content")[0]
      currentContent.classList.add("active")
      console.log(element)
    })
  }
})

// use mouseenter and mouseleave  \
//                                  >=> scratch that use click
// or mouseover and mouseout      /

// const second = document.querySelector("#second")

//------------------------------------------------------------------------------
// document.querySelector("#main").addEventListener("click", function (e) {
//   const header = e.target.className.includes("outter")
//   const idSelector = `#` + e.target.id + `-a`
//   if (header) {
//     console.log(idSelector)
//     document.querySelector(idSelector).classList.toggle("hide")
//   }
// })
//------------------------------------------------------------------------------
// else {
//   document.querySelector(idSelector).classList.toggle("hide")
// }

// if (change.classList.contains("outterA")) {
//   change.classList.add("innerA")
//   change.classList.remove("inner1")
// }

// change.classList.add("containerA")
// change.classList.remove("container1")
