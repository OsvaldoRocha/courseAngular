import { Component, OnInit } from '@angular/core';
import { ListsService } from '../../../lists.service';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule, 
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent implements OnInit{

groupLists:any[]=[]

constructor(private listService:ListsService, private route:Router,private matSnackBar:MatSnackBar){}

listar(){
  this.listService.getAll().subscribe((list)=>{
    this.groupLists=list;
  })
}

ngOnInit(): void {  
  this.listar()
}

funcionEdit(id:number){
  this.route.navigateByUrl(`edit-produts/${id}`)
}

deleteItem(id:number|string, titulo:string){
  this.listService.delete(`${id}`).subscribe(()=>{
    this.matSnackBar.open(`${titulo} elimonado com sucesso`,'Ok',{
      duration:3000,
      verticalPosition:'bottom',
      horizontalPosition:"right"
    })
  })
}

}
