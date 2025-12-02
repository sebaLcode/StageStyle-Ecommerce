import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FormGroup from "../molecules/FormGroup";
import Button from "../atoms/Button";
import { productService } from "../../services/productService";

const AdminProductForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = Boolean(id);

    const [formData, setFormData] = useState({
        id: "",
        badge: "",
        image: "",
        title: "",
        description: "",
        details: "",
        sizes: "",
        price: "",
        originalPrice: "",
        category: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isEditing) {
            const loadProduct = async () => {
                try {
                    setIsLoading(true);
                    const product = await productService.getById(id);

                    setFormData({
                        id: product.id || "",
                        badge: product.badge || "",
                        image: product.image || "",
                        title: product.title || "",
                        description: product.description || "",
                        details: product.details || "",
                        sizes: Array.isArray(product.sizes) ? product.sizes.join(", ") : "",
                        price: product.price || "",
                        originalPrice: product.originalPrice || "",
                        category: product.category || "",
                    });
                } catch (error) {
                    console.error("Error cargando producto:", error);
                    alert("No se pudo cargar el producto para editar.");
                    navigate("/admin/inventory");
                } finally {
                    setIsLoading(false);
                }
            };
            loadProduct();
        }
    }, [id, isEditing, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let isValid = true;
        switch (name) {
            case "id": isValid = value.trim().length > 0; break;
            case "title": isValid = value.trim().length > 0 && value.length <= 100; break;
            case "description": isValid = value.length <= 500; break;
            case "details": isValid = value.length <= 300; break;
            case "price":
            case "originalPrice": isValid = !isNaN(parseFloat(value)) && parseFloat(value) >= 0; break;
            case "image": isValid = value.trim() === "" || /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/i.test(value); break;
            case "category": isValid = value.trim().length > 0; break;
            default: break;
        }
        setErrors((prev) => ({ ...prev, [name]: isValid }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requiredFields = ["id", "image", "title", "description", "price", "category"];
        let allValid = true;
        requiredFields.forEach((f) => {
            validateField(f, formData[f]);
            if (!formData[f] || errors[f] === false) allValid = false;
        });

        if (!allValid) {
            alert("Por favor corrige los campos en rojo.");
            return;
        }

        setIsSubmitting(true);

        const productoData = {
            id: formData.id,
            badge: formData.badge.trim(),
            image: formData.image.trim(),
            title: formData.title.trim(),
            description: formData.description.trim(),
            details: formData.details.trim(),
            sizes: formData.sizes.trim() !== "" ? formData.sizes.split(",").map((s) => s.trim()) : [],
            price: parseFloat(formData.price),
            originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : 0,
            category: formData.category.trim(),
        };

        try {
            if (isEditing) {
                await productService.update(id, productoData);
                alert("¡Producto actualizado correctamente!");
            } else {
                await productService.create(productoData);
                alert("¡Producto creado correctamente!");
                setFormData({
                    id: "", badge: "", image: "", title: "", description: "",
                    details: "", sizes: "", price: "", originalPrice: "", category: "",
                });
            }

            //navigate('/admin/inventory'); 

        } catch (error) {
            console.error("Error al guardar:", error);
            alert("Error al guardar: " + error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isLoading) return <div className="text-center mt-5"><div className="spinner-border text-primary"></div><p>Cargando datos...</p></div>;

    return (
        <div className="card p-4 mx-auto" style={{ maxWidth: "900px" }}>
            <h3 className="text-center mb-4 fw-bold">
                {isEditing ? "Editar Producto" : "Registro de Producto"}
            </h3>

            <form onSubmit={handleSubmit}>
                <FormGroup
                    label="ID del producto"
                    type="text"
                    name="id"
                    placeholder="Ej: 20"
                    value={formData.id}
                    onChange={handleChange}
                    required
                    disabled={isEditing}
                    isValid={errors.id}
                    isInvalid={formData.id && errors.id === false}
                />

                <FormGroup
                    label="Badge / Artista"
                    type="text"
                    name="badge"
                    placeholder="Ej: Jennie"
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
                    required
                />

                <FormGroup
                    label="Título del producto"
                    type="text"
                    name="title"
                    placeholder="Ej: Ruby Red Eye Baby Tee"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    isValid={errors.title}
                    isInvalid={formData.title && errors.title === false}
                />

                <FormGroup
                    label="Descripción breve"
                    type="text"
                    name="description"
                    placeholder="Ej: T-shirt unisex edición limitada"
                    value={formData.description}
                    onChange={handleChange}
                    isValid={errors.description}
                    isInvalid={formData.description && errors.description === false}
                    required
                />

                <FormGroup
                    label="Detalles (material, edición, etc.)"
                    type="text"
                    name="details"
                    placeholder="Ej: 100% algodón, edición especial"
                    value={formData.details}
                    onChange={handleChange}
                />

                <FormGroup
                    label="Tallas disponibles (separadas por coma)"
                    type="text"
                    name="sizes"
                    placeholder="Ej: S, M, L, XL"
                    value={formData.sizes}
                    onChange={handleChange}
                />

                <div className="row">
                    <div className="col-md-6">
                        <FormGroup
                            label="Precio actual"
                            type="number"
                            name="price"
                            placeholder="Ej: 29990"
                            value={formData.price}
                            onChange={handleChange}
                            required
                            isValid={errors.price}
                            isInvalid={formData.price && errors.price === false}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormGroup
                            label="Precio original"
                            type="number"
                            name="originalPrice"
                            placeholder="Ej: 34990"
                            value={formData.originalPrice}
                            onChange={handleChange}
                            isValid={errors.originalPrice}
                            isInvalid={
                                formData.originalPrice && errors.originalPrice === false
                            }
                        />
                    </div>
                </div>

                <FormGroup
                    label="Categoría"
                    as="select"
                    name="category"
                    placeholder="Ej: (Camiseta, Hoodie, Especial, Accesorio)"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    isValid={errors.category}
                    isInvalid={formData.category && errors.category === false}
                >
                    <option value="">Seleccionar categoría...</option>
                    <option value="Camiseta">Camiseta</option>
                    <option value="Polera">Polera</option>
                    <option value="Hoodie">Hoodie</option>
                    <option value="Accesorio">Accesorio</option>
                    <option value="Especial">Especial</option>
                </FormGroup>

                <div className="d-flex justify-content-center mt-4">
                    <Button
                        type="submit"
                        variant="dark"
                        className="w-50"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Guardando..." : (isEditing ? "Actualizar Producto" : "Añadir Producto")}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AdminProductForm;