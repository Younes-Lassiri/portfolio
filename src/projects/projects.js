import one from './pics/one.PNG';
import two from './pics/two.PNG';
import three from './pics/three.PNG';
import four from './pics/four.PNG';
import five from './pics/five.PNG';
import onem from './pics/onem.jpeg'
import twom from './pics/twom.jpeg'
import fivem from './pics/fivem.jpeg'
import sixm from './pics/sixm.jpeg'
import sevenm from './pics/sevenm.jpeg'
import weaone from './pics/weaone.PNG'
import weatwo from './pics/weatwo.PNG'
import weathree from './pics/weathree.PNG'
import weafour from './pics/weafour.PNG'
import weafive from './pics/weafive.PNG'
const project = [
    {
        id: 0,
		preview: 'https://my-store-henna-theta.vercel.app/',
        name: 'Y&M Royal Chic',
        mainPic: one,
        category: ['Web design'],
        client: 'React final project',
        start_date: 'February 01, 2024',
        designer: 'YounesLassiri',
        desc: 'Y&M Royal Chic is a destination for mo dern women seeking a blend of timeless elegance and contemporary fashion. Our curated collection celebrates indi viduality with chic dresses and versatile pieces, offering a seamless fusion of grace and sophisticat ion. Step into Y&M Royal Chic, where style mee ts simplicity, and discover a curated selection that empowers your unique expression of fashion.',
        pics: [
            two, three, four, five
        ],
        descs: 'Y&M Royal Chic is a destination for mo dern women seeking a blend of timeless elegance and contemporary fashion. Our curated collection celebrates indi viduality with chic dresses and versatile pieces, offering a seamless fusion of grace and sophisticat ion. Step into Y&M Royal Chic, where style mee ts simplicity, and discover a curated selection that empowers your unique expression of fashion.',
        story: 'Y&M Royal Chic is a destination for modern women seeking a blend of timeless elegance and contemporary style. Our curated collection celebrates individuality with chic dresses and versatile pieces, offering a seamless fusion of grace and sophistication. Step into Y&M Royal Chic, where style meets simplicity, and discover a selection that empowers your unique expression of fashion. Elevate your wardrobe with pieces that blend classic elegance with modern trends, perfect for any occasion.',
        approach: 'At Y&M Royal Chic, our mission is to empower modern women with a curated collection that seamlessly blends timeless elegance with contemporary style. We celebrate individuality by offering high-quality, versatile pieces that transition effortlessly from day to night. Our personalized styling services ensure each customer finds items that resonate with their unique taste and lifestyle. Committed to sustainability, we select eco-friendly materials and promote responsible fashion practices. At Y&M Royal Chic, we believe fashion is a powerful tool for self-expression, enhancing confidence and grace for every woman.',
    },
    {
        id: 1,
		preview: 'https://justice-window.infinityfreeapp.com/',
        name: 'Cour Appel Laayoune',
        mainPic: onem,
        category: ['Web design', 'Web development'],
        client: 'End-of-study internship project',
        start_date: 'March 01, 2024',
        designer: 'YounesLassiri',
        desc: 'The Court of Appeal submits its positionThe new electronic system, keeping pace with the historical transformation taking place in MoroccoIn building a state of rights and democratic institutions, and consolidating the principles of good governanceAnd achieving social justice. This site seeks to provide interactive servicesEnables citizens to submit their complaints and receive responses with ease.Our new website expresses our full commitment to the contents of the new constitutionThe vision of His Majesty King Mohammed VI, may God protect him, reflects our will to provide an environment Interactive, ensuring transparency and responsibility in providing judicial services.',
        pics: [
            twom, fivem,sixm,sevenm
        ],
        descs: 'The Court of Appeal submits its positionThe new electronic system, keeping pace with the historical transformation taking place in MoroccoIn building a state of rights and democratic institutions, and consolidating the principles of good governanceAnd achieving social justice. This site seeks to provide interactive servicesEnables citizens to submit their complaints and receive responses with ease.Our new website expresses our full commitment to the contents of the new constitutionThe vision of His Majesty King Mohammed VI, may God protect him, reflects our will to provide an environment Interactive, ensuring transparency and responsibility in providing judicial services.',
        story: 'The Court of Appeal submits its positionThe new electronic system, keeping pace with the historical transformation taking place in MoroccoIn building a state of rights and democratic institutions, and consolidating the principles of good governanceAnd achieving social justice. This site seeks to provide interactive servicesEnables citizens to submit their complaints and receive responses with ease.Our new website expresses our full commitment to the contents of the new constitutionThe vision of His Majesty King Mohammed VI, may God protect him, reflects our will to provide an environment Interactive, ensuring transparency and responsibility in providing judicial services.',
        approach: 'The Court of Appeal submits its positionThe new electronic system, keeping pace with the historical transformation taking place in MoroccoIn building a state of rights and democratic institutions, and consolidating the principles of good governanceAnd achieving social justice. This site seeks to provide interactive servicesEnables citizens to submit their complaints and receive responses with ease.Our new website expresses our full commitment to the contents of the new constitutionThe vision of His Majesty King Mohammed VI, may God protect him, reflects our will to provide an environment Interactive, ensuring transparency and responsibility in providing judicial services.',
    },
	{
        id: 2,
		preview: 'https://weather-app-coral-ten-98.vercel.app/',
        name: 'Weather app',
        mainPic: weaone,
        category: ['Web design','Rest Api'],
        client: 'Weather app',
        start_date: 'July 08, 2024',
        designer: 'YounesLassiri',
        desc: 'The weather application is a web-based tool designed to provide users with up-to-date weather information for locations worldwide. Built using React and Axios, it leverages the WeatherAPI to fetch and display weather data. Users can enter a location to view current weather conditions, including temperature, humidity, wind speed, and a brief description of the weather conditions. The application also supports fetching a 15-day weather forecast using the forecast.json endpoint from the WeatherAPI. This project aims to offer a user-friendly interface that dynamically updates based on user input, providing accurate and detailed weather information.',
        pics: [
            weatwo, weathree, weafour, weafive
        ],
        descs: 'The weather application is a web-based tool designed to provide users with up-to-date weather information for locations worldwide. Built using React and Axios, it leverages the WeatherAPI to fetch and display weather data. Users can enter a location to view current weather conditions, including temperature, humidity, wind speed, and a brief description of the weather conditions. The application also supports fetching a 15-day weather forecast using the forecast.json endpoint from the WeatherAPI. This project aims to offer a user-friendly interface that dynamically updates based on user input, providing accurate and detailed weather information.',
        story: 'Imagine you wake up to plan your day, whether it"s a morning jog, a picnic with friends, or a road trip. You want to know what the weather will be like, not just for today but also for the coming days. This is where WeatherApp comes in handy.',
        approach: 'Our approach for the weather application focuses on delivering a seamless user experience through a modern, React-based interface. By leveraging Axios for efficient data fetching from the WeatherAPI, we ensure real-time weather updates and a 15-day forecast capability. Integrating i18next enables clear location name translations, catering to global users. Our development emphasizes responsive design principles, meticulous testing across devices, and iterative refinement based on user feedback. This approach aims to provide users with a reliable, intuitive tool for accessing accurate weather information effortlessly, whether they"re planning daily activities or long-term travel plans.',
    }
]

export default project;