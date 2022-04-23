var menu_showed = false;

// in order to show or hide the menu
function show_menu() {
    var menu_list = document.getElementById("menu_list");
    if (menu_showed) {
        menu_list.className = "hidden_menu"
    }
    else {
        menu_list.className = "showed_menu"
    }
    
    menu_showed = !menu_showed;
}

// in order to show or hide the menu
function click_menu(ev) {
    if (document.getElementById("header").contains(ev.target)) {
        return;
    }
    if (menu_showed) {
        if (!document.getElementById("menu_list").contains(ev.target)) {
            show_menu();
        }
    }
}

// in order to init all 
function main() {
    window.onclick = click_menu;
    document.getElementById("menu_list").className = "hidden_menu";
    menu_showed = false;
}

window.addEventListener("DOMContentLoaded", main)