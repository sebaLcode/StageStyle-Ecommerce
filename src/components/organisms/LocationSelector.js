import React, { useState } from 'react';
import SelectGroup from '../molecules/SelectGroup';
import regiones  from '../../data/locationData';

function LocationSelector({ onLocationChange, regionValue, comunaValue }) {
   const regionOptions = [
        { value: '', label: 'Seleccionar región' },
        ...regiones.regiones.map(r => ({ value: r.region, label: r.region })),
    ];

    const selectedRegionData = regiones.regiones.find(r => r.region === regionValue);
    const availableCommunes = selectedRegionData ? selectedRegionData.comunas : [];

    const comunaOptions = [
        { value: '', label: 'Seleccionar comuna' },
        ...availableCommunes.map(c => ({ value: c, label: c })),
    ];

    return (
        <>
            <SelectGroup
                label="Región"
                value={regionValue}
                onChange={onLocationChange}
                options={regionOptions}
                required
                name="region"
            />
            <SelectGroup
                label="Comuna"
                value={comunaValue}
                onChange={onLocationChange}
                options={comunaOptions}
                required
                disabled={!regionValue} // Se deshabilita si no hay región seleccionada
                name="comuna"
            />
        </>
    );
}

export default LocationSelector;