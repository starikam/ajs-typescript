export default interface Buyable {
  readonly id: number,
  readonly name: string,
  readonly price: number,
  quantity: number,
  readonly eProduct: boolean,
}
