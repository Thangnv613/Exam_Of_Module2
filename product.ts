export class Product{
    private _id: number = 0;
    private _name: string;
    private _type: string;
    private _price: number;
    private quantity: number;
    private _date: Date;
    private _description: string;

	constructor(id: number, name: string, type: string, price: number, $quantity: number, date: Date, description: string) {
		this._name = name;
		this._type = type;
		this._price = price;
		this.quantity = $quantity;
		this._date = date;
		this._description = description;
		this.id = id;
	}
	public get id(): number {
		return this._id;
	}

 
	public get name(): string {
		return this._name;
	}

 
	public get type(): string {
		return this._type;
	}


	public get price(): number {
		return this._price;
	}

 
	public get $quantity(): number {
		return this.quantity;
	}

 
	public get date(): Date {
		return this._date;
	}

	public get description(): string {
		return this._description;
	}


	public set id(value: number) {
		this._id = value;
	}


	public set name(value: string) {
		this._name = value;
	}

	public set type(value: string) {
		this._type = value;
	}


	public set price(value: number) {
		this._price = value;
	}

	public set $quantity(value: number) {
		this.quantity = value;
	}


	public set date(value: Date) {
		this._date = value;
	}
	public set description(value: string) {
		this._description = value;
	}

}