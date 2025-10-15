
import React from 'react';
import Card from '../components/Card';

const TechnologyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">Technology & Innovation</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          Pioneering the future of cannabis cultivation through strategic partnerships and data-driven decisions.
        </p>
      </header>
      
      {/* Agrify Partnership */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
            <h2 className="text-3xl font-bold mb-4">Agrify Partnership</h2>
            <Card>
                <p>Our collaboration with Agrify places us at the cutting edge of cultivation technology. We have integrated <strong>179 Vertical Farming Units (VFUs)</strong> into our facilities, a state-of-the-art system born from a $3M facility investment.</p>
                <ul className="list-disc list-inside mt-4 space-y-1">
                    <li><strong>Precision Control:</strong> Manage micro-environments with unparalleled accuracy.</li>
                    <li><strong>Data Analytics:</strong> Leverage real-time insights to optimize growth cycles.</li>
                    <li><strong>Consistency:</strong> Produce uniform, high-quality cannabis year-round.</li>
                </ul>
            </Card>
        </div>
        <div>
            <img src="https://picsum.photos/seed/agritech/800/600" alt="Vertical Farming Units" className="rounded-lg shadow-2xl"/>
        </div>
      </section>

      {/* TriGrow Investment */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
         <div className="md:order-2">
            <h2 className="text-3xl font-bold mb-4">TriGrow Capital Investment</h2>
            <Card>
                <p>A strategic <strong>$4M investment</strong> from TriGrow Capital has been instrumental in our growth and expansion. This funding has empowered us to fully integrate advanced cultivation systems and significantly boost our output.</p>
                <ul className="list-disc list-inside mt-4 space-y-1">
                    <li><strong>Growth Capital:</strong> Fueled expansion and technology adoption.</li>
                    <li><strong>Production Increase:</strong> Added over <strong>6,800 pounds</strong> to our annual capacity.</li>
                    <li><strong>Market Leadership:</strong> Solidified our position as an industry innovator.</li>
                </ul>
            </Card>
        </div>
        <div className="md:order-1">
            <img src="https://picsum.photos/seed/investment/800/600" alt="Business Growth" className="rounded-lg shadow-2xl"/>
        </div>
      </section>

       {/* Innovation Focus */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Innovation Focus Areas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card title="Vertical Farming"><p>Maximizing space and resource efficiency for sustainable growth.</p></Card>
            <Card title="Automation"><p>Automated irrigation, climate, and nutrient systems for precision control.</p></Card>
            <Card title="Data-Driven Decisions"><p>Optimizing performance based on real-time data and analytics.</p></Card>
            <Card title="Sustainability"><p>Integrating technology to enhance our environmental responsibility.</p></Card>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;
