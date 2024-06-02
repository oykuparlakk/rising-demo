import { Hanken_Grotesk } from 'next/font/google';

const hanken = Hanken_Grotesk({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap'
});

const Font = () => {
    return (
        <style jsx global>
            {`
                html {
                    --hanken: ${hanken.style.fontFamily};
                }
            `}
        </style>
    );
};

export default Font;
