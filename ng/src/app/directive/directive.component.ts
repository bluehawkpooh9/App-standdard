import { Directive, ElementRef, Renderer2,Component } from '@angular/core';

@Directive({ selector: '[appShadow]'
    
})
@Component({
    selector: 'app-directive',
    templateUrl: './directive.component.html',
    styleUrls: ['./directive.component.css']
  })
export class DirectiveComponent {
    constructor(elem: ElementRef, renderer: Renderer2) {
       renderer.setStyle(elem.nativeElement, 'box-shadow', '2px 2px 12px #58A362');
    }
}
