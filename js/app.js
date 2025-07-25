 const Clickbutton = document.getElementById('clickButton');
  const navBar =document.querySelector('.nav');

  Clickbutton.addEventListener('click', () => {
    
       navBar.classList.toggle('showNav')
  })