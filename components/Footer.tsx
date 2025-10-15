
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-950 text-gray-400 border-t border-slate-800">
            <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <img 
                            src="https://images.squarespace-cdn.com/content/v1/5e6aa593d76c5f415c9a8f82/40f7ac0d-4416-4b1c-a76f-d95825ecb16a/WashingtonVendors-22.png" 
                            alt="Hannah Industries Logo" 
                            className="h-14 w-auto filter invert grayscale brightness-2 mb-2"
                        />
                        <p className="text-sm">Premium Cannabis Cultivation & Processing</p>
                        <p className="text-sm mt-2">13312 SE 30th Street, Bellevue, WA 98005</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
                        <ul className="space-y-1">
                            <li><Link to="/about" className="hover:text-emerald-400 text-sm">About Us</Link></li>
                            <li><Link to="/brands" className="hover:text-emerald-400 text-sm">Our Brands</Link></li>
                            <li><Link to="/careers" className="hover:text-emerald-400 text-sm">Careers</Link></li>
                            <li><Link to="/contact" className="hover:text-emerald-400 text-sm">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Legal Disclaimer</h3>
                        <p className="text-xs">This product has intoxicating effects and may be habit forming. Marijuana can impair concentration, coordination, and judgment. Do not operate a vehicle or machinery under the influence of this drug. There may be health risks associated with consumption of this product. For use only by adults twenty-one and older. Keep out of the reach of children.</p>
                    </div>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-800 text-center text-xs">
                    <p>&copy; {new Date().getFullYear()} Hannah Industries LLC. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;