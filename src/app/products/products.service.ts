import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private data: any[] = [
    {id: 1, name: "Guitar", price: 1000},
    {id: 2, name: "Piano", price: 900},
    {id: 3, name: "Drums", price: 400},
  ]

  constructor() { }

  getAllProduct() {
    return of(this.data);
  }
}
