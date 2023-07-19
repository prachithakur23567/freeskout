let scrolTop = document.getElementById('scTop')
scrolTop.addEventListener('click',function(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
});