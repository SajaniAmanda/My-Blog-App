import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatChipInputEvent } from '@angular/material/chips'; // Ensure to import this

@Component({
 selector: 'app-create-post',
 templateUrl: './create-post.component.html',
 styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
 postForm!: FormGroup;
 tags: string[] = [];

constructor(
 private fb: FormBuilder,
 private router: Router,
 private snackBar: MatSnackBar
 ) {}

ngOnInit() {
 this.postForm = this.fb.group({
 name: [null, Validators.required],
 content: [null, [Validators.required, Validators.maxLength(5000)]],
 img: [null, Validators.required],
 postedBy: [null, Validators.required],
 });
 }

add(event: MatChipInputEvent): void {
 const input = event.chipInput?. inputElement;
 const value = event.value;

// Add the tag
 if ((value || '').trim()) {
 this.tags.push(value.trim());
 }

// Reset the input value
 if (input) {
 input.value = '';
 }
 }

remove(tag: string): void {
 const index = this.tags.indexOf(tag);

if (index >= 0) {
 this.tags.splice(index, 1);
 }
 }
}