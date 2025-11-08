import React from 'react';
import AdminProductTemplate from '../../components/templates/AdminProductTemplate';
import AdminProductForm from '../../components/organisms/AdminProductForm';

const AdminNewProduct = () => {
    return (
        <AdminProductTemplate>
            <AdminProductForm />
        </AdminProductTemplate>
    );
};

export default AdminNewProduct;