		function init()
		
		{
		
		var myForm = document.getElementById("contact-form");
		
		myForm.onsubmit = validate;
		
		}
		
		
		
		/********************************/
		
		
		
		//bind init() function to onload event
		
		onload = init;
		
		
		
		/******************************************/
		
		
		
		//validate() checks answers from validateRequired()
		
		//and validatepwd() and displays appropriate messages.
		
		//If an error occurs program execution is stopped:
		
		function validate()
		
		{
		
		var ID = document.getElementById("ID").value;
		
		var pwd = document.getElementById("pwd").value;
		
		//validateRequired() and validatepwd()
		
		//return true/false values: create
		
		//variables to store the result
		
		var isRequiredIDSet = false;
		
		var isRequiredpwdSet = false;
		
		var ispwdValid = false;
		
		//create variable that holds message to display
		
		var message = "";
		
		isRequiredIDSet = validateRequired(ID);
		
		isRequiredpwdSet = validateRequired(pwd);
		
		ispwdValid = validatepwd(pwd);
		
		//if all values are valid, prepare thank you message
		
		//and allow form submission
		
		if (isRequiredIDSet && isRequiredpwdSet && ispwdValid)
		
		{
		
		message = "Login erfolgreich!";
		
		}
		
		//if the ID field is empty, write message to user and stop submission:
		
		else if (! isRequiredIDSet)
		
		{
		
		message = "Bitte geben Sie Ihre ID ein";
		
		alert(message);	
		
		return false;
		
		}
		
		//If the pwd field is empty, write message to user and stop submission:
		
		else if (! isRequiredpwdSet)
		
		{
		
		message = "Bitte geben Sie Ihr Passwort ein";
		
		alert(message);
		
		return false;
		
		}
		
		//If the pwd is not in a valid format,
		
		//we write a message to the user and stop program execution:
		
		else if (! ispwdValid)
		
		{
		
		message = "Passwort nicht korrekt";
		
		alert(message);	
		
		return false;
		
		}
		}
		
		
		
		/***********************************************/
		
		
		
		//This function takes an argument
		
		//that represents the input element and checks
		
		//that it's not empty - it returns true if input is valid
		
		//and false if input is not valid:
		
		function validateRequired(input)
		
		{
		
		var isValid = false;
		
		if (input.length == 0)
		
		{
		
		isValid = false;
		
		}
		
		else
		
		{
		
		isValid = true;
		
		}
		
		return isValid;
		
		}
		
		
		
		/**********************************************/
		
		
		
		//validatepwd(pwd) checks the pwd is in valid
		
		//format and returns true if it is, false if it isn't:
		
		function validatepwd(pwd)
		
		{
		
		var isValid = false;
		
		if ((ID='001' && pwd='12345')||(ID='002' && pwd='67890'))
		
		{
		
		isValid = true;
		
		}
		
		else
		
		{
		
		isValid = false;
		
		}
		
		return isValid;
		
		}
	