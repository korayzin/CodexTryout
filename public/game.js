// Basic game state
let money = 500;
let energy = 0;
let panels = 0;
let credits = 0;

const PANEL_COST = 100;
const ENERGY_PER_PANEL = 10; // kWh per tick
const CREDIT_PER_KWH = 1 / 1430; // 1 credit per 1430 kWh
const ENERGY_PRICE = 5; // SC per kWh

function updateUI() {
    document.getElementById('money').textContent = money.toFixed(2);
    document.getElementById('energy').textContent = energy.toFixed(1);
    document.getElementById('panels').textContent = panels;
    document.getElementById('credits').textContent = credits.toFixed(2);
}

// Energy production tick
setInterval(() => {
    energy += panels * ENERGY_PER_PANEL;
    credits += panels * ENERGY_PER_PANEL * CREDIT_PER_KWH;
    updateUI();
}, 3000); // every 3 seconds

// Buy panel
document.getElementById('buyPanel').addEventListener('click', () => {
    if (money >= PANEL_COST) {
        money -= PANEL_COST;
        panels += 1;
        updateUI();
    } else {
        alert('Not enough SolarCoins!');
    }
});

// Sell energy
document.getElementById('sellEnergy').addEventListener('click', () => {
    if (energy > 0) {
        money += energy * ENERGY_PRICE;
        energy = 0;
        updateUI();
    } else {
        alert('No energy to sell.');
    }
});

// Initial UI update
updateUI();
