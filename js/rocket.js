var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
	document.body.className = 'body-state'+ state;
	clearInterval(timer)
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;

	//countdown
	if (state == 2) { 
		timer = setInterval(function () {
			countdownNumber = countdownNumber -1;
			document.getElementById('countdown').innerHTML = countdownNumber;
				
			if (countdownNumber > 4 && countdownNumber <= 7) {
				//yeay
				document.getElementById('yeay').className = 'yeay show';
			} else{
				document.getElementById('yeay').className = 'yeay'
			}

			if (countdownNumber > 1 && countdownNumber <= 4){
				//ohno
				document.getElementById('ohno').className = 'ohno show';
			} else{
				document.getElementById('ohno').className = 'ohno';
			}
			
			if (countdownNumber <= 0) { 
				changeState(3);	
			};
		}, 500);
	} else if (state == 3) {
		var succes = setTimeout(function (){
					var randomNumer = Math.round(Math.random()*10);
					
					console.log('randomNumer:', randomNumer)
					//succes
					if (randomNumer > 5) {
						changeState(4);

					} else {
						changeState(5); //oh no
					}
			}, 2000);

	};
}