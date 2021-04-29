console.log("welcome");

// 要素を上書き
function OnLinkClick(id) {
    console.log(`note${id}.html`);
    document.getElementById('id_note').src=`note${id}.html`;    
}


// REST API
// fetch('https://zipcloud.ibsnet.co.jp/api/search?zipcode=2200011')
// .then(response => {
//     console.log(response);
//     return response.json();
// }).then(res => {
//     console.log(res.items[0].volumeInfo.tetle);
// }).catch(error => {
//     console.log(error);
// });
