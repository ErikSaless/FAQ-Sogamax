document.getElementById("enter").addEventListener("click", ()=>{
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

   if (user === user && pass === pass)
    {
        window.location.href="page.html"
    }
    else {
        alert("usuario ou senha invalidos")
    }

});