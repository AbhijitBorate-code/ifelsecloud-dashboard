import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-table',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.scss']
})
export class EditTableComponent implements OnInit {

  editForm!: FormGroup;
  isEditModalOpen = false;
  selectedUser: any = null;
  userRows: any[] = [];

  @Input() userData : any;

  @Output() closebtn = new EventEmitter<any>;


  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.userData)
    this.editForm = this.fb.group({
      first_name: [null , Validators.required],
      last_name: [null , Validators.required],
      role: [null , [Validators.required]],
      license_used : [null , [Validators.required]]
    });
  this.patchValue()
  }

  patchValue() {
    this.editForm.patchValue({
      first_name : this.userData.name.first_name,
      last_name : this.userData.name.last_name,
      role: this.userData.role,
      license_used :this.userData.license_used
    })

  }

  submitEdit() {

  }

  closeEditModal() {
    this.closebtn.emit()
  }
}
