var database=[
	{
		username :"abc",
		password:"xyz"
	}
];
function SignIn(username,password){
	for(var i=0;i<database.length;i++){
		if(database[i].username==username && database[i].password==password){
			console.log("sucess");
			break;
		}else{
			if(i==(database.length-1)){
				console.log("Invalid entry");
			}
		}
	}
}
//var userNamePrompt=prompt("username plz");
//var passwordPrompt=prompt("password plz");
// SignIn(userNamePrompt,passwordPrompt);