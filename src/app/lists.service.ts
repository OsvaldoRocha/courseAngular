import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IList } from './shared/interfaceList';
import { CreatePost } from './shared/typeInterfaceList';


@Injectable({
  providedIn: 'root'
})
export class ListsService {

  lists="http://localhost:3000/products"

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<IList[]>(`${this.lists}`)
  }

  create(InfoBody:CreatePost){
    return this.http.post(`${this.lists}`,InfoBody)
  }

  findOne(id:string|number){
    return this.http.get<IList>(`http://localhost:3000/products/${id}`)
  }

  put(id:string, payload:string){
    return this.http.put(`http://localhost:3000/products/${id}`,payload)
  }

  delete(id:string){
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }


}
