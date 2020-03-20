export class BookLog {
    bookID: string;
    bookName: string;
    s3Url?: string;
    createdAt?: Date;
}

export function NewBookLog(id, name: string): BookLog {
    // Creational business logic
    const bookLog: BookLog = {
        bookID: id,
        bookName: name,
        s3Url: null,
        createdAt: new Date()
    };

    return bookLog;
}
