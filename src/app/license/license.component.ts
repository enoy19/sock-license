import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss']
})
export class LicenseComponent implements OnInit {

  public userImage = '../../assets/images/user.png';
  constructor() { }

  ngOnInit() {
  }

  public onUserImageDrop (event, fileInput) {
    event.stopPropagation();
    event.preventDefault();

    fileInput.files = event.dataTransfer.files;
    this.onUserImageChange(fileInput);
  }

  public triggerFileUpload(fileInput) {
    fileInput.click();
  }

  public onUserImageChange(fileInput) {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.userImage = reader.result;
    };
    reader.readAsDataURL(file);
  }
}
