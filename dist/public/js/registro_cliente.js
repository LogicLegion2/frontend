document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("registrarCliente").addEventListener("click", async (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;
        const correo = document.getElementById("correo").value;
        const contrasena = document.getElementById("contrasena").value;

        if (!nombre || !telefono || !correo || !contrasena) {
            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Todos los campos son obligatorios</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                }
            });
            return; 
        }

        if (!correo.includes("@")) {
            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>El correo debe contener un @</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                }
            });
            return; 
        }

        const token = sessionStorage.getItem("token");
        const options = {
            method: "POST",
            headers: {
                "content-Type": "application/json",
                "x-access-token": token
            },
            body: JSON.stringify({
                nombre: nombre,
                telefono: telefono,
                correo: correo,
                contrasena: contrasena
            })
        }

        try {
            const response = await fetch(`${sessionStorage.getItem("urlLogic")}/usuarios/registro`,options);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Usuario registrado:", data);

            Swal.fire({
                icon: 'success',
                title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Usuario registrado exitosamente</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                    content: 'text-alert'
                }
            });
            setTimeout(() => {
                window.location.href = `/`; 
            }, 1500);

        } catch (error) {
            console.error("Fetch error:", error);
            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al registrar usuario</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                }
            });
        }
    });
});
