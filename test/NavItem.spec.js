import React from "react";
import { render } from "@testing-library/react";
import NavItem from "../src/components/molecules/NavItem";

describe("Componente NavItem", () => {

    it("debería renderizar un enlace normal correctamente", () => {
        const { getByText } = render(<NavItem href="/contacto">Contacto</NavItem>);
        const link = getByText("Contacto").closest("a");
        expect(link).not.toBeNull();
        expect(link.getAttribute("href")).toBe("/contacto");
        expect(link.className).toContain("nav-link");
    });

    it("debería renderizar un item de tipo dropdown con sus clases", () => {
        const { getByText } = render(
            <NavItem href="#" isDropdown dropdownItems={[]}>
                Productos
            </NavItem>
        );
        const link = getByText("Productos").closest("a");
        expect(link.className).toContain("dropdown-toggle");
        expect(link.getAttribute("data-bs-toggle")).toBe("dropdown");
        expect(link.getAttribute("role")).toBe("button");
    });

    it("debería renderizar todos los elementos dentro del dropdown", () => {
        const items = [
            { href: "/camisetas", label: "Camisetas" },
            { href: "/hoodies", label: "Hoodies" },
            { href: "/accesorios", label: "Accesorios" },
            { href: "/colecciones-especiales", label: "Colecciones Especiales" }
        ];

        const { getByText } = render(
            <NavItem href="#" isDropdown dropdownItems={items}>
                Productos
            </NavItem>
        );

        items.forEach((item) => {
            const element = getByText(item.label).closest("a");
            expect(element.getAttribute("href")).toBe(item.href);
            expect(element.className).toContain("dropdown-item");
        });
    });

    it("debería tener una lista ul dentro del dropdown", () => {
        const items = [{ href: "/accesorios", label: "Accesorios" }];
        const { container } = render(
            <NavItem href="#" isDropdown dropdownItems={items}>
                Tienda
            </NavItem>
        );

        const ul = container.querySelector("ul.dropdown-menu");
        expect(ul).not.toBeNull();
    });
});
