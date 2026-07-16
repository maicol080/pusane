import { motion } from "framer-motion";


function Footer(){


    return(

        <footer className="footer">


            <motion.div

                className="footer-main"

                initial={{
                    opacity:0,
                    y:40
                }}

                whileInView={{
                    opacity:1,
                    y:0
                }}

                transition={{
                    duration:0.8
                }}

                viewport={{
                    once:true
                }}

            >


                <h2>
                    PUSANÉ
                </h2>


                <p>
                    Milano incontra
                    <br />
                    i sapori della Puglia.
                </p>


            </motion.div>





            <div className="footer-links">



                <div className="footer-column">

                    <span>
                        SEGUICI
                    </span>


                    <a href="#">
                        Instagram
                    </a>


                </div>





                <div className="footer-column">

                    <span>
                        NAVIGA
                    </span>


                    <a href="#menu">
                        Menu
                    </a>


                    <a href="#story">
                        Storia
                    </a>


                    <a href="#location">
                        Locale
                    </a>


                </div>





                <div className="footer-column">

                    <span>
                        CONTATTI
                    </span>


                    <a href="#">
                        Milano
                    </a>


                    <a href="#">
                        Ordina
                    </a>


                </div>



            </div>






            <div className="footer-bottom">


                <p>
                    © 2026 PUSANÉ. Tutti i diritti riservati.
                </p>


            </div>



        </footer>

    )

}


export default Footer;