import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";

@Injectable(
  {
    providedIn : "root"
  }
)
export class FaceSnapsService {
   faceSnaps : FaceSnap [] = [
     {
        id:1,
       title:"Archibald",
       description: "Mon meilleur ami depuis tout peti !",
       snaps:50,
       imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
       date: new Date(),
       location : "Paris"
     },
     {
       id:2,
       title:"Three Rock Mountain",
       description: "Une endroid mangifique pour les randonnées!",
       snaps:160,
       imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Three_Rock_Mountain_Southern_Tor.jpg',
       date: new Date(),
       location :"la montagne"
     },
     {
       id:3,
       title:"Un bon repas ",
       description: "Mmmh que c'est bon !",
       snaps:101,
       imageUrl: 'https://www.cuisineactuelle.fr/imgre/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fcac.2F2023.2F02.2F03.2F7beddd9b-3c5b-44b0-a1c6-1a9a17e21e66.2Ejpeg/1200x1200/quality/80/crop-from/center/30-idees-de-repas-a-deguster-apres-le-sport.jpeg',
       date: new Date()
     }
   ]

  getAllFaceSnaps (): FaceSnap[] {
     return  this.faceSnaps;
  }

  snapFaceSnapById(faceSnapId:number, snapType: 'snap' | 'unsnap') {
     const faceSnap = this.getFaceSnapById(faceSnapId);
       snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;

  }



  getFaceSnapById(faceSnapId: number) : FaceSnap {
    const faceSnap = this.faceSnaps.find(el =>el.id === faceSnapId);
    if(!faceSnap) {
      throw new Error("FaceSnap not found !")
    }else {
    return  faceSnap
    }
  }
}
