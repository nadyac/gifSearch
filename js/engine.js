function submit(){
	var input;
	var imgTag;
	var inputBox = document.getElementById("inputbox");

	if(inputBox === null && inputBox != undefined){
		input = "catBirthday";
		imgTag = {
			src: "gifs/"+input+".gif"
		}
	} else {
		input = document.getElementById("inputbox").value;
		// set default gif
		if(input === "")
			input = "catBirthday";
		imgTag = document.getElementById("imgResult");
		imgTag.src = "gifs/"+input+".gif";
	}
	
	return [input, imgTag.src];
}