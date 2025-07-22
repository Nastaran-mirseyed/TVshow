export function formatNumbers(season, number) {
    let season1;
    if (season<10) {
        season1 = `S0${season}`;
    } else {
        season1 = `S${season}`;
    }

    let number1;
    if (number<10) {
        number1 = `E0${number}`;
    } else {
        number1 = `E${number}`;
    }

    return `${season1}-${number1}`;
}
