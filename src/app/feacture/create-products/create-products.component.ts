import { Component, Inject, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ListsService } from '../../lists.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-products',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

  ],
  templateUrl: './create-products.component.html',
  styleUrl: './create-products.component.css'
})
export class CreateProductsComponent {

  

  meuFormGroup:FormGroup;

  constructor(private listsService: ListsService,private matSnackBar:MatSnackBar, private router:Router){
    this.meuFormGroup=new FormGroup({
      titulo:new FormControl('',[Validators.required])
    })
  }

  enviarFormulario(){

    if(this.meuFormGroup.valid){
          this.listsService.create({
          titulo: this.meuFormGroup.value.titulo
        }).subscribe(() => {
            this.matSnackBar.open('Produto criado com sucesso','Ok',{
              duration:3000,
              verticalPosition:'bottom',
              horizontalPosition:"right"
            })

            setTimeout(()=>{
              this.router.navigateByUrl('/')
            },2000)
            
        }, error => {
          console.error('Erro ao enviar o formulário', error);
        });
        
    }else if(this.meuFormGroup.invalid){
      this.matSnackBar.open(`Valor invalido`,'Ok',{
        duration:3000,
        verticalPosition:'bottom',
        horizontalPosition:"right"
      })
    }

  }

}
