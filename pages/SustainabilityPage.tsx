
import React from 'react';
import Card from '../components/Card';

const SustainabilityPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
            <header className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">Sustainability & Responsibility</h1>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                    Cultivating a greener future through responsible practices and community engagement.
                </p>
            </header>

            {/* Cultivation Practices */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-10">Responsible Cultivation Practices</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Card title="Controlled Environment">
                        <p>Our indoor growing facilities provide a controlled environment that optimizes resource use and minimizes environmental impact compared to traditional agriculture.</p>
                    </Card>
                    <Card title="Resource Efficiency">
                        <p>We employ advanced systems to optimize water and energy consumption, ensuring we use only what is necessary for healthy plant growth.</p>
                    </Card>
                    <Card title="Waste Reduction">
                        <p>We focus on sustainable management of our growing mediums and other production byproducts to reduce our overall waste footprint.</p>
                    </Card>
                    <Card title="Chemical Minimization">
                        <p>Our precision control over the growing environment allows us to minimize the need for synthetic inputs and pesticides where possible.</p>
                    </Card>
                </div>
            </section>

            {/* Environmental Initiatives */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-10">Environmental Initiatives</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card title="Energy Efficiency">
                        <p>We utilize energy-efficient LED lighting and optimized climate control systems to reduce our electricity consumption.</p>
                    </Card>
                    <Card title="Water Conservation">
                        <p>Our irrigation systems are designed for maximum efficiency, including recirculation and filtration technologies to conserve water.</p>
                    </Card>
                    <Card title="Sustainable Sourcing">
                        <p>We prioritize environmentally conscious packaging materials and support regional suppliers to reduce transportation emissions.</p>
                    </Card>
                </div>
            </section>

            {/* Community Impact */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-10">Community Impact</h2>
                <Card>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div>
                            <p className="text-3xl font-bold text-emerald-400">Local Employment</p>
                            <p>Creating jobs and career opportunities within our Washington communities.</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-emerald-400">Economic Development</p>
                            <p>Contributing significantly to state and local tax revenue.</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-emerald-400">Industry Leadership</p>
                            <p>Setting high standards for responsible and sustainable business practices.</p>
                        </div>
                    </div>
                </Card>
            </section>
        </div>
    );
};

export default SustainabilityPage;
