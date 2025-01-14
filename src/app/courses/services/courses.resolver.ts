import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CourseEntityService } from "./course-entity.service";
import { filter, first, map, tap } from "rxjs/operators";

@Injectable()
export class CoursesResolver  {

    constructor(private coursesService: CourseEntityService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> 
    {
        return this.coursesService.getAll().pipe(
            map(courses => !!courses)
        )
    }
}

