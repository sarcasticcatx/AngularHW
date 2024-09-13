import { NgStyle } from "@angular/common";
import { Component, Input, input, output } from "@angular/core";

@Component({
    selector: 'apply-cancel-button',
    standalone: true,
    imports: [NgStyle],
    templateUrl: "./a.button.component.html",
    styleUrl: "./a.button.component.css"
})
export class ApplyOrCancelButtonComponent {
text = input.required<string>();
btnClick = output();
style = input<{[key: string]: string}>({});
disabled = input(false);
type = input<'button' | "submit">("button");

onBtnClick() {
    this.btnClick.emit();
}

}