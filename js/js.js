let creaters = [
	{title: 'Рене Декарт', text: '«Рассуждение о методе» (1637)', image: 'data/scientist-1.png'},
	{title: 'Томас Гоббс', text: '«Человеческая природа» (1640 г.)', image: 'data/image-10.png'},
	{title: 'Вильгельм Шикард', text: 'первая механическая цифровая вычислительная машина', image: 'data/scientist-2.png'},
	{title: 'Лейбниц', text: 'Лейбниц-описание современной двоичной системы исчисления (1671)', image: 'data/scientist-3.png'},
	{title: 'С. Н. Корсаков', text: 'Корсаков-серия «интеллектуальных машин» (1832г)', image: 'data/scientist-4.png'},
	{title: 'Чарльз Бэббидж и Ада Лавлейс', text: 'Лавлейс-программированная механическая вычислительная машина', image: 'data/scientist-5.png'},

];
function getRandomElement(array) {
	randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}

let button = document.querySelector('.btn-creater');
let phrase = document.querySelector('.phrase');
let image = document.querySelector('.swap-image');
let title = document.querySelector('.title');

button.addEventListener('click', function() {
	let randomElement = getRandomElement(creaters);
	smoothly(phrase, 'textContent', randomElement.text);
	smoothly(title, 'textContent', randomElement.title);
	smoothly(image, 'src', randomElement.image);
	
});

const cards = document.querySelectorAll('.transform-card');

for (let i = 0; i < cards.length; i++){
  const card = cards[i];
  card.addEventListener('mousemove', startRotate)
  card.addEventListener('mouseout', stopRotate)
}

function startRotate(event){
const cardItem = this.querySelector('.target-card');
const halfHeigth = cardItem.offsetHeight / 2;
const halfWidth = cardItem.offsetWidth / 2;

cardItem.style.transform = `rotateX(${-(event.offsetY - halfHeigth) / 5}deg ) rotateY(${(event.offsetX - halfWidth) / 5}deg )`
}

function stopRotate(event){
  const cardItem = this.querySelector('.target-card');
  cardItem.style.transform = `rotate(${0})`
}
