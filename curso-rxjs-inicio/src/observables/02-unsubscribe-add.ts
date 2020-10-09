import { Observable, Observer } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log(' next:', value),
    error: error => console.log('error : ', error),
    complete: () => console.log('completado')
};


const intervalo$ = new Observable<number>(subscriber => {
    // Crear contador
    let contador = 0
    const intervalo = setInterval(() => {
        subscriber.next(contador++)

    }, 1000)

    setTimeout(() => {
        subscriber.complete()
    }, 2500)

    return () => {
        clearInterval(intervalo)
        console.log('Intervalo destruído');

    }

})

const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

// Para encadenar subscripciones
subscription1.add(subscription2).add(subscription3) // En este caso el complete solo se ejecuta una vez

setTimeout(() => {
    subscription1.unsubscribe()
    // subscription2.unsubscribe()
    // subscription3.unsubscribe()
    console.log('Fin timeout');

}, 3000)

// La diferencia entre complete y unsubscribe es que complete ejecuta lo que tiene en sí el complete, y además ejecuta
// el return del Observable
// Y el unsubscribe es para dejar de escuchar y ejecutar el return del observable
// Si yo llamo al complete y al unsubscribe, el complete llama al return del Observable y el unsubscribe ya no lo vuelve a llamar. En el ejemplo en concreto que tenemos arriba, al haber hecho el complete, ya no harían falta los unsubscribe