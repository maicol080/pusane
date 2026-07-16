import { motion } from "framer-motion";
import products from "../data/products";


function ProductShowcase() {

    return (

        <section
            className="product-showcase"
            id="products"
        >

            {products.map((product) => (

                <article
                    className="product-item"
                    key={product.name}
                >

                    <motion.div

                        className="product-image"

                        initial={{
                            opacity: 0,
                            scale: 0.9
                        }}

                        whileInView={{
                            opacity: 1,
                            scale: 1
                        }}

                        transition={{
                            duration: 0.8
                        }}

                        viewport={{
                            once: true
                        }}

                    >

                        <img
                            src={product.image}
                            alt={product.name}
                        />

                    </motion.div>




                    <motion.div

                        className="product-info"

                        initial={{
                            opacity: 0,
                            y: 40
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            duration: 0.8,
                            delay: 0.2
                        }}

                        viewport={{
                            once: true
                        }}

                    >

                        <motion.div

                            className="product-number"

                            initial={{
                                opacity: 0
                            }}

                            whileInView={{
                                opacity: 1
                            }}

                            transition={{
                                duration: 0.8,
                                delay: 0.3
                            }}

                            viewport={{
                                once: true
                            }}

                        >

                            {product.number}

                        </motion.div>



                        <h2>
                            {product.name}
                        </h2>


                        <p>
                            {product.description}
                        </p>


                    </motion.div>


                </article>

            ))}

        </section>

    );

}


export default ProductShowcase;