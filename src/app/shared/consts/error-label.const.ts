export const ERROR_LABEL = {
    REQUIRED:
        (ctrlName: string) => `${ctrlName} required;`,
    MAX_LENGTH:
        (ctrlName: string, length: number) => `${ctrlName} max length is ${length};`,
    MIN_LENGTH:
        (ctrlName: string, length: number) => `${ctrlName} min length is ${length};`,
    ONLY_LETTERS:
        (ctrlName: string) => `${ctrlName} must be only letters;`,
    ONLY_NUMBERS:
        (ctrlName: string) => `${ctrlName} must be only numbers;`,
};
