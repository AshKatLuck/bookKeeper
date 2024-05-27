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

//Validate the urlvalue and urlName
function validateForm(nameValue, urlValue){
    if(!nameValue || !urlValue){
        alert("Please enter both fields.");
        return false;
    }
    const urlRegex = /^(https?|ftp):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;
    if (!(urlRegex.test(urlValue))) {
        alert("please enter valid url");
        return false;
    } else {
    return true;
    }
}

//Store bookmark
function storeBookmark(e){
    e.preventDefault();
    const nameValue=websiteNameEl.value;
    let urlValue=websiteUrlEl.value;
    if(!urlValue.includes('http://', 'https://')){
        urlValue=`https://${urlValue}`;
    }
    if(!validateForm(nameValue,urlValue)){
        return false;
    }  

}


//EventListeners
modalShow.addEventListener('click',()=>{
    showModal();
})
modalClose.addEventListener('click',closeModal);
window.addEventListener('click',(e)=>{
    e.target==modal?closeModal():false;
})
bookmarkForm.addEventListener('submit',storeBookmark)

