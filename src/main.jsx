import { StrictMode, useState, useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Plus, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";
import heroImage from "./assets/images/heroPusane.jpg";
import pucciaImage from "./assets/images/productsPucciaPusane.jpeg";
import panzerottoImage from "./assets/images/productsPanzerottoPusane.jpeg";
import burgerImage from "./assets/images/productsHamburgerPusane.jpeg";
import storyImage from "./assets/images/storyPusane.jpg";

// ---- Inlined from components/MenuOverlay.jsx ----
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
                        duration: 0.6,
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

// ---- Inlined from components/Navbar.jsx ----
function Navbar(){

    const [open, setOpen] = useState(false);

    const buttonRef = useRef(null);


    return(

        <>

            <nav className="navbar">


                <div className="logo">
                    PUSANÉ
                </div>



                <button

                    ref={buttonRef}

                    className="menu-button"

                    onClick={() => setOpen(!open)}

                    aria-label="Apri menu"

                >

                    {open ? <X size={32}/> : <Plus size={32}/>}

                </button>



            </nav>



            <MenuOverlay

                open={open}

                setOpen={setOpen}

                buttonRef={buttonRef}

            />

        </>

    );

}

// ---- Inlined from components/Hero.jsx ----
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

// ---- Inlined from data/products.js ----
const products = [

    {
        number:"01",
        name:"Puccia",
        description:
            "Pane pugliese croccante, ingredienti selezionati e sapori autentici.",
        image:pucciaImage
    },


    {
        number:"02",
        name:"Panzerotto",
        description:
            "Impasto dorato, cuore filante e tutta la tradizione pugliese.",
        image:panzerottoImage
    },


    {
        number:"03",
        name:"Street Burger",
        description:
            "Un incontro tra street food italiano e creatività milanese.",
        image:burgerImage
    }

];

// ---- Inlined from components/ProductShowcase.jsx ----
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

// ---- Inlined from data/menu.js ----
const menu = [

    {
        category:"Pucce",
        items:[
            {
                name:"La Pugliese",
                description:"Stracciatella, pomodoro, basilico e ingredienti freschi.",
                price:"9€"
            },
            {
                name:"La Milano",
                description:"Un mix tra tradizione pugliese e gusto urbano.",
                price:"10€"
            }
        ]
    },


    {
        category:"Panzerotti",
        items:[
            {
                name:"Classico",
                description:"Pomodoro, mozzarella e impasto croccante.",
                price:"6€"
            },
            {
                name:"Speciale",
                description:"Ripieno creativo con ingredienti selezionati.",
                price:"8€"
            }
        ]
    },


    {
        category:"Street Food",
        items:[
            {
                name:"Burger Pusané",
                description:"Il nostro lato più contemporaneo.",
                price:"12€"
            }
        ]
    }

];

// ---- Inlined from components/Menu.jsx ----
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

// ---- Inlined from components/Story.jsx ----
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

// ---- Inlined from components/Location.jsx ----
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

// ---- Inlined from components/OrderCTA.jsx ----
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

// ---- Inlined from components/Footer.jsx ----
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


                    <a href="https://www.instagram.com/pusane_squisitamente_pugliese_/">
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


                    <a href="tel:+393427623864">
                        Milano
                    </a>


                    <a href="https://www.justeat.it/restaurants-the-alley-street-food-milano/menu">
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

// ---- Inlined from App.jsx ----
function App(){


    return(

        <>

            <Navbar />


            <main>

                <Hero />

                <ProductShowcase />

                <Menu />

                <Story />

                <Location />

                <OrderCTA />

                <Footer />

            </main>


        </>

    );

}

// ---- Inlined from main.jsx ----
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)