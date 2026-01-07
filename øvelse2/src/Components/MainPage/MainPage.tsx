import Greetings from '../Greetings/Greetings'
import style from './MainPage.module.scss'

export const Main = () => {

            return(
        <>
        <main className={style.main}>
                <h4><i>Her er main</i></h4>
                <article>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, non atque aliquam corrupti accusantium neque quis aperiam praesentium ratione natus ad! Atque, odit et? Doloribus eveniet rem doloremque nam tempora?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, molestias animi velit quod dolores esse veritatis, aspernatur dicta voluptates repellendus officiis.
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam aliquid modi iure velit. Quaerat, adipisci ducimus repellendus assumenda magni velit excepturi, nesciunt delectus culpa corrupti harum enim ad magnam ratione!
                </article>
          
                 <div>
                       <Greetings textValue="Kari" />
                       <Greetings textValue="Michael" />
                       <Greetings textValue="Jeppe" />
                   </div>
          

        </main>
        </>
        )}