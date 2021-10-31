// Variables

const inputNombre = document.getElementById('inputNombre');
const inputApellido = document.getElementById('inputApellido');
const inputEdad = document.getElementById('inputEdad');
const btnAgregar = document.getElementById('btnAgregar');

//Funciones

btnAgregar.addEventListener('click', obtenerDatos);


//CRUD

    function obtenerDatos(e) {
        let nombre = inputNombre.value;
        let apellido = inputApellido.value;
        let edad = inputEdad.value;
        let id = new Date().getTime();
        let creacion = new Date().getDate();

        

        const usuario = {
            id,
            nombre,
            apellido,
            edad,
            creacion
        }

        if(localStorage.getItem('usuarios') === null) {
            let usuarios = [];
            usuarios.push(usuario);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
        } else {
            let usuarios = JSON.parse(localStorage.getItem('usuarios'));
            usuarios.push(usuario);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
        }

        guardarDatos();
        document.getElementById('form').reset();
        // e.preventDefault();

    }
    
    function eliminar(nombre) {
      console.log(nombre)
      let usuarios = JSON.parse(localStorage.getItem('usuarios'));
      for(let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].nombre == nombre) {
          usuarios.splice(i, 1);
        }
      }
      
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      guardarDatos();
    }
    
    function guardarDatos() {
      let usuarios = JSON.parse(localStorage.getItem('usuarios'));
      let usuariosView = document.getElementById('usuariosView');
      usuariosView.innerHTML = '';
      for(let i = 0; i < usuarios.length; i++) {
        
        let id = usuarios[i].id;
        let nombre = usuarios[i].nombre;
        let apellido = usuarios[i].apellido;
        let edad = usuarios[i].edad;
        let creacion = usuarios[i].creacion;
    
        usuariosView.innerHTML += `<div class="card mb-3">
            <div class="card-body">

              <div class="card-body">
              NUMERO DE ID: ${id}
              </div>

              <div class="card-body">
              ${nombre}
              </div>

              <div class="card-body">
              ${apellido}
              </div>

              <div class="card-body">
              ${edad} años
              </div>

              <div class="card-body">
              Creado el día ${creacion} de 2021.
              </div>

              <a href="#" onclick="eliminar('${nombre}')" class="btn btn-danger ml-5">Eliminar Usuario</a>
              </div>
            </div>
          </div>`;
      }
    }
    guardarDatos();