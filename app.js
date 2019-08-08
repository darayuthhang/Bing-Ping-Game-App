
	let calculator, show_Text, header, startOrEnd;

	show_Text = document.getElementById('input_text1');
	header = document.getElementById('header');
	//time limit only Click once.
	function getTimeLimit(p_TimeLimit){
		header.style.display = "none";
		calculator = new Calculator();
		calculator.showRandomQuestionText();
		calculator.getTimeLimit(p_TimeLimit);
		startOrEnd = setInterval(startTimer, 1000); 
	}
	function startTimer(){
	  calculator.setTimeLimitThenPopUp();
	}
	
	function buttonValue(p_ButtonValue){	
		if(p_ButtonValue === '+'){
			calculator.setValue(p_ButtonValue, show_Text);
		}else if(p_ButtonValue === '-'){
			calculator.setValue(p_ButtonValue, show_Text);
		}else if(p_ButtonValue === 'x'){
			calculator.setValue(p_ButtonValue, show_Text);
		}else if(p_ButtonValue === '/'){
			calculator.setValue(p_ButtonValue, show_Text);
		}else if(p_ButtonValue === 'Bing'
			|| p_ButtonValue === 'Ding'){
			calculator.getResult(show_Text, p_ButtonValue);
		}else if(p_ButtonValue === 'c'){
			calculator.resetTheValue(show_Text);
		}else{
			calculator.setValue(p_ButtonValue, show_Text);
		}	
		
	 }


	


	

	
