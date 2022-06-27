//Your API key is: 92611daa810c4fe3900f69643d3d8362


let source='bbc-news';
let apikey='92611daa810c4fe3900f69643d3d8362';

//Grab the news container
let newsAccordion= document.getElementById('newsAccordion');

//create an ajax get request
const xhr= new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apikey}`,true);
//xhr.getAllResponseHeader('constent-type','application/json');

//what to do when request is ready
xhr.onload=function(){
    if(this.status === 200){
        let json=JSON.parse(this.responseText);
        let articles=json.articles;
        console.log(articles);

        let newsHtml="";
        articles.forEach(function(element,index){

            let news = `
             <div class="card">
    <h2 class="accordion-header" id="heading${index}">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
        <b>Breaking News ${index + 1} :</b> ${element["title"]}
      </button>
    </h2>
    <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        ${element["content"]}.<a href="${element['url']}" target="_blank"> Read More Here</a>
      </div>
    </div>
  </div>`;
          newsHtml +=news;
        });
        newsAccordion.innerHTML=newsHtml;
    }
    else{
        console.log("error");
    }
}

xhr.send();
