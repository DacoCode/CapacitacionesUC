
const url = 'http://127.0.0.1:3002/Users';

const fetchApi = async (userRegister) => {
    console.log("FileServer Object: ", userRegister.name, userRegister.mail, userRegister.number, userRegister.password);
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           
            nombre: userRegister.name,
            correoElectronico: userRegister.mail,
            contrasena: userRegister.password,
            celular: userRegister.number,
            tipoCurso: ''
        })
    }
    );
};

export default fetchApi;