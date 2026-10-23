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

                    aria-label={open ? "Chiudi menu" : "Apri menu"}
                    aria-expanded={open}

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


                    <a href="https://www.justeat.it/restaurants-the-alley-street-food-milano/menu" target="_blank" rel="noreferrer">

                        Ordina ora

                        <ArrowUpRight size={20}/>

                    </a>



                    <a href="https://www.google.com/maps/place/PUSAN%C3%89+(the+alley+street+food)/@45.4550234,9.1967305,557m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4786c5317c0b92df:0x9ceb4a30422f2bfd!8m2!3d45.4550197!4d9.1993054!16s%2Fg%2F11p5dm3v5n?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">

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


                    <a href="https://www.instagram.com/pusane_squisitamente_pugliese_/" target="_blank" rel="noreferrer">
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
                        +39 342 762 3864
                    </a>


                    <a href="https://www.justeat.it/restaurants-the-alley-street-food-milano/menu" target="_blank" rel="noreferrer">
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

            <style>{`
                /* PUSANÉ — modifiche visive inserite nel file principale */
                .hero {
                    min-height: 650px;
                    height: min(900px, 92svh);
                    isolation: isolate;
                    overflow: hidden;
                }
                .hero-background {
                    inset: 9% 5% 10% auto !important;
                    width: min(44%, 510px) !important;
                    height: 78% !important;
                    background-size: contain !important;
                    background-repeat: no-repeat !important;
                    background-position: center !important;
                    opacity: .9;
                    transform: none !important;
                }
                .hero-overlay {
                    background: linear-gradient(90deg, var(--black) 0%, rgba(13,13,13,.96) 30%, rgba(13,13,13,.72) 56%, rgba(13,13,13,.2) 100%), linear-gradient(180deg, transparent 55%, var(--black) 100%);
                }
                .hero-content {
                    position: relative;
                    z-index: 2;
                    width: min(88%, 1180px);
                    align-items: flex-start;
                    text-align: left;
                }
                .hero-title {
                    font-size: clamp(5rem, 12vw, 11rem);
                    letter-spacing: -.045em;
                }
                .hero-description { max-width: 360px; }
                .scroll-indicator { z-index: 3; }

                .product-showcase {
                    padding: clamp(75px, 9vw, 125px) clamp(22px, 7vw, 100px) 35px;
                }
                .product-item {
                    width: min(100%, 1240px);
                    min-height: 0;
                    margin: 0 auto clamp(75px, 9vw, 120px);
                    gap: clamp(30px, 6vw, 85px);
                }
                .product-image {
                    flex: 0 1 46%;
                    width: 46%;
                    height: clamp(260px, 34vw, 430px);
                    max-height: 430px;
                    background: var(--black);
                }
                .product-image img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    object-position: center;
                    transform: none;
                }
                .product-item:hover .product-image img { transform: none; }
                .product-info { max-width: 440px; }
                .product-info h2 {
                    font-size: clamp(2.8rem, 5vw, 4.8rem);
                    line-height: .98;
                    letter-spacing: -.025em;
                }
                .product-info p { max-width: 380px; line-height: 1.8; }

                .story-section { padding: clamp(75px, 9vw, 125px) clamp(22px, 7vw, 100px); }
                .story-container {
                    width: min(100%, 1240px);
                    margin-inline: auto;
                    gap: clamp(30px, 6vw, 85px);
                }
                .story-image {
                    flex: 0 1 46%;
                    width: 46%;
                    height: clamp(280px, 38vw, 470px);
                    max-height: 470px;
                }
                .story-image img { display: block; width: 100%; height: 100%; object-fit: contain; object-position: center; background: var(--black); }
                .story-content { max-width: 480px; }
                .story-content h2 {
                    font-size: clamp(3rem, 5.4vw, 5.4rem);
                    line-height: .98;
                    letter-spacing: -.03em;
                }
                .location-section { padding: clamp(45px, 7vw, 85px) clamp(18px, 6vw, 90px); }
                .location-content {
                    min-height: 0;
                    width: min(100%, 1240px);
                    margin-inline: auto;
                    padding: clamp(36px, 6vw, 76px);
                    background: radial-gradient(ellipse at 90% 0%, rgba(180,58,36,.16), transparent 42%), linear-gradient(135deg, #1b1b17, var(--black) 70%);
                    border: 1px solid rgba(245,242,236,.12);
                }
                .location-info {
                    position: static;
                    margin-top: 55px;
                    padding-top: 28px;
                    border-top: 1px solid rgba(245,242,236,.18);
                    display: grid;
                    grid-template-columns: 1fr 1.4fr 1fr;
                    gap: 32px;
                }
                .order-section { min-height: 0; padding: clamp(80px, 10vw, 135px) 24px; }
                .order-content h2 {
                    font-size: clamp(3rem, 7vw, 6.2rem);
                    line-height: .96;
                    letter-spacing: -.035em;
                }
                .order-buttons { gap: 14px; flex-wrap: wrap; justify-content: center; }
                .footer { padding: 65px clamp(22px, 6vw, 80px) 26px; }

                @media (max-width: 900px) {
                    .product-item, .product-item:nth-child(even) { gap: 28px; }
                    .product-image { flex-basis: 44%; width: 44%; height: clamp(250px, 40vw, 360px); }
                    .story-image { flex-basis: 43%; width: 43%; height: clamp(270px, 42vw, 380px); }
                    .location-info { grid-template-columns: 1fr 1fr; }
                    .location-info div:last-child { grid-column: 1 / -1; }
                }
                @media (max-width: 640px) {
                    /* Mobile: foto come sfondo dell'hero, testo sovrapposto */
                    .hero {
                        position: relative;
                        min-height: 590px;
                        height: 88svh;
                        max-height: 760px;
                        justify-content: center;
                        overflow: hidden;
                    }
                    .hero-background {
                        position: absolute !important;
                        inset: 0 !important;
                        width: 100% !important;
                        height: 100% !important;
                        opacity: .48;
                        background-size: contain !important;
                        background-repeat: no-repeat !important;
                        background-position: center !important;
                        transform: none !important;
                        z-index: 0;
                    }
                    .hero-overlay {
                        position: absolute;
                        inset: 0;
                        z-index: 1;
                        background: linear-gradient(180deg, rgba(13,13,13,.22) 0%, rgba(13,13,13,.42) 45%, var(--black) 100%);
                    }
                    .hero-content {
                        position: relative;
                        z-index: 2;
                        width: calc(100% - 40px);
                        align-items: center;
                        text-align: center;
                    }
                    .scroll-indicator { z-index: 3; }
                    .hero-title { font-size: clamp(4rem, 17vw, 6.8rem); }
                    .hero-description { max-width: 290px; }
                    .product-showcase { padding: 65px 22px 10px; }
                    .product-item, .product-item:nth-child(even) {
                        flex-direction: column;
                        align-items: stretch;
                        gap: 20px;
                        margin-bottom: 68px;
                    }
                    .product-image {
                        flex: none;
                        width: 100%;
                        height: clamp(210px, 65vw, 310px);
                        max-height: 310px;
                    }
                    .product-image img { object-fit: contain; }
                    .product-info { width: 100%; max-width: none; padding-top: 8px; }
                    .product-info h2 { font-size: clamp(2.7rem, 11vw, 3.8rem); }
                    .product-number { font-size: 6rem; top: -12px; left: auto; right: 8px; transform: none; }
                    .story-section { padding: 70px 22px; }
                    .story-container { flex-direction: column; align-items: stretch; gap: 28px; }
                    .story-image { flex: none; width: 100%; height: clamp(220px, 65vw, 320px); max-height: 320px; }
                    .story-content { width: 100%; max-width: none; }
                    .story-content h2 { font-size: clamp(2.8rem, 10.5vw, 4rem); }
                    .location-section { padding: 30px 16px 55px; }
                    .location-content { padding: 32px 23px; }
                    .location-content h2 { font-size: clamp(2.6rem, 10vw, 3.8rem); }
                    .location-info { grid-template-columns: 1fr; gap: 24px; margin-top: 36px; }
                    .location-info div:last-child { grid-column: auto; }
                    .order-section { padding: 75px 22px; }
                    .order-buttons { flex-direction: column; align-items: stretch; }
                    .order-buttons a { width: 100%; }
                    .footer { padding: 52px 22px 24px; }
                }
                @media (prefers-reduced-motion: reduce) {
                    *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
                }

                /* PUSANÉ — rifinitura tipografica e spaziature */
                :root {
                    --pusane-ink: #0d0d0d;
                    --pusane-paper: #e8d8b8;
                    --pusane-white: #f5f2ec;
                    --pusane-red: #b43a24;
                }

                html { scroll-behavior: smooth; scroll-padding-top: 88px; }
                body { -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }
                ::selection { background: var(--pusane-paper); color: var(--pusane-ink); }

                .navbar {
                    padding-inline: clamp(22px, 5vw, 76px);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                }
                .logo { letter-spacing: .09em; }
                .menu-button { transition: transform .25s ease, opacity .25s ease; }
                .menu-button:hover { transform: rotate(90deg); }

                .hero-content { max-width: 1180px; }
                .hero-subtitle,
                .story-label,
                .location-label,
                .order-label {
                    letter-spacing: .2em;
                    font-size: .72rem;
                    font-weight: 600;
                }
                .hero-description { line-height: 1.75; }
                .hero-button { letter-spacing: .14em; }

                .product-showcase { padding-top: clamp(70px, 8vw, 112px); }
                .product-item { align-items: center; }
                .product-image {
                    border: 1px solid rgba(232, 216, 184, .12);
                    background: #11110f;
                }
                .product-image img,
                .story-image img {
                    background: #11110f;
                    object-fit: contain;
                    object-position: center;
                }
                .product-info { position: relative; z-index: 1; }
                .product-info h2 {
                    margin-bottom: 16px;
                    font-weight: 500;
                }
                .product-info p {
                    max-width: 360px;
                    font-size: .96rem;
                    line-height: 1.85;
                    color: rgba(245, 242, 236, .72);
                }

                .menu-section { padding-block: clamp(76px, 9vw, 124px); }
                .menu-header { margin-bottom: clamp(42px, 6vw, 76px); }
                .menu-header > p {
                    font-size: .72rem;
                    letter-spacing: .2em;
                    font-weight: 600;
                }
                .menu-header h2 {
                    font-size: clamp(3rem, 6.4vw, 6.4rem);
                    line-height: .98;
                    letter-spacing: -.04em;
                }
                .menu-content { max-width: 940px; }
                .menu-category { margin-bottom: clamp(36px, 5vw, 58px); }
                .menu-category h3 {
                    margin-bottom: 14px;
                    color: var(--accent);
                    font-size: .8rem;
                    letter-spacing: .16em;
                    text-transform: uppercase;
                }
                .menu-item {
                    align-items: flex-start;
                    gap: 22px;
                    padding: 20px 0;
                    border-bottom: 1px solid rgba(13, 13, 13, .16);
                }
                .menu-item h4 {
                    font-size: clamp(1.05rem, 1.7vw, 1.25rem);
                    font-weight: 600;
                }
                .menu-item p {
                    max-width: 560px;
                    margin-top: 6px;
                    line-height: 1.65;
                    opacity: .75;
                }
                .menu-item > span {
                    white-space: nowrap;
                    font-variant-numeric: tabular-nums;
                    font-weight: 600;
                }

                .story-container { align-items: center; }
                .story-image {
                    overflow: hidden;
                    background: #11110f;
                    border: 1px solid rgba(232, 216, 184, .12);
                }
                .story-content h2 {
                    font-weight: 500;
                    letter-spacing: -.04em;
                }
                .story-description {
                    max-width: 460px;
                    line-height: 1.9;
                    color: rgba(245, 242, 236, .76);
                }

                .location-content { border-radius: 2px; }
                .location-content h2 {
                    font-weight: 500;
                    letter-spacing: -.04em;
                }
                .location-description {
                    line-height: 1.85;
                    color: rgba(245, 242, 236, .74);
                }
                .location-info span {
                    display: block;
                    margin-bottom: 8px;
                    font-size: .68rem;
                    font-weight: 600;
                    letter-spacing: .17em;
                    color: rgba(245, 242, 236, .55);
                }
                .location-info p { line-height: 1.8; }

                .order-content h2 {
                    font-weight: 500;
                    letter-spacing: -.04em;
                }
                .order-text {
                    line-height: 1.85;
                    color: rgba(245, 242, 236, .75);
                }
                .order-buttons a {
                    min-height: 54px;
                    transition: background .3s ease, color .3s ease, border-color .3s ease, transform .3s ease;
                }
                .order-buttons a:hover { transform: translateY(-2px); }

                .footer-main h2 {
                    font-size: clamp(4.8rem, 11vw, 10rem);
                    letter-spacing: -.045em;
                }
                .footer-links {
                    gap: clamp(36px, 8vw, 100px);
                }
                .footer-column span {
                    font-size: .68rem;
                    letter-spacing: .18em;
                }
                .footer-bottom p { letter-spacing: .08em; }

                @media (max-width: 900px) {
                    .menu-header h2 { font-size: clamp(3rem, 8vw, 5.2rem); }
                    .product-info p { font-size: .92rem; }
                    .footer-links { gap: 42px; }
                }

                @media (max-width: 640px) {
                    html { scroll-padding-top: 72px; }
                    .navbar { padding-inline: 20px; }
                    .menu-button:hover { transform: none; }
                    .hero-subtitle { letter-spacing: .16em; }
                    .product-showcase { padding-top: 58px; }
                    .product-image {
                        height: clamp(200px, 60vw, 290px);
                        border-color: rgba(232, 216, 184, .1);
                    }
                    .product-info h2 { margin-bottom: 12px; }
                    .product-info p { line-height: 1.75; }
                    .menu-section { padding-block: 68px; }
                    .menu-header { margin-bottom: 40px; }
                    .menu-header h2 { font-size: clamp(2.8rem, 10.5vw, 4rem); }
                    .menu-item { gap: 16px; padding: 17px 0; }
                    .menu-item p { font-size: .88rem; }
                    .story-image { height: clamp(210px, 60vw, 300px); }
                    .location-info { gap: 22px; }
                    .order-buttons a { min-height: 52px; }
                    .footer-links {
                        display: grid;
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                        gap: 32px 24px;
                        margin-top: 56px;
                    }
                    .footer-column:last-child { grid-column: 1 / -1; }
                    .footer-bottom { margin-top: 42px; }
                }

                @media (prefers-reduced-motion: reduce) {
                    html { scroll-behavior: auto; }
                    .menu-button:hover,
                    .order-buttons a:hover { transform: none; }
                }

                /* Correzioni finali: immagini senza riquadri artificiali */
                .navbar {
                    background: rgba(13, 13, 13, .42);
                    backdrop-filter: blur(14px);
                    -webkit-backdrop-filter: blur(14px);
                    border-bottom: 1px solid rgba(245, 242, 236, .06);
                }

                .product-image {
                    height: auto !important;
                    max-height: none !important;
                    background: transparent !important;
                    border: 0 !important;
                    overflow: visible !important;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .product-image img {
                    display: block;
                    width: 100%;
                    height: auto !important;
                    max-height: 430px;
                    object-fit: contain !important;
                    object-position: center;
                    background: transparent !important;
                    border: 0 !important;
                }
                .story-image {
                    height: auto !important;
                    max-height: none !important;
                    background: transparent !important;
                    border: 0 !important;
                    overflow: visible !important;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .story-image img {
                    display: block;
                    width: 100%;
                    height: auto !important;
                    max-height: 470px;
                    object-fit: contain !important;
                    object-position: center;
                    background: transparent !important;
                    border: 0 !important;
                }

                /* Hero: immagine intera, sotto la navbar e senza testo sopra */
                .hero-background {
                    inset: 112px 5% 8% auto !important;
                    width: min(44%, 510px) !important;
                    height: auto !important;
                    background-size: contain !important;
                    background-repeat: no-repeat !important;
                    background-position: center !important;
                    opacity: 1 !important;
                    transform: none !important;
                }
                .hero-overlay {
                    background: linear-gradient(90deg, var(--black) 0%, rgba(13,13,13,.97) 30%, rgba(13,13,13,.72) 54%, rgba(13,13,13,.04) 100%), linear-gradient(180deg, transparent 55%, var(--black) 100%);
                }

                @media (max-width: 900px) {
                    .product-image img { max-height: 360px; }
                    .story-image img { max-height: 380px; }
                }
                @media (max-width: 640px) {
                    .navbar {
                        background: rgba(13, 13, 13, .5);
                        backdrop-filter: blur(14px);
                        -webkit-backdrop-filter: blur(14px);
                    }
                    /* Mobile hero: foto come sfondo e contenuto sovrapposto */
                    .hero {
                        position: relative;
                        min-height: 590px;
                        height: 88svh;
                        max-height: 760px;
                        padding: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                        isolation: isolate;
                    }
                    .hero-background {
                        position: absolute !important;
                        inset: 0 !important;
                        width: 100% !important;
                        height: 100% !important;
                        opacity: .42 !important;
                        background-size: contain !important;
                        background-repeat: no-repeat !important;
                        background-position: center 48% !important;
                        transform: none !important;
                        z-index: 0;
                    }
                    .hero-overlay {
                        position: absolute !important;
                        inset: 0 !important;
                        z-index: 1;
                        background: linear-gradient(180deg, rgba(13,13,13,.22) 0%, rgba(13,13,13,.38) 42%, rgba(13,13,13,.72) 75%, var(--black) 100%) !important;
                    }
                    .hero-content {
                        position: relative;
                        z-index: 2;
                        width: calc(100% - 40px);
                        margin: 0 auto;
                        padding: 80px 0 35px;
                        align-items: center;
                        text-align: center;
                    }
                    .hero-title { font-size: clamp(3.5rem, 16vw, 5.2rem); }
                    .hero-description { max-width: 290px; }
                    .hero-button { margin-top: 12px; }
                    .product-image,
                    .story-image {
                        width: 100%;
                        height: auto !important;
                        max-height: none !important;
                        background: transparent !important;
                        border: 0 !important;
                    }
                    .product-image img {
                        width: 100%;
                        height: auto !important;
                        max-height: 310px;
                        object-fit: contain !important;
                    }
                    .story-image img {
                        width: 100%;
                        height: auto !important;
                        max-height: 320px;
                        object-fit: contain !important;
                    }
                }

            `}</style>

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