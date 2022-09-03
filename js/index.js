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
        //  console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => newsShow(data.data))
         toglesping(true);
    }

    const newsShow = (allinfo) =>{
      const countnews = document.getElementById('count-news');
      countnews.innerHTML=``;
      if(allinfo.length>0)
      {
        const countDiv = document.createElement('div');
        countDiv.innerHTML=`
        <h3 class="p-4 "> ${allinfo.length} Items found </h3>
        `;
        countnews.appendChild(countDiv);
      }
      else {
        const countDiv = document.createElement('div');
        countDiv.innerHTML=`
        <h3 class="p-4 "> ${allinfo.length} Items not found !! </h3>
        `;
        countnews.appendChild(countDiv);
      }
        const newssection = document.getElementById('news-container');
        newssection.innerHTML = ``;
        /* sort  */
        allinfo.sort((a, b) => b.total_view - a.total_view);
         
        allinfo.forEach(info =>{
        
        const Div = document.createElement('div');
        Div.innerHTML=`
        <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${info.image_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${info.title}</h5>
              <p class="card-text">${info.details.slice(0,350)}.....</p>
              <div class="d-sm-flex justify-content-between text-center">
              <div class="d-flex">
              
              <img style="height: 50px; width : 50px" src="${info.author.img}" class=" rounded-circle " alt="...">
              
              <h5 class="ms-2" >${info.author.name ? info.author.name : 'No author name found' }</h5>
              </div>
              <div class="d-flex">
              <div><i class="fa-regular fa-eye"></i></div>
               <h5 class="ms-2">${info.total_view ? info.total_view : ' No view found' }</h5>
              </div>
              <button onclick ="detailsload('${info._id}')" class=" border-0 bg-light text-primary" data-bs-toggle="modal" data-bs-target="#newsDetailsModal" ><i class="fa-solid fa-arrow-right"></i> </button>
              
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
        newssection.appendChild(Div); 
       
        
            
      }); 
       toglesping(false);
         
    }   
    
    const detailsload = (newsId) =>{
      const url = `https://openapi.programming-hero.com/api/news/${newsId}`;
       console.log(url);
       fetch(url)
      .then(res => res.json())
      .then(data => newsShowDetails(data.data[0]))
   
  }

   const newsShowDetails = (news) =>{
         console.log(news);
         const modaltitle = document.getElementById('newsDetailsModalLabel');
         modaltitle.innerText = news.title;
         const newsDetails = document.getElementById('news-details');
         newsDetails.innerText= news.details;
         const detailscontaint = document.getElementById('details-containt');
         detailscontaint.innerHTML=``;
         const div = document.createElement('div');
         div.innerHTML=`
         <h4> Author details </h4>
         <p>Name : ${news.author.name ? news.author.name : 'No author name found' } </p>
         <p>published_date : ${news.author.published_date ? news.author.published_date : 'Not found'} </p>
         <h4> rating </h4>
         <p>badge : ${news.rating.badge ? news.rating.badge : 'not found'} </p>
         <p>number : ${news.rating.number ? news.rating.number : 'not found' } </p>
         <p>View : ${news.total_view ? news.total_view : 'Not view' } </p>

         `;
         detailscontaint.appendChild(div);
   }
   const toglesping = isload =>{
    const showSping = document.getElementById('sping');
     if(isload)
     {
        showSping.classList.remove('d-none');
     }
     else {
        showSping.classList.add('d-none');
     }
}
  
     newsTitleLoad();

      /* default news */
      fetch('https://openapi.programming-hero.com/api/news/category/03')
      .then(res => res.json())
      .then(data => defaultShow(data.data))
      
    const defaultShow = (allinfo) =>{ 
    const countnews = document.getElementById('count-news');
    countnews.innerHTML=``;
  
      const newssection = document.getElementById('news-container');
      newssection.innerHTML = ``;
      /* sort  */
      allinfo.sort((a, b) => b.total_view - a.total_view);
       
      allinfo.forEach(info =>{
      
      const Div = document.createElement('div');
      Div.innerHTML=`
      <div class="card mb-3" >
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${info.image_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${info.title}</h5>
            <p class="card-text">${info.details.slice(0,350)}.....</p>
            <div class="d-sm-flex justify-content-between text-center">
            <div class="d-flex">
            
            <img style="height: 50px; width : 50px" src="${info.author.img}" class=" rounded-circle " alt="...">
            
            <h5 class="ms-2" >${info.author.name ? info.author.name : 'No author name found' }</h5>
            </div>
            <div class="d-flex">
            <div><i class="fa-regular fa-eye"></i></div>
             <h5 class="ms-2">${info.total_view ? info.total_view : ' No view found' }</h5>
            </div>
            <button onclick ="detailsload('${info._id}')" class=" border-0 bg-light text-primary" data-bs-toggle="modal" data-bs-target="#newsDetailsModal" ><i class="fa-solid fa-arrow-right"></i> </button>
            
            </div>
          </div>
        </div>
      </div>
    </div>
      `;
      newssection.appendChild(Div);
          
    }); 
     
       
  }   



 