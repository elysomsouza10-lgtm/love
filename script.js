document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // 🔐 LOGIN
  // =========================
  const form = document.getElementById("loginForm");

  if (form) {
    const email = document.getElementById("email");
    const password = document.getElementById("senha");
    const error = document.getElementById("erro");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailValue = email.value.trim();
      const senhaValue = password.value.trim();

      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailValue === "" || senhaValue === "") {
        error.textContent = "Por favor, preencha todos os campos.";
        error.classList.remove("hidden");
        return;
      }

      if (!emailValido.test(emailValue)) {
        error.textContent = "Por favor, insira um email válido.";
        error.classList.remove("hidden");
        return;
      }

      error.classList.add("hidden");

      // 🔥 Redireciona
      window.location.href = "centerpage.html";
    });
  }

  // =========================
  // 📖 LIVRO (páginas virando)
  // =========================
  const pages = document.querySelectorAll(".page");
  const btnNext = document.getElementById("nextPage");
  const btnPrev = document.getElementById("prevPage");

  let currentPage = 0;

  if (pages.length) {
    // 🔥 ORGANIZA O Z-INDEX AUTOMATICAMENTE
    function updateZIndex() {
      pages.forEach((page, index) => {
        page.style.zIndex = pages.length - index;
      });
    }

    updateZIndex();

    // 👉 Próxima página
    if (btnNext) {
      btnNext.addEventListener("click", () => {
        if (currentPage < pages.length) {
          pages[currentPage].classList.add("flipped");
          currentPage++;
        }
      });
    }

    // 👉 Página anterior
    if (btnPrev) {
      btnPrev.addEventListener("click", () => {
        if (currentPage > 0) {
          currentPage--;
          pages[currentPage].classList.remove("flipped");
        }
      });
    }

    // 👉 Clique direto na página
    pages.forEach((page, index) => {
      page.addEventListener("click", () => {
        if (index === currentPage) {
          page.classList.add("flipped");
          currentPage++;
        }
      });
    });
  }

  // =========================
  // 📄 CENTERPAGE BOTÕES
  // =========================
  window.prosseguir = function () {
    window.location.href = "home.html";
  };

  window.voltarLogin = function () {
    window.location.href = "index.html";
  };

  window.logout = function () {
    alert("Você saiu 💔");
    window.location.href = "index.html";
  };
});
