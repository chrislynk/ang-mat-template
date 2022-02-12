import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ResizeObserverModule } from "@ng-web-apis/resize-observer";
import { ScrollbarComponent } from "./scrollbar.component";
import { DraggableDirective } from "./draggable.directive";

@NgModule({
  imports: [CommonModule, ResizeObserverModule],
  declarations: [ScrollbarComponent, DraggableDirective],
  exports: [ScrollbarComponent]
}) export class ScrollbarModule {}