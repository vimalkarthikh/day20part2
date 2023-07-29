async function foo(){
    var res= await fetch("https://isro.vercel.app/api/centres");
    var result=await res.json();
    console.log(result);
    
    let a=result.centres;

      a.forEach(element => {   
      console.log(element.id)     
      console.log(element.country)    
      var div=document.createElement("div");
      div.innerHTML=`
      
  
  <div class="card" style="width: 18rem;">
  <div class="card-header">
    <b><i>ISRO Centres</i></b>
  </div>
  <img src="img/3517454.jpg" class="card-img-top" alt="...">
  <div class="card-body">
  <b>ISRO id: </b><i>  ${element.id}</i><br> 
  <b>State: </b><i>  ${element.State}</i><br>
  <b>City: </b><i>  ${element.Place}</i><br> 
  <b>Centre for: </b><i><br>  ${element.name}</i><br>
  <a href="https://www.isro.gov.in/"> Visit us </a>   
  </div>
</div>

`;
      document.body.append(div); 
        

    });

}

foo();
