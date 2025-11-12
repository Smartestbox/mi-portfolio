const botonTema = document.getElementById('botonTema');

const temaGuardado = localStorage.getItem('tema');
if (temaGuardado) {
  document.documentElement.setAttribute('data-tema', temaGuardado);
}

botonTema.addEventListener('click', () => {
  const temaActual = document.documentElement.getAttribute('data-tema');
  const nuevoTema = temaActual === 'oscuro' ? 'claro' : 'oscuro';

  document.documentElement.setAttribute('data-tema', nuevoTema);
  localStorage.setItem('tema', nuevoTema);
});