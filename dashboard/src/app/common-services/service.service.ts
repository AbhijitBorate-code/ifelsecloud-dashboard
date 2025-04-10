// src/app/services/service.service.ts
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService implements OnInit {
  public dataStoreArray = new BehaviorSubject([]);
  public data$ = this.dataStoreArray.asObservable();

  currentData: any;

  constructor() {
    this.getfetchapi();
  }

  ngOnInit(): void {
    this.getfetchapi();
  }

  async getfetchapi() {
    const res = await fetch('https://01.fy25ey01.64mb.io/');
    const data = await res.json();
    console.log('API response:', data);
    this.dataStoreArray.next(data);
  }

  getData() {
    return this.data$;
  }

  deleteDataByCondition(id: any) {
  this.currentData = this.dataStoreArray.getValue();

    const updatedData = {
      ...this.currentData,
      grid_data: this.currentData.grid_data.filter((item: any) => item.id !== id),
    };

    console.log('Filtered data:', updatedData.grid_data);
    this.dataStoreArray.next(updatedData);
  }
}
