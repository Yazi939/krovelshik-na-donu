/* Кровельщик Дона — interactions */

const PRODUCTS_INITIAL = 9;
const PRODUCTS = {
  new: [
    { title: "Металлочерепица Monterrey 0.45", price: "610", old: "720", unit: "₽ / м²", badge: "Новинка", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" },
    { title: "Гибкая черепица Docke Premium", price: "780", old: "890", unit: "₽ / м²", badge: "Новинка", img: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80" },
    { title: "Водосточная система Aquasystem", price: "1 890", old: "2 200", unit: "₽ / компл.", badge: "Новинка", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
    { title: "Мансардное окно Velux GGL", price: "28 900", old: "32 000", unit: "₽", badge: "Новинка", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80" },
    { title: "Утеплитель Rockwool Лайт Баттс", price: "1 240", old: "1 450", unit: "₽ / уп.", badge: "Новинка", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
    { title: "Планка коньковая фигурная", price: "520", old: "610", unit: "₽ / шт.", badge: "Новинка", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" },
    { title: "Гидроизоляция Delta Vent N", price: "4 800", old: "5 200", unit: "₽ / рул.", badge: "Новинка", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
    { title: "Снегозадержатель трубчатый", price: "1 480", old: "1 650", unit: "₽ / шт.", badge: "Новинка", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80" },
    { title: "Софит перфорированный", price: "340", old: "390", unit: "₽ / шт.", badge: "Новинка", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80" },
    { title: "Профнастил С21 цветной", price: "420", old: "490", unit: "₽ / м²", badge: "Новинка", img: "https://images.unsplash.com/photo-1564156326430-00c74c23df51?auto=format&fit=crop&w=600&q=80" },
    { title: "Саморезы кровельные 4.8×35", price: "890", old: "980", unit: "₽ / уп.", badge: "Новинка", img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80" },
  ],
  sale: [
    { title: "Профнастил С21 оцинкованный", price: "349", old: "420", unit: "₽ / м²", badge: "Распродажа", img: "https://images.unsplash.com/photo-1564156326430-00c74c23df51?auto=format&fit=crop&w=600&q=80" },
    { title: "Металлочерепица Classic 0.4", price: "449", old: "560", unit: "₽ / м²", badge: "Распродажа", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" },
    { title: "Гибкая черепица Standard", price: "560", old: "680", unit: "₽ / м²", badge: "Распродажа", img: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80" },
    { title: "Водосточный жёлоб 3 м", price: "790", old: "980", unit: "₽ / шт.", badge: "Распродажа", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
    { title: "Софит перфорированный", price: "310", old: "390", unit: "₽ / шт.", badge: "Распродажа", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80" },
    { title: "Планка карнизная 2 м", price: "360", old: "450", unit: "₽ / шт.", badge: "Распродажа", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" },
    { title: "Утеплитель минеральная вата", price: "980", old: "1 240", unit: "₽ / уп.", badge: "Распродажа", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
    { title: "Мансардное окно Standard", price: "18 900", old: "24 500", unit: "₽", badge: "Распродажа", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80" },
    { title: "Снегозадержатель уголковый", price: "890", old: "1 150", unit: "₽ / шт.", badge: "Распродажа", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80" },
    { title: "Ондулин Smart", price: "520", old: "680", unit: "₽ / лист", badge: "Распродажа", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
    { title: "Сайдинг панели", price: "290", old: "410", unit: "₽ / шт.", badge: "Распродажа", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80" },
  ],
  hits: [
    { title: "Металлочерепица Cascade 0.5", price: "690", old: "750", unit: "₽ / м²", badge: "Хит", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" },
    { title: "Мягкая кровля Katepal Ambient", price: "920", old: "1 050", unit: "₽ / м²", badge: "Хит", img: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80" },
    { title: "Профнастил НС35", price: "510", old: "580", unit: "₽ / м²", badge: "Хит", img: "https://images.unsplash.com/photo-1649532728630-545d04906ded?auto=format&fit=crop&w=600&q=80" },
    { title: "Водосток Docke Premium", price: "2 150", old: "2 400", unit: "₽ / компл.", badge: "Хит", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
    { title: "Снегозадержатель трубчатый", price: "1 480", old: "1 650", unit: "₽ / шт.", badge: "Хит", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80" },
    { title: "Мансардное окно Velux", price: "26 900", old: "28 900", unit: "₽", badge: "Хит", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80" },
    { title: "Утеплитель Rockwool", price: "1 180", old: "1 240", unit: "₽ / уп.", badge: "Хит", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
    { title: "Планка торцевая", price: "440", old: "490", unit: "₽ / шт.", badge: "Хит", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" },
    { title: "Софит сплошной", price: "320", old: "360", unit: "₽ / шт.", badge: "Хит", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80" },
    { title: "Гидроизоляция изоспан", price: "3 900", old: "4 400", unit: "₽ / рул.", badge: "Хит", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
    { title: "Комплект крепежа кровельный", price: "1 090", old: "1 250", unit: "₽ / уп.", badge: "Хит", img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80" },
  ],
  rec: [
    { title: "Комплект кровли под ключ", price: "от 1 890", old: "", unit: "₽ / м²", badge: "Рекомендуем", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
    { title: "Металлочерепица Ruukki Purex", price: "1 150", old: "1 280", unit: "₽ / м²", badge: "Рекомендуем", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" },
    { title: "Мансардное окно Fakro FTP", price: "24 500", old: "27 000", unit: "₽", badge: "Рекомендуем", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80" },
    { title: "Гидроизоляция Delta Vent N", price: "4 800", old: "5 200", unit: "₽ / рул.", badge: "Рекомендуем", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
    { title: "Сайдинг панели премиум", price: "410", old: "480", unit: "₽ / шт.", badge: "Рекомендуем", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80" },
    { title: "Водосток Aquasystem", price: "2 050", old: "2 200", unit: "₽ / компл.", badge: "Рекомендуем", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
    { title: "Профнастил НС44", price: "560", old: "620", unit: "₽ / м²", badge: "Рекомендуем", img: "https://images.unsplash.com/photo-1649532728630-545d04906ded?auto=format&fit=crop&w=600&q=80" },
    { title: "Гибкая черепица Docke", price: "840", old: "920", unit: "₽ / м²", badge: "Рекомендуем", img: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80" },
    { title: "Утеплитель Лайт Баттс", price: "1 290", old: "1 450", unit: "₽ / уп.", badge: "Рекомендуем", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
    { title: "Снегозадержатель трубчатый", price: "1 520", old: "1 650", unit: "₽ / шт.", badge: "Рекомендуем", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80" },
    { title: "Чердачная лестница Fakro", price: "18 400", old: "20 900", unit: "₽", badge: "Рекомендуем", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
  ],
  defect: [
    { title: "Металлочерепица — заводская некондиция", price: "390", old: "610", unit: "₽ / м²", badge: "Некондиция", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" },
    { title: "Профнастил остатки партий", price: "249", old: "420", unit: "₽ / м²", badge: "Некондиция", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" },
    { title: "Планки и доборы — некондиция", price: "280", old: "420", unit: "₽ / шт.", badge: "Некондиция", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" },
    { title: "Гибкая черепица — брак упаковки", price: "520", old: "780", unit: "₽ / м²", badge: "Некондиция", img: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80" },
    { title: "Комплектующие — некондиция со склада", price: "190", old: "340", unit: "₽ / шт.", badge: "Некондиция", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
    { title: "Софит — некондиция", price: "210", old: "340", unit: "₽ / шт.", badge: "Некондиция", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80" },
    { title: "Водосточный жёлоб — уценка", price: "520", old: "790", unit: "₽ / шт.", badge: "Некондиция", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
    { title: "Утеплитель — остатки", price: "740", old: "1 180", unit: "₽ / уп.", badge: "Некондиция", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
    { title: "Сайдинг — некондиция", price: "180", old: "310", unit: "₽ / шт.", badge: "Некондиция", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80" },
    { title: "Ондулин — уценка", price: "390", old: "520", unit: "₽ / лист", badge: "Некондиция", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
    { title: "Крепёж — некондиция", price: "120", old: "280", unit: "₽ / уп.", badge: "Некондиция", img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80" },
  ],
  tools: [
    { title: "Ножницы по металлу проходные", price: "4 900", old: "5 600", unit: "₽", badge: "Инструмент", img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80" },
    { title: "Шуруповёрт аккумуляторный", price: "12 500", old: "14 200", unit: "₽", badge: "Инструмент", img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=600&q=80" },
    { title: "Гибочный станок кровельный", price: "38 000", old: "42 000", unit: "₽", badge: "Инструмент", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80" },
    { title: "Клещи фальцевые", price: "3 200", old: "3 800", unit: "₽", badge: "Инструмент", img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=80" },
    { title: "Страховочный пояс монтажный", price: "5 400", old: "6 100", unit: "₽", badge: "Инструмент", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
    { title: "Рулетка строительная 8 м", price: "890", old: "1 100", unit: "₽", badge: "Инструмент", img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80" },
    { title: "Молоток кровельный", price: "2 400", old: "2 900", unit: "₽", badge: "Инструмент", img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=80" },
    { title: "Уровень лазерный", price: "8 900", old: "10 500", unit: "₽", badge: "Инструмент", img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=600&q=80" },
    { title: "Набор бит и головок", price: "1 650", old: "1 980", unit: "₽", badge: "Инструмент", img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80" },
    { title: "Нож кровельный", price: "780", old: "950", unit: "₽", badge: "Инструмент", img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=80" },
    { title: "Перчатки монтажные", price: "420", old: "560", unit: "₽", badge: "Инструмент", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
  ],
};

const NEWS_ITEMS = {
  news: [
    {
      text: "Новая линейка металлочерепицы: цвета и покрытия сезона — уже на складе в Ростове-на-Дону",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80",
    },
    {
      text: "Как выбрать утеплитель для кровли: краткий гид по толщине, плотности и СНиП",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80",
    },
    {
      text: "Открыли расширенный склад комплектующих: планки, софиты и крепёж в наличии",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=80",
    },
  ],
  offers: [
    {
      text: "Специальное предложение на водосточные системы: комплекты со скидкой при заказе кровли",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80",
    },
    {
      text: "Комплект кровли под ключ — фиксированная цена на материалы и монтаж до конца месяца",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80",
    },
    {
      text: "Мансардные окна: выгодный комплект окно + оклад + монтаж",
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=80",
    },
  ],
};

const PARTNERS = [
  { name: "Караван Дона" },
  { name: "Кузнечный Дом" },
  { name: "Краски Дона" },
];

const RECS_ITEMS = {
  rec: [
    { title: "Металлочерепица Ruukki Purex 0.5", price: "1 150", old: "1 280", unit: "₽ / м²", star: true, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" },
    { title: "Гибкая черепица Docke Premium", price: "780", old: "890", unit: "₽ / м²", star: true, img: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80" },
    { title: "Водосточная система Aquasystem", price: "1 890", old: "2 200", unit: "₽ / компл.", star: true, img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
    { title: "Мансардное окно Velux GGL", price: "28 900", old: "32 000", unit: "₽ / шт.", star: true, img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80" },
  ],
  sold: [
    { title: "Профнастил С8 оцинкованный", price: "280", old: "349", unit: "₽ / м²", badge: "Распродажа", img: "https://images.unsplash.com/photo-1564156326430-00c74c23df51?auto=format&fit=crop&w=600&q=80" },
    { title: "Металлочерепица Monterrey 0.45", price: "490", old: "610", unit: "₽ / м²", badge: "Распродажа", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" },
    { title: "Ондулин Smart", price: "680", old: "780", unit: "₽ / лист", star: true, img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80" },
    { title: "Планка карнизная 2 м", price: "420", old: "520", unit: "₽ / шт.", badge: "Распродажа", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" },
  ],
};

const SOLD_ITEMS = [
  { title: "Профнастил С8 оцинкованный", price: "280", unit: "₽ / м²", note: "Продажа без монтажа", img: "https://images.unsplash.com/photo-1564156326430-00c74c23df51?auto=format&fit=crop&w=600&q=80" },
  { title: "Металлочерепица Monterrey 0.45", price: "490", unit: "₽ / м²", note: "Продажа без монтажа", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" },
  { title: "Ондулин Smart", price: "680", unit: "₽ / лист", note: "Продажа без монтажа", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80" },
  { title: "Планка карнизная 2 м", price: "420", unit: "₽ / шт.", note: "Продажа без монтажа", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" },
  { title: "Саморезы кровельные 4.8×35", price: "890", unit: "₽ / уп.", note: "Продажа без монтажа", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
  { title: "Софит перфорированный", price: "310", unit: "₽ / шт.", note: "Продажа без монтажа", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80" },
];

/* Популярные категории: сейчас — кровля.
   Позже сюда добавятся остальные разделы каталога — вёрстка уже считает total и «ещё N». */
const POPULAR_INITIAL = 9;
const POPULAR_CATEGORIES = [
  { title: "Металлочерепица", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=500&q=80" },
  { title: "Профнастил", img: "https://images.unsplash.com/photo-1564156326430-00c74c23df51?auto=format&fit=crop&w=500&q=80" },
  { title: "Гибкая черепица", img: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=500&q=80" },
  { title: "Фальцевая кровля", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80" },
  { title: "Водосточные системы", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80" },
  { title: "Теплоизоляция", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80", badge: "Популярное" },
  { title: "Гидроизоляция", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=500&q=80" },
  { title: "Мансардные окна", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=500&q=80" },
  { title: "Элементы безопасности", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=500&q=80" },
  { title: "Чердачные лестницы", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=500&q=80" },
  { title: "Инструменты для монтажа", img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=500&q=80", badge: "Новинка" },
];

const WORKS = [
  {
    title: "ТРЦ и коммерческие объекты",
    text: "Разработка проекта кровли ТРЦ: соответствие требованиям пожарной безопасности.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Транспортные объекты",
    text: "Капремонт кровли транспортных объектов: нормы, решения и материалы по СП 17.13330.2017.",
    img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Ресторанные комплексы",
    text: "Кровельные работы для ресторанных комплексов — строго по СП и СНиП.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Коттеджные посёлки",
    text: "Кровельные и дизайнерские решения для коттеджных посёлков — опыт 20 лет.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Частная застройка",
    text: "Кровля для частных домов и участков — подбор, монтаж и ремонт любой сложности.",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
];

const SERVICE_ICON = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M4 20 L12 4 L20 20 Z"/>
    <path d="M9 14 H15"/>
  </svg>
`;

function productCardHTML(p) {
  const oldPrice = p.old ? `<div class="product-card__old">${p.old} ${p.unit}</div>` : "";
  return `
    <article class="product-card">
      <div class="product-card__top">
        <span class="product-card__badge">${p.badge || "Новинка"}</span>
        <button type="button" class="product-card__fav" aria-label="В избранное">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.3l-6.2 3.7 1.6-7.1L2 9.3l7.2-.6L12 2l2.8 6.7 7.2.6-5.4 4.6 1.6 7.1z"/></svg>
        </button>
      </div>
      <a href="#" class="product-card__img"><img src="${p.img}" alt="${p.title}" loading="lazy" /></a>
      <a href="#" class="product-card__title">${p.title}</a>
      <div class="product-card__price">${p.price} <span>${p.unit}</span></div>
      ${oldPrice}
      <div class="product-card__actions">
        <button type="button" class="product-card__buy">В корзину</button>
        <button type="button" class="product-card__compare" aria-label="Сравнить">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16M4 12h10M4 18h13"/></svg>
        </button>
      </div>
    </article>
  `;
}

function soldCardHTML(p) {
  return `
    <article class="product-card">
      <a href="#" class="product-card__img"><img src="${p.img}" alt="${p.title}" loading="lazy" /></a>
      <a href="#" class="product-card__title">${p.title}</a>
      <div class="product-card__price">${p.price} <span>${p.unit}</span></div>
      <div class="product-card__meta">
        <span class="product-card__stock">В наличии</span>
        <span class="product-card__note">${p.note}</span>
      </div>
    </article>
  `;
}

function recsCardHTML(p) {
  const badge = p.badge ? `<span class="recs-card__badge">${p.badge}</span>` : "";
  const star = p.star ? `<span class="recs-card__star" aria-hidden="true">★</span>` : "";
  const unitShort = (p.unit || "₽ / шт.").replace(/^₽\s*/, "").trim();
  const old = p.old ? `<div class="recs-card__old">${p.old} ₽</div>` : "";
  return `
    <article class="recs-card">
      <div class="recs-card__top">${badge}${star}</div>
      <a href="#promo" class="recs-card__img"><img src="${p.img}" alt="${p.title}" loading="lazy" /></a>
      <a href="#promo" class="recs-card__title">${p.title}</a>
      <div class="recs-card__price">${p.price} ₽ <span>${unitShort}</span></div>
      ${old}
    </article>
  `;
}

function renderRecs(tab = "rec") {
  const grid = document.getElementById("recsGrid");
  if (!grid) return;
  const list = RECS_ITEMS[tab] || RECS_ITEMS.rec;
  grid.style.opacity = "0";
  grid.style.transform = "translateY(8px)";
  setTimeout(() => {
    grid.innerHTML = list.map(recsCardHTML).join("");
    grid.style.transition = "opacity 0.35s ease, transform 0.35s ease";
    grid.style.opacity = "1";
    grid.style.transform = "none";
  }, 140);
}

function initRecsTabs() {
  document.querySelectorAll("[data-recs-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-recs-tab]").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderRecs(btn.dataset.recsTab);
    });
  });
}

function workCardHTML(w) {
  return `
    <article class="work-card">
      <div class="work-card__img"><img src="${w.img}" alt="${w.title}" loading="lazy" /></div>
      <div class="work-card__body">
        <strong>${w.title}</strong>
        <span>${w.text}</span>
      </div>
    </article>
  `;
}

function productsMoreHTML(shown, total) {
  const left = Math.max(total - shown, 0);
  return `
    <button type="button" class="popular-more product-more" id="productsMore" aria-label="Показать ещё товары">
      <span class="popular-more__plus" aria-hidden="true"></span>
      <span class="popular-more__label">Показать ещё ${left}</span>
      <span class="popular-more__meta">Показано ${shown} из ${total}</span>
    </button>
  `;
}

function renderProducts(tab = "new", expanded = false) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  const all = PRODUCTS[tab] || PRODUCTS.new;
  const total = all.length;
  const initial = Math.min(PRODUCTS_INITIAL, total);
  const list = expanded ? all : all.slice(0, initial);
  const needMore = !expanded && total > initial;

  grid.style.opacity = "0";
  grid.style.transform = "translateY(8px)";
  setTimeout(() => {
    grid.innerHTML = list.map(productCardHTML).join("") + (needMore ? productsMoreHTML(initial, total) : "");
    grid.style.transition = "opacity 0.35s ease, transform 0.35s ease";
    grid.style.opacity = "1";
    grid.style.transform = "none";
    grid.querySelectorAll(".product-card__fav").forEach((btn) => {
      btn.addEventListener("click", () => btn.classList.toggle("is-active"));
    });
    document.getElementById("productsMore")?.addEventListener("click", () => {
      renderProducts(tab, true);
    });
  }, 140);
}

function renderSold() {
  const wrap = document.getElementById("soldWrapper");
  if (!wrap) return;
  wrap.innerHTML = SOLD_ITEMS.map((p) => `<div class="swiper-slide">${soldCardHTML(p)}</div>`).join("");
}

function renderWorks() {
  const track = document.getElementById("worksTrack");
  if (!track) return;
  track.innerHTML = WORKS.map(workCardHTML).join("");
}

function replaceServiceIcons() {
  document.querySelectorAll(".service-card__icon").forEach((el) => {
    el.innerHTML = SERVICE_ICON;
  });
}

function initSmoothScroll() {
  if (typeof Lenis === "undefined") return null;
  return new Lenis({
    autoRaf: true,
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    anchors: true,
  });
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.06}s`;
    io.observe(el);
  });
}

function initHero() {
  if (typeof Swiper === "undefined") return;
  new Swiper(".hero-swiper", {
    loop: true,
    speed: 800,
    autoplay: { delay: 5500, disableOnInteraction: false },
    effect: "fade",
    fadeEffect: { crossFade: true },
    pagination: { el: ".hero__pagination", clickable: true },
    navigation: {
      nextEl: ".hero__nav--next",
      prevEl: ".hero__nav--prev",
    },
  });
}

function initPartners() {
  renderPartners(false);
}

function partnerCardHTML(p) {
  const badge = p.badge
    ? `<span class="partner-card__badge">${p.badge}</span>`
    : "";
  return `
    <a href="#about" class="partner-card">
      ${badge}
      <span class="partner-card__name">${p.name}</span>
    </a>
  `;
}

function renderPartners(expanded = false) {
  const grid = document.getElementById("partnersGrid");
  if (!grid) return;

  const total = PARTNERS.length;
  const initial = 9;
  const canExpand = total > initial;
  const list = expanded || !canExpand ? PARTNERS : PARTNERS.slice(0, initial);
  /* «+» как на оригинале: раскрывает список, если партнёров больше; иначе остаётся для будущих */
  const plus = `
    <button type="button" class="partner-more" id="partnersMore" aria-label="Показать ещё партнёров"${canExpand && !expanded ? "" : " disabled"}>
      <span class="popular-more__plus" aria-hidden="true"></span>
    </button>
  `;

  grid.innerHTML = list.map(partnerCardHTML).join("") + (expanded ? "" : plus);

  if (canExpand && !expanded) {
    document.getElementById("partnersMore")?.addEventListener("click", () => renderPartners(true));
  }
}

function initSoldSwiper() {
  if (typeof Swiper === "undefined") return;
  new Swiper(".sold-swiper", {
    slidesPerView: 1.15,
    spaceBetween: 16,
    speed: 600,
    navigation: {
      nextEl: ".sold-next",
      prevEl: ".sold-prev",
    },
    breakpoints: {
      560: { slidesPerView: 2 },
      860: { slidesPerView: 3 },
      1100: { slidesPerView: 4 },
    },
  });
}

function initTabs() {
  document.querySelectorAll(".products .tabs__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".products .tabs__btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderProducts(btn.dataset.tab, false);
    });
  });
}

function newsCardHTML(item) {
  return `
    <article class="news-card">
      <div class="news-card__img">
        <img src="${item.img}" alt="" loading="lazy" />
      </div>
      <p class="news-card__text">${item.text}</p>
      <a href="#" class="news-card__btn">Подробнее</a>
    </article>
  `;
}

function renderNews(tab = "news") {
  const grid = document.getElementById("newsGrid");
  if (!grid) return;
  const list = NEWS_ITEMS[tab] || NEWS_ITEMS.news;
  grid.style.opacity = "0";
  grid.style.transform = "translateY(8px)";
  setTimeout(() => {
    grid.innerHTML = list.map(newsCardHTML).join("");
    grid.style.transition = "opacity 0.35s ease, transform 0.35s ease";
    grid.style.opacity = "1";
    grid.style.transform = "none";
  }, 140);
}

function initNewsTabs() {
  document.querySelectorAll(".news-tabs__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".news-tabs__btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderNews(btn.dataset.newsTab);
    });
  });
}

function initServicesMore() {
  const btn = document.getElementById("servicesMore");
  const block = document.querySelector(".services-block");
  if (!btn || !block) return;
  btn.addEventListener("click", () => {
    const open = block.classList.toggle("is-expanded");
    btn.textContent = open ? "Свернуть" : "Показать ещё 5";
  });
}

function popularCardHTML(c) {
  const badge = c.badge ? `<span class="popular-card__badge">${c.badge}</span>` : "";
  return `
    <a href="#promo" class="popular-card">
      ${badge}
      <span class="popular-card__img"><img src="${c.img}" alt="${c.title}" loading="lazy" /></span>
      <span class="popular-card__name">${c.title}</span>
    </a>
  `;
}

function popularMoreHTML(shown, total) {
  const left = Math.max(total - shown, 0);
  return `
    <button type="button" class="popular-more" id="popularMore" aria-label="Показать ещё категории">
      <span class="popular-more__plus" aria-hidden="true"></span>
      <span class="popular-more__label">Показать ещё ${left}</span>
      <span class="popular-more__meta">Показано ${shown} из ${total}</span>
    </button>
  `;
}

function renderPopularCategories(expanded = false) {
  const grid = document.getElementById("popularGrid");
  if (!grid) return;

  const total = POPULAR_CATEGORIES.length;
  const initial = Math.min(POPULAR_INITIAL, total);
  const list = expanded ? POPULAR_CATEGORIES : POPULAR_CATEGORIES.slice(0, initial);
  const needMore = !expanded && total > initial;

  grid.innerHTML =
    list.map(popularCardHTML).join("") + (needMore ? popularMoreHTML(initial, total) : "");

  const moreBtn = document.getElementById("popularMore");
  moreBtn?.addEventListener("click", () => renderPopularCategories(true));
}

function initModal() {
  const modal = document.getElementById("modal");
  if (!modal) return;

  const open = () => {
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    modal.hidden = true;
    document.body.style.overflow = "";
  };

  document.querySelectorAll("[data-modal='call']").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      open();
    });
  });
  modal.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", close));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) close();
  });

  const form = document.getElementById("callForm");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    close();
    form.reset();
    alert("Спасибо! Мы перезвоним вам в ближайшее время.");
  });
}

function initCookie() {
  const box = document.getElementById("cookie");
  const btn = document.getElementById("cookieAccept");
  if (!box || !btn) return;
  if (localStorage.getItem("cookieOk") === "1") {
    box.remove();
    return;
  }
  btn.addEventListener("click", () => {
    localStorage.setItem("cookieOk", "1");
    box.classList.add("is-hidden");
    setTimeout(() => box.remove(), 320);
  });
}

function buildSearchIndex() {
  const items = [];

  document.querySelectorAll(".dir-tile").forEach((el) => {
    const title = el.querySelector("h3")?.textContent?.trim() || "";
    const text = el.querySelector("p")?.textContent?.trim() || "";
    items.push({ title, text, href: el.getAttribute("href") || "#catalog", type: "Направление" });
  });

  document.querySelectorAll(".service-card").forEach((el) => {
    const title = el.querySelector("strong")?.textContent?.trim() || "";
    const text = el.querySelector("span:last-child")?.textContent?.trim() || "";
    items.push({ title, text, href: "#contacts", type: "Услуга" });
  });

  document.querySelectorAll(".how-step").forEach((el) => {
    const title = el.querySelector("h3")?.textContent?.trim() || "";
    const text = el.querySelector("p")?.textContent?.trim() || "";
    items.push({ title, text, href: "#project", type: "Как мы работаем" });
  });

  PARTNERS.forEach((p) => {
    items.push({ title: p.name, text: "Партнёр", href: "#about", type: "Партнёр" });
  });

  Object.values(PRODUCTS)
    .flat()
    .forEach((p) => {
      items.push({ title: p.title, text: `${p.price} ${p.unit}`, href: "#promo", type: "Товар" });
    });

  SOLD_ITEMS.forEach((p) => {
    items.push({ title: p.title, text: p.note || "Продаваемые материалы", href: "#promo", type: "Материал" });
  });

  WORKS.forEach((w) => {
    items.push({ title: w.title, text: w.text, href: "#contacts", type: "Работы" });
  });

  [
    { title: "Каталог", text: "Разделы и направления", href: "#catalog", type: "Раздел" },
    { title: "Оставить заявку", text: "Форма обратной связи", href: "#", type: "Действие", action: "modal" },
    { title: "Контакты", text: "Вавилова 73 Д, Ростов-на-Дону", href: "#contacts", type: "Раздел" },
    { title: "Вакансии", text: "Работа в компании", href: "#vacancies", type: "Раздел" },
  ].forEach((i) => items.push(i));

  return items;
}

function initSearch() {
  const form = document.getElementById("siteSearchForm");
  const input = document.getElementById("siteSearchInput");
  const drop = document.getElementById("searchDrop");
  const list = document.getElementById("searchResults");
  const empty = document.getElementById("searchEmpty");
  const toggle = document.getElementById("searchToggle");
  const panel = document.getElementById("searchPanel");
  const wrap = document.querySelector(".navbar__search");
  if (!form || !input || !drop || !list || !empty) return;

  const index = buildSearchIndex();
  let active = -1;

  const closeDrop = () => {
    drop.hidden = true;
    active = -1;
  };

  const closePanel = () => {
    if (panel) panel.hidden = true;
    wrap?.classList.remove("is-open");
    closeDrop();
  };

  const openPanel = () => {
    if (!panel) return;
    panel.hidden = false;
    wrap?.classList.add("is-open");
    setTimeout(() => input.focus(), 30);
  };

  toggle?.addEventListener("click", (e) => {
    e.stopPropagation();
    if (panel?.hidden) openPanel();
    else closePanel();
  });

  const openModal = () => {
    document.querySelector("[data-modal='call']")?.click();
  };

  const go = (item) => {
    closePanel();
    input.blur();
    if (item.action === "modal") {
      openModal();
      return;
    }
    const target = document.querySelector(item.href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (item.href && item.href !== "#") {
      window.location.hash = item.href;
    }
  };

  const render = (query) => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) {
      closeDrop();
      return;
    }

    const found = index
      .filter((item) => `${item.title} ${item.text} ${item.type}`.toLowerCase().includes(q))
      .slice(0, 10);

    drop.hidden = false;
    active = -1;

    if (!found.length) {
      list.innerHTML = "";
      empty.hidden = false;
      return;
    }

    empty.hidden = true;
    list.innerHTML = found
      .map(
        (item, i) => `
      <li>
        <button type="button" class="search-drop__item" data-index="${i}">
          <strong>${item.title}</strong>
          <span>${item.type}${item.text ? " · " + item.text : ""}</span>
        </button>
      </li>`
      )
      .join("");

    list.querySelectorAll(".search-drop__item").forEach((btn, i) => {
      btn.addEventListener("click", () => go(found[i]));
    });

    drop._found = found;
  };

  input.addEventListener("input", () => render(input.value));
  input.addEventListener("focus", () => {
    if (input.value.trim().length >= 2) render(input.value);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const found = drop._found;
    if (found?.length) {
      go(found[Math.max(active, 0)]);
    } else {
      render(input.value);
    }
  });

  input.addEventListener("keydown", (e) => {
    const found = drop._found || [];
    if (drop.hidden || !found.length) return;
    const items = list.querySelectorAll(".search-drop__item");
    if (e.key === "ArrowDown") {
      e.preventDefault();
      active = (active + 1) % found.length;
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      active = (active - 1 + found.length) % found.length;
    } else if (e.key === "Escape") {
      closePanel();
      return;
    } else {
      return;
    }
    items.forEach((el, i) => el.classList.toggle("is-active", i === active));
    items[active]?.scrollIntoView({ block: "nearest" });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".navbar__search")) closePanel();
  });
}

function initDesignBanner() {
  if (typeof Swiper === "undefined") return;
  if (!document.querySelector(".design-swiper")) return;
  new Swiper(".design-swiper", {
    loop: true,
    speed: 650,
    autoplay: { delay: 5500, disableOnInteraction: false },
    navigation: {
      nextEl: ".design-nav--next",
      prevEl: ".design-nav--prev",
    },
    pagination: {
      el: ".design-pagination",
      clickable: true,
    },
  });
}

function initCatalogBtn() {
  const btn = document.getElementById("catalogBtn");
  btn?.addEventListener("click", () => {
    btn.classList.toggle("is-open");
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initSmoothScroll();
  initReveal();
  initHero();
  renderProducts("new");
  initTabs();
  renderNews("news");
  initNewsTabs();
  initDesignBanner();
  renderRecs("rec");
  initRecsTabs();
  initPartners();
  renderWorks();
  renderPopularCategories(false);
  initModal();
  initCookie();
  initSearch();
  initCatalogBtn();
});
