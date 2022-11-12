import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RunListComponent } from "src/app/run-list/run-list.component";
import { JobOverviewModule } from "../job-overview/job-overview.module";

@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule.forChild([
        {
          path: '',
          component: RunListComponent
        }
      ]),
      JobOverviewModule
    ],
    declarations: [
      RunListComponent
    ]
  })
  export class RunModule { }