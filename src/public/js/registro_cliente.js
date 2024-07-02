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
            return; // Sale de la función si hay algún campo vacío
        }

        // Validar que el correo contenga un "@"
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
            return; // Sale de la función si el correo no es válido
        }

        const datosUsuario = {
            nombre: nombre,
            telefono: telefono,
            correo: correo,
            contrasena: contrasena,
        };

        try {
            // Enviar los datos al servidor
            const response = await fetch(`${sessionStorage.getItem("urlLogic")}/usuarios/registro`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datosUsuario)
            });

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

            // Opcional: Redireccionar después de un tiempo
            setTimeout(() => {
                window.location.href = `${sessionStorage.getItem("urlLogic")}/usuarios/login`; // Cambia por la ruta deseada
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
