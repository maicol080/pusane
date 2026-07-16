import { useState, useRef } from "react";
import { Plus, X } from "lucide-react";
import MenuOverlay from "./MenuOverlay";


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


export default Navbar;