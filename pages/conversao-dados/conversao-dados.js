import { faqs } from "./faqs-conversao.js";

document.addEventListener("DOMContentLoaded", () => {
  const faqList = document.getElementById("faq-list");
  const faqContainer = document.getElementById("faq-container");
  const searchInput = document.getElementById("search-input");

  // Renderiza a lista de perguntas
  function renderFaqList(filteredFaqs) {
    faqList.innerHTML = ""; // Limpa a lista antes de renderizar novamente

    filteredFaqs.forEach((faq, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = faq.pergunta;
      listItem.className = "faq-item";
      listItem.dataset.index = index;
      faqList.appendChild(listItem);
    });
  }

  renderFaqList(faqs); // Renderiza as perguntas iniciais

  // Evento de clique para exibir a resposta correspondente
  faqList.addEventListener("click", (event) => {
    if (event.target.classList.contains("faq-item")) {
      const selectedFaq = faqs[event.target.dataset.index];
      faqContainer.innerHTML = `
        <h2>${selectedFaq.pergunta}</h2>
        <p>${selectedFaq.resposta}</p>
      `;
    }
  });

  // Evento de input para filtrar perguntas conforme o usuário digita
  searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredFaqs = faqs.filter(faq => faq.pergunta.toLowerCase().includes(searchTerm));
    renderFaqList(filteredFaqs);
  });
});
