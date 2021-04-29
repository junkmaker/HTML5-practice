console.log("welcome");

// 要素を上書き
function OnLinkClick(id) {
    console.log(`note${id}.html`);
    document.getElementById('id_note').src=`note${id}.html`;    
}
// Jsonからメニューを作成
/* <details>
   <summary class="Selected"><p>プロジェクト A</p></summary>
   <li class="Release"><a id="1" href="javascript:OnLinkClick(1);">バージョン1</a></li>
   <li class="Release"><a id="1" href="javascript:OnLinkClick(2);">バージョン2</a></li>
</details> */
// input要素をIDから取得
let input = document.getElementById('file');
let reader = new FileReader();

// 要素の変化にイベントを登録
input.addEventListener('change', () => {
    // alert('ファイルを読み込みました！');
    for(const file of input.files){
        //Fileオブジェクト(テキストファイル)のファイル内容を読み込む
        reader.readAsText(file, 'UTF-8');
        //ファイルの読み込み完了後に内容をコンソールに出力する
        reader.onload = ()=> {
            console.log(reader.result);
            // JsonをHTMLに変換
            let data = JSON.parse(reader.result);
            data['projects'].forEach(element => {
                console.log(element);
            });
        };
        // menuを更新
        const menu = document.getElementById("sidebarMenuList");
        for (let i=0; i <= 1; i++) {
            const newDetail = document.createElement("details");
            const newSummary = document.createElement("summary");
            newSummary.className = "Selected"
            const newP = document.createElement("p");
            newP.appendChild(document.createTextNode("プロジェクト A"));
            newSummary.appendChild(newP);
            const newLi = document.createElement("li");
            newLi.className = "Release";
            const newA = document.createElement("a");
            newA.href = "javascript:OnLinkClick(1);"
            newA.appendChild(document.createTextNode("バージョン1"));
            newLi.appendChild(newA);
            newSummary.appendChild(newLi);
            newDetail.appendChild(newSummary);
            menu.appendChild(newDetail);
        }
    }
});

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
