import style from './NavBar.module.scss'
export const NavBar = () => {

            return (
        <>
            <nav>
                <ul className={style.ul}>
                <li><a href="#">Hjem</a></li>
                <li><a href="#">Hvem er vi?</a></li>
                <li><a href="#">Åbningstider</a></li>
        </ul>
            </nav>
        </>
            )};