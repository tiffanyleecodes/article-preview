const shareBtn = document.querySelector('i');

const shareBar = document.querySelector('.icon-bar');



shareBtn.addEventListener('click', function() {
    shareBar.classList.toggle('hidden');
})

