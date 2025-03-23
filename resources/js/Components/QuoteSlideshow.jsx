import { useEffect, useState } from 'react';

const quotes = [
    { text: 'I got a little girly drink on my way here...', author: 'Rose' },
    { text: 'Red meat, its good for a man...', author: 'Josef' },
    { text: "What's more important, your wife or yard waste?", author: 'Rose'},
    { text: "Honey, I accidentally made 24 cabinets...", author: 'Josef' },
    { text: "Are you on the toilet?", author: 'Rose' },
    { text: "I like a girl that smells of tortilla...", author: 'Josef' },
    { text: "Yeah but its small and its Saturday...", author: 'Rose' },
    { text: "I swear you girls are... something else...", author: 'Josef' },
    { text: "I'm kinda cravin a McBurger...", author: 'Rose' },
    { text: "When you get old I'll hit your arm flaps...", author: 'Josef' },
    { text: "Bring me a coffee or something...", author: 'Rose' },
    { text: "Woah there buckaroo!! Stay away from my butt!", author: 'Josef' },
    { text: "Handsome = 2 times gongeous...", author: 'Rose' },
    { text: "There's a difference between Raising Cane's and meth...", author: 'Josef' },
    { text: "You are not taking me to Olive Garden on Valentines Day.", author: 'Rose' },
    { text: "Don't talk about my little hips...", author: 'Josef' },
];

export default function QuoteSlideshow() {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(() => 
        Math.floor(Math.random() * quotes.length) // Start on a random quote
    );
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentQuoteIndex((prevIndex) =>
                    prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
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
