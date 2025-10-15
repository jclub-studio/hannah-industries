
import React from 'react';
import Card from '../components/Card';

const DistributionPage: React.FC = () => {
    
    const keyPartners = [
        "Zips Cannabis (Multiple locations)",
        "The Joint (Everett)",
        "Locals Canna House",
        "Cinder (Spokane locations)",
        "Green Head Cannabis",
    ];

    const productCats = ["Premium Flower", "Pre-Rolls", "Concentrates (Wax, Rosin)", "CO2 Cartridges", "Edibles", "Specialty Items"];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
            <header className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">Distribution & Retail Partners</h1>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                    Bringing our premium cannabis products to over 150 retail locations across Washington State.
                </p>
            </header>

            {/* Market Reach */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-10">Our Market Reach</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-slate-800 p-6 rounded-lg">
                        <p className="text-4xl font-extrabold text-emerald-400">150+</p>
                        <p className="text-gray-300">Retail Locations</p>
                    </div>
                     <div className="bg-slate-800 p-6 rounded-lg">
                        <p className="text-4xl font-extrabold text-emerald-400">#61</p>
                        <p className="text-gray-300">Ranked in Wholesale</p>
                    </div>
                     <div className="bg-slate-800 p-6 rounded-lg">
                        <p className="text-4xl font-extrabold text-emerald-400">Statewide</p>
                        <p className="text-gray-300">Geographic Coverage</p>
                    </div>
                </div>
            </section>

            {/* Key Retail Partners */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-10">Key Retail Partners</h2>
                <Card>
                    <p className="mb-4">We are proud to partner with some of the best cannabis retailers in the state. Look for our brands at these and many other fine establishments:</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {keyPartners.map(partner => (
                            <span key={partner} className="bg-slate-700 text-gray-200 px-4 py-2 rounded-md shadow-md">{partner}</span>
                        ))}
                    </div>
                </Card>
            </section>
            
            {/* Product Categories */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-10">Product Categories Distributed</h2>
                <Card>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {productCats.map(cat => (
                            <div key={cat} className="flex items-center space-x-2">
                                <svg className="h-5 w-5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                <span>{cat}</span>
                            </div>
                        ))}
                    </div>
                </Card>
            </section>
        </div>
    );
};

export default DistributionPage;
