const schedule_buttons = document.getElementsByClassName('schedule__button');
const modal = document.getElementById('schedule__modal');

const modalTitle = document.getElementById('schedule__modal--Title');
const modalText = document.getElementById('schedule__modal--Text');
const modalDate = document.getElementById('schedule__modal--Date');
const modalPrice = document.getElementById('schedule__modal--Price');
const modalAge = document.getElementById('schedule__modal--Age');
const closeModal = document.getElementById('schedule__modal--close');

const modalData = {
kids: {
    title: "Подготовка к школе👶",
    text: "Игровое обучение и развитие детей от 6 до 7 лет.",
    date: "Пн, Ср, Пт — 09:00",
    price: "70 000 тг в месяц",
    age: "Возраст: 2–4 года"
},
english: {
    title: "Английский язык 🇬🇧",
    text: "Обучение английскому в игровой форме.",
    date: "Вт, Чт — 10:00",
    price: "30 000 тг в месяц",
    age: "Возраст: 5–10 лет"
},
taekwondo: {
    title: "Тхэквондо 🥋",
    text: "Тренировки по боевым искусствам с тренером.",
    date: "Пн, Ср — 14:00",
    price: "30 000 тг в месяц",
    age: "Возраст: 6–12 лет"
},
duration: {
    title: "Продлёнка 🕓",
    text: "Помощь с домашним заданием, игры, отдых.",
    date: "Пн–Пт — 12:00–17:00",
    price: "80 000 тг в месяц",
    age: "Возраст: 6–10 лет"
},
less: {
    title: "Группа кратковременного пребывания",
    text: "Утренние занятия, развивающие игры.",
    date: "Пн–Пт — 08:00–12:00",
    price: "80 000 тг в месяц",
    age: "Возраст: 3–5 лет"
},
kroha: {
    title: "Группа Кроха",
    text: "Занятия для самых маленьких в игровой форме.",
    date: "Пн, Ср, Пт — 09:00",
    price: "25 000 тг в месяц",
    age: "Возраст: 1–3 года"
}
};

for (let i = 0; i < schedule_buttons.length; i++) {
schedule_buttons[i].addEventListener('click', function() {
    const id = schedule_buttons[i].id;
    const data = modalData[id];

    modalTitle.textContent = data.title;
    modalText.textContent = data.text;
    modalDate.textContent = data.date;
    modalPrice.textContent = data.price;
    modalAge.textContent = data.age;

    modal.style.display = 'flex';
});
}

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(e) {
if (e.target === modal) {
    modal.style.display = 'none';
}
});
