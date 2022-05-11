import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'em-employee-tags',
  templateUrl: './employee-tags.component.html',
  styleUrls: ['./employee-tags.component.scss'],
})
export class EmployeeTagsComponent implements OnInit {
  @Input() tags: string[] = [];
  @Output() tagListEvent = new EventEmitter<string[]>();
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor() {}

  ngOnInit(): void {}

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add new tag
    if (value) {
      this.tags.push(value);
      this.tagListEvent.emit(this.tags);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
      this.tagListEvent.emit(this.tags);
    }
  }
}
