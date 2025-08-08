//change background color
const projectTitles = document.querySelectorAll('.titleAndDescription h2');

projectTitles.forEach(title => {
  title.style.cursor = 'pointer'; // show pointer on hover
  title.addEventListener('click', () => {
    // Find the closest parent with class "project1"
    const projectDiv = title.closest('.project1');
    if (projectDiv) {
      projectDiv.classList.toggle('project-bg-toggle');
    }
  });
});

//forms
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('exampleInputEmail1').value.trim();
  const email = document.getElementById('exampleInputPassword1').value.trim();

  if (!name || !email) {
    alert('Please fill in the required fields: Name and Email.');
    return;
  }

  alert(`Thank you for contacting me!`);
  this.reset();
});