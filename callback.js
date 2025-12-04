// function fun1(fun2){
//     console.log("fun1");
//     fun2();
// }
// function fun2(){
//     console.log("fun2");
// }
// fun1(fun2);

function getUserDetails(id, getUserSubjects){
    console.log("getting user details by userId", id);
    getUserSubjects({userRoll : "678"})
};
function getUserSubjects(userRoll, getUserMarks){
    console.log("getting user subject by roll number", userRoll);
    getUserMarks({subid: "en-1"})
}
function getUserMarks(userSubId){
    console.log("getting user marks with subid",userSubId)
}
getUserDetails("123", function(userRoll){
    getUserSubjects(userRoll, function(userSubId){
        getUserMarks(userSubId)
    });
});