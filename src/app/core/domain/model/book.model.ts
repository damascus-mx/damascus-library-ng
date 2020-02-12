export class Book {
    public ID: string;
    public name: string;
    public s3Url?: string;
    public authors?: Array<string>;
    public categories?: Array<string>;
    public publishedAt?: number;
    public createdAt?: number;

    public constructor(init?: Partial<Book>) {
        Object.assign(this, init);
    }

    public NewBook(bookName: string): Book {
        return new Book({
            name: bookName,
            createdAt: Date.now()
        });
    }
}
