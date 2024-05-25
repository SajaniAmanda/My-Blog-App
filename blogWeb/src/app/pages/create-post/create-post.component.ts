import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {
   
  postForm! :FormGroup;

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private snackBar: MatSnackBar){}

    ngOnInit(){
      this.postForm = this.fb.group(
        {
          name:[null, Validators.required],
          content:[null, Validators.required, Validators.maxLength(5000)],
          img:[null, Validators.required],
          postedBy:[null,Validators.required]
        }
      )
    }
  
}
