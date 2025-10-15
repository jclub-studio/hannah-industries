
import React from 'react';
import Card from '../components/Card';

const CareersPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
            <header className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">Careers at Hannah Industries</h1>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                    Join a team of passionate professionals dedicated to quality, innovation, and growth in the cannabis industry.
                </p>
            </header>

            {/* Company Culture */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-10">Our Company Culture</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Card title="Innovation-Focused"><p>We are constantly adopting cutting-edge technology and seeking better ways to cultivate and process.</p></Card>
                    <Card title="Quality-Driven"><p>Excellence is at the core of everything we do, from seed to sale.</p></Card>
                    <Card title="Team-Oriented"><p>We foster a collaborative environment where every team member's contribution is valued.</p></Card>
                    <Card title="Growth-Minded"><p>We provide opportunities for professional development and career advancement.</p></Card>
                </div>
            </section>

            {/* Employment Info */}
            <section className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                     <img src="https://picsum.photos/seed/team/800/600" alt="Hannah Industries Team" className="rounded-lg shadow-2xl"/>
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-4">Why Join Us?</h2>
                    <Card>
                        <p>At Hannah Industries, you'll be part of a dynamic and growing company at the forefront of the Washington cannabis market.</p>
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            <li><strong>Locations:</strong> Opportunities available at our Bellevue and Tonasket facilities.</li>
                            <li><strong>Benefits:</strong> We offer competitive compensation packages and benefits.</li>
                            <li><strong>Opportunities:</strong> We're hiring for various cultivation, processing, and trimming roles.</li>
                            <li><strong>Training:</strong> Access to professional development and on-the-job training programs.</li>
                        </ul>
                         <div className="text-center mt-6">
                            <a href="mailto:careers@hannahindustries.example.com" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105">
                                View Open Positions
                            </a>
                        </div>
                    </Card>
                </div>
            </section>

             {/* Workplace Environment */}
             <section>
                <h2 className="text-3xl font-bold text-center mb-10">Our Workplace Environment</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card title="Safety First"><p>We adhere to comprehensive safety protocols to ensure a safe and healthy workplace for all employees.</p></Card>
                    <Card title="Compliance Focus"><p>All team members receive thorough training on regulatory compliance and industry best practices.</p></Card>
                    <Card title="Professional Growth"><p>We are committed to providing skill development opportunities and promoting from within.</p></Card>
                </div>
            </section>

        </div>
    );
};

export default CareersPage;
