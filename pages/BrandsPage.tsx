import React from 'react';
import Card from '../components/Card';

const StrainPill: React.FC<{name: string}> = ({ name }) => (
    <span className="inline-block bg-emerald-900/50 text-emerald-300 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full">{name}</span>
);

const DawgStarStrains = ["Stacy's Mom", "Critical Purple Kush", "Strawberry Banana", "Unicorn Haze", "Amsterdam Haze", "Purple Panty Dropper"];
const WesternCulturedStrains = ["Glacier Glue", "Mega Jackpot", "Seatown Lemon Haze", "Puget Sound Lopez", "Dog Walker OG"];

const BrandsPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
            <header className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">Our Family of Brands</h1>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                    A diverse portfolio of award-winning cannabis products, each with a unique identity and commitment to quality.
                </p>
            </header>

            {/* Dawg Star Cannabis */}
            <section className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-2">
                    <img src="https://pbs.twimg.com/profile_images/926534820057845760/RmMkcOg5_400x400.jpg" alt="Dawg Star Cannabis" className="rounded-lg shadow-2xl bg-black w-full h-64 object-contain p-4"/>
                </div>
                <div className="md:col-span-3">
                    <Card title="Dawg Star Cannabis">
                        <p className="italic text-gray-400">"Premium Hand Grown Cannabis" - Established 2013</p>
                        <p>Dawg Star embodies an artisan approach to cultivation, focusing on meticulous care and attention to detail to produce some of the finest hand-grown cannabis in Washington.</p>
                        <h4 className="font-semibold text-white mt-4">Signature Strains:</h4>
                        <div>{DawgStarStrains.map(s => <StrainPill key={s} name={s}/>)}</div>
                        <h4 className="font-semibold text-white mt-4">Product Categories:</h4>
                        <p className="text-sm">Premium Flower (1g-7g), Pre-rolls & Infused Blunts, Concentrates & Wax, Disposable Vape Cartridges.</p>
                    </Card>
                </div>
            </section>

            {/* Western Cultured */}
            <section className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-3 md:order-2">
                    <Card title="Western Cultured">
                        <p className="italic text-gray-400">"Light Up The Moment™"</p>
                        <p>Western Cultured is dedicated to naturally grown cannabis, utilizing best practices in cultivation to deliver a consistent and enjoyable experience for any moment.</p>
                        <h4 className="font-semibold text-white mt-4">Featured Strains:</h4>
                        <div>{WesternCulturedStrains.map(s => <StrainPill key={s} name={s}/>)}</div>
                        <h4 className="font-semibold text-white mt-4">Product Range:</h4>
                        <p className="text-sm">Premium Flower (1g-7g), Pre-roll Packs, CO2 Cartridges, Wax Concentrates.</p>
                    </Card>
                </div>
                 <div className="md:col-span-2 md:order-1">
                    <img src="https://headset.imgix.net/brands/81-logo-_logo.jpg" alt="Western Cultured" className="rounded-lg shadow-2xl bg-black w-full h-64 object-contain p-4"/>
                </div>
            </section>
            
             {/* Specialty Products */}
            <section>
                 <h2 className="text-3xl font-bold text-center mb-10">Specialty Products</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <Card title="Rosin Pearls"><p>Exquisite hand-pressed kief extractions offering a pure and potent concentrate experience.</p></Card>
                     <Card title="Nitro Whips"><p>A unique line of flavored concentrate products, providing a burst of taste and effect.</p></Card>
                     <Card title="Infused Products"><p>A variety of offerings with enhanced potency for experienced consumers.</p></Card>
                 </div>
            </section>
        </div>
    );
};

export default BrandsPage;