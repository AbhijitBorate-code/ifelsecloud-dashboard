import { ServiceService } from './../../common-services/service.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditTableComponent } from '../edit-table/edit-table.component';

@Component({
  selector: 'app-main-grid',
  standalone: true,
  imports: [CommonModule,FormsModule, EditTableComponent],
  providers : [ServiceService],
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.scss']
})
export class MainGridComponent implements OnInit{
  columns: any[] = [];
  userRows: any[] = [];

  userData :  any;

  isedit = false;

  constructor(private  CommonServie : ServiceService){}

  checked : boolean = false

  users = []

  currentPage = 1;
  pageSize = 20;


  ngOnInit(): void {
    this.CommonServie.getData().subscribe((res: any) => {
      console.log('Data from service:', res);

      this.columns = res.grid_columns || [];
      this.userRows = res.grid_data || [];
      this.userRows.forEach(user => user.checked = false);
    });
  }

  get paginatedUsers() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.userRows.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.userRows.length / this.pageSize);
  }

  get totalPagesArray() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  setPage(page: number) {
    this.currentPage = page;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }


  toggleAllUsers(e: any)
  {
    const checked = (e.target as HTMLInputElement).checked;
    this.checked = checked;
    this.paginatedUsers.forEach(user => (user.checked = checked));

  }




  editData(editdata: any)
  {
    console.log(editdata)
    this.userData =  editdata;
    this.isedit =  true;
  }

  closeEdit(data : any)
  {
    console.log(data)

    this.isedit = false
  }

  delete(user: any) {
    this.CommonServie.deleteDataByCondition(user.id);
  }




}
