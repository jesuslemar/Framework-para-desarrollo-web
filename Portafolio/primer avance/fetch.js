/*
var url = "https://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=javascript"

const responseData = fetch(url).then(response => response.json());
 responseData.then(({items, has_more, quota_max, quota_remaining}) => {
    for(const {title, score, owner, link, answer_count} of items)
    {
        console.log("Question Title: -------" + title)
     }
})
 


var url = "https://jsonplaceholder.typicode.com/users"

var responseData = fetch(url).then(response => response.json());
responseData.then(({username, email}) => 
{
    for (const{username, email} in responseData) 
    {
        console.log("username: " + username + "--- email: " + email)
    }
})






var url = "https://jsonplaceholder.typicode.com/users"

    fetch(url).then(response => response.json())
        .then(response => {
            for (var key in response) {
                console.log("username:" + response[key].username+
                "---email"+ response[key].email)
        }
    })



    var url = "https://jsonplaceholder.typicode.com/users"

    fetch(url).then(response => response.json())
        .then(response => {
            for (var key in response) {
                console.log("username:"+ response[key].username)
                console.log("city:"+ response[key].address.city)
                console.log("zipcode:"+ response[key].address.zipcode)
                console.log("suite:"+ response[key].address.suite)
                console.log("nameCompany:"+ response[key].company.name)
            }
        })



 var url = "https://jsonplaceholder.typicode.com/albums"

    fetch(url).then(response => response.json())
       .then(response => {
            for (var key in response) {
                console.log("userId:"+ response[key].userId)
                console.log("id:"+ response[key].id)
                console.log("title:"+ response[key].title)
            }
         })




var url = "https://jsonplaceholder.typicode.com/albums"

fetch(url,{
    method: "POST",
    headers: {
        "Content_type": "application/json"
    },
    body:JSON.stringify({
        userId: 101,
        id:101,
        title:"foo bar title"
    })
 }) .then(response => response.json())
        .then(response => console.log(response))




var url = "https://jsonplaceholder.typicode.com/users"


fetch(url,{
    method: "POST",
    headers: {
        "Content_type": "application/json"
    },
    body:JSON.stringify({
        id: 11,
        name:""
        username:""
        email:""
    })
 }) .then(response => response.json())
        .then(response => console.log(response))


*/