// src/test/Button.spec.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../src/components/atoms/Button';

describe("Átomo Button", () => {
    it("debería renderizar el texto correctamente", () => {
        const { getByText } = render(<Button>Haz clic</Button>);
        expect(getByText("Haz clic")).toBeTruthy();
    });

    it("debería ejecutar la función onClick cuando se clickea", () => {
        const handleClick = jasmine.createSpy("handleClick");
        const { getByText } = render(<Button onClick={handleClick}>Presionar</Button>);

        fireEvent.click(getByText("Presionar"));
        expect(handleClick).toHaveBeenCalled();
    });

    it("debería aplicar la clase del variant correctamente", () => {
        const { getByText } = render(<Button variant="dark">Botón oscuro</Button>);
        const button = getByText("Botón oscuro");
        expect(button.className).toContain("btn-dark");
    });

    it("debería tener el atributo type correcto", () => {
        const { getByText } = render(<Button type="submit">Enviar</Button>);
        const button = getByText("Enviar");
        expect(button.getAttribute("type")).toBe("submit");
    });

    it("debería estar deshabilitado cuando se pasa la prop disabled", () => {
        const { getByText } = render(<Button disabled>Desactivado</Button>);
        const button = getByText("Desactivado");
        expect(button.disabled).toBeTrue();
    });
});