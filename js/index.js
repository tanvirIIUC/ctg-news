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
        <button onclick ="titleload(${title.category_id})" class="btn  ms-3 fw-bold mx-3" type="submit">${title.category_name}</button>
        
        `;
         newsTitleContainers.appendChild(Div); 
   });
    } 
 
    const titleload = (titleId) =>{
        const url = `https://openapi.programming-hero.com/api/news/category/0${titleId}`;
         console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => newsShow(data.data))
    }

    const newsShow = (allinfo) =>{
        const newssection = document.getElementById('news-container');
        newssection.innerHTML = ``;
        console.log(allinfo.length);
         
        allinfo.forEach(info =>{
        console.log(info);
        const nDiv = document.createElement('div');
        nDiv.innerHTML=`
        <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${info.image_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${info.title}</h5>
              <p class="card-text">${info.details.slice(0,350)}.....</p>
              <div class="d-flex justify-content-between">
              <div class="d-flex">
              
              <img style="height: 50px; width : 50px" src="${info.author.img}" class=" rounded-circle " alt="...">
              
              <h5 >aaa</h5>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        `;
        newssection.appendChild(nDiv);
       
             
      }); 
         
    }  
     
     newsTitleLoad();