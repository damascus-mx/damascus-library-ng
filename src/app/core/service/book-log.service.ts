import { Injectable } from '@angular/core';
import { BookLog } from '../domain/model/booklog.model';
import { Observable } from 'rxjs';
import { BookLogRepositoryImp } from '../infrastructure/persistence/cache/booklog.repository';

@Injectable({
  providedIn: 'root'
})
export class BookLogService {

    repository: BookLogRepositoryImp;

    constructor() {
        this.repository = new BookLogRepositoryImp();
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
