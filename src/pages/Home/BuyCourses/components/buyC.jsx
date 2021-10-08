import React, { useEffect } from 'react'

const FormBuy = () => {

    // useEffect(() => {
    //    fetchApi();
    // }, []);

    return (
        <div className="form-buy-con">

            <div className='select-buy'>
                <select className='method'>
                    <option> Metodo de pago </option>
                    <option value = '0'> Generar Recibo </option>
                    <option value = '1'> Generar codigo pago en linea </option>
                </select>

                <button className='btn-buy' > Generar pago </button>
            </div>
        </div>
    )
}

export default FormBuy;
