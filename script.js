let currentSlide = 1;

function nextSlide(slideNumber) {
  const current = document.getElementById(`slide${slideNumber}`);
  const next = document.getElementById(`slide${slideNumber + 1}`);

  current.classList.remove('active');
  if (next) next.classList.add('active');
}

function restartSlides() {
  document.querySelectorAll('.slide').forEach(slide => slide.classList.remove('active'));
  document.getElementById('slide1').classList.add('active');
}
