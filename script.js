const itens = [
  { url: "img/pizza.png", nome: "CAIXA DE PIZZA", medida: "Nº 20, 30, 35, 40,45" },
  { url: "img/smart.png", nome: "CAIXA SMART", medida: "Nº30, 35, 40" },
  { url: "img/retangular-pp.png", nome: "RETANGULAR PP", medida: "26x15x4cm" },
  { url: "img/retangular-pp1.png", nome: "RETANGULAR PP1", medida: "26x10x6cm" },
  { url: "img/retangular-pp2.png", nome: "RETANGULAR PP2", medida: "25x15x7cm" },
  { url: "img/retangular-mini.png", nome: "RETANGULAR MINI", medida: "21x11x04cm" },
  { url: "img/retangular-p.png", nome: "RETANGULAR P", medida: "28X18X5cm" },
  { url: "img/retangular-m.png", nome: "RETANGULAR M", medida: "35x22x5cm" },
  { url: "img/retangular-g.png", nome: "RETANGULAR G", medida: "46x32x5cm" },
  { url: "img/bolo-pp.png", nome: "CAIXA P/ BOLO PP", medida: "30x30x16cm" },
  { url: "img/bolo-m.png", nome: "CAIXA P/ BOLO M", medida: "34x23x15cm" },
  { url: "img/bolo-g.png", nome: "CAIXA P/ BOLO G", medida: "29x31x23cm" },
  { url: "img/calzone.png", nome: "CALZONE", medida: "26x15x4cm" },
  { url: "img/calzone-g.png", nome: "CALZONE G", medida: "36x19x6cm" },
  { url: "img/caixa-combo.png", nome: "CAIXA COMBO", medida: "36x24x6cm" },
  { url: "img/caixa-combo-m.png", nome: "CAIXA COMBO M", medida: "30x23x4cm" },
  { url: "img/caixa-metro.png", nome: "CAIXA METRO", medida: "100x35x4cm" },
  { url: "img/pizza-quadrada.png", nome: "CAIXA DE PIZZA QUADRADA", medida: "35x35x4cm" },
  { url: "img/balde.png", nome: "CAIXA BALDE", medida: "1,5 e 1,0L" },
  { url: "img/stuffed-m.png", nome: "CAIXA STUFFED M", medida: "16,5x17,5x7,5cm" },
  { url: "img/stuffed-g.png", nome: "CAIXA STUFFED G", medida: "26x26x7cm" },
  { url: "img/maleta-pp.png", nome: "MALETA PP", medida: "18x14x17cm" },
  { url: "img/maleta-p.png", nome: "MALETA P", medida: "27x22x23cm" },
  { url: "img/maleta-m.png", nome: "MALETA M", medida: "45x25x21cm" },
  { url: "img/maleta-g.png", nome: "MALETA G", medida: "44x25x25cm" },
  { url: "img/maleta-gg.png", nome: "MALETA GG", medida: "44x44x44cm" },
  { url: "img/maleta-a1.png", nome: "MALETA A1", medida: "32x24x28cm" },
  { url: "img/fatia.png", nome: "FATIA", medida: "20x24x3cm" },
  { url: "img/maleta-b1.png", nome: "MALETA B1", medida: "16x11x11cm" },
  { url: "img/maleta-b2.png", nome: "MALETA B2", medida: "28x11x10cm" },
  { url: "img/maleta-b3.png", nome: "MALETA B3", medida: "16x11x20cm" },
  { url: "img/maleta-b4.png", nome: "MALETA B4", medida: "28x14x11cm" },
  { url: "img/maleta-c1.png", nome: "MALETA C1", medida: "40x28x27cm" },
  { url: "img/maleta-c2.png", nome: "MALETA C2", medida: "45x25x33cm" },
  { url: "img/maleta-g1.png", nome: "MALETA G1", medida: "45x25x33cm" },
  { url: "img/caixa-l1.png", nome: "CAIXA L1", medida: "10,9x10,9x25cm" },
  { url: "img/caixa-l2.png", nome: "CAIXA L2", medida: "9,1x9,1x31,2cm" },
  { url: "img/cesta-basica.png", nome: "CAIXA P/ CESTA BÁSICA", medida: "27x18x31cm" },
  { url: "img/alca-01.png", nome: "CAIXA C/ ALÇA 01", medida: "" },
  { url: "img/alca-02.png", nome: "CAIXA C/ ALÇA 02", medida: "" },
  { url: "img/alca-03.png", nome: "CAIXA C/ ALÇA 03", medida: "28x18x18cm" },
  { url: "img/alca-04.png", nome: "CAIXA C/ ALÇA 04", medida: "29x21x22cm" },
  { url: "img/alca-05.png", nome: "CAIXA C/ ALÇA 05", medida: "25x25x16cm" },
  { url: "img/quadrada-p.png", nome: "QUADRADA P", medida: "16x16x5cm" },
  { url: "img/quadrada-m.png", nome: "QUADRADA M", medida: "18x18x7cm" },
  { url: "img/quadrada-g.png", nome: "QUADRADA G", medida: "21x19x9cm" },
  { url: "img/maleta-21887.png", nome: "MALETA 21887", medida: "37x28x28cm" },
  { url: "img/maleta-18799.png", nome: "MALETA 18799", medida: "42x24x24cm" },
  { url: "img/maleta-21768.png", nome: "MALETA 21768", medida: "34x26x31cm" },
  { url: "img/maleta-21767.png", nome: "MALETA 21767", medida: "28x21x26cm" },
  { url: "img/combo-gg.png", nome: "COMBO GG", medida: "35x42x7cm" },
  { url: "img/maleta-c3.png", nome: "MALETA C3", medida: "35x56x20cm" }
];

const container = document.getElementById("cardsContainer");
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");

// Função para renderizar cards
function renderCards(items) {
  container.innerHTML = ""; // Limpa container
  if (items.length === 0) {
    container.innerHTML = "<p>Nenhum item encontrado</p>";
    return;
  }
  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${item.url}" alt="${item.nome || 'Imagem'}">
        <h3>${item.nome || 'Nome aqui'}</h3>
        <p>${item.medida || 'Medida aqui'}</p>
      `;

    container.appendChild(card);
  });
}

// Filtrar enquanto digita
searchInput.addEventListener("input", () => {
  const termo = searchInput.value.toLowerCase();
  const filtered = itens.filter(item =>
    item.nome.toLowerCase().includes(termo) ||
    (item.medida && item.medida.toLowerCase().includes(termo))
  );
  renderCards(filtered);
});

// Botão limpar
clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  renderCards(itens);
});

// Renderiza todos os cards inicialmente
renderCards(itens);

const downloadBtn = document.getElementById("downloadBtn");
const cardsContainer = document.getElementById("cardsContainer");
const header = document.querySelector(".header");

// Função para gerar o PDF
downloadBtn.addEventListener("click", () => {
  // Esconde os botões temporariamente
  searchInput.style.display = "none";
  clearBtn.style.display = "none";
  downloadBtn.style.display = "none";

  // Captura o body
  html2canvas(document.body, { scale: 1 }).then(canvas => {
    // Reduz qualidade da imagem (compressão)
    const imgData = canvas.toDataURL("image/jpeg", 0.7); // 0.7 = 70% de qualidade

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgProps = pdf.getImageProperties(imgData);
    const pdfHeight = (imgProps.height * pageWidth) / imgProps.width;

    let heightLeft = pdfHeight;
    let position = 0;

    pdf.addImage(imgData, "JPEG", 0, position, pageWidth, pdfHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - pdfHeight;
      pdf.addPage();
      pdf.addImage(imgData, "JPEG", 0, position, pageWidth, pdfHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("Catalogo_Completo.pdf");

    // Mostra os botões novamente
    searchInput.style.display = "inline-block";
    clearBtn.style.display = "inline-block";
    downloadBtn.style.display = "inline-block";
  });
});

// --- Criar estrutura do modal no HTML via JS ---
const modal = document.createElement("div");
modal.id = "modal";
modal.style.display = "none";
modal.innerHTML = `
  <div class="modal-content">
    <span id="closeModal">&times;</span>
    <img id="modalImg" src="" alt="">
    <h3 id="modalNome"></h3>
    <p id="modalMedida"></p>
  </div>
`;
document.body.appendChild(modal);

// --- Função para abrir modal ---
function openModal(item) {
  document.getElementById("modalImg").src = item.url;
  document.getElementById("modalNome").textContent = item.nome;
  document.getElementById("modalMedida").textContent = item.medida || "Medida não informada";
  modal.style.display = "flex";
}

// --- Função para fechar modal ---
document.getElementById("closeModal").addEventListener("click", () => {
  modal.style.display = "none";
});

// Fecha ao clicar fora do conteúdo
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// --- Alterar renderCards para adicionar evento de clique ---
function renderCards(items) {
  container.innerHTML = "";
  if (items.length === 0) {
    container.innerHTML = "<p>Nenhum item encontrado</p>";
    return;
  }
  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
          <img src="${item.url}" alt="${item.nome || 'Imagem'}">
          <h3>${item.nome || 'Nome aqui'}</h3>
          <p>${item.medida || 'Medida aqui'}</p>
        `;

    // Evento de clique -> abrir modal
    card.addEventListener("click", () => openModal(item));

    container.appendChild(card);
  });
}




