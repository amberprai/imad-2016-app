//Counter Code
var button = document.getElementById('counter');
button.onclick=function(){
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function() {
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
        
        }
};
   request.open('GET','http://amberprai.imad.hasura-app.io/counter',true);
   request.send(null);
};

var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
   var request=new XMLHttpRequest();
    
    request.onreadystatechange=function() {
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
         var name =request.responseText;
           names =JSON.parse(names);
    span.innerHTML=counter.toString();
            }
        }
};
   request.open('GET','http://amberprai.imad.hasura-app.io/submit-name?name='+name,true);
   request.send(null);
};
