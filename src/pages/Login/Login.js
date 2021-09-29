import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Input from './components/Input/Input';


const Login = () => {

    //Estados de usuario y contraseña
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');

    //Funcion para la accion de un solo inpout pero implementando dos y evitar fallas
    function handleChange(name, value) {
        if (name === 'user') {
            //Var almacenar el nombre
            setUser(value)
        } else if (name === 'password') {
            setPwd(value)
        }
    };

    //Funcion para el boton de acceso 
    function handleSubmit() {
        let account = { user, pwd }
        if (account) {
            console.log('account: ', account);
        }
    };

    // console.log('user', user);
    // console.log('pwd', pwd); 

    //Se retorna todo el esqueleto
    return (

            <div className='login-container'>

                <Title text='Inicio de sesión' />
                <Label text='Nombre de usuario' />
                <Input
                    attribute={{
                        id: 'user',
                        name: 'user',
                        type: 'text',
                        placeholder: 'Ingrese su usuario'
                    }}
                    handleChange={handleChange}
                />
                <Label text='Contraseña' />
                <Input
                    attribute={{
                        id: 'password',
                        name: 'password',
                        type: 'password',
                        placeholder: 'Ingrese su contraseña'
                    }}
                    handleChange={handleChange}
                />
                <button className='button-login' onClick={handleSubmit} >
                    Ingresar
                </button>
                <div className='links-login'>
                    <ul>
                        <li><Link className='register' to="/Register" >Registrarse</Link></li>
                        <li> <a className='pwd' href="url">Olvide mi contraseña</a></li>
                    </ul>
                </div>

            </div>


    );
};

export default Login;