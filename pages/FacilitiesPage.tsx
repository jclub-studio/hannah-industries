import React from 'react';
import Card from '../components/Card';

const FacilitiesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">Our Operations</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          A comprehensive look at our state-of-the-art facilities, innovative technology, sustainable practices, and unwavering commitment to quality.
        </p>
      </header>
      
      {/* Facilities & Operations Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Facilities & Operations</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Card title="Primary Facility - Bellevue">
            <img src="https://picsum.photos/seed/bellevue/800/400" alt="Bellevue Facility" className="rounded-md mb-4"/>
            <p><strong>Address:</strong> 13312 SE 30th Street, Bellevue, WA 98005</p>
            <p><strong>License:</strong> 424223</p>
            <p><strong>Tier:</strong> 2 Producer & Processor</p>
          </Card>
          <Card title="Secondary Facility - Tonasket">
            <img src="https://picsum.photos/seed/tonasket/800/400" alt="Tonasket Facility" className="rounded-md mb-4"/>
            <p><strong>Location:</strong> Tonasket, Okanogan County, WA</p>
            <p><strong>License:</strong> 412699</p>
          </Card>
        </div>
        <div className="mt-10">
          <Card title="Production Capabilities">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                      <p className="text-3xl font-bold text-emerald-400">6,800+ lbs</p>
                      <p>Increased Annual Capacity</p>
                  </div>
                  <div>
                      <p className="text-3xl font-bold text-emerald-400">Comprehensive</p>
                      <p>Flower, Concentrates, Edibles, Pre-rolls</p>
                  </div>
                   <div>
                      <p className="text-3xl font-bold text-emerald-400">In-House</p>
                      <p>Trimming, Curing, and Packaging</p>
                  </div>
              </div>
          </Card>
        </div>
      </section>

      {/* Technology & Innovation Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Technology & Innovation</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
            <div>
                <h3 className="text-2xl font-bold mb-4">Agrify Partnership</h3>
                <Card>
                    <p>Our collaboration with Agrify places us at the cutting edge of cultivation technology. We have integrated <strong>179 Vertical Farming Units (VFUs)</strong> into our facilities, a state-of-the-art system born from a $3M facility investment.</p>
                </Card>
            </div>
            <div>
                <img src="https://picsum.photos/seed/agritech/800/600" alt="Vertical Farming Units" className="rounded-lg shadow-2xl"/>
            </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
             <div className="md:order-2">
                <h3 className="text-2xl font-bold mb-4">TriGrow Capital Investment</h3>
                <Card>
                    <p>A strategic <strong>$4M investment</strong> from TriGrow Capital has been instrumental in our growth and expansion. This funding has empowered us to fully integrate advanced cultivation systems and significantly boost our output.</p>
                </Card>
            </div>
            <div className="md:order-1">
                <img src="https://picsum.photos/seed/investment/800/600" alt="Business Growth" className="rounded-lg shadow-2xl"/>
            </div>
        </div>
      </section>

      {/* Sustainability & Responsibility Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Sustainability & Responsibility</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <Card title="Controlled Environment"><p>Our indoor facilities optimize resource use and minimize environmental impact.</p></Card>
            <Card title="Resource Efficiency"><p>We employ advanced systems to optimize water and energy consumption.</p></Card>
            <Card title="Waste Reduction"><p>We focus on sustainable management of growing mediums to reduce our waste footprint.</p></Card>
            <Card title="Chemical Minimization"><p>Our precision control minimizes the need for synthetic inputs and pesticides.</p></Card>
        </div>
        <Card title="Community Impact">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div><p className="text-2xl font-bold text-emerald-400">Local Employment</p><p>Creating jobs in Washington communities.</p></div>
                <div><p className="text-2xl font-bold text-emerald-400">Economic Development</p><p>Contributing to state tax revenue.</p></div>
                <div><p className="text-2xl font-bold text-emerald-400">Industry Leadership</p><p>Setting standards for responsible practices.</p></div>
            </div>
        </Card>
      </section>

      {/* Quality & Compliance Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Quality & Compliance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <Card title="I-502 Licensed"><p>Operating in full compliance with all Washington State regulations.</p></Card>
            <Card title="Tier 2 License"><p>Permitting large-scale cultivation and professional processing.</p></Card>
            <Card title="Seed-to-Sale Tracking"><p>Ensuring complete traceability, transparency, and safety.</p></Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <Card title="Hand-Trimmed Flower"><p>Meticulously hand-trimmed flower preserves delicate trichomes for the highest quality appearance, aroma, and potency.</p></Card>
            <Card title="Indoor Cultivation"><p>Climate-controlled environments allow for uniform quality year-round and a consistent, premium final product.</p></Card>
        </div>
        <Card title="Third-Party Testing & Safety">
            <p className="mb-4">Consumer safety is our top priority. All products undergo rigorous laboratory testing by accredited third-party labs. A Certificate of Analysis (COA) is available for all products.</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Potency Verification:</strong> Accurate cannabinoid profiles (THC, CBD, etc.).</li>
                <li><strong>Pesticide Testing:</strong> Compliant with all state requirements.</li>
                <li><strong>Contaminant Screening:</strong> Tested for heavy metals, microbials, and residual solvents.</li>
            </ul>
        </Card>
      </section>
    </div>
  );
};

export default FacilitiesPage;
