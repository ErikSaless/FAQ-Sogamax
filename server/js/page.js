document.getElementById("exit").addEventListener("click", ()=>{
    
    if (confirm("Deseja sair do site?")) {
        window.location.href = "index.html";
    }
    
});