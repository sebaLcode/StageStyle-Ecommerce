import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarAdmin.css';

function SidebarAdmin() {
    const handleLogout = () => {
        localStorage.removeItem('usuarioLogueado');
        window.location.href = '/login';
    };

    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark sidebar">
            <div className="d-flex flex-column px-3 pt-2 text-white min-vh-100">

                <NavLink
                    to="/"
                    className="d-flex align-items-center mb-3 text-white text-decoration-none"
                >
                    <span className="fs-4">StageStyle</span>
                </NavLink>

                <hr className="w-100" />

                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start px-2">
                    {[
                        { to: '/admin', icon: 'bi-grid-3x2-gap-fill', label: 'Dashboard' },
                        { to: '/admin/orders', icon: 'bi-receipt', label: 'Orders' },
                        { to: '/admin/inventory', icon: 'bi-table', label: 'Inventory' },
                        { to: '/admin/reports', icon: 'bi-file-earmark-bar-graph', label: 'Reports' },
                        { to: '/admin/employees', icon: 'bi-person', label: 'Employees' },
                        { to: '/admin/customers', icon: 'bi-people', label: 'Customers' },
                    ].map((item, i) => (
                        <li key={i} className="nav-item w-100">
                            <NavLink
                                to={item.to}
                                end
                                className={({ isActive }) =>
                                    `nav-link d-flex align-items-center gap-2 px-2 py-2 text-white ${isActive ? 'active' : ''
                                    }`
                                }
                            >
                                <i className={`fs-4 bi ${item.icon}`}></i>
                                <span className="ms-1 d-none d-sm-inline">{item.label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>


                <div className="mt-auto">
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0">
                        {[
                            // { to: '/admin/settings', icon: 'bi-gear', label: 'Settings' },
                            // { to: '/admin/profile', icon: 'bi-person-circle', label: 'Profile' },
                            // { to: '/admin/search', icon: 'bi-search', label: 'Search' },
                            { to: '/admin/help', icon: 'bi-question-circle', label: 'Help' },
                        ].map((item, i) => (
                            <li key={i}>
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `nav-link d-flex align-items-center gap-2 px-2 py-2 text-white ${isActive ? 'active' : ''
                                        }`
                                    }
                                >
                                    <i className={`fs-4 bi ${item.icon}`}></i>
                                    <span className="ms-1 d-none d-sm-inline">{item.label}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <hr className="w-100" />

                <div className="dropdown pb-4">
                    <button
                        className="btn dropdown-toggle text-white d-flex align-items-center text-decoration-none"
                        id="dropdownUser1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ background: 'none', border: 'none' }}
                    >
                        <i className="fs-4 bi bi-person-circle"></i>
                        <span className="d-none d-sm-inline mx-1">Profile</span>
                    </button>

                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><button className="dropdown-item">Settings</button></li>
                        <li><button className="dropdown-item">Profile</button></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                            <button className="dropdown-item" onClick={handleLogout}>
                                Sign out
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SidebarAdmin;
