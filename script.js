const modal=document.getElementById("modal");
const modalShow=document.getElementById("show-modal");
const modalClose=document.getElementById("close-modal");
const bookmarkForm=document.getElementById("bookmark-form");
const websiteNameEl=document.getElementById("website-name");
const websiteUrlEl=document.getElementById("website-url");
const bookmarksContainer=document.getElementById("bookmarks-container");

// show Modal function and focus to first el in form
function showModal(){
    modal.classList.add("show-modal");
    websiteNameEl.focus();
}

//Close Modal
function closeModal(){
    modal.classList.remove("show-modal");
}


//EventListeners
modalShow.addEventListener('click',()=>{
    showModal();
})
modalClose.addEventListener('click',closeModal);
window.addEventListener('click',(e)=>{
    e.target==modal?closeModal():false;
})

