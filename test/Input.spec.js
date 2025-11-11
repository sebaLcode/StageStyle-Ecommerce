import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "../src/components/atoms/Input";

describe("Átomo Input", () => {
    it("debería renderizar correctamente", () => {
        const { getByPlaceholderText } = render(<Input placeholder="Escribe aquí" />);
        const input = getByPlaceholderText("Escribe aquí");
        expect(input).not.toBeNull();
    });

    it("debería actualizar el valor al escribir", () => {
        const handleChange = jasmine.createSpy("handleChange");
        const { getByPlaceholderText } = render(<Input placeholder="Nombre" onChange={handleChange} />);
        const input = getByPlaceholderText("Nombre");
        fireEvent.change(input, { target: { value: "Sebastián" } });
        expect(handleChange).toHaveBeenCalled();
    });

    it("debería aplicar clases según la validación", () => {
        const { getByPlaceholderText, rerender } = render(<Input placeholder="Email" isValid />);
        const input = getByPlaceholderText("Email");
        expect(input.className).toContain("is-valid");

        rerender(<Input placeholder="Email" isInvalid />);
        expect(input.className).toContain("is-invalid");
    });
});
