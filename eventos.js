document.addEventListener("DOMContentLoaded", () => {

    
    function calcular() {
        let ta = document.getElementById("ta").value
        let nh = document.getElementById("nh").value
        let ma = document.getElementById("ma").value
        let num = ((ma*ta - (890 * nh)) / (parseInt(ma) + parseInt(10*nh)))
        console.log((ma + 10*nh))

        if (num < 0) {
            document.getElementById("resultado").innerText = 0
        } else {
            document.getElementById("resultado").innerText =(Math.round(num * 100) / 100).toFixed(2);
        }
        
    }

    document.getElementById("enviador").addEventListener("click", calcular)
})


