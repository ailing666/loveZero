import OrderDetail from './OrderDetail';
class Order {
  public orderId: number = 0; //订单 Id
  public orderDate: Date = new Date(); // 订单日期
  public address: string = ''; // 顾客地址
  public custName: string = 'noCustName'; // 顾客名
  public custPhone: string = '18911111111'; // 顾客手机号
  public orderDetailArr: Array<OrderDetail> = []; // 订单详情

  constructor(
    orderId_: number,
    orderDate_: Date,
    address_: string,
    custName_: string,
    custPhone_: string,
    orderDetailArr_: Array<OrderDetail>
  ) {
    this.orderId = orderId_;
    this.orderDate = orderDate_;
    this.address = address_;
    this.custName = custName_;
    this.custPhone = custPhone_;
    this.orderDetailArr = orderDetailArr_;
  }
}
let orderDetailOne = new OrderDetail(10, '电视机', 5000, 3);
let orderDetailTwo = new OrderDetail(11, '电脑', 15000, 1);
const order = new Order(1, new Date(2023, 10, 17, 5, 20, 0), '武汉', '张三', '18922222222', [
  orderDetailOne,
  orderDetailTwo,
]);
console.log('%corder: ', 'color: #cc81e9;', order);
