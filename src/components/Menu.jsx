import { motion } from "framer-motion";
import menu from "../data/menu";


function Menu(){


    return(

        <section 
            className="menu-section"
            id="menu"
        >


            <motion.div

                className="menu-header"

                initial={{
                    opacity:0,
                    y:40
                }}

                whileInView={{
                    opacity:1,
                    y:0
                }}

                viewport={{
                    once:true
                }}

            >

                <p>
                    IL MENU
                </p>

                <h2>
                    Sapori autentici,
                    <br />
                    spirito urbano.
                </h2>


            </motion.div>




            <div className="menu-content">


                {menu.map((category)=>(


                    <div 
                        className="menu-category"
                        key={category.category}
                    >


                        <h3>
                            {category.category}
                        </h3>



                        {category.items.map((item)=>(


                            <motion.div

                                className="menu-item"

                                key={item.name}

                                initial={{
                                    opacity:0,
                                    x:-30
                                }}

                                whileInView={{
                                    opacity:1,
                                    x:0
                                }}

                                viewport={{
                                    once:true
                                }}

                            >


                                <div>

                                    <h4>
                                        {item.name}
                                    </h4>

                                    <p>
                                        {item.description}
                                    </p>

                                </div>



                                <span>
                                    {item.price}
                                </span>


                            </motion.div>


                        ))}


                    </div>


                ))}


            </div>


        </section>

    )

}


export default Menu;