const typePaper = {
    "Обычная": 1.5,
    "Повышенной белизны": 2.5,
    "Мелованная": 4,
    "Дизайнерская": 6
};

const typeColor = {
    "1-0": { file: 100, print: 15  },
    "1-1": { file: 150, print: 25  },
    "4-0": { file: 200, print: 60  },
    "4-1": { file: 210, print: 85  },
    "4-4": { file: 220, print: 112 }
};

function insertPaper() {
    const select = document.getElementById("card-paper");
    let html = "";
    for (const key in typePaper) {
        html += `<option value="${key}">${key}</option>`;
    }
    select.innerHTML = html;
}

function insertColor() {
    const select = document.getElementById("card-color");
    let html = "";
    for (const key in typeColor) {
        html += `<option value="${key}">${key}</option>`;
    }
    select.innerHTML = html;
}

insertPaper();
insertColor();

function recalc() {
    const qtyInput = document.getElementById("card-quantity");
    const paperSelect = document.getElementById("card-paper");
    const colorSelect = document.getElementById("card-color");
    const priceOutput = document.getElementById("final-price");

    const qty = Math.max(30, Number(qtyInput.value) || 0);
    const sheets = Math.ceil(qty / 30);

    const paperPrice = typePaper[paperSelect.value];
    const color = typeColor[colorSelect.value];

    const total = color.file + paperPrice * sheets + color.print * sheets;

    priceOutput.textContent = total.toLocaleString("ru-RU");
}

document.querySelector(".calc").addEventListener("input", recalc);

recalc();