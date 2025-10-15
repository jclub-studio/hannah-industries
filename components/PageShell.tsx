
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const PageShell: React.FC = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="bg-slate-900 text-gray-200 min-h-screen flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
            <Header />
            <main className="flex-grow pt-28 md:pt-32"> 
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default PageShell;