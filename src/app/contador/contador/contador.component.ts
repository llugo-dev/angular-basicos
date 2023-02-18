import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        
        <h1>{{titulo}}</h1>
        <h3>La base es <strong>{{ base }}</strong></h3>
        <button (click)="acumular(base)">+{{ base }}</button>
        <span>{{ numero }}</span>
        <button (click)="acumular(-base); ">-{{ base }}</button>
        <button (click)="reset()">Reset</button>
    
    `
})

export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    public base: number = 3;

    acumular(valor: number) {
        this.numero += valor;
    }

    reset(): void {
        this.numero = 10;
    }
}