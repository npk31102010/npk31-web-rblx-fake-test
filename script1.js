const search_hide_btn = document.querySelector('.search-btn');
const background_search_hide = document.querySelector('.search-hide');
let check_active_btn = false;
search_hide_btn.onclick = () =>{
if(check_active_btn == false){
    background_search_hide.classList.add('active-color1');
    return check_active_btn = true;
    }
if(check_active_btn == true){
        background_search_hide.classList.remove('active-color1');
        return check_active_btn = false;
    }
}