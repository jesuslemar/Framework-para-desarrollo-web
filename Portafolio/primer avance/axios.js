const axios = require ('axios');

var url = "https://jsonplaceholder.typicode.com/albums"

/*
axios.get(url).then(({data}) => {
    for (const key in data){
    console.log(data[key].title)
    }

}).catch((err) => {
    console.log(err)
});



axios.post(url, {
    userId: 2,
    title: "Lorem Ipsum ETC ETC"
}).then(({data}) => console.log(data))






axios.post(url, {
    userId: 2,
    id: 11,
    title: "quam nostrum impedit mollitia quod et dolor"
}).then(({data}) => console.log(data))


*/

axios.get(url).then(({data}) => {
    for (const key in data){
    console.log(data[key].id  + data[key].title)
    }

}).catch((err) => {
    console.log(err)
});