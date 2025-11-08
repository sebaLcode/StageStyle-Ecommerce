import React, { useState } from "react";
import FormGroup from "../molecules/FormGroup";
import Button from "../atoms/Button";
import productos from "../../data/productsData";

const AdminProductForm = () => {
    const [formData, setFormData] = useState({
        id: "",
        badge: "",
        image: "",
        title: "",
        description: "",
        price: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let isValid = true;

        switch (name) {
            case "id":
                isValid = value.trim().length >= 1;
                break;
            case "title":
                isValid = value.trim().length > 0 && value.length <= 100;
                break;
            case "description":
                isValid = value.length <= 500;
                break;
            case "price":
                isValid = !isNaN(parseFloat(value)) && parseFloat(value) >= 0;
                break;
            // case "image":
            //     isValid = value.trim() === "" || /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(value);
            //     break;
            default:
                break;
        }
        setErrors((prev) => ({ ...prev, [name]: isValid }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const allValid = Object.values(errors).every((v) => v === true);

        if (!allValid) {
            alert("Por favor corrige los campos marcados en rojo.");
            return;
        }

        const nuevoProducto = {
            id: formData.id.trim(),
            badge: formData.badge.trim(),
            image: formData.image.trim(),
            title: formData.title.trim(),
            description: formData.description.trim(),
            price: parseFloat(formData.price),
        };

        productos.push(nuevoProducto);
        localStorage.setItem("productos", JSON.stringify(productos));

        alert("Se añadió correctamente el producto.");
        console.log("Nuevo producto:", nuevoProducto);

        setFormData({
            id: "",
            badge: "",
            image: "",
            title: "",
            description: "",
            price: "",
        });
        setErrors({});
    };

    return (
        <div className="card p-4 mx-auto" style={{ maxWidth: "900px" }}>
            <h3 className="text-center mb-4 fw-bold">Registro de producto</h3>

            <form onSubmit={handleSubmit}>
                <FormGroup
                    label="ID del producto"
                    type="text"
                    name="id"
                    placeholder="Ej: 1"
                    value={formData.id}
                    onChange={handleChange}
                    required
                    isValid={errors.id}
                    isInvalid={formData.id && errors.id === false}
                />

                <FormGroup
                    label="Badge"
                    type="text"
                    name="badge"
                    placeholder="Ej: Blackpink"
                    value={formData.badge}
                    onChange={handleChange}
                />

                <FormGroup
                    label="Imagen principal (URL)"
                    type="url"
                    name="image"
                    placeholder="https://..."
                    value={formData.image}
                    onChange={handleChange}
                    isValid={errors.image}
                    isInvalid={formData.image && errors.image === false}
                />

                <FormGroup
                    label="Título del producto"
                    type="text"
                    name="title"
                    placeholder="Ej: Chaleco Ta..."
                    value={formData.title}
                    onChange={handleChange}
                    required
                    isValid={errors.title}
                    isInvalid={formData.title && errors.title === false}
                />

                <FormGroup
                    label="Descripción"
                    type="text"
                    name="description"
                    placeholder="Ej: Conjunto especial de Ta..."
                    value={formData.description}
                    onChange={handleChange}
                    isValid={errors.description}
                    isInvalid={formData.description && errors.description === false}
                />

                <FormGroup
                    label="Precio"
                    type="number"
                    name="price"
                    placeholder="Ej: 12990"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    isValid={errors.price}
                    isInvalid={formData.price && errors.price === false}
                />

                <div className="d-flex justify-content-center mt-4">
                    <Button type="submit" variant="dark" className="w-50">
                        Añadir producto
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AdminProductForm;
