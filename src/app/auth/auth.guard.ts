import { Injectable} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';


//import the auth service
import { FirebaseService } from "../firebase.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private firebaseService: FirebaseService, private router: Router){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    const currentUser = this.firebaseService.currentUser;
    if(currentUser){
      //check if the route is retricted by role
      if(next.data.roles && next.data.roles.indexOf(currentUser.role) === -1){
        //role not authorized
        this.router.navigate(["/login"])
      
      }else{
        return true;
      }
    }
    
  }
}
