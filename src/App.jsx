import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import Menu from "./components/Menu";
import Story from "./components/Story"
import Location from "./components/Location";
import OrderCTA from "./components/OrderCTA";
import Footer from "./components/Footer";


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


export default App;