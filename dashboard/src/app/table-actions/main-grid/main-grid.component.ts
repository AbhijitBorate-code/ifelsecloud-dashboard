import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-grid',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.scss']
})
export class MainGridComponent implements OnInit{
  columns: any[] = [];
  userRows: any[] = [];

  checked : boolean = false

  users = []

  currentPage = 1;
  pageSize = 20;


  ngOnInit(): void {
     this.getfetchapi()
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
  }


  async getfetchapi() {
    try {
      const res = await fetch('https://01.fy25ey01.64mb.io/');
      const data = await res.json();

      console.log('API response:', data);

      this.columns = data.grid_columns;
      this.userRows = data.grid_data;
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  }



}
