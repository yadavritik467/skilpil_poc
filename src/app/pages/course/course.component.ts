import { Component } from '@angular/core';
import { coursesSchema } from 'src/app/schema/course.schema';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  itemsPerPage: number = 6;
  currentPage: number = 1;
  totalItems: number = coursesSchema.length;

  constructor(public readonly utilsService: UtilsService) {}

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get displayedCourses(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return coursesSchema.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
