console.log("===Banner===");
// setup
var photos= ["img/adesivos.jpeg","img/adesivos2.jpeg","img/adesivos3.jpg","img/adesivos4.jpeg","img/adesivos5.jpeg"];
var title= ["","","","",""];
var position=0;

function next () {
    show(photos[position],title[position]);
   if(position<photos.length-1) {
    position=position+1;

   } else {
       position=0;
   }
   
}

function previous () {
    show(photos[position],title[position]);
   if(position>0) {
    position=position-1;

   } else {
       position=4;
   }
   
}
function show (photo,title){
    document.querySelector(".main-highlight-image").src=photo;
    $("a.active").removeClass("active")
    $(".bullets a").eq(position).addClass("active");
}
var control=setInterval(next,10000);

//criar a bolinha para mudar a foto na tela


generateBullets(photos.length);

function activate () {
    position=($(this).data("id"));
    clearInterval(control);
    show(photos[position],title[position]);


}
$(".bullets a").on("click", activate);