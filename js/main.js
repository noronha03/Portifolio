/* ============================================================
   PORTFÓLIO · RENAN NORONHA RODRIGUES
   ------------------------------------------------------------
   JS vanilla, sem dependências. Cada bloco abaixo é
   independente: pode remover um sem quebrar os outros.

   1. Navbar com fundo ao rolar
   2. Menu hambúrguer (mobile)
   3. Animações de entrada (.reveal) com IntersectionObserver
   4. Barras de habilidade animadas
   5. Formulário de contato via mailto
   6. Ano automático no rodapé
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- 1. NAVBAR COM FUNDO AO ROLAR ----------
     A barra começa transparente sobre o hero e ganha fundo
     sólido (classe .nav--scrolled) depois de 40px de rolagem. */
  const nav = document.getElementById("nav");

  const atualizarNavbar = () => {
    nav.classList.toggle("nav--scrolled", window.scrollY > 40);
  };

  window.addEventListener("scroll", atualizarNavbar, { passive: true });
  atualizarNavbar(); // estado correto já no carregamento


  /* ---------- 2. MENU HAMBÚRGUER (MOBILE) ----------
     Abre e fecha o dropdown; fecha sozinho ao clicar num link. */
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    const aberto = links.classList.toggle("is-open");
    toggle.classList.toggle("is-open", aberto);
    toggle.setAttribute("aria-expanded", String(aberto));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });


  /* ---------- 3. ANIMAÇÕES DE ENTRADA (.reveal) ----------
     Observa todos os elementos .reveal e adiciona a classe
     .reveal--visible quando entram na área visível.
     O CSS cuida da transição de opacidade e posição. */
  const observerReveal = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("reveal--visible");
          observerReveal.unobserve(entrada.target); // anima só uma vez
        }
      });
    },
    { threshold: 0.15 } // dispara quando 15% do elemento aparece
  );

  document.querySelectorAll(".reveal").forEach((el) => observerReveal.observe(el));


  /* ---------- 4. BARRAS DE HABILIDADE ----------
     Cada .skill tem um data-level (0 a 100). Quando a barra
     entra na tela, o preenchimento anima até esse valor. */
  const observerSkills = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;

        const skill = entrada.target;
        const nivel = skill.dataset.level || 0;
        const fill = skill.querySelector(".skill__fill");

        // Pequeno atraso para a animação ficar perceptível
        setTimeout(() => { fill.style.width = nivel + "%"; }, 150);

        observerSkills.unobserve(skill);
      });
    },
    { threshold: 0.4 }
  );

  document.querySelectorAll(".skill").forEach((el) => observerSkills.observe(el));


  /* ---------- 5. FORMULÁRIO DE CONTATO (mailto) ----------
     Sem backend: monta um link mailto com os campos preenchidos
     e abre o cliente de e-mail do visitante.
     Para envio real no futuro, troque este bloco por um POST
     para um serviço como Formspree ou uma API própria. */
  const form = document.getElementById("contactForm");
  const EMAIL_DESTINO = "renanoronha2003@gmail.com";

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = document.getElementById("fNome").value.trim();
    const email = document.getElementById("fEmail").value.trim();
    const mensagem = document.getElementById("fMsg").value.trim();

    const assunto = encodeURIComponent(`Contato pelo portfólio: ${nome}`);
    const corpo = encodeURIComponent(
      `Nome: ${nome}\nE-mail: ${email}\n\n${mensagem}`
    );

    window.location.href = `mailto:${EMAIL_DESTINO}?subject=${assunto}&body=${corpo}`;
  });


  /* ---------- 6. ANO AUTOMÁTICO NO RODAPÉ ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

});
