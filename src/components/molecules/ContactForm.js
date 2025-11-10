import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nombreCompleto: "",
        email: "",
        contenido: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Datos del formulario:", formData);
        alert("Mensaje enviado correctamente");

        setFormData({
            nombreCompleto: "",
            email: "",
            contenido: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
            <h2 className="text-center mb-4 fw-bold">Formulario de Contacto</h2>

            <div className="mb-3 text-start">
                <label className="form-label fw-semibold">Nombre Completo</label>
                <Input
                    type="text"
                    name="nombreCompleto"
                    placeholder="Ingresa tu nombre completo"
                    value={formData.nombreCompleto}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3 text-start">
                <label className="form-label fw-semibold">Correo Electrónico</label>
                <Input
                    type="email"
                    name="email"
                    placeholder="ejemplo@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3 text-start">
                <label className="form-label fw-semibold">Mensaje</label>
                <textarea
                    className="form-control"
                    name="contenido"
                    placeholder="Escribe tu mensaje acá..."
                    rows="5"
                    value={formData.contenido}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>

            <div className="d-grid mt-4">
                <Button type="submit" variant="primary">
                    Enviar mensaje
                </Button>
            </div>
        </form>
    );
};

export default ContactForm;
