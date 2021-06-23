import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable()
export class ProductosService {
  resourceURL: string;
  constructor(private http: HttpClient) {
    this.resourceURL = 'https://pymesbackend.azurewebsites.net/api/productos/';
  }
  get() {
    return this.http.get(this.resourceURL);
  }
  post(obj: Producto) {
    return this.http.post(this.resourceURL, obj);
  }
}
