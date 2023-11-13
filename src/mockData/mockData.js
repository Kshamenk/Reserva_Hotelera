import indoorpool from '../Img/indoorpool.jpg'
import outdoorpool from '../Img/outdoorpool.jpg'
import bar from '../Img/bar.jpg'
import excecutive from '../Img/excecutiveRoom.jpg'
import  standart from '../Img/standartroom.jpg'
import withbalcony from '../Img/withbalcony.jpg'
import juniorsuite from '../Img/juniorsuite.jpg'
import suite from '../Img/Premiumsuite.jpg'

const mockData = [
    {
        src: indoorpool,
        title: 'Our indoor pool',
        description:'25m long indoor pool with hammocks and sauna',
    },
    {
        src: bar,
        title: 'Our indoor bar',
        description:'Esplendid classic cocktail bar with live music',
    },
    {
        src: standart,
        title: 'Standart room',
        description:'20 sqm room with full amenities',
        cat: 'room',
        price: 140,
        stock: 12,
        notAvailablestart: new Date(2023, 11, 13).getTime(),
        notAvailableEnd: new Date(2023, 11, 13).getTime()
    },
    {
        src: outdoorpool,
        title: 'Our outdoor pool',
        description:'Infinity pool with taking Ocean views',
    },
    {
        src: excecutive,
        title: 'Excecutive room',
        description:'Our business rooms with lounge acces',
        cat: 'room',
        price: 170,
        stock: 6,
        notAvailablestart: new Date(2023, 11, 13).getTime(),
        notAvailableEnd: new Date(2023, 11, 13).getTime()
    },
    {
        src: withbalcony,
        title: 'Rooms with balcony',
        description:'Rooms with amazing sea views',
        cat: 'room',
        price: 180,
        stock: 15,
        notAvailablestart: new Date(2023, 11, 13).getTime(),
        notAvailableEnd: new Date(2023, 11, 13).getTime(),
    },
    {
        src: juniorsuite,
        title: 'Junior Suite with kitchenette',
        description:'Our Junior Suites are perfect for families',
        cat: 'room',
        price: 225,
        stock: 9,
        notAvailablestart: new Date(2023, 11, 13).getTime(),
        notAvailableEnd: new Date(2023, 11, 13).getTime(),
    },
    {
        src: suite,
        title: 'Our Corner Suite',
        description:'Discrete and luxurious with butler service',
        cat: 'room',
        price: 350,
        stock: 4,
        notAvailablestart: new Date(2023, 11, 13).getTime(),
        notAvailableEnd: new Date(2023, 11, 13).getTime(),
        
    },

];

export const chips = [
    {key: 0, label: 'Cancellation Flexibility'},
    { key: 1, label: 'Standard rooms'},
    { key: 2, label: 'Executive rooms'},
    { key: 3, label: 'Acces to lounge'},
    { key: 4, label: 'more filters'},
]

export default mockData;