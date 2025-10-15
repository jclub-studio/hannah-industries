
import React from 'react';
import Card from '../components/Card';

const newsItems = [
    {
        category: "Recent Developments",
        title: "Facility Expansion Complete with New Agrify VFU Installation",
        date: "2022",
        content: "We are thrilled to announce the completion of our latest facility expansion, which includes the installation of 179 state-of-the-art Agrify Vertical Farming Units. This upgrade significantly increases our production capacity and reinforces our commitment to technological innovation.",
        img: "https://picsum.photos/seed/news1/800/400"
    },
    {
        category: "Industry Recognition",
        title: "Hannah Industries Recognized as a Technology Pioneer in Cannabis",
        date: "2021",
        content: "As an early adopter of vertical farming and data-driven cultivation, Hannah Industries has been highlighted in several industry publications as a pioneer in cannabis technology. Our success demonstrates the power of innovation in achieving consistent, high-quality yields.",
        img: "https://picsum.photos/seed/news2/800/400"
    },
    {
        category: "Partnerships",
        title: "Hannah Industries Secures $4M Investment from TriGrow Capital",
        date: "2019",
        content: "Our strategic partnership with TriGrow Capital marked a major milestone, with a $4M investment fueling our expansion and technology integration. This collaboration has been pivotal to our growth and market leadership.",
        img: "https://picsum.photos/seed/news3/800/400"
    },
    {
        category: "Media Coverage",
        title: "Cannabis Business Times Features Our Sustainable Practices",
        date: "Ongoing",
        content: "Our commitment to environmental responsibility has been featured in Cannabis Business Times and other trade publications. We are proud to lead by example, showing that premium production and sustainability can go hand-in-hand.",
        img: "https://picsum.photos/seed/news4/800/400"
    }
];

const NewsPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
            <header className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">News & Press</h1>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                    Stay up to date with the latest developments, partnerships, and industry recognition at Hannah Industries.
                </p>
            </header>

            <section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {newsItems.map((item, index) => (
                        <Card key={index} className="flex flex-col">
                            <img src={item.img} alt={item.title} className="rounded-t-lg mb-4 w-full h-56 object-cover" />
                            <div className="flex flex-col flex-grow p-1">
                                <p className="text-sm text-emerald-400 font-semibold">{item.category} &bull; {item.date}</p>
                                <h3 className="text-xl font-bold text-white mt-2 mb-3">{item.title}</h3>
                                <p className="text-gray-300 flex-grow">{item.content}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default NewsPage;
