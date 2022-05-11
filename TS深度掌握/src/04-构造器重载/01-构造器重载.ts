type TypeChartParam = {
  width?: number;
  height?: number;
  radius?: number;
};

class Square {
  public width!: number;
  public height!: number;

  constructor(width_: number, height_: number); // 重载签名
  constructor(paramObj: TypeChartParam); // 重载签名
  // 实现签名
  constructor(paramObjOrWidth_: any, height_ = 0) {
    if (typeof paramObjOrWidth_ === 'object') {
      this.width = paramObjOrWidth_.width;
      this.height = paramObjOrWidth_.height;
    } else {
      this.width = paramObjOrWidth_;
      this.height = height_;
    }
  }

  getArea(): void {
    console.log(this.width * this.height);
  }
}

const square = new Square(40, 50);
square.getArea();

const square2 = new Square({ width: 20, height: 30 });
square2.getArea();

export {};
