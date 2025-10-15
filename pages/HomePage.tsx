
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { ICONS } from '../constants';

const HomePage: React.FC = () => {

    const brands = [
        { name: "Dawg Star Cannabis", description: "Premium hand-grown cannabis", img: "https://pbs.twimg.com/profile_images/926534820057845760/RmMkcOg5_400x400.jpg" },
        { name: "Western Cultured", description: "Light up the moment™", img: "https://headset.imgix.net/brands/81-logo-_logo.jpg" },
    ];
    
    const valueProps = [
        { title: "Premium Quality", description: "Hand-trimmed, indoor-grown cannabis with an artisan approach." },
        { title: "Advanced Technology", description: "Utilizing Agrify Vertical Farming Units for consistency." },
        { title: "Sustainable Practices", description: "Environmentally conscious cultivation methods." },
        { title: "Regulatory Compliance", description: "Full I-502 licensing and state compliance." },
    ];

    const stats = [
        { icon: ICONS.CALENDAR, value: "2017", label: "Operating Since" },
        { icon: ICONS.FACILITY, value: "30,000+", label: "Sq Ft Facility" },
        { icon: ICONS.PARTNERS, value: "150+", label: "Retail Partners" },
        { icon: ICONS.LICENSE, value: "Tier 2", label: "Producer/Processor" },
    ];

    return (
        <div className="space-y-16 md:space-y-24 pb-16">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white -mt-28 md:-mt-32">
                <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
                <img src="https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/494f4e3e-9098-5164-a775-78815e67c42b/23d92528-aa52-529b-984c-110f9cd60093.jpg" alt="Cannabis cultivation facility" className="absolute inset-0 w-full h-full object-cover"/>
                <div className="relative z-20 p-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-shadow-lg">
                        Premium Cannabis Cultivation & Processing
                    </h1>
                    <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-4xl mx-auto">
                        Hannah Industries - Home to Dawg Star Cannabis & Western Cultured
                    </p>
                    <Link to="/brands" className="mt-8 inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105">
                        Explore Our Brands
                    </Link>
                </div>
            </section>
            
            {/* Key Stats Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map(stat => (
                        <div key={stat.label} className="flex flex-col items-center">
                            {stat.icon}
                            <p className="text-3xl md:text-4xl font-bold text-white mt-2">{stat.value}</p>
                            <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Value Propositions */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Commitment to Excellence</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {valueProps.map(prop => (
                         <Card key={prop.title} title={prop.title}>
                             <p>{prop.description}</p>
                         </Card>
                     ))}
                 </div>
            </section>

            {/* Brand Portfolio */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Award-Winning Brands</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {brands.map(brand => (
                        <div key={brand.name} className="group bg-slate-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-emerald-500/20 hover:-translate-y-2">
                            <img src={brand.img} alt={brand.name} className="w-full h-48 object-contain bg-black p-4 group-hover:opacity-80 transition-opacity" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-emerald-400">{brand.name}</h3>
                                <p className="text-gray-300 mt-2">{brand.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <Link to="/brands" className="text-emerald-400 hover:text-emerald-300 font-semibold text-lg">
                        Learn more about our brands &rarr;
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;