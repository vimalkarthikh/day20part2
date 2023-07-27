async function foo(){
    var res= await fetch("http://api.citybik.es/v2/networks");
    var result=await res.json();
    console.log(result);
   
    let a=result.networks;

    console.log(result.networks[1]);

    a.forEach(element => {        
            var div=document.createElement("div");
            div.innerHTML=`
            <div class="card" style="max-width: 22rem;">
  <div class="card-header"><h4>${element.name}</h4></div>
  <div class="card-body">
  <h6>Company: ${element.company}</h6>
  <h6>ID: ${element.id}</h6>
  <h6>City: ${element.location.city}</h6>
  <h6>Country code: ${element.location.country}</h6>
  <h6>Latitude: ${element.location.latitude}</h6>
  <h6>Longitude: ${element.location.longitude}</h6>
  <h6>Website: <a href="${element.href}"> Visit Our Website</a></h6>
  </div>
</div>`
            document.body.append(div);
        

    });

}

foo();