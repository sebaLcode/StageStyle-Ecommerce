import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from '../src/components/atoms/Select';

describe('Átomo Select', () => {
    const options = [
        { value: '', label: 'Seleccione una opción' },
        { value: '1', label: 'Opción 1' },
        { value: '2', label: 'Opción 2' },
    ];

    it('debería renderizar todas las opciones correctamente', () => {
        render(<Select options={options} />);
        const renderedOptions = screen.getAllByRole('option');
        expect(renderedOptions.length).toBe(options.length);
        expect(renderedOptions[1].textContent).toBe('Opción 1');
        expect(renderedOptions[2].textContent).toBe('Opción 2');
    });

    it('debería tener el valor seleccionado correctamente', () => {
        render(<Select value="2" onChange={() => { }} options={options} />);
        const select = screen.getByRole('combobox');
        expect(select.value).toBe('2');
    });

    it('debería llamar a onChange cuando cambia la selección', () => {
        const handleChange = jasmine.createSpy('handleChange');
        render(<Select value="" options={options} onChange={handleChange} />);
        const select = screen.getByRole('combobox');
        fireEvent.change(select, { target: { value: '1' } });
        expect(handleChange).toHaveBeenCalled();
    });

    it('debería estar deshabilitado si se pasa la prop disabled', () => {
        render(<Select disabled options={options} onChange={() => { }} />);
        const select = screen.getByRole('combobox');
        expect(select.disabled).toBeTrue();
    });

    it('debería requerir selección si se pasa la prop required', () => {
        render(<Select required options={options} onChange={() => { }} />);
        const select = screen.getByRole('combobox');
        expect(select.required).toBeTrue();
    });
});
