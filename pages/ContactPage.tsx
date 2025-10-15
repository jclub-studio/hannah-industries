
import React from 'react';
import Card from '../components/Card';

const ContactPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <header className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">Contact Us</h1>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                    Get in touch with Hannah Industries. We look forward to hearing from you.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <Card title="Corporate Headquarters">
                        <p><strong>Hannah Industries LLC</strong></p>
                        <p>13312 SE 30th Street</p>
                        <p>Bellevue, WA 98005</p>
                    </Card>
                    
                    <Card title="Business Information">
                        <p><strong>UBI Number:</strong> 603352809</p>
                        <p><strong>Established:</strong> 2017</p>
                        <p><strong>CEO:</strong> Jason Whitney</p>
                    </Card>

                    <Card title="Regulatory Information">
                        <p><strong>License Type:</strong> Tier 2 Producer & Processor</p>
                        <p><strong>Governing Body:</strong> Washington State Liquor and Cannabis Board</p>
                        <p><strong>License Numbers:</strong> 424223 (Bellevue), 412699 (Tonasket)</p>
                         <p><strong>Compliance Status:</strong> Active and in good standing</p>
                    </Card>
                </div>

                {/* Map and Form Placeholder */}
                <div>
                     <Card title="Our Location">
                        <div className="aspect-w-16 aspect-h-9 bg-slate-700 rounded-md">
                           <img 
                                src="https://picsum.photos/seed/map/1200/800" 
                                alt="Map to Hannah Industries in Bellevue" 
                                className="w-full h-full object-cover rounded-md"
                           />
                        </div>
                     </Card>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
