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

export interface UserLogin {
    email: string;
    password: string;
}

export interface UserRegister extends UserLogin {
    username: string;
}

export interface IToken {
    usertoken: string;
}