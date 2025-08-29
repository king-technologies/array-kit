/**
 * Checks if the array is empty
 */
export declare function isEmpty<T>(arr: T[] | null | undefined): boolean;
/**
 * Checks if the array is not empty
 */
export declare function isNotEmpty<T>(arr: T[] | null | undefined): boolean;
/**
 * Returns the first element safely
 */
export declare function first<T>(arr: T[] | null | undefined): T | undefined;
/**
 * Returns the last element safely
 */
export declare function last<T>(arr: T[] | null | undefined): T | undefined;
/**
 * Removes duplicates from array
 */
export declare function unique<T>(arr: T[] | null | undefined): T[];
