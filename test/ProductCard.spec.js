import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductCard from '../src/components/molecules/ProductCard';

describe('Molécula ProductCard', () => {
    const mockProduct = {
        id: 101,
        badge: 'Nuevo',
        image: 'https://example.com/img.png',
        alt: 'Imagen de producto',
        title: 'Polera StageStyle',
        description: 'Polera 100% algodón con diseño exclusivo',
        price: 19990,
    };

    it('debería renderizar el título, descripción y precio', () => {
        render(
            <MemoryRouter>
                <ProductCard product={mockProduct} />
            </MemoryRouter>
        );

        expect(screen.getByText('Polera StageStyle')).toBeTruthy();
        expect(screen.getByText(/algodón/i)).toBeTruthy();
        expect(screen.getByText(/\$|19990/)).toBeTruthy();
    });

    it('debería mostrar la insignia del producto (Badge)', () => {
        render(
            <MemoryRouter>
                <ProductCard product={mockProduct} />
            </MemoryRouter>
        );

        expect(screen.getByText('Nuevo')).toBeTruthy();
    });

    it('debería mostrar la imagen con el atributo alt correcto', () => {
        render(
            <MemoryRouter>
                <ProductCard product={mockProduct} />
            </MemoryRouter>
        );

        const image = screen.getByAltText('Imagen de producto');
        expect(image).toBeTruthy();
        expect(image.getAttribute('src')).toBe(mockProduct.image);
    });

    it('debería tener un enlace funcional al detalle del producto', () => {
        render(
            <MemoryRouter>
                <ProductCard product={mockProduct} />
            </MemoryRouter>
        );

        const link = screen.getByRole('link', { name: /ver detalles/i });
        expect(link).toBeTruthy();
        expect(link.getAttribute('href')).toBe(`/detalle-producto/${mockProduct.id}`);
    });

    it('debería contener la clase de tarjeta base', () => {
        render(
            <MemoryRouter>
                <ProductCard product={mockProduct} />
            </MemoryRouter>
        );

        const card = screen.getByRole('link', { name: /ver detalles/i }).closest('.card');
        expect(card.className).toContain('product-card');
    });
});