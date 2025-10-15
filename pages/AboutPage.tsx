import React from 'react';
import Card from '../components/Card';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">About Hannah Industries</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          Delivering consistent, high-quality cannabis products while building sustainable business practices and community partnerships since 2017.
        </p>
      </header>

      {/* Company Story & Leadership */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-2">
          <Card title="Our Story">
            <p>
              Hannah Industries LLC was founded in 2017 by CEO Jason Whitney with a clear mission: to become a leading Tier 2 cannabis producer and processor in Washington State. From our state-of-the-art facilities in Bellevue and Tonasket, we cultivate and process premium cannabis for our multiple award-winning brands, including Dawg Star Cannabis and Western Cultured.
            </p>
          </Card>
        </div>
        <div>
          <Card title="Leadership: Jason Whitney" titleClassName="text-center">
            <div className="flex flex-col items-center text-center">
                <img src="https://picsum.photos/seed/jason/200" alt="Jason Whitney" className="w-32 h-32 rounded-full mb-4 ring-4 ring-emerald-500/50"/>
                <p className="font-bold text-white">Founder & CEO</p>
                <ul className="text-sm mt-2 list-disc list-inside text-left">
                    <li>Cannabis industry veteran since 2014</li>
                    <li>Founder of Dawg Star Cannabis</li>
                    <li>Ironman Canada finisher</li>
                    <li>Singer-songwriter and entrepreneur</li>
                </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card title="Quality Excellence"><p>A steadfast commitment to premium, hand-trimmed products and superior cultivation.</p></Card>
            <Card title="Innovation"><p>Utilizing cutting-edge cultivation technology for consistency and efficiency.</p></Card>
            <Card title="Sustainability"><p>Implementing environmentally responsible growing practices to protect our planet.</p></Card>
            <Card title="Community & Compliance"><p>Supporting local communities and maintaining the highest regulatory standards.</p></Card>
        </div>
      </section>

      {/* Business Achievements */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Our Achievements</h2>
        <div className="bg-slate-800 rounded-lg p-8 grid grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div>
                <p className="text-4xl font-extrabold text-emerald-400">$5.4M+</p>
                <p className="text-gray-300">In Annual Sales</p>
            </div>
            <div>
                <p className="text-4xl font-extrabold text-emerald-400">150+</p>
                <p className="text-gray-300">Retail Locations</p>
            </div>
            <div className="col-span-2 lg:col-span-1">
                <p className="text-4xl font-extrabold text-emerald-400">Award-Winning</p>
                <p className="text-gray-300">Cannabis Brands</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;