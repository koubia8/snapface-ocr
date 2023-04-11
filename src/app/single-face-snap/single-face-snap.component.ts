import {Component} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
   faceSnap! : FaceSnap
  snapped ! : boolean;
  constructor(private faceSnapsService: FaceSnapsService,
              private route : ActivatedRoute) {
  }
  ngOnInit() {
    this.snapped=false;
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId)

  }

  onSnap() {
    this.faceSnapsService.snapFaceSnapById(
      this.faceSnap.id,
      !this.snapped ? 'snap':'unsnap')
    this.snapped = ! this.snapped
  }
}
