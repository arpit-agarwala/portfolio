function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.tab-button');
  
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  
    cards.forEach(card => {
      if (category === 'all' || card.classList.contains(category)) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
  }
  
  function openModal(projectId) {
    const modal = document.getElementById("projectModal");
    const modalBody = document.getElementById("modal-body");
  
    let content = "";
  
    switch (projectId) {
      case "bluecave":
        content = `
          <h2>Bluecave App</h2>
          <p>A powerful tool for managing apartment communities: announcements, ticketing, visitor logs, vendor integrations.</p>`;
        break;
      case "taxgame":
        content = `
          <h2>Tax Saving Game</h2>
          <p>Interactive quiz-based game to learn deductions, exemptions, and sections in a fun way.</p>`;
        break;
      case "loanCalc":
        content = `
          <h2>Loan Calculator</h2>
          <p>Built with vanilla JS and HTML/CSS to help users calculate EMI and interest in seconds.</p>`;
        break;
      default:
        content = "<p>Coming soon...</p>";
    }
  
    modalBody.innerHTML = content;
    modal.style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("projectModal").style.display = "none";
  }
  