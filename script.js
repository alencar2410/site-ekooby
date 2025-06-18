<script>
  const esquerda = document.querySelector('.seta.esquerda');
  const direita = document.querySelector('.seta.direita');
  const carrossel = document.querySelector('.carrossel');

  esquerda.addEventListener('click', () => {
    carrossel.scrollBy({ left: -220, behavior: 'smooth' });
  });

  direita.addEventListener('click', () => {
    carrossel.scrollBy({ left: 220, behavior: 'smooth' });
  });
</script>
