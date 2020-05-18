import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-drink-form',
  templateUrl: './drink-form.component.html',
  styleUrls: ['./drink-form.component.scss']
})
export class DrinkFormComponent implements OnInit {
  defaultDrink = {
    name: ['', Validators.required],
    count: [1, [Validators.required, Validators.min(1)]],
    price: [1, [Validators.required, Validators.min(1)]]
  };
  drinksForm: FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.drinksForm = this.fb.array([this.fb.group(this.defaultDrink)]);
  }

  addDrink() {
    this.drinksForm.push(this.fb.group(this.defaultDrink));
  }

  deleteDrink(index: number) {
    this.drinksForm.removeAt(index);
  }

  saveDrinks() {
    console.log('save drinks', this.drinksForm.value);
  }
}
