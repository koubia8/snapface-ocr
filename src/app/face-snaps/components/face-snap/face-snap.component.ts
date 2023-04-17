import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from "../../../core/models/face-snap.model";
import {FaceSnapsService} from "../../../core/services/face-snaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  @Input() faceSnap! : FaceSnap
  snapped ! : boolean;
   constructor(private faceSnapsService: FaceSnapsService,private route : Router) {
   }
  ngOnInit() {
    this.snapped=false;
  }

  onSnap() {
    this.faceSnapsService.snapFaceSnapById(
      this.faceSnap.id,
      !this.snapped ? 'snap':'unsnap')
    this.snapped = ! this.snapped
  }

  onViewFaceSnap() {
  this.route.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}
