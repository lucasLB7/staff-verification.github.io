window.onload =  function() { 
    const queryString = window.location.search;
    var user;
    const urlParams = new URLSearchParams(queryString);
    var uid = urlParams.get('id')

    if(uid == null){
        user = data[0];
    }

    uid = parseInt(uid);

    for(i=1; i < data.length; i++){ //start from 1 since 0 is not found
        if(uid == data[i]["id"]){
            user = data[uid];
            break;
        }
    }

    if(user == null){
        user = data[0];
    }

    console.log(user); 


    document.getElementById("pic").src = user["image"];
    document.getElementById("name").textContent=user["name"];
    document.getElementById("postion").textContent=user["position"];
    document.getElementById("status").textContent=user["status"];

    
} 