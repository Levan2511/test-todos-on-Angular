import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	isDialogShown: boolean = false;

	constructor (public dialog: MatDialog) {}

	openDialog() {
		this.isDialogShown = true;
	}
	hideDialog() {
		this.isDialogShown = false;
	}
}
