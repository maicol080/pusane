import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";


function OrderCTA(){


    return(

        <section
            className="order-section"
            id="order"
        >


            <motion.div

                className="order-content"

                initial={{
                    opacity:0,
                    y:50
                }}

                whileInView={{
                    opacity:1,
                    y:0
                }}

                viewport={{
                    once:true
                }}

                transition={{
                    duration:0.8
                }}

            >


                <p className="order-label">
                    PRONTO?
                </p>



                <h2>

                    Hai già fame?

                </h2>



                <p className="order-text">

                    Ordina PUSANÉ
                    e porta la Puglia
                    direttamente a casa tua.

                </p>



                <div className="order-buttons">


                    <a href="https://www.justeat.it/restaurants-the-alley-street-food-milano/menu">

                        Ordina ora

                        <ArrowUpRight size={20}/>

                    </a>



                    <a href="https://www.google.com/maps/place/PUSAN%C3%89+(the+alley+street+food)/@45.4550234,9.1967305,557m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4786c5317c0b92df:0x9ceb4a30422f2bfd!8m2!3d45.4550197!4d9.1993054!16s%2Fg%2F11p5dm3v5n?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D">

                        Vieni a trovarci

                    </a>


                </div>


            </motion.div>



        </section>

    )

}


export default OrderCTA;