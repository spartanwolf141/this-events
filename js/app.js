//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/
var navMenu = document.getElementsByClassName('navi');
for(i=0; i<navMenu.length; i++){
    navMenu[i].addEventListener('click', showHide);
    
}
function showHide(){
   var Elem = this.querySelectorAll('.inner')[0];
   if(Elem.style.display === 'block'){
       Elem.style.display = 'none';
   }else{
       Elem.style.display = 'block';
   }
}



/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/
var restMenu = document.getElementsByClassName('name');
for(i=0; i<restMenu.length; i++){
    restMenu[i].addEventListener('click', secMenu);
}
function secMenu(){
    var item = this.querySelectorAll('.menu')[0];
    if(item.style.display === 'block'){
        item.style.display = 'none';
    }else{
        item.style.display = 'block';
    }
}


/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/

var thumbs = document.getElementsByClassName('thumb');
for(i=0; i<thumbs.length; i++){
    thumbs[i].addEventListener('click', dislike)
    
    var count = document.createElement('div');
    count.className = 'clicks';
    count.innerHTML = 'test';
    thumbs[i].appendChild(count);
}
//var clicks = 0;

function dislike(){
    var hate = this.querySelectorAll('.clicks');
    hate.innerHTML++;
}
