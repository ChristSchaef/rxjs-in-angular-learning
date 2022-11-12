import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobOverviewComponent } from './job-overview.component';



@NgModule({
  declarations: [JobOverviewComponent],
  imports: [
    CommonModule
  ],
  exports:[JobOverviewComponent]
})
export class JobOverviewModule { }
