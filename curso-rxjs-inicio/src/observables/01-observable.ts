import { Observable, Observer } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log('siguiente next:', value),
    error: error => console.log('error [obs]: ', error),
    complete: () => console.log('complete[obs]')



}

// const obs$ = Observable.create()
// subscriber es el que esta leyendo lo que envia el observable y a su vez notifica a las subscripciones

const obs$ = new Observable<string>(subscriber => {
    // console.log(subscriber);
    subscriber.next('Hola Roque!!!!')
    subscriber.next('Como estás!!!!')

    // Forzar error
    // const a = undefined
    // a.nombre = 'Roque'
    subscriber.complete()
});

obs$.subscribe(console.log); // Esto es una subscripcion a un observable y notificada por el subscriber. Recibe un subscriber u observer
// Dentro del subscribe puede recibir 3 funciones. Una para manejar el next, otra el error y otra el complete:

// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.info('Completado')
// );
obs$.subscribe(
    observer
);


