import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    const cartId = this.checkProductInCart(item.id);

    if (cartId !== null) {
      if (!item.eProduct) {
        this._items[cartId].quantity += 1;
      }
    } else {
      this._items.push(item);
    }
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  get sumProducts(): number {
    return this._items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  getSum(discount :number = 0): number {
    let sum = this.sumProducts;

    if (discount > 0) {
      sum = sum - sum * discount / 100;
    }

    return sum;
  }

  remove(id: number): void {
     const item = this._items.filter(item => {
         return item.id === id;
     })
     this._items.splice(this._items.indexOf(item as any));  
   }

  checkProductInCart(id: number): number | null {
    const index = this._items.findIndex(item => item.id === id);
    return index !== -1 ? index : null;
  }

  changeQuantity(id: number, action: 'minus' | 'plus'): void {
    const cartId = this.checkProductInCart(id);
  
    if (cartId !== null && !this._items[cartId].eProduct) {
      const newQuantity = action === 'minus' ? this._items[cartId].quantity - 1 : this._items[cartId].quantity + 1;
      this._items[cartId].quantity = Math.max(newQuantity, 1);
    } else {
      throw new Error('ID not found in the cart');
    }
  }
}
