import styles from './Dia.module.css'

function CapivasDoDia() {
    fetch('https://api.capy.lol/v1/capyoftheday?json=true')
        .then(response => response.json())
        .then(data => {
            const capyAlt = data.data.alt;
            const capyImage = data.data.url;

            const capyElement = document.getElementById('capy-of-the-day');
            capyElement.innerHTML = `<img src='${capyImage}'> <h2>${capyAlt}</h2>`;
        })
        .catch(error => {
            console.error('===> Erro ao buscar o Capy of the Day:', error);
        });

    return (
        <>
            <div className={styles.capivara}>
                <div id="capy-of-the-day">

                </div>
            </div>
        </>
    )
}

export default CapivasDoDia