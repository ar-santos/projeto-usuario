let btnSearch = document.getElementById("id-search")

function pesquisa(btn, funcMostrar) {
    btn.addEventListener("click", funcMostrar, false )
}
    

const btn = { 
    btnSearch,
    pesquisa
}
export default btn