import { of, range, asyncScheduler, interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('complete'),

}
// interval es asíncrono por naturaleza
const interval$ = interval(1000)
const timer$ = timer(2000)
console.log('inicio');

// interval$.subscribe(observer)
timer$.subscribe(observer)

console.log('fin');
