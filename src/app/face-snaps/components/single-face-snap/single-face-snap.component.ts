import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../../../core/models/face-snap.model";
import {FaceSnapsService} from "../../../core/services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{
   faceSnap$! : Observable<FaceSnap>
   snapped ! : boolean;
  constructor(private faceSnapsService: FaceSnapsService,
              private route : ActivatedRoute) {
  }
  ngOnInit() {
    this.snapped=false;
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId)


  }

  onSnap(faceSnapId: number) {

    this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(
      faceSnapId,
      !this.snapped ? 'snap':'unsnap')
    this.snapped = ! this.snapped
  }
}
