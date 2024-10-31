import { Component,  OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ListsService } from '../../lists.service';
import { IList } from '../../shared/interfaceList';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})



export class EditComponent  {
 id?:string|number; 

 meuFormGroup:FormGroup;


  constructor(private listsService: ListsService,private matSnackBar:MatSnackBar, private router:Router, private activedRoute:ActivatedRoute){
    this.meuFormGroup=new FormGroup({
      titulo:new FormControl('',[Validators.required])
    })
  }
 
  editProducts() { 
    const id = String(this.activedRoute.snapshot.paramMap.get("id"))
    if (this.meuFormGroup.valid) {
      this.listsService.put(id, JSON.stringify(this.meuFormGroup.value)).subscribe(() => {
        this.matSnackBar.open(`${this.meuFormGroup.value.titulo} criado com sucesso`,'Ok',{
          duration:3000,
          verticalPosition:'bottom',
          horizontalPosition:"right"
        })

        setTimeout(()=>{
          this.router.navigateByUrl('/')
        },2000)
        
      }, (error) => {
        this.matSnackBar.open(`${error}`,'Ok',{
          duration:3000,
          verticalPosition:'bottom',
          horizontalPosition:"right"
        })
      });
    } else if(this.meuFormGroup.invalid){
      this.matSnackBar.open(`Valor invalido`,'Ok',{
        duration:3000,
        verticalPosition:'bottom',
        horizontalPosition:"right"
      })
    }
  }
  




}