import React, { useState, useEffect } from 'react';
import FormGroup from '../molecules/FormGroup';
import Button from '../atoms/Button';
import regionesData from '../../data/locationData';
import { userService } from '../../services/userService';

const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|duoc\.cl|stagestyle\.com|profesor\.duoc\.cl)$/;

const AdminUserForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        password: '',
        passwordConfirm: '',
        telefono: '',
        region: '',
        comuna: '',
        tipoUsuario: '',
    });

    const [touched, setTouched] = useState({});
    const [valid, setValid] = useState({});
    const [comunas, setComunas] = useState([]);
    const [loading, setLoading] = useState(false);

    const validateField = (name, value, data = formData) => {
        switch (name) {
            case 'nombre': return value.trim().length > 0 && value.length <= 150;
            case 'email': return emailRegex.test(value) && value.length <= 100;
            case 'password': return value.length >= 6; 
            case 'passwordConfirm': return value.length > 0 && value === data.password;
            case 'region': return value !== '';
            case 'comuna': return value !== '';
            case 'tipoUsuario': return value !== '';
            case 'telefono': return true;
            default: return true;
        }
    };

    const validateAll = (data = formData) => {
        const fields = Object.keys(data);
        const nextValid = {};
        fields.forEach((f) => (nextValid[f] = validateField(f, data[f], data)));
        setValid(nextValid);
        return Object.values(nextValid).every(Boolean);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const nextData = name === 'region'
            ? { ...formData, region: value, comuna: '' }
            : { ...formData, [name]: value };

        setFormData(nextData);
        setTouched((t) => ({ ...t, [name]: true }));
        if (name === 'region') setTouched((t) => ({ ...t, comuna: false }));

        setValid((v) => ({
            ...v,
            [name]: validateField(name, value, nextData),
            ...(name === 'password' ? { passwordConfirm: validateField('passwordConfirm', nextData.passwordConfirm, nextData) } : {}),
            ...(name === 'passwordConfirm' ? { passwordConfirm: validateField('passwordConfirm', value, nextData) } : {})
        }));
    };

    useEffect(() => {
        if (formData.region) {
            const regionSel = regionesData.regiones.find((r) => r.region === formData.region);
            setComunas(regionSel ? regionSel.comunas : []);
        } else {
            setComunas([]);
        }
    }, [formData.region]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const allTouched = Object.keys(formData).reduce((acc, k) => ({ ...acc, [k]: true }), {});
        setTouched(allTouched);

        if (validateAll()) {
            setLoading(true);

            const nuevoUsuario = {
                nombre: formData.nombre.trim(),
                email: formData.email.trim(),
                password: formData.password.trim(),
                telefono: formData.telefono.trim(),
                region: formData.region.trim(),
                comuna: formData.comuna.trim(),
                tipoUsuario: formData.tipoUsuario.trim(),
            };

            try {
                await userService.createUser(nuevoUsuario);

                alert(`Usuario ${nuevoUsuario.nombre} (${nuevoUsuario.tipoUsuario}) creado exitosamente.`);
                setFormData({
                    nombre: '', email: '', password: '', passwordConfirm: '',
                    telefono: '', region: '', comuna: '', tipoUsuario: '',
                });
                setTouched({});
                setValid({});
                setComunas([]);

            } catch (error) {
                console.error("Error creando usuario:", error);
                alert("Error al crear usuario: " + error.message);
            } finally {
                setLoading(false);
            }
        } else {
            alert("Por favor corrige los errores en el formulario.");
        }
    };

    const selectClass = (field) =>
        touched[field] ? (valid[field] ? 'is-valid' : 'is-invalid') : '';

    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-12 col-lg-8 col-xl-6 mx-auto">
                    <div className="card p-4 shadow-sm">
                        <h3 className="text-center mb-4">Registro de usuario (Admin)</h3>

                        <form onSubmit={handleSubmit}>

                            <FormGroup
                                label="Nombre completo" type="text" name="nombre"
                                placeholder="Ingresa el nombre completo"
                                value={formData.nombre} onChange={handleChange} required
                                isValid={touched.nombre && valid.nombre}
                                isInvalid={touched.nombre && !valid.nombre}
                            />

                            <FormGroup
                                label="Correo electrónico" type="email" name="email"
                                placeholder="example@stagestyle.com"
                                value={formData.email} onChange={handleChange} required
                                isValid={touched.email && valid.email}
                                isInvalid={touched.email && !valid.email}
                            />

                            <FormGroup
                                label="Contraseña" type="password" name="password"
                                placeholder="Mínimo 6 caracteres"
                                value={formData.password} onChange={handleChange} required
                                isValid={touched.password && valid.password}
                                isInvalid={touched.password && !valid.password}
                            />

                            <FormGroup
                                label="Confirmar contraseña" type="password" name="passwordConfirm"
                                placeholder="Repite la contraseña"
                                value={formData.passwordConfirm} onChange={handleChange} required
                                isValid={touched.passwordConfirm && valid.passwordConfirm}
                                isInvalid={touched.passwordConfirm && !valid.passwordConfirm}
                            />

                            <FormGroup
                                label="Teléfono (opcional)" type="tel" name="telefono"
                                placeholder="+56 9 ..."
                                value={formData.telefono} onChange={handleChange}
                            />

                            <div className="row">
                                <div className="col mb-3">
                                    <label className="form-label">Región</label>
                                    <select
                                        name="region" className={`form-select ${selectClass('region')}`}
                                        value={formData.region} onChange={handleChange} required
                                    >
                                        <option value="">Seleccionar región</option>
                                        {regionesData.regiones.map((r) => (
                                            <option key={r.region} value={r.region}>{r.region}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col mb-3">
                                    <label className="form-label">Comuna</label>
                                    <select
                                        name="comuna" className={`form-select ${selectClass('comuna')}`}
                                        value={formData.comuna} onChange={handleChange} required
                                        disabled={!formData.region}
                                    >
                                        <option value="">Seleccionar comuna</option>
                                        {comunas.map((c) => (
                                            <option key={c} value={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Tipo de usuario</label>
                                <select
                                    name="tipoUsuario" className={`form-select ${selectClass('tipoUsuario')}`}
                                    value={formData.tipoUsuario} onChange={handleChange} required
                                >
                                    <option value="">Seleccionar tipo</option>
                                    <option value="Administrador">Administrador</option>
                                    <option value="Vendedor">Vendedor</option>
                                    <option value="Cliente">Cliente</option>
                                </select>
                            </div>

                            <div className="d-flex justify-content-center mt-4">
                                <Button type="submit" variant="dark" className="w-50" disabled={loading}>
                                    {loading ? 'Creando...' : 'Registrar Usuario'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminUserForm;