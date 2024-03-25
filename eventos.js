document.addEventListener("DOMContentLoaded", () => {

    
    function calcular() {
        let ta = document.getElementById("ta").value
        let nh = document.getElementById("nh").value
        let ma = document.getElementById("ma").value

        document.getElementById("resultado").value = ((ta*ma/(10*nh))-70.83)/((ma/(10*nh))+1)  
    }

    document.getElementById("enviador").addEventListener("click", calcular)
})


