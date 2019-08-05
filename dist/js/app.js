const images = document.querySelectorAll('p');
observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = ` animate1 2s ${entry.target.dataset.delay}  forwards ease-out`;
        } else {
            entry.target.style.animation = 'none';
        }
    })


})

images.forEach(image => {
    observer.observe(image);
})