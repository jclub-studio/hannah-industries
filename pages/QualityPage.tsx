
import React from 'react';
import Card from '../components/Card';

const QualityPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
            <header className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">Quality & Compliance</h1>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                    Upholding the highest standards of safety, purity, and consistency in every product we create.
                </p>
            </header>

            {/* Regulatory Compliance */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-10">Regulatory Compliance</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card title="I-502 Licensed">
                        <p>Hannah Industries operates in full compliance with all Washington State regulations under the I-502 framework.</p>
                    </Card>
                    <Card title="Tier 2 Producer/Processor">
                        <p>We hold a Tier 2 license, permitting us for both large-scale cannabis cultivation and professional processing.</p>
                    </Card>
                    <Card title="Seed-to-Sale Tracking">
                        <p>Our complete traceability system ensures every product can be tracked from its origin to the point of sale, guaranteeing transparency and safety.</p>
                    </Card>
                </div>
            </section>

            {/* Quality Standards */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-10">Our Quality Standards</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card title="Hand-Trimmed Flower">
                        <p>All of our cannabis flower is meticulously hand-trimmed by our expert team. This process preserves the delicate trichomes and ensures the highest quality appearance, aroma, and potency.</p>
                    </Card>
                    <Card title="Indoor Cultivation">
                        <p>Our climate-controlled indoor growing environments allow for uniform quality year-round. We have precise control over every variable, resulting in a consistent and premium final product.</p>
                    </Card>
                </div>
            </section>

            {/* Testing & Safety */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-10">Third-Party Testing & Safety</h2>
                 <Card>
                    <p className="mb-4">Consumer safety is our top priority. All products undergo rigorous laboratory testing by accredited third-party labs. We make a Certificate of Analysis (COA) available for all products to ensure full transparency.</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Potency Verification:</strong> Accurate cannabinoid profiles (THC, CBD, etc.).</li>
                        <li><strong>Pesticide Testing:</strong> Compliant with all state requirements for harmful pesticides.</li>
                        <li><strong>Contaminant Screening:</strong> Tested for heavy metals, microbials, and residual solvents to ensure purity.</li>
                    </ul>
                 </Card>
            </section>
            
            {/* Certifications & Partnerships */}
            <section>
                 <h2 className="text-3xl font-bold text-center mb-10">Certifications & Partnerships</h2>
                 <div className="bg-slate-800 rounded-lg p-8 text-center">
                    <p className="text-lg">We are proud to partner with industry leaders like <span className="font-bold text-emerald-400">Agrify</span> and <span className="font-bold text-emerald-400">TriGrow Capital</span> to leverage advanced cultivation technology. We maintain full Workers' Compensation coverage (L&I Account: 640,987-00) for our dedicated team.</p>
                 </div>
            </section>
        </div>
    );
};

export default QualityPage;
