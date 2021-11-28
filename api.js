

function passvalue(){


    var id_data=document.getElementById("search").value;
    localStorage.setItem("ids",id_data);
    return false;
}

function obtener(){
    let img=document.getElementById('sectioning')
let description=document.getElementById('description')
let  p=document.getElementById('title')
let origina_tile=document.getElementById('orginal')
let sear=document.getElementById('search').value
let year = document.getElementById('year')


alert(sear);



    $.get("https://ghibliapi.herokuapp.com/films/"+sear).done(function(response){





        $.each(response, function (){
               
        p.innerText=response.title,

        origina_tile.innerText=response.original_title_romanised,
            description.innerText=response.description,
            img.style.backgroundImage = "url('"+response.image+"')"
            year.innerText=response.release_date
        });


             });
        
           
}



function save(){
var data={

Nombre: $("#txtnombre").val(),
Identificador:$("#txtident").val()
}

$.post("http://localhost:21588/api/Usuario/",data).done(function(response){
if(response){

alert("usuario creado");

}
else{

alert("error al crear");
}
});

}