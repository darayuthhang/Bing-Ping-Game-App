
 class Calculator{
	//default Constructor
	constructor(){
		this.mSignValue = "";
		this.stack = new Stack();
		this.randomValueResult = 0 ;
		this.countTimer = 0;
		this.countPoints = 0;
		this.posY = 200;
		this.scale = 1;
		this.secondInterval;
		this.TimeLimit;
		this.gameOver = "NewGame";
	}
	getTimeLimit(p_TimeLimit){
		this.TimeLimit = p_TimeLimit;
	}
	setTimeLimitThenPopUp(p_TimeLimit){
		document.getElementById('timer').innerHTML = this.countTimer;
		this.countTimer++;
		//secondInterval Function.
		let showPointsAfterGame = function(key){
			this.setThePointAfterGameWithPopUp();
		}.bind(this)
		if(this.countTimer === this.TimeLimit + 1){
			document.getElementById('wrapper').style.display 
			= 'none';
			clearInterval(startOrEnd);
			this.secondInterval =setInterval(showPointsAfterGame , 200);
		}
	}
	setThePointAfterGameWithPopUp(){

		let popUp = document.getElementById('popup');
		popUp.innerHTML = this.countPoints+" points"+'<br/>'+
		this.gameOver.link('calculator.html');
		popUp.style.transform = "scale"+"("
		+this.scale+")";
		popUp.style.top = this.posY + "px";
		this.getScaleAndPostionY();
	}
	getScaleAndPostionY(){
		this.posY-=10;
		this.scale++;
		if(this.scale === 3){
			clearInterval(this.secondInterval);
		}
	}
	showRandomQuestionText(){
		this.domShowText = document.getElementById("randomText");
		this.randomInteger = Math.floor(Math.random() * 9);
		this.randomValueResult = this.randomInteger;
		this.domShowText.value = this.randomInteger;
	}
	setValue(p_Value, p_ShowText){
		//if the argument is integer,
		//push into the stack.
		if(p_Value === '+' || p_Value ==='-'
			|| p_Value === 'x' || p_Value === '/'){
			p_ShowText.value = p_Value;
			this.mSignValue = p_Value;
		}else{
			p_ShowText.value = p_Value;
			let convertToInteger = parseInt(p_Value);
			this.stack.push(convertToInteger);
		}
		
	}
	getSum(p_ShowText){
		let sum = Math.abs(this.stack.pop() + this.stack.pop());
		this.setValue(sum,  p_ShowText);
		this.stack.push(sum);

	}
	getDifferent(p_ShowText){
		let subTract = Math.abs(this.stack.pop() - this.stack.pop());

		this.setValue(subTract, p_ShowText);
		this.stack.push(subTract);
	}
	getTimes(p_ShowText){
		let times = this.stack.pop() * this.stack.pop();
		console.log(times);
		this.setValue(times, p_ShowText);
		this.stack.push(times);
	}
	getDivide(p_ShowText){
		let integerY = this.stack.pop();
		let integerX = this.stack.peek();

		let dividend = Math.abs(integerX / integerY);
		
		this.stack.pop();
		this.setValue(dividend,  p_ShowText);
		this.stack.push(dividend);
	}
	getBingOrDing(p_ShowText, BingOrDing){
		if(BingOrDing === 'Ding'){
			++this.countPoints;
		}
		if(this.stack.peek() == this.randomValueResult){
			p_ShowText.value = BingOrDing;
			if(this.mSignValue === 'x'){
				this.countPoints+=2;
			}else if(this.mSignValue === '/'){
				this.countPoints+=3;
			}else{
				++this.countPoints;
			}	
		}else{
			//Minus the point if it is correct
			//when the user click Ding.
			if(BingOrDing === 'Ding'){
				--this.countPoints;
			}
			p_ShowText.value = "NotCorrect";
			this.showRandomQuestionText();
		}
			this.displayResultAfterGame();
	}
	displayResultAfterGame(){
		document.getElementById('countPoint').innerHTML = 
		this.countPoints + " points";
		this.stack.clear();
		this.showRandomQuestionText();
	}	
	getResult(p_ShowText, BingOrDing){
			if(this.mSignValue === '+'){
				this.getSum(p_ShowText);	
			}else if(this.mSignValue === '-'){
				this.getDifferent(p_ShowText);	
			}else if(this.mSignValue === 'x'){
				this.getTimes(p_ShowText);	
			}else if(this.mSignValue === '/'){
				this.getDivide(p_ShowText);
			}
			this.getBingOrDing(p_ShowText, BingOrDing);
	}
	resetTheValue(p_ShowText){
		//clear the stack value
		this.stack.clear();
		this.setValue(" ", p_ShowText);
	}

}




