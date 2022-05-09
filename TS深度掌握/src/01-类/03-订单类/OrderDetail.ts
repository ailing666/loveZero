// 订单详情类
export default class OrderDetail {
  public orderDetailId: number = 0; // 购买的商品id
  public productname: string = 'noproduct'; //购买的商品名
  public price: number = 0; //购买的商品的价格
  public count: number = 0; //购买数量

  constructor(orderDetailId_: number, productname_: string, price_: number, count_: number) {
    this.orderDetailId = orderDetailId_;
    this.productname = productname_;
    this.price = price_;
    this.count = count_;
  }
}
