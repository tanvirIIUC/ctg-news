   const newsTitleLoad = ()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => newsTitleShow(data.data.news_category))

   }
   
    const newsTitleShow = (newsTitles) =>{
    const newsTitleContainers = document.getElementById('news-title-containers');
    newsTitles.forEach(title =>{
        
         const Div = document.createElement('div');
        Div.innerHTML = `
        <button onclick ="" class="btn  ms-3 fw-bold mx-3" type="submit">${title.category_name}</button>
        
        `;
         newsTitleContainers.appendChild(Div); 
   });
    } 




   newsTitleLoad();