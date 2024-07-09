import { useState, useEffect } from 'react';
import styles from './Hora.module.css';

function CapivasDaHora() {
    const [capyAlt, setCapyAlt] = useState('');
    const [capyImage, setCapyImage] = useState('');

    useEffect(() => {
        fetch('https://api.capy.lol/v1/capyhour?json=true')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar os dados do Capy of the Hour.');
                }
                return response.json();
            })
            .then(data => {
                const alt = data.data.alt;
                const url = data.data.url;
                setCapyAlt(alt);
                setCapyImage(url);
            })
            .catch(error => {
                console.error('Erro ao buscar o Capy of the Hour:', error);
            });
    }, []);

    return (
        <div className={styles.capivara}>
            <div id="capy-of-the-hour">
                {capyImage && (
                    <>
                        <img src={capyImage} alt={capyAlt} />
                        <h2>{capyAlt}</h2>
                    </>
                )}
            </div>
        </div>
    );
}

export default CapivasDaHora;
