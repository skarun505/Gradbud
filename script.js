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
    const crmPayload = {
      full_name: data.get('name'),
      phone: data.get('phone'),
      email: data.get('email') || '',
      desired_course: data.get('program') === 'other' ? data.get('other_program') : data.get('program'),
      desired_country: 'Moldova',
      source: 'website',
      form_name: 'Contact Form - Home',
      page_url: window.location.href,
      utm_source: new URLSearchParams(location.search).get('utm_source'),
      utm_medium: new URLSearchParams(location.search).get('utm_medium'),
      utm_campaign: new URLSearchParams(location.search).get('utm_campaign')
    };

    const response = await fetch('/api/submit-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(crmPayload)
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
