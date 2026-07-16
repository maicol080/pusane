import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";


function MenuOverlay({ open, setOpen, buttonRef }) {


    const links = [
        {
            number: "01",
            title: "Menu",
            href: "#menu"
        },
        {
            number: "02",
            title: "Storia",
            href: "#story"
        },
        {
            number: "03",
            title: "Locale",
            href: "#location"
        },
        {
            number: "04",
            title: "Ordina",
            href: "#order"
        }
    ];

    const [origin, setOrigin] = useState("95% 5%");


    useEffect(() => {

        if(buttonRef.current){

            const rect = buttonRef.current.getBoundingClientRect();


            const x = rect.left + rect.width / 2;

            const y = rect.top + rect.height / 2;


            setOrigin(`${x}px ${y}px`);

        }

    }, [buttonRef, open]);



    return (

        <AnimatePresence>

            {open && (

                <motion.div

                    className="menu-overlay"

                    initial={{
                        clipPath: `circle(0% at ${origin})`
                    }}

                    animate={{
                        clipPath: `circle(150% at ${origin})`
                    }}

                    exit={{
                        clipPath: `circle(0% at ${origin})`
                    }}

                    transition={{
                        duration: 0.8,
                        ease: [0.76, 0, 0.24, 1]
                    }}

                >


                    <div className="overlay-content">


                        <p className="overlay-label">
                            NAVIGATION
                        </p>



                        <div className="overlay-links">


                            {links.map((link, index) => (

                                <motion.a

                                    key={link.title}

                                    href={link.href}

                                    onClick={() => setOpen(false)}

                                    initial={{
                                        opacity: 0,
                                        y: 40
                                    }}

                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}

                                    transition={{
                                        delay: 0.3 + index * 0.1
                                    }}

                                >

                                    <span>
                                        {link.number}
                                    </span>


                                    {link.title}


                                </motion.a>

                            ))}


                        </div>


                    </div>


                </motion.div>

            )}

        </AnimatePresence>

    );

}


export default MenuOverlay;