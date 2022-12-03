const costOfProduct = 85;
const saleValue = 150;

if (costOfProduct >= 0 && saleValue >= 0) {
    const totalCostOfProduct = costOfProduct * 1.2;
    const totalProfit = (saleValue - totalCostOfProduct) *1000;
    console.log(totalProfit);
} else {
    console.log("Erro: valores não podem ser negativos");
}