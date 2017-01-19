describe("Testing submit function", function(){
	var input;
	var imgTag;

	beforeAll(function(){
		/* get default result from submit function */
		var result = submit();
		input = result[0];
		imgTag = result[1];
	});

	it("should get catBirthday as default input", function(){
		expect(input).toBe("catBirthday");
	});

	it("should get gifs/catBirthday.gif as source for default gif", function(){
		expect(imgTag).toEqual("gifs/"+input+".gif");
	});
});