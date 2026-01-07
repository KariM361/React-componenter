import style from './Footer.module.scss'
export const Footer = () => {

            return (
        <>
            <footer className={style.footer}>
                <div>
                        <ul>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Twitter</a></li>
                        </ul>
                </div>

            </footer>
        </>
            );
    }