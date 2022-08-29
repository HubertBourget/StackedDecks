import React from 'react';
import { useState } from 'react';

const Advice = () => {
    const [yourAdvice, setYourAdvice] = useState();

    const getAdvice = async () => {
        fetch('	https://api.adviceslip.com/advice')
        .then(res => {
            return res.json();
        }).then(data => {
            setYourAdvice(data.slip.advice);
        }).catch(error => {
            console.log(error);
        });
        
    }

    getAdvice();

    return (
        <div>
            {yourAdvice}
        </div>
    )
}

export default Advice