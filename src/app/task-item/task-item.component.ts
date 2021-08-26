import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
	selector: 'app-task-item',
	templateUrl: './task-item.component.html',
	styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
	item: ItemInterface | undefined;

	constructor() {
	}

	ngOnInit(): void {
	}

}

interface ItemInterface {
	title: string,
	description: string,
	category: string
}