// function onClickMenu() {
//     document.getElementById("menu").classList.toggle("icon");
//     document.getElementById("nav").classList.toggle("change");

// }

// function closeNav() {
//     document.getElementById("mySideNav").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
//     document.body.style.backgroundColor = "white";
// }

function onClickMenu() {
    var menu = document.getElementById("menu");
    var nav = document.getElementById("nav");
    var overlay = document.getElementById("Nav-overlay");

    menu.classList.toggle("icon");
    nav.classList.toggle("change");

    if (nav.classList.contains("change")) {
        document.getElementById("mySideNav").style.width = "250px";
        overlay.style.display = "block";
        
    } else {
        overlay.style.display = "none";
        document.getElementById("mySideNav").style.width = "0";
    }
}

function closeNav() {
    document.getElementById("menu").classList.remove("icon");
    document.getElementById("nav").classList.remove("change");
    document.getElementById("mySideNav").style.width = "0";
    document.getElementById("Nav-overlay").style.display = "none";
}

document.addEventListener('click', function(event) {
    var nav = document.getElementById('nav');
    var menu = document.getElementById('menu');
    var overlay = document.getElementById('Nav-overlay');
    var isClickInsideNav = nav.contains(event.target);
    var isClickInsideMenu = menu.contains(event.target);

    if (!isClickInsideNav && !isClickInsideMenu && overlay.style.display === 'block') {
        closeNav();
    }
});





// The above code is for the search icon 
const searchOverlay = document.getElementById('search-overlay');
const searchInput = document.getElementById('search-input');
const closeIcon = document.getElementById('close-icon');

function onClickSearch() {
    
   // const relatedSearchesContainer = document.getElementById('related-searches');

    document.getElementById('search-icon').addEventListener('click',()=> {
        searchOverlay.classList.add('active');
        searchInput.focus();
    });

    closeIcon.addEventListener('click', closeSearchOverlay);

    searchOverlay.addEventListener('click',(event) =>{
        if (event.target === searchOverlay){
            closeSearchOverlay();
        }
    });

    searchInput.addEventListener('input', ()=> {
        const query = searchInput.value.toLowerCase();
        showRelatedSearches(query);
    });
}

function closeSearchOverlay() {
    searchOverlay.classList.remove('active');
    searchInput.value = '';
}
