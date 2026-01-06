import style from './Header.module.scss'
import react from '../../assets/react.svg'
export const Header = () => {

            return(
                <>
                <section>
                <h1>React</h1>
                <img className={style.react} src={react} alt="" />
                <p className= {style.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus fugit ipsa, nam corporis dolorum est iusto voluptates cumque porro incidunt. Hic nihil illum delectus.</p>
                <p className= {style.p}>Amet consectetur adipisicing elit. Atque impedit id obcaecati? Sequi, magnam tenetur fugiat id exercitationem, quo inventore dignissimos beatae corrupti odit delectus eveniet unde numquam consequuntur dolore?</p>
                </section>
                </>
            );

    }
