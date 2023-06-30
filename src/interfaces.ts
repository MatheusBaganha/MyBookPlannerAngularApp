export interface IBook {
    data: Book[],
    errors: string[] | string
}

export interface Book {
    id: number;
    title: string;
    author: string;
    imageUrl: string;
    releaseYear: number;
    score: number,
}