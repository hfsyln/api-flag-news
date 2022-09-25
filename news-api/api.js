//https://newsapi.org/v2/top-headlines?country=tr&apiKey=bec8c120b55346d0be4765646de5b5e9 
//thunder eklentisi ile get işlemi yapılarak veri isteği atıldı ve veri çekildi.

//!eklentisiz//

let isError = false; // hata olunca true yapıcaz bynun için değişken oluşturduk global


const getNews = async function () {
    const apiKey = "bec8c120b55346d0be4765646de5b5e9"
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + apiKey;

    
    
    try { const res = await fetch(url); //isteği göndericek 
    console.log(res); //ham verilerimiz geldi 
        if(!res.ok){
            if(isError){ //hata var ve isError true artık
                newsList.innerHTML += `<h2> news getililemiyor</h2>
                                        <img src="404.png" alt=""/>`
            }
            //throw new Error (`hata ${res.status}`) //yeni hata oluştur ve hatayı aşağı gönder o yazdırsın fırlatma yapıp kodu kestiği için bunu kapatmamız gerekti üsttekini görmek için
        }
    const data = await res.json(); //json haline çevirdik adı data oldu
    console.log(data)    
    console.log(data.articles) //api içindeki articlelere ulaştık array onun içinde
        //DOM a basma
        renderNews(data.articles); //bu fonksiyon ile

    } catch (error) { 
      // try ile hata var mı bak uygulamayı çalıştır hata bulunca şunu şunu yap
      console.log(error)
    }
   
    //veri bulunamazsa hata durumunda try catch ifadeleri kullanılır


};//getNews()  window.addEventListener("load", getNews); //sayfa yüklenince array getiriyor



const renderNews = (news) => {
    const newsList = document.getElementById("news-list");
    news.forEach( (item) => {
        console.log(item);  
        //her birinin title, desciription ve resimlerini al 
        const { title, description, urlToImage, url} = item //!dest. yöntemi 
        newsList.innerHTML +=  `
            <div class="card" style = "width: 20rem;"  >
                <img src="${urlToImage}" class="card-img-top" alt="..." style = "width: 20rem;" >
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
                    <a href="${url}" class="btn btn-danger">Details</a>
                </div>
            </div> 
         `; //bootstrap hazır card alındı ve düzenlendi
    });

};



window.addEventListener("load", getNews); //sayfa yüklenince array getiriyor