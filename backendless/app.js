
var APP_ID = '2DECF43D-C736-0F1A-FFF7-A3A9058E0200'; // 
var API_KEY = '46EB9B16-7BB3-608F-FF78-80ADDBC7B400';//  

Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp(APP_ID, API_KEY);







function User(email,fullName,destination,date){
    this.email = email;
    this.fullName = fullName;
    this.destination = destination;
    this.tripDate = date;
	this.passowrd = "fakepasswordforbackendless";
}

window.onload = function(){



    document.querySelector("#submitButton").addEventListener('click', formSubmit);

   /* 
    let q = Backendless.DataQueryBuilder.create().setWhereClause("price > 150")
    Backendless.Data.of('books').find(q).then(function(data){

        console.log(data)
    }).catch(apiError)

    */
 
};



function isEmailValid(email) {
    let atpos = email.indexOf('@');
    let dotpos = email.lastIndexOf('.');
    if(atpos<1 || dotpos<1||atpos>dotpos){
		return true;
    }
    return false;
}

function formSubmit(e){

    e.preventDefault();
    console.log('submit button clicked');
    let email = document.querySelector('#email').value;
    let fullName = document.querySelector('#fullName').value;
     let destination = document.querySelector('#destination').value;
    let date = document.querySelector('#calender').value;

    if(email === "" || destination === "" || fullName === "" || date === ""){
        alertMsg('Please fill out all fields',"alert alert-danger")
    } else {
    	if(isEmailValid(email)){
            alertMsg("Please use valid email","alert alert-danger")
        }else {
    		send(email,fullName,destination, date);
        }
    }

}
function alertMsg(msg1,styleCastom){
    let message = document.querySelector('#message');
    message.className = styleCastom;
    message.innerHTML = msg1;
}

function send(email, fullName, destination, date) {
	let user = new User(email,fullName,destination,date);
    let bkUser = new Backendless.User();
    bkUser.email = user.email;
    bkUser.password = user.passowrd;
    bkUser.destination = user.destination;
    bkUser.tripDate = user.tripDate;
    bkUser.fullName = user.fullName;

     console.log("ff1")

    Backendless.UserService.register(bkUser).then( registerOk ).catch(apiError)

      
      


}



 
function registerOk(){
    alert(" Data registration of your booking  was successful ","alert alert-success")
}


 
function registerOk_(){
    alertMsg(" Data registration was successful ","alert alert-success")
}




function apiError(error){

    console.log(error.message)
    console.log(error.statusCode)
    alert ("   Your booking already exists  and is being processed","alert alert-danger")
}
function apiError_(error){

    console.log(error.message)
    console.log(error.statusCode)
    alertMsg(error.message,"alert alert-danger")
}