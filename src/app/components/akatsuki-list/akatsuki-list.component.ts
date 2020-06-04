import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { AkatsukiList } from "../../services/data-getter.service";

@Component({
  selector: "app-akatsuki-list",
  templateUrl: "./akatsuki-list.component.html",
  styleUrls: ["./akatsuki-list.component.scss"],
})
export class AkatsukiListComponent implements OnInit {
  @Input() akatsukiList: AkatsukiList;
  @Input() isNew: boolean;
  @Output() addPerson = new EventEmitter();
  @Output() cancelAddingPerson = new EventEmitter();
  title: string;

  constructor() {}

  ngOnInit() {
    if (this.isNew) {
      this.akatsukiList = {
        name: "",
        rank: "",
        age: null,
      };
      this.title = "New list";
    }
  }

  addNew() {
    if (this.isNew) {
      this.addPerson.emit(this.akatsukiList);
    }
  }

  cancelAdding() {
    if (this.isNew) {
      this.cancelAddingPerson.emit();
    }
  }
}
