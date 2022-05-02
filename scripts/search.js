// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from '../components/navbar.js';
document.getElementById('navbar').innerHTML=navbar();




const show_data=async()=>{
    try{
      let input=document.getElementById('search_input').value;
      let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${input}`);
      let data= await res.json();
      append(data.articles)
      console.log(data.articles)
    }
    catch(err){
      console.log(err)
    }
  }
show_data()
  document.getElementById('search').addEventListener('click',show_data)

  const append=(data)=>{
    let container=document.getElementById('results')
    container.innerHTML=null;
    data.forEach((el)=>{
        let div=document.createElement('div')
        let img=document.createElement('img')
       img.src=el.urlToImage
       
         let title=document.createElement('H2')
         title.innerText=el.title

       div.append(img,title)
       container.append(div)
    })
  }
