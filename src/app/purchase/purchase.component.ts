import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

interface Product {
	name: string;
	price: number;
}

@Component({
	selector: 'app-purchase',
	standalone: true,
	imports: [
		FormsModule,
		MatInputModule,
		MatButtonModule,
	],
	templateUrl: './purchase.component.html',
	styleUrl: './purchase.component.scss'
})
export class PurchaseComponent {
	totalPrice: number = 0;
	amountPaid: number = 0;
	tenEuros: number = 0;
  	fiveEuros: number = 0;
  	oneEuro: number = 0;
  	changeCalculated: boolean = false;
	products: Product[] = [];
	productName: string = '';
  	productPrice: number = 0;

	addProduct(name: string, price: number) {
		this.products.push({ name, price });
		this.calculateTotalPrice();

		// Clear input fields
		this.clearProductFields();
	}

	calculateTotalPrice() {
		this.totalPrice = this.products.reduce((sum, product) => sum + product.price, 0);
	}

	clearProductFields() {
		this.productName = '';
		this.productPrice = 0;
	}
  
	calculateChange() {
		let change = this.amountPaid - this.totalPrice;
		this.tenEuros = Math.floor(change / 10);
	  	change %= 10;
	  	this.fiveEuros = Math.floor(change / 5);
	  	change %= 5;
	  	this.oneEuro = Math.floor(change);
  
	  	this.changeCalculated = true;
	}
}
