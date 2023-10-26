import { Component } from '@angular/core';
import { coursesSchema } from 'src/app/schema/course.schema';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  courses: any[] = coursesSchema;
}
