import { BookLog } from '../model/booklog.model';
import { Observable } from 'rxjs';

export interface BookLogRepository {
    getBookLog(id: string): BookLog;
    getBookLogs(): Observable<Array<BookLog>>;
    save(model: BookLog): Error;
    removeBook(id: string): Error;
    removeAll(): Error;
}
