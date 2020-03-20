import { BookLogRepository } from '../domain/repository/booklog.repository';
import { BookLog } from '../domain/model/booklog.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BookLogUsecase {

    public constructor(private repository: BookLogRepository) {
    }

    saveBook(model: BookLog): Error {
        return this.repository.save(model);
    }

    getLogs(): (Observable<Array<BookLog>>) {
        return this.repository.getBookLogs();
    }

    getBookByID(id: string) {
        return this.repository.getBookLog(id);
    }

    removeAll(): Error {
        return this.repository.removeAll();
    }

    removeBookByID(id: string): Error {
        return this.repository.removeBook(id);
    }
}
