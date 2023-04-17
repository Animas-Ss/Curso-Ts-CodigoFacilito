export const PI = 3.14;

export interface User {
    id: string;
    name: string;
}

export const genereteId = (): number => {
    return Math.floor(Math.random() * 100);
}