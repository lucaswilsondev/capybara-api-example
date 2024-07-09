import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <>
            <header className={styles.header}>
                <Link to='/'>Capivara do dia</Link>
                <Link to='/hora'>Capivara da hora</Link>
                <Link to='/gerador'>Gerador de capivara</Link>
            </header>
        </>
    )
}

export default Header