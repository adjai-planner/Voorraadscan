const knop = document.querySelector("button");
const voorraad = document.getElementById("voorraad");

let producten = [];

knop.addEventListener("click", () => {
    const naam = document.getElementById("naam").value;
    const tht = document.getElementById("tht").value;
    const aantal = document.getElementById("aantal").value;

    if (naam === "" || tht === "") {
        alert("Vul eerst een productnaam en THT-datum in.");
        return;
    }

    producten.push({
        naam,
        tht,
        aantal
    });

    toonProducten();

    document.getElementById("naam").value = "";
    document.getElementById("tht").value = "";
    document.getElementById("aantal").value = 1;
});

function toonProducten() {
    voorraad.innerHTML = "";

    producten.forEach(product => {
        voorraad.innerHTML += `
            <div style="border-bottom:1px solid #ddd;padding:10px 0;">
                <strong>${product.naam}</strong><br>
                📅 THT: ${product.tht}<br>
                📦 Aantal: ${product.aantal}
            </div>
        `;
    });
}
