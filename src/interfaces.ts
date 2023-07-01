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

export interface ITokenData {
    unique_name: number;
    username: string;
    email: string;
    biography: string;
}

export interface IUserBooksStatistics {
    data: UserBooksStatistics,
    errors: string[] | string
}

export interface UserBooksStatistics {
    reading: number;
    readed: number;
    wishToRead: number;
}


export interface IUserBestBook {
    data: UserBestBook,
    errors: string[] | string
}

export interface UserBestBook {
    idUser: number;
    idBook: number;
    title: string;
    author: string;
    releaseYear: number;
    imageUrl: string;
    userScore: number;
}