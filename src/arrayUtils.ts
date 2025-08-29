/**
 * Checks if the array is empty
 */
export function isEmpty<T>(arr: T[] | null | undefined): boolean {
    return !arr || arr.length === 0;
}

/**
 * Checks if the array is not empty
 */
export function isNotEmpty<T>(arr: T[] | null | undefined): boolean {
    return !!arr && arr.length > 0;
}

/**
 * Returns the first element safely
 */
export function first<T>(arr: T[] | null | undefined): T | undefined {
    return arr && arr.length > 0 ? arr[0] : undefined;
}

/**
 * Returns the last element safely
 */
export function last<T>(arr: T[] | null | undefined): T | undefined {
    return arr && arr.length > 0 ? arr[arr.length - 1] : undefined;
}

/**
 * Removes duplicates from array
 */
export function unique<T>(arr: T[] | null | undefined): T[] {
    return arr ? [...new Set(arr)] : [];
}
