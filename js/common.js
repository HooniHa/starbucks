const searchEl = document.querySelector('.search_bar');
const searchInputEl = searchEl.querySelector('input');
console.log(searchEl);
console.log(searchInputEl);

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', 'search keyword');
});

searchEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', "");
});