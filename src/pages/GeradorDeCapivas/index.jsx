import styles from './Gerador.module.css'

function gerar() {
    fetch('https://api.capy.lol/v1/capybaras').then(response => response.json()).then(data => mostrarCapivara(data))

    function mostrarCapivara(data) {
        var x = Math.floor(Math.random() * 25)
        let img = data.data[x].url
        let alt = data.data[x].alt
        const nome = document.querySelector("#capyDiv")
        nome.innerHTML = `<img src=${img}/> <h2>${alt}</h2>`

    }
}

function Gerador() {

    return (
        <>
            <div className={styles.capivara}>
                <button className={styles.btn} onClick={gerar}>Gerar capivara</button>

                <div id='capyDiv'>

                </div>
            </div>
        </>
    )
}

export default Gerador