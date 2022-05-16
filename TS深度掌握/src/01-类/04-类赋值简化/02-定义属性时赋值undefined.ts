export default class OrderDetail {
  public price: number | undefined;
  public count: number | undefined;
  constructor(count_: number, price_: number) {
    // 需要赋值
    this.price = price_;
    this.count = count_;
  }

  // public getTotal(): number {
  //   return this.price * this.count; // 编译错误对象可能'未定义'
  // }
}

let orderDetail = new OrderDetail(11, 30);
// console.log(orderDetail.getTotal());
console.log(typeof orderDetail.price);
