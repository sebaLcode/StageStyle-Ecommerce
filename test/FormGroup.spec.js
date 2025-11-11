import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FormGroup from "../src/components/molecules/FormGroup";

describe("Molécula FormGroup", () => {
    it("debería renderizar el label e input correctamente", () => {
        const { getByText, container } = render(
            <FormGroup label="Correo" name="email" type="email" placeholder="Ej: ejemplo@correo.com" />
        );
        const label = getByText("Correo");
        const input = container.querySelector("input[name='email']");
        expect(label).toBeTruthy();
        expect(input).toBeTruthy();
        expect(input.getAttribute("placeholder")).toBe("Ej: ejemplo@correo.com");
    });

    it("debería ejecutar onChange cuando cambia el valor", () => {
        const handleChange = jasmine.createSpy("handleChange");
        const { container } = render(
            <FormGroup label="Nombre" name="nombre" type="text" onChange={handleChange} />
        );
        const input = container.querySelector("input[name='nombre']");
        fireEvent.change(input, { target: { value: "Sebastián" } });
        expect(handleChange).toHaveBeenCalled();
    });
});
