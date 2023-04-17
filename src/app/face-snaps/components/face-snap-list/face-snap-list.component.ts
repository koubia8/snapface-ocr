import {Component, OnDestroy, OnInit} from '@angular/core';
import {FaceSnap} from "../../../core/models/face-snap.model";
import {FaceSnapsService} from "../../../core/services/face-snaps.service";
import {interval, Observable, Subject, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit{

  snaps ! : FaceSnap[]
  faceSnaps$! : Observable<Array<FaceSnap>>

  constructor(private faceSnapsService: FaceSnapsService) {}
  ngOnInit() {
    // this.snaps = this.faceSnapsService.getAllFaceSnaps()
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
  }


}
