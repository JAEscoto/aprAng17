import { Injectable } from '@angular/core';
import { OperativeSystem } from '../interfaces/operative-systems';

@Injectable({
  providedIn: 'root',
})
export class OperativeSystemService {
  operativeSystems: OperativeSystem[] = [
    { id: 'win', name: 'Windows' },
    { id: 'apl', name: 'MacOS' },
    { id: 'lnx', name: 'Linux' },
    { id: 'ns', name: 'Nose' },
  ];
  constructor() {}

  getOperativeSystems(): OperativeSystem[] {
    return this.operativeSystems;
  }
}
