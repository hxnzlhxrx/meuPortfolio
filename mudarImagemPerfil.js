const pictures = [
  './img/Perfil1.png',
  './img/Perfil2.png',
  './img/Perfil3.png'
];

let currentIndex = 0;
const profileImage = document.getElementById('fotoPerfil');
const refreshButton = document.getElementById('refresh__btn');

refreshButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % pictures.length;
  profileImage.src = pictures[currentIndex];
});

function mostrarToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

refreshButton.addEventListener('click', (e) => {
  e.preventDefault();
  currentIndex = (currentIndex + 1) % pictures.length;
  profileImage.src = pictures[currentIndex];
  mostrarToast();
});