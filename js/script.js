
document.addEventListener('DOMContentLoaded', () => {
	const newYear = new Date('Oct 18 2021 00:00:00');
	
	const daysVal = document.querySelector('.time-count__days .time-count__val');
	const hoursVal = document.querySelector('.time-count__hours .time-count__val');
	const minutesVal = document.querySelector('.time-count__minutes .time-count__val');
	const secondsVal = document.querySelector('.time-count__seconds .time-count__val');

	const dayText = document.querySelector('.time-count__days .time-count__text');
	const hoursText = document.querySelector('.time-count__hours .time-count__text');
	const minutesText = document.querySelector('.time-count__minutes .time-count__text');
	const secondsText = document.querySelector('.time-count__seconds .time-count__text');

	// function declOfNum(number, titles) {  
	// 	let cases = [2, 0, 1, 1, 1, 2];  
	// 	return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
	// }
	


	const timeCount = () => {
		let now = new Date();	
		let leftUntil = newYear - now;

		let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
		let hours = Math.floor(leftUntil / 1000 / 60 / 60 ) % 24;
		let minutes = Math.floor(leftUntil / 1000 / 60 ) % 60;
		let seconds = Math.floor(leftUntil / 1000) % 60;

		daysVal.textContent = days;
		hoursVal.textContent = hours;
		minutesVal.textContent = minutes;
		secondsVal.textContent = seconds;

		// dayText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
		// hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
		// minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
		// secondsText.textContent = declOfNum(seconds ['секунда', 'секунды', 'секунд']);


	};

	timeCount();
	setInterval(timeCount, 1000);

	//gsap animation
	let tl2 = gsap.timeline({
		scrollTrigger:{
			trigger: '.section1 h2',
			start: 'center 90%'
		}
	});

	tl2.from('.section1 h2', {opacity: 0, duration:1});
	tl2.from('.section1 .line', {x: 200, opacity: 0, duration:1});
	tl2.from('.first', {y: 100, opacity: 0, duration:0.7});
	tl2.from('.second', {y: 100, opacity: 0, duration:0.7}, '-=0.5');
	tl2.from('.third', {y: 100, opacity: 0, duration:0.7}, '-=0.5');
	tl2.from('.fourth', {y: 100, opacity: 0, duration:0.7}, '-=0.5');

	let tl3 = gsap.timeline({
		scrollTrigger:{
			trigger: '.section1_img-mentor',
			start: 'top 85%'
		}
	});

	tl3.from('.section1_img-mentor', {y: 100,opacity: 0, duration:1});
	tl3.from('.section1_about-mentor h3', {x: 100, opacity: 0, duration:0.7});
	tl3.from('.section1_about-mentor ul', {x: 100, opacity: 0, duration:0.7});
	tl3.from('.section1_about-mentor .button', {y: 50, opacity: 0, duration:1.5});
	

	let tl4 = gsap.timeline({
		scrollTrigger:{
			trigger: '.section2 h2',
			start: 'top 85%'
		}
	});

	tl4.from('.section2 h2', {x: 100, opacity: 0, duration:0.7});
	tl4.from('.section2 .line', {x: 200, opacity: 0, duration:0.7});

	gsap.from('.column1', {
		scrollTrigger: '.column1',
		y: 100, 
		opacity: 0,
		duration:0.7
	});

	
	gsap.from('.column2', {
		scrollTrigger: '.column2',
		y: 100, 
		opacity: 0,
		duration:0.7
	});

	gsap.from('.column3', {
		scrollTrigger: '.column3',
		y: 100, 
		opacity: 0,
		duration:0.7
	});

	gsap.from('.column4', {
		scrollTrigger: '.column4',
		y: 100, 
		opacity: 0,
		duration:0.7
	});

	gsap.from('.column5', {
		scrollTrigger: '.column5',
		y: 100, 
		opacity: 0,
		duration:0.7
	});

	gsap.from('.column6', {
		scrollTrigger: '.column6',
		y: 100, 
		opacity: 0,
		duration:0.7
	});

	let tl5 = gsap.timeline({
		scrollTrigger:{
			trigger: '.section3 h2',
			start: 'top 85%'
		}
	});

	tl5.from('.section3 h2', {x: 100, opacity: 0, duration:0.7});
	tl5.from('.section3 .line', {x: 200, opacity: 0, duration:0.7});
	tl5.from('.section3__row_column p', {y: 200, opacity: 0, duration:0.7});
	tl5.from('.section3__row_column h6', {x: 200, opacity: 0, duration:0.7});
	tl5.from('.section3__row_column span', {x: 200, opacity: 0, duration:0.7});
	tl5.from('.section3 button', {opacity: 0, duration:0.7});

	let tl6 = gsap.timeline({
		scrollTrigger:{
			trigger: '.footer h2',
			start: 'top 85%'
		}
	});

	tl6.from('.footer h2', {y: 30, opacity: 0, duration:0.7});
	tl6.from('.footer p', {y: 30, opacity: 0, duration:0.7}, '-=0.5');
	tl6.from('#name', {x: 300, opacity: 0, duration:0.7});
	tl6.from('#phone', {x: 300, opacity: 0, duration:0.7}, '-=0.3');
	tl6.from('#email', {x: 300, opacity: 0, duration:0.7}, '-=0.3');
	tl6.from('.form2 .button', { opacity: 0, duration:0.7});
	tl6.from('.copyright span', {y:200, opacity: 0, duration:1.5});



	const tl = gsap.timeline();

	tl.to('.header', {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}, '+=0.5');
	tl.to('.header__income_strategy',{opacity: '1',  visibility:' visible' }, '+=1');
	tl.to('.header__income_form',{ opacity: '1'});

	// header.addEventListener('DOMContentLoaded', () => {
	// 	tl.play();
	// });

});