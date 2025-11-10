import React from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import ContactForm from "../molecules/ContactForm";

const ContactPage = () => {
    return (
        <>
            <Navbar />
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h1 className="fw-bold">Contáctanos</h1>
                    {/* <p className="text-muted">
                        ¿Tienes DUDAS o sugerencias? Envíanos un mensaje y te respondemos en la brevedad.
                    </p> */}
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <ContactForm />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;
