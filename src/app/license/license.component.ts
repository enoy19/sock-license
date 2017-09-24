import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss']
})
export class LicenseComponent implements OnInit {

  public userImage = '../../assets/images/user.png';
  public sockId = "00XXFFFF";
  constructor() { }

  ngOnInit() {
    const prefix = this.getRandomPrefixValue();
    const suffix = this.getRandomSuffixValue();
    this.sockId = `${prefix}XX${suffix}`;
  }

  private getRandomPrefixValue () {
    const prefixValues = "0123456789";
    const rndValue = () => {
      return prefixValues.charAt(Math.floor(Math.random() * prefixValues.length));
    };
    return rndValue() + rndValue();
  }

  private getRandomSuffixValue () {
    const suffixValues = "0123456789ABCDEFG";
    const rndValue = () => {
      return suffixValues.charAt(Math.floor(Math.random() * suffixValues.length));
    };
    return rndValue() + rndValue() + rndValue() + rndValue();
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
