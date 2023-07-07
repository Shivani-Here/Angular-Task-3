import { Component, ViewEncapsulation } from '@angular/core';

interface AccordionSection {
  header: string;
  details: string;
}

@Component({
  selector: 'app-accordion',
  templateUrl: 'accordion.component.html',
  styleUrls: ['accordion.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionComponent {
  sections: AccordionSection[] = [];
  sectionHeader: string | any;
  sectionDetails: string | any;

  addSection(): void {
    const newSection: AccordionSection = {
      header: this.sectionHeader,
      details: this.sectionDetails
    };
    this.sections.push(newSection);

    this.sectionHeader = '';
    this.sectionDetails = '';
  }
}
