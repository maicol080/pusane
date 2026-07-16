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
                            Lun - Gio
                            <br />
                            10:30 - 14:45
                            <br />
                            17:15 - 23:00
                            <br /><br />

                            Ven - Sab
                            <br />
                            10:30 - 15:00
                            <br />
                            17:00 - 23:00
                            <br /><br />

                            Dom
                            <br />
                            17:30 - 23:00
                        </p>

                    </div>



                    <div>

                        <span>
                            CONTATTI
                        </span>

                        <p>
                            +39 342 762 3864
                        </p>

                    </div>


                </div>



            </motion.div>


        </section>

    )

}


export default Location;