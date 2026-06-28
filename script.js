function handleProgramChange(select) {
  const otherField = document.getElementById('otherCourseField');
  if (select.value === 'other') {
    otherField.classList.add('visible');
    otherField.querySelector('input').required = true;
  } else {
    otherField.classList.remove('visible');
    otherField.querySelector('input').required = false;
  }
}

document.getElementById('gradbudForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const btn = form.querySelector('.submit-btn');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  try {
    const response = await fetch('https://formspree.io/f/xwvdodrz', {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      document.querySelector('.form-fields').classList.add('hidden');
      document.getElementById('successState').classList.add('visible');
      window.scrollTo({ top: document.getElementById('apply').offsetTop - 80, behavior: 'smooth' });
    } else {
      btn.textContent = 'Request My Free Counseling Session →';
      btn.disabled = false;
      alert('Something went wrong. Please try again.');
    }
  } catch (error) {
    btn.textContent = 'Request My Free Counseling Session →';
    btn.disabled = false;
    alert('Something went wrong. Please try again.');
  }
});
