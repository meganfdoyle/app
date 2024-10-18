function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
};

const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');

window.addEventListener('keyup', function (e) {
	//the code below will only run if the user presses the down arrow
	//the down arrow is called 'Down' in IE
	if (e.key === 'ArrowDown' || e.key === 'Down') {
		//adds 50px above the avatar, moving it down
		moveVertical(avatar, 50);
	} else if (e.key === 'ArrowUp' || e.key === 'Up') {
		//subtracts 50px from above the avatar, moving it up
		moveVertical(avatar, -50);
	} else if (e.key === 'ArrowRight' || e.key === 'Right') {
		//faces the avatar right
		avatar.style.transform = 'scale(1,1)';
		moveHorizontal(avatar, 50);
	} else if (e.key === 'ArrowLeft' || e.key === 'Left') {
		//faces the avatar left
		avatar.style.transform = 'scale(-1,1)';
		moveHorizontal(avatar, -50);
	}
	//if the two images are touching, moveCoin will run
	if (isTouching(avatar, coin)) moveCoin();
});


const moveVertical = (element, amount) => {
	//finds the position of the element
	const currTop = extractPosition(element.style.top);
	//adds the specified amount to the avatar's position (moving it up or down)
	element.style.top = `${currTop + amount}px`;
};

const moveHorizontal = (element, amount) => {
	//finds the position of the element
	const currLeft = extractPosition(element.style.left);
	//adds the specified amount to the avatar's position (moving it left or right)
	element.style.left = `${currLeft + amount}px`;
};

//implicit return function that changes the position string into a number
//by removing "px" from the end
const extractPosition = (pos) => {
	//if position is null, set it to 100
	if (!pos) return 100;
	//otherwise, extract the numbers
	return parseInt(pos.slice(0,-2));
};

const moveCoin = () => {
	const x = Math.floor(Math.random() * window.innerWidth);
	const y = Math.floor(Math.random() * window.innerHeight);
	coin.style.top = `${y}px`;
	coin.style.left = `${x}px`;
};

//moves the coin every time you refresh the page
moveCoin();