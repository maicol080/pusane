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


                    <a href="#">

                        Ordina ora

                        <ArrowUpRight size={20}/>

                    </a>



                    <a href="#location">

                        Vieni a trovarci

                    </a>


                </div>


            </motion.div>



        </section>

    )

}


export default OrderCTA;