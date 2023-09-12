document.addEventListener("DOMContentLoaded", () => {

    function enviar() {
        let nombre = document.getElementById("nombre").value
        let apellido = document.getElementById("apellido").value
        let date = document.getElementById("date").value

        fetch('https://jsonplaceholder.typicode.com/users', {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify({
                nombre: nombre,
                apellido: apellido,
                fecha: date
            })
        })
            .then(response => response.json())
            .then(data => alert("Esta es una alerta con los datos que se enviaron: " + data.nombre + " " + data.apellido + " nació el " + data.fecha))
    }

    document.getElementById("enviador").addEventListener("click", enviar)
})


