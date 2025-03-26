const baseModal = document.getElementById("container-base-modal")
const cards = document.getElementById("cards")
const container = document.getElementById("container")


container.addEventListener("click", function(event) {
  // console.log(event.target)

  let parentButton = event.target.closest(".container-base")

  if(parentButton) {
    const name = parentButton.getAttribute("data-name")
    const price = parentButton.getAttribute("data-price")

    console.log(name)
    console.log(price)
  }
})


// function abrirModal() {
//     const abrirModal = document.getElementById("confirmed")
//     if (abrirModal.classList.contains('hidden')) {
//         abrirModal.classList.remove('hidden')
//     }
// } 

// function fecharModal() {
//   const abrirModal = document.getElementById("confirmed")

//   if (abrirModal.classList.contains('modal')) {
//         abrirModal.classList.add('hidden')
//   }
// }
 