import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { EdiDialogoInformacion } from '../edi-dialogo-informacion/edi-dialogo-informacion';

@Component({
  selector: 'app-edi-header',
  imports: [MatIconModule, MatButtonModule, MatDialogModule],
  templateUrl: './edi-header.html',
  styleUrl: './edi-header.css',
})
export class EdiHeader {
  titulo_informe = 'Principal';
  seccion = 'Seccion';
  
  constructor(private dialgo: MatDialog){}
  
  mostrar_informacion()
  {
    const dialogRef = this.dialgo.open(EdiDialogoInformacion, {
      width: '800px',
      height: '500px',
      maxWidth: '95vw',
      disableClose: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        console.log(result);
      }
      else
      {
        console.log('Has cancelado el diálogo!');
      }
    })
  }
}
