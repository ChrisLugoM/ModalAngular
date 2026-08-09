import { Component } from '@angular/core';
import { EdiInforme } from '../edi-informe/edi-informe';
import { EdiGrid } from '../edi-grid/edi-grid';

@Component({
  selector: 'app-edi-body',
  imports: [EdiInforme, EdiGrid],
  templateUrl: './edi-body.html',
  styleUrl: './edi-body.css',
})
export class EdiBody {}
