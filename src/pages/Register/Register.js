import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Register.css';
import Input from './components/Input/Input';
import Image from '../../assets/Front-UC.jpg';
import fetchApi from '../../Server/registerServer.js';

const  NewRegister = () => {

    //Iniciando los Estados de variables.
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function handleChange(name, value) {
        if (name === 'nameUser') {
            //Var almacenar el nombre
            setName(value)
        } else if (name === 'mail_reg') {
            setMail(value)
        } else if (name === 'pwd_reg') {
            setPassword(value)
        } else if (name === 'cel_reg') {
            setNumber(value)
        }

    };

    //Funcion para el boton
    function handleSubmit() {
        let userRegister = { name, mail, number, password }
        const register =  fetchApi(userRegister);
        console.log(register);
        if (userRegister) {
            console.log('New User is: ', userRegister);
        }
        if(register){
            
             history.push('/');
         }else{
             console.log("No se registro");
        }

     
    }

    // console.log('NameUser', name);
    // console.log('Mail', mail);
    // console.log('number', number);
    // console.log('pwd', password);


    return (
        <>
            <div className='image-reg'>
            <img className='image-uc' src={Image} alt="university Central "/>
            </div>
            <div className='register-container'>

                <div className='register-container-int'>
                    <div className='Title'> Crear Cuenta </div>

                    <Input
                        attribute={{
                            id: 'nameUser',
                            name: 'nameUser',
                            type: 'text',
                            placeholder: 'Nombre de Usuario'
                        }}
                        handleChange={handleChange}
                    />
                    <Input
                        attribute={{
                            id: 'mail_reg ',
                            name: 'mail_reg',
                            type: 'text',
                            placeholder: 'Correo Electronico'
                        }}
                        handleChange={handleChange}
                    />
                    <Input
                        attribute={{
                            id: 'pwd_reg',
                            name: 'pwd_reg',
                            type: 'password',
                            placeholder: 'Contrase??a '
                        }}
                        handleChange={handleChange}

                    />
                    <Input
                        attribute={{
                            id: 'cel_reg',
                            name: 'cel_reg',
                            type: 'text',
                            placeholder: 'Numero de Celular'
                        }}
                        handleChange={handleChange}
                    />

                    <button className='button-register' onClick={handleSubmit}>
                        Registrarme
                    </button>
                </div>

            </div>

        </>
    );

};

export default NewRegister;