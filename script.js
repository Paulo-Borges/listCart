function abrirModal() {
    const abrirModal = document.getElementById("confirmed")
    if (abrirModal.classList.contains('hidden')) {
        abrirModal.classList.remove('hidden')
    }
} 

function fecharModal() {
  const abrirModal = document.getElementById("confirmed")

  if (abrirModal.classList.contains('modal')) {
        abrirModal.classList.add('hidden')
  }
}
 