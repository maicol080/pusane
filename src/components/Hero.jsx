import { motion } from "framer-motion";
import heroImage from "../assets/images/heroPusane.jpg";


function Hero(){


    return(

        <section className="hero" id="hero">


            <div className="hero-background"

                style={{
                    backgroundImage:`url(${heroImage})`
                }}

            ></div>



            <div className="hero-overlay">

            </div>



            <div className="hero-content">


                <motion.p

                    className="hero-subtitle"

                    initial={{
                        opacity:0,
                        y:30
                    }}

                    animate={{
                        opacity:1,
                        y:0
                    }}

                    transition={{
                        duration:0.8,
                        delay:0.3
                    }}

                >

                    STREET FOOD PUGLIESE

                </motion.p>



                <motion.h1

                    className="hero-title"

                    initial={{
                        opacity:0,
                        y:50
                    }}

                    animate={{
                        opacity:1,
                        y:0
                    }}

                    transition={{
                        duration:1,
                        delay:0.5
                    }}

                >

                    PUSANÉ

                </motion.h1>



                <motion.p

                    className="hero-description"

                    initial={{
                        opacity:0
                    }}

                    animate={{
                        opacity:1
                    }}

                    transition={{
                        duration:1,
                        delay:0.9
                    }}

                >

                    Milano incontra i sapori
                    della Puglia.

                </motion.p>



                <motion.a

                    href="#menu"

                    className="hero-button"

                    initial={{
                        opacity:0,
                        y:20
                    }}

                    animate={{
                        opacity:1,
                        y:0
                    }}

                    transition={{
                        duration:0.8,
                        delay:1.1
                    }}

                >

                    Scopri il menu

                </motion.a>



            </div>



            <motion.div

                className="scroll-indicator"

                animate={{
                    y:[0,10,0]
                }}

                transition={{
                    duration:1.5,
                    repeat:Infinity
                }}

            >

                ↓

            </motion.div>


        </section>

    )

}


export default Hero;