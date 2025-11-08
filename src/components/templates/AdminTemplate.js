import React from 'react';
import SidebarAdmin from '../organisms/SidebarAdmin';

function AdminTemplate({ children }) {
    return (
        <main>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <SidebarAdmin />
                    <div className="col py-4 mx-5">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default AdminTemplate;
