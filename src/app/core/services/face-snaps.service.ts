import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable, switchMap} from "rxjs";

@Injectable(
  {
    providedIn : "root"
  }
)
export class FaceSnapsService {
  constructor(private http : HttpClient) {
  }
  getAllFaceSnaps (): Observable<Array<FaceSnap>>{
     return  this.http.get<Array<FaceSnap>>("http://localhost:3000/facesnaps")
  }

  snapFaceSnapById(faceSnapId:number, snapType: 'snap' | 'unsnap') : Observable<FaceSnap> {
    console.log(faceSnapId)
    return this.getFaceSnapById(faceSnapId)
      .pipe(
        map(faceSnap => ({
          ...faceSnap,
          snaps : faceSnap.snaps + (snapType ==='snap' ? 1 : -1)
        })),
        switchMap(updateFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updateFaceSnap))
      )
  }



  getFaceSnapById(faceSnapId: number) : Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)
  }

  addNewFaceSnap(formValue: {  id : number, title: string, description: string, imageUrl: string, location? : string}) : Observable<FaceSnap> {
     return this.getAllFaceSnaps().pipe(
       map(facesnaps => [...facesnaps].sort((a, b) => a.id - b.id)),
       map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length -1]),
       map(previousFacesnap => ({
           ...formValue,
           snaps: 0,
           createdDate: new Date(),
           id: previousFacesnap.id + 1
         }
       )),
       switchMap(newFaceSnap => this.http.post<FaceSnap>(`http://localhost:3000/facesnaps`, newFaceSnap))
     )
  }


}
