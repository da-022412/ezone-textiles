import Hero from '../../components/Textile/Hero';
import Countdown from '../../components/Textile/Countdown';
import Event from '../../components/Textile/Event';
import Information from '../../components/Textile/Information';
import Schedule from '../../components/Textile/Schedule';
import Testimonials from '../../components/Textile/Testimonials';
import About from '../../components/Textile/About';
import Register from '../../components/Textile/Register';

export default function Textile() {
    return (
        <>
            <style global jsx>{`
                body,
                html {
                    margin: 0;
                    max-width: 100vw;
                    min-height: 100vh;
                    padding: 0;
                    scroll-behavior: smooth;
                }
            `}</style>
            <Hero content={CONTENT.hero} />
            <Countdown content={CONTENT.countdown} />
            <Event content={CONTENT.event} />
            <Information content={CONTENT.info} />
            <Schedule content={CONTENT.schedule} />
            <Testimonials />
            <About />
            <Register />
        </>
    );
}

const CONTENT = {
    hero: {
        title: 'Ezone Virtual<br>Textile Exhibition',
        video: '/videos/ezone-virtual-video.mp4',
    },
    countdown: {
        date: 'Mar 21, 2022 23:59:59',
    },
    event: {
        title: 'March 22-24, 2022',
        copy: 'Doing business with Asia&apos;s best textile and apparel manufacturers has never been easier! Now, you can meet hundreds of the best of the best, from the comfort and safety of your office, at Ezone&apos;s first Virtual Textiles and Apparel Exhibition of 2022.',
    },
    info: {
        icons: [
            {
                img: '/images/colored-thread-bulk.jpg',
                width: 160,
                height: 160,
                title: 'Textile',
            },
            {
                img: '/images/young-man-rain-coat.jpg',
                width: 160,
                height: 160,
                title: 'Mens',
            },
            {
                img: '/images/shades-sundress.jpg',
                width: 160,
                height: 160,
                title: 'Womens',
            },
            {
                img: '/images/upside-down-in-bathtub.jpg',
                width: 160,
                height: 160,
                title: 'Shoes',
            },
            {
                img: '/images/croc-skin-purse.jpg',
                width: 160,
                height: 160,
                title: 'Accessories',
            },
        ],
        title: 'Access the EZone Network',
        topCopy: [
            {
                copy: 'For this, our first Virtual Textiles Exhibition of the year, Ezone Exhibition is inviting 500 of the best manufacturers throughout Asia to meet virtually with buyers under our corporate umbrella, and, together, we are ready to serve your every need.',
            },
            {
                copy: 'Ezone has already verified that each of these factories have good reputations, premium quality, the best prices, and prompt, secure delivery. And as an added bonus, Ezone can provide samples from its eleven domestic warehouses here in the US.',
            },
        ],
        btmCopy:
            'Within the Ezone network of manufacturers, capabilities are endless: fabrics, apparel, curtains, carpets, bedding, towels, hotel/hospitality supplies, shoes, hats bags, socks and more. Given the opportunity, we can meet 100% of your textile and apparel needs.',
    },
    schedule: {
        time: {
            eastern: [
                {
                    id: 0,
                    date: '03/22/22',
                    content: '08:30 am - 17:30 pm',
                },
                {
                    id: 1,
                    date: '03/23/22',
                    content: '08:30 am - 17:30 pm',
                },
                {
                    id: 2,
                    date: '03/24/22',
                    content: '08:30 am - 17:30 pm',
                },
            ],

            china: [
                {
                    id: 0,
                    date: '03/22/22',
                    content: '20:30 pm - 05:30 am',
                },
                {
                    id: 1,
                    date: '03/23/22',
                    content: '20:30 pm - 05:30 am',
                },
                {
                    id: 2,
                    date: '03/24/22',
                    content: '20:30 pm - 05:30 am',
                },
            ],
        },
    },
};
