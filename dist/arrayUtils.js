/**
 * Checks if the array is empty
 */
export function isEmpty(arr) {
    return !arr || arr.length === 0;
}
/**
 * Checks if the array is not empty
 */
export function isNotEmpty(arr) {
    return !!arr && arr.length > 0;
}
/**
 * Returns the first element safely
 */
export function first(arr) {
    return arr && arr.length > 0 ? arr[0] : undefined;
}
/**
 * Returns the last element safely
 */
export function last(arr) {
    return arr && arr.length > 0 ? arr[arr.length - 1] : undefined;
}
/**
 * Removes duplicates from array
 */
export function unique(arr) {
    return arr ? [...new Set(arr)] : [];
}
