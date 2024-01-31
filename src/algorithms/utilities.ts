/**
 * d4 Dice
 * @returns random number from 1 to 4 chosen uniformly
 */
function d4(): number {
    return Math.ceil(Math.random() * 4);
}

/**
 * d20 Dice
 * @returns random number from 1 to 20 chosen uniformly
 */
function d20(): number {
    return Math.ceil(Math.random() * 20);
}

/**
 * Get Selected Value from a HTML Select Element
 * @param id string id of the DOM select element
 * @returns string value chosen in the select
 */
function getValueFromSelect(id: string): string {
    let selector = document.getElementById(id) as HTMLSelectElement;
    return selector.options[selector.selectedIndex].value;
}

/**
 * Print Number Formatted
 * @param {number} x the integer number to format
 * @returns the number formatted with spaces
 */
function pNumF(x: number): string {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
}

export {
    d4,
    d20,
    getValueFromSelect,
    pNumF
}