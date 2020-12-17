import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-content-dialog',
  templateUrl: './content-dialog.component.html',
  styleUrls: ['./content-dialog.component.scss']
})
export class ContentDialogComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;
  public url: string | ArrayBuffer;

  constructor(private dialogRef: MatDialogRef<ContentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
  }

  ngOnInit(): void {
  }

  onContentChange(): void {
    const file = this.fileInput.nativeElement.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      this.url = reader.result;
    };
  }

  public closeDialog(): void {
    this.dialogRef.close(this.url);
  }

}
