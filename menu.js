console.log("welcome");

// REST API
fetch('https://zipcloud.ibsnet.co.jp/api/search?zipcode=2200011')
.then(response => {
    console.log(response);
    return response.json();
}).then(res => {
    console.log(res.items[0].volumeInfo.tetle);
}).catch(error => {
    console.log(error);
});
