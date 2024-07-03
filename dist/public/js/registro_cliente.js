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
            const response = await fetch('https://backend-barberia-tsn6.onrender.com/usuarios/registro', options);

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`HTTP error! Status: ${response.status} - ${errorMessage}`);
            }

            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
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
        } else {
            const text = await response.text();
            console.error("Respuesta no JSON:", text);

            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al agregar servicio</h5>",
                text: "Error en la respuesta del servidor",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                }
            });
        }

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
