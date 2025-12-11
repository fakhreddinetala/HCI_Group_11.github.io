function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  
// Scroll-triggered animation
window.addEventListener('scroll', () => {
  document.querySelectorAll('.member').forEach(member => {
    const rect = member.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      member.classList.add('visible');
    }
  });
});

// Bio modal logic
function openBio(index) {
  const bios = {
    1: { title: "Alice – UX Designer", text: "Alice focuses on user flows and accessibility." },
    2: { title: "Bob – Backend Developer", text: "Bob builds scalable APIs and handles data logic." },
    3: { title: "Charlie – Project Lead", text: "Charlie coordinates tasks and ensures timely delivery." },
    4: { title: "Dana – Frontend Developer", text: "Dana crafts responsive interfaces and animations." },
    5: { title: "Eve – Research & Testing", text: "Eve conducts user interviews and usability tests." }
  };

  document.getElementById('bioTitle').textContent = bios[index].title;
  document.getElementById('bioText').textContent = bios[index].text;
  document.getElementById('bioModal').style.display = 'flex';
}

function closeBio() {
  document.getElementById('bioModal').style.display = 'none';
}



function revealOnScroll() {
  document.querySelectorAll('.fade-section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
