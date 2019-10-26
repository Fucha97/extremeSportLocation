const Location = require('../models/location');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/extremeSportLocation', { useNewUrlParser: true });

const locations = [
    {
        img: 'https://www.galbani.cz/wp-content/uploads/2018/01/Galbani_FB_0118_Livigno.png',
        link: 'https://www.ski.ru/az/resort/108',
        name: 'Livingo',
        adress: 'Livigno, Italy',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/9FybR_iAAfg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        sport: 'snowboard',
        seasonFirst: '2019-12-01',
        seasonEnd: '2020-05-01',
        coordinates: '<div style="overflow:hidden;width: 500px;position: relative;"><iframe width="500" height="300" src="https://maps.google.com/maps?width=500&amp;height=300&amp;hl=en&amp;q=Livingo%20Italia+(Livingo%20I)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><div style="position: absolute;width: 80%;bottom: 10px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;"><small style="line-height: 1.8;font-size: 2px;background: #fff;">Powered by <a href="https://embedgooglemaps.com/ru/">embedgooglemaps RU</a> & <a href="https://iamsterdamcard.it">i amsterdamcard it</a></small></div><style>#gmap_canvas img{max-width:none!important;background:none!important}</style></div><br />',
        opisanie: `К югу от швейцарской границы лежит один из крупнейших курортов Италии — Ливиньо. На курорте прекрасное катание по широким солнечным склонам. По странному стечению обстоятельств Ливиньо является duty free курортом. Здесь гораздо проще купить бутылку джина, чем бутылку молока.
    Хотя в непосредственной близости нет других курортов, обладатели ски-пасса на шесть дней и собственного транспорта (или достаточно терпеливые, чтобы воспользоваться автобусом) могут покататься в Бормио, Санта Катерине и Сан Коломбано, а также один день на знаменитых швейцарских курортах в зоне катания Энгадин.`
    },
    {
        img: 'data:image/jpeg;base64,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',
        link: 'https://www.ski.ru/az/resort/207/',
        name: 'Whistler',
        adress: 'Whistler Canada',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/b8uMMcwFZVg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        sport: 'snowboard',
        seasonFirst: '2019-12-23',
        seasonEnd: '2020-03-24',
        coordinates: '<div style="overflow:hidden;width: 500px;position: relative;"><iframe width="500" height="300" src="https://maps.google.com/maps?width=500&amp;height=300&amp;hl=en&amp;q=%20Whistler%20canada+(%20Whistler%20)&amp;ie=UTF8&amp;t=p&amp;z=15&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><div style="position: absolute;width: 80%;bottom: 10px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;"><small style="line-height: 1.8;font-size: 2px;background: #fff;">Powered by <a href="https://embedgooglemaps.com/ru/">https://embedgooglemaps.com/ru/</a> & <a href="https://iamsterdamcard.it">i amsterdamcard it</a></small></div><style>#gmap_canvas img{max-width:none!important;background:none!important}</style></div><br />',
        opisanie: `Канадский курорт Wistler находится в паре часов езды от Ванкувера, недалеко от побережья Тихого океана. Всемирную славу Wistler и его брат-близнец Blackbomb получили именно как сноуборд-курорты. Немудренно - Wistler находится в том районе земного шара, где самая высокая норма осадков в год - 11 000 мм в год! Типичный пейзаж - вековые ели, по макушку засыпанные самым пушистым снегом. Знатоки говорят, что здесь - рай для фрирайдера. Поэтому профессиональные фрирайдеры просто переселяются в Wistler Village, чтобы быть наготове. Главное - взять хорошего проводника из местных, иначе есть шанс заблудиться в многометровом пухляке среди елового бурелома.
        А в трех часах езды находятся лучшие курорты в канадских Скалистых горах: Fernie в Британской Колумбии, Banff и Louise - в провинции Альберта. Для тех, кто решился попасть в эти целинные места, наградой будет высочайший уровень сервиса и разнообразие трасс.
        Международным Олимпийским комитетом Вистлер выбран местом проведения Зимних Олимпийских Игр в 2010 г.`
    },
    {
        img: 'https://coresites-cdn.factorymedia.com/whitelines_new/wp-content/uploads/2017/10/Les-Arcs-Whitelines-Resort-Guide-header.jpg',
        link: 'https://www.ski.ru/az/resort/26',
        name: ' Les Arcs',
        adress: 'Les Arcs France',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/2QkDXBsnC8M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        sport: 'snowboard',
        seasonFirst: '2019-12-16',
        seasonEnd: '2020-04-28',
        coordinates: '<div style="overflow:hidden;width: 500px;position: relative;"><iframe width="500" height="300" src="https://maps.google.com/maps?width=500&amp;height=300&amp;hl=en&amp;q=Les%20Arcs%20France+(Les%20Arcs%20)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><div style="position: absolute;width: 80%;bottom: 10px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;"><small style="line-height: 1.8;font-size: 2px;background: #fff;">Powered by <a href="https://embedgooglemaps.com/de/">https://embedgooglemaps.com/de/</a> & <a href="https://iamsterdamcard.it">www.iamsterdamcard.it</a></small></div><style>#gmap_canvas img{max-width:none!important;background:none!important}</style></div><br />',
        opisanie: `Лез Арк (Les Arcs) – группа курортов во Франции. Наряду с Ля Плань и Пейзе-Валландри они входят в состав зоны катания Paradiski (более 400 километров трасс). Лез Арк расположен в самом сердце долины Тарантез, одной из частей Французских Альп.`
    },
    {
        img: 'https://gle2e78pzo-flywheel.netdna-ssl.com/wp-content/uploads/2019/03/Feature-April-Surf-Tofino.jpg',
        link: 'https://www.tripadvisor.ru/Attractions-g154942-Activities-Tofino_Clayoquot_Sound_Alberni_Clayoquot_Regional_District_Vancouver_Island_British_Columbia.html',
        name: 'Tofino',
        adress: 'Tofino Canada',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/mzqecq8yv_E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        sport: 'surf',
        seasonFirst: '2019-01-01',
        seasonEnd: '2020-12-31',
        coordinates: '<div style="overflow:hidden;width: 500px;position: relative;"><iframe width="500" height="300" src="https://maps.google.com/maps?width=500&amp;height=300&amp;hl=en&amp;q=Tofino%20Canada+(Tofino%20)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><div style="position: absolute;width: 80%;bottom: 10px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;"><small style="line-height: 1.8;font-size: 2px;background: #fff;">Powered by <a href="https://embedgooglemaps.com/de/">https://embedgooglemaps.com/de/</a> & <a href="https://iamsterdamcard.it">iamsterdamcard</a></small></div><style>#gmap_canvas img{max-width:none!important;background:none!important}</style></div><br />',
        opisanie: `Тофино на западном берегу острова Ванкувер – это центр  серфинга в Канаде. Горы, сосны и отличные волны круглый год. В летний сезон тут еще можно существовать без шубы и валенок, тогда съезжается основной поток туристов-серферов. Но в течение остальных месяцев вам понадобится здравый смысл и толстый гидрокостюм для серфинга, чтобы покорить местные споты. А еще лодка и местный гид. Температура воздуха здесь варьируется от 3 до 19 градусов цельсия, но опускается и до отрицательных величин. На 1 декабря 2016 г. в Тофино 4 градуса в воздухе и 14 в воде (жара же) и (да-да, мы на Бали облизываемся от зависти) 10 футов свелл! Едем!`
    },
    {
        img: 'https://www.ultimatefrance.com/wp-content/uploads/2016/12/surf-session-les-sables-dor-anglet.jpg',
        link: 'https://magicseaweed.com/Les-Cavaliers-Surf-Guide/892/',
        name: 'Les Cavaliers',
        adress: 'Les Cavaliers, Anglet, Франция',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/V6p4zgGP3RM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        sport: 'surf',
        seasonFirst: '2019-01-01',
        seasonEnd: '2020-12-31',
        coordinates: '<div style="overflow:hidden;width: 500px;position: relative;"><iframe width="500" height="300" src="https://maps.google.com/maps?width=500&amp;height=300&amp;hl=en&amp;q=Les%20Cavaliers%2C%20Anglet%2C%20%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F+(Les%20Cavaliers)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><div style="position: absolute;width: 80%;bottom: 10px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;"><small style="line-height: 1.8;font-size: 2px;background: #fff;">Powered by <a href="https://embedgooglemaps.com/ru/">embedgooglemaps RU</a> & <a href="https://iamsterdamcard.it">iamsterdamcard</a></small></div><style>#gmap_canvas img{max-width:none!important;background:none!important}</style></div><br />',
        opisanie: `Серферам следует использовать расположенный справа канал для того, чтобы догрести до этой смертельной волны, которая особенно хорошая при береговом ветре. Местные становятся агрессивными, когда видят, что кто-то катается на их волнах.`
    },

    {
        img: 'http://volcanosurflanzarote.com/wp-content/uploads/2011/07/SurfingFamara.jpg',
        link: 'http://guide.travel.ru/spain/canarias/lanzarote/',
        name: 'Лансароте',
        adress: 'Испания: остров Лансароте (Канарские острова)',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZdvyPwrt6W4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        sport: 'surf',
        seasonFirst: '2019-01-01',
        seasonEnd: '2020-12-31',
        coordinates: '<div style="overflow:hidden;width: 500px;position: relative;"><iframe width="500" height="300" src="https://maps.google.com/maps?width=500&amp;height=300&amp;hl=en&amp;q=%D0%98%D1%81%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F%3A%20%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2%20%D0%9B%D0%B0%D0%BD%D1%81%D0%B0%D1%80%D0%BE%D1%82%D0%B5%20(%D0%9A%D0%B0%D0%BD%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%B5%20%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%B0)+(%D0%98%D1%81%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F%3A%20%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2%20%D0%9B%D0%B0%D0%BD%D1%81%D0%B0%D1%80%D0%BE%D1%82%D0%B5%20(%D0%9A%D0%B0%D0%BD%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%B5%20%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%B0))&amp;ie=UTF8&amp;t=&amp;z=12&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><div style="position: absolute;width: 80%;bottom: 10px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;"><small style="line-height: 1.8;font-size: 2px;background: #fff;">Powered by <a href="https://embedgooglemaps.com/ru/">embedgooglemaps RU</a> & <a href="https://iamsterdamcard.it">iamsterdam card.it</a></small></div><style>#gmap_canvas img{max-width:none!important;background:none!important}</style></div><br />',
        opisanie: `В этом споте протяжённость береговой линии около трёх километров и семь-восемь независимых и постоянно работающих в сезон пиков. Волна средней скорости. Кататься здесь можно на любом уровне, кроме максимального отлива, а обучаться — на всех, кроме полного прилива. Сезон длится с конца сентября по апрель включительно. Это отличный спот как для новичков, так и для опытных сёрферов. Есть свои особенности, такие как отсутствие инфраструктуры, да и на полном приливе возможен шорбрейк. Школы: Red Star Surf, ZOOPark Famara — занятия на русском языке.`
    }]






Location.insertMany(locations).then(() => {
    mongoose.connection.close();
});
