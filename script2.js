const search_hide_show = document.querySelector('.search-hide-show');
let showSearchBar = false;
const search_on_btn = document.querySelector('.search-hide');
const search_on_btn2 = document.querySelector('search-btn');
search_on_btn.onclick = ()=>{
    if(showSearchBar == false){
        search_hide_show.style.display = "none"
        return showSearchBar = true;
    }
    if(showSearchBar == true){
        search_hide_show.style.display = "block";
        return showSearchBar = false;
    }
}