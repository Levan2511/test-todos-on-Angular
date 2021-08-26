import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
	@Output() closeEvent = new EventEmitter<boolean>();

	title: string = '';
	descr: string = '';
	dateInputController: FormControl = new FormControl();
	deadlineDate: Date = new Date(this.dateInputController.value);

	constructor() { }

	ngOnInit(): void {
	}

	emitCloseEvent() {
		this.closeEvent.emit();
	}

	onDate(event: Event) {
		console.log(event);
	}
}
