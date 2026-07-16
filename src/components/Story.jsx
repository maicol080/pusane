import { motion } from "framer-motion";
import storyImage from "../assets/images/storyPusane.jpg";


function Story(){


    return(

        <section
            className="story-section"
            id="story"
        >


            <div className="story-container">



                <motion.div

                    className="story-image"

                    initial={{
                        opacity:0,
                        scale:1.05
                    }}

                    whileInView={{
                        opacity:1,
                        scale:1
                    }}

                    transition={{
                        duration:0.8
                    }}

                    viewport={{
                        once:true
                    }}

                >

                    <img
                        src={storyImage}
                        alt="Pusané"
                    />

                </motion.div>




                <motion.div

                    className="story-content"

                    initial={{
                        opacity:0,
                        x:50
                    }}

                    whileInView={{
                        opacity:1,
                        x:0
                    }}

                    transition={{
                        duration:0.8,
                        delay:0.2
                    }}

                    viewport={{
                        once:true
                    }}

                >


                    <p className="story-label">
                        LA NOSTRA STORIA
                    </p>



                    <h2>
                        Dal cuore della Puglia,
                        <br />
                        nel ritmo di Milano.
                    </h2>



                    <p className="story-description">

                        PUSANÉ nasce dall'incontro tra tradizione
                        e strada. Sapori autentici, ingredienti
                        semplici e il desiderio di portare un pezzo
                        di Puglia nel cuore della città.

                    </p>



                </motion.div>



            </div>


        </section>

    );

}


export default Story;