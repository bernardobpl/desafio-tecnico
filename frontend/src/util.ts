export const deepClone = <T>(state: T): T => JSON.parse(JSON.stringify(state));
export const toCapitalLetter = (value: string): string => value[0].toUpperCase() + value.slice(1).toLowerCase();