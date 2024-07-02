setTimeout(function() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.left-slide').classList.remove('no-border');
    document.querySelector('.right-slide').classList.remove('no-border');
    document.querySelector('.left-slide').style.width = '200px';
    document.querySelector('.right-slide').style.width = '200px';
    document.querySelector('.left-slide').style.height = '100%';
    document.querySelector('.right-slide').style.height = '100%';
  }, 6000);
  
  setTimeout(function() {
    document.body.classList.add('show-text');
  }, 6000);