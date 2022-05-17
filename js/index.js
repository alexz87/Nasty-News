
var article_1 = {
    foto: 'img/news5.jpg',
    title: '«Москва» затонула: разом з крейсером потонув і його командир.',
    intro: 'Російсько-окупаційні війська разом із флагманом Чорноморського флоту втратили ще і його командира. Про це радник міністра внутрішніх справ України Антон Геращенко написав у Telegram.'
};
var article_2 = {
    foto: 'img/news6.jpg',
    title: 'Міністр економіки Німеччини закликав ЄС постачати Україні більше зброї.',
    intro: 'Федеральний міністр економіки Німеччини Роберт Хабек закликав країни Європейського Союзу розширити постачання зброї в Україну та скоротити використання російських енергоносіїв.'
};
var article_3 = {
    foto: 'img/news7.jpg',
    title: 'Українські війська зупинили російські сили під Донецьком.',
    intro: 'Військові, які тримають лінію оборони під Донецьком стримують спроби російських сил здійснити прорив у бік Красногорівки.'
};
var article_4 = {
    foto: 'img/news8.jpg',
    title: 'Зеленський назвав головну мішень Росії в Україні.',
    intro: 'Президент України Володимир Зеленський наголошує, що насамперед Росія хоче знищити Донбас. Про це він сказав у своєму відеозверненні.'
};
var article_5 = {
    foto: 'img/news9.jpg',
    title: 'Підсумки 50-го дня війни.',
    intro: '50 днів уже минулого відколи російські війська почали повномасштабну війну в Україні. Протягом цього часу наші міста-герої та ЗСУ справді героїчно чинять спротив ворогу. Уже близько 20 тис. російських загарбників вбили наші військові і ця цифра зростає з кожним днем, аж до нашої перемоги.'
};
var article_6 = {
    foto: 'img/news10.jpg',
    title: 'Останнім часом ситуація в Києві та області стабілізувалася, проте повітряні тривоги все ще лунають.',
    intro: "До Києва та області почали поступово повертатися мешканці до своїх домівок після звільнення Київщини від російських окупантів. УНІАН розповідає, що відбувається в столиці та області в режимі онлайн в п'ятницю, 15 квітня 2022 року."
};
var article_7 = {
    foto: 'img/news11.jpg',
    title: '"Це останній козир РФ". Міноборони не прогнозує застосування Росією ядерної зброї.',
    intro: 'Ядерна зброя – це останній козир Росії, і зараз ні українська, ні західна розвідки не мають прогнозів, що РФ має намір вдатися до використання цієї зброї. Про це на брифінгу 15 квітня сказав речник Міноборони Олександр Мотузяник.'
};
var article_8 = {
    foto: 'img/news12.jpg',
    title: 'До Києва щодня повертаються 40-50 тисяч мешканців - КМДА.',
    intro: 'До Києва щодня повертається кілька десятків тисяч її мешканців, які вимушено виїхали з міста на початку російської-української війни. Про це повідомив перший заступник голови КМДА Микола Поворозник в ефірі національного телемарафону.'
};

var articles = [article_1, article_2, article_3, article_4, article_5, article_6, article_7, article_8];

var str1 = '<div class="card col-sm-12 col-md-5 mb-5 articles"><img src="';
var str2 = '" alt="foto" class="card-img-top"><div class="card-body"><h5 class="card-title mb-4">';
var str3 = '</h5><hr><p class="card-text">';
var str4 = '</p><div class="d-flex justify-content-between align-items-center"><div class="btn-group"><button type="button" class="btn btn-warning">Дізнатися більше</button></div></div></div></div>';

for (var i = 0; i < articles.length; i++) {
    console.log(articles[i]['foto'] + ' ' + articles[i]['title'] + ' ' + articles[i]['intro']);
}

var num = 4;
var i = 0;

var add_news_second = document.querySelector('.second-news-block');
function addNews() {
    if (num == 8) {
        document.querySelector('#btn-add-news').style.display = 'none';
    } 

    for (i; i < num; i++) {
        add_news_second.innerHTML += (str1 + articles[i]['foto'] + str2 + articles[i]['title'] + str3 + articles[i]['intro'] + str4);
    }

    i = num;
    num += 4;
}

function openSearchPage() {
    document.querySelector('#search-page').style.display = 'flex';
    document.querySelector('#search').style.display = 'none';
}

function closeSearchPage() {
    document.querySelector('#search-page').style.display = 'none';
    document.querySelector('#search').style.display = 'inline';
}