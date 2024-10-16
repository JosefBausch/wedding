import { useEffect, useState } from 'react';

const quotes = [
    { text: 'I got a lil girly drink on my way here...', author: 'Rose' },
    { text: 'Red meat, its good for a man...', author: 'Josef' },
];

export default function QuoteSlideshow() {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentQuoteIndex((prevIndex) =>
                    prevIndex === quotes.length - 1 ? 0 : prevIndex + 1,
                );
                setFade(true);
            }, 1000); // Fade out duration
        }, 8000); // Change quote every 10 seconds

        return () => clearInterval(interval);
    }, []);

    const { text, author } = quotes[currentQuoteIndex];

    return (
        <div className="my-8 flex w-full flex-col items-center justify-center px-4 py-32 text-center sm:my-16 md:my-24 lg:my-32">
            <h1
                className={`bg-frosted-yellow font-pus rounded-xl p-4 text-xl leading-relaxed shadow-md backdrop-blur-md transition-opacity duration-1000 sm:text-2xl md:text-3xl lg:text-4xl ${fade ? 'opacity-100' : 'opacity-0'}`}
            >
                "{text}"
            </h1>
            <h3
                className={`bg-frosted-yellow mt-2 rounded-xl p-4 text-lg italic shadow-md backdrop-blur-md transition-opacity duration-1000 sm:mt-3 sm:text-xl md:mt-4 md:text-2xl ${fade ? 'opacity-100' : 'opacity-0'}`}
            >
                - {author}
            </h3>
        </div>
    );
}
