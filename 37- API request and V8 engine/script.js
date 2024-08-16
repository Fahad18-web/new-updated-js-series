const Url = "https://api.github.com/users"

const request  =   new XMLHttpRequest();
  request.open("get", Url)
  
  request.onreadystatechange = function(){
    console.log(request.readyState);
    if(request.readyState === 4){
      const data = JSON.parse(this.responseText);
      console.log(data.login);
    }
  }
  request.send()
  // onreadystatechange function call kerta hai 

  