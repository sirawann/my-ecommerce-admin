export function prettyDate(dateStr) {
    return (new Date(dateStr)).toLocaleDateString('sv-SE');
}