import { Component } from '@angular/core';
import { coursesSchema } from 'src/app/schema/course.schema';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {

  constructor(public readonly utilsService:UtilsService) {}

  courses : any[]=coursesSchema;
  p:number = 1;

}
