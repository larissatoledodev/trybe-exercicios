const chessPiece = "cavalo";

switch (chessPiece.toLowerCase()) {
    case "rainha":
        console.log("Rainha - anda em horizontal, verticao e diagonal");
        break;
    case "bispo":
        console.log("Bispo - anda somente na diagonal");
        break;
    case "cavalo":
        console.log("Cavalo - anda em movimento de L");
        break;
    case "rei":
        console.log("Rei - anda pra todas as direções uma casa de cada vez");
        break;
    case "peão":
        console.log("Peão - anda uma casa de cada vez para frente");
        break;
    case "torre":
        console.log("Torre - anda em horizontal e vertical");
        brreak;
    default:
        console.log("Erro peça inválida");
        break;
};