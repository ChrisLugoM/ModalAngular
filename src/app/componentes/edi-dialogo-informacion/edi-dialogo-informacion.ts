import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-edi-dialogo-informacion',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './edi-dialogo-informacion.html',
  styleUrl: './edi-dialogo-informacion.css',
})
export class EdiDialogoInformacion {
  constructor(
    public dialogRef: MatDialogRef<EdiDialogoInformacion>
  ){}

  cerrar(){
    this.dialogRef.close('Cerrado Correctamente');
  }
}
