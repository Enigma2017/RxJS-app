import { BehaviorSubject } from 'rxjs';

// Создание BehaviorSubject с начальным массивом данных
export const DataArraySubject = new BehaviorSubject([]);

export function addPost(data) {
    DataArraySubject.next([...DataArraySubject.value, data]);
}

export function deletePost(id) {
    DataArraySubject.next(DataArraySubject.value.filter(item => item.id !== id));
}
