import { motion } from "framer-motion";


function Location(){


    return(

        <section 
            className="location-section"
            id="location"
        >


            <motion.div

                className="location-content"

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


                <p className="location-label">
                    IL LOCALE
                </p>



                <h2>

                    Nel cuore di Milano,
                    <br />
                    con l'anima della Puglia.

                </h2>



                <p className="location-description">

                    Un punto d'incontro tra tradizione,
                    strada e nuovi sapori.

                    <br />

                    Vieni a trovarci e vivi
                    l'esperienza PUSANÉ.

                </p>



                <div className="location-info">


                    <div>

                        <span>
                            DOVE
                        </span>

                        <p>
                            Milano, Italia
                        </p>

                    </div>



                    <div>

                        <span>
                            ORARI
                        </span>

                        <p>
                            Lun - Dom
                            <br />
                            12:00 - 23:00
                        </p>

                    </div>



                    <div>

                        <span>
                            CONTATTI
                        </span>

                        <p>
                            +39 000 0000000
                        </p>

                    </div>


                </div>



            </motion.div>


        </section>

    )

}


export default Location;