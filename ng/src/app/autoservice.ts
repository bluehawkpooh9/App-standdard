import { Component, OnInit } from '@angular/core';
import { Ng4FilesService, Ng4FilesConfig} from 'angular4-files-upload';

@Component({
  selector: 'app-my-file-uploader',
  templateUrl: './my-file-uploader.html',
  styleUrls: ['./my-file-uploader.scss'],
})
export class UploadComponent implements OnInit {
  public sharedConfig: Ng4FilesConfig = {
    acceptExtensions: ['js', 'doc', 'mp4'],
    maxFilesCount: 5,
    maxFileSize: 5120000,
    totalFilesSize: 10120000
  };

  constructor(
    private n4FilesService: Ng4FilesService
  ) {}

  ngOnInit() {
    this.setFilesUploadSharedConfig();
  }

  setFilesUploadSharedConfig(): void {
    this.n4FilesService.addConfig(this.sharedConfig);
  }
}