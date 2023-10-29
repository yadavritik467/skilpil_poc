import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { coursesSchema } from 'src/app/schema/course.schema';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  constructor(private route:ActivatedRoute ,public readonly utilsService:UtilsService) {}
   isVisible: boolean = true;
   course: any;

 

 

  openModal() {
    this.isVisible = true;
  }


     // Method to submit the form data
  submitForm() {
    
  
    this.closeModal();
  }

  // Method to close the modal
  closeModal() {
    this.isVisible = false;
  }
    

    ngOnInit(): void {
      const courseId = this.route.snapshot.paramMap.get('id');
      if (courseId) {
        this.course = coursesSchema.find(course => course.id === +courseId);
      }
    }
}
