export default class OrderDetail {
  public price!: number;
  public count!: number;
  constructor(count_: number, price_: number) {
    // 不赋值默认是undefined，不会报错
    // this.price = price_;
    // this.count = count_;
    // 赋值就会用外部传入的值
    this.price = price_;
    this.count = count_;
  }

  public getTotal(): number {
    return this.price * this.count;
  }
}

let orderDetail = new OrderDetail(12, 30);
console.log(orderDetail.getTotal());
console.log(typeof orderDetail.price);
