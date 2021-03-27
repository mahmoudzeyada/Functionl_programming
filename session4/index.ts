import * as R from "ramda";

class Order {
  discount = 0;
}

interface IRule {
  qualifier: (order: Order) => boolean;
  calculator: (order: Order) => number;
}

class Main {
  ordersWithDiscounts(): Order[] {
    return R.map(
      (order) => this.orderWithDiscount(order, this.discountRules),
      this.orderForProcessing
    );
  }

  orderWithDiscount(order: Order, discountRules: IRule[]): Order {
    const discount = R.pipe(
      () => discountRules,
      (res) => R.filter((rule) => rule.qualifier(order), res),
      (res) => R.map((rule) => rule.calculator(order), res),
      (res) => R.sort((a, b) => a - b, res),
      (res) => R.take(3, res),
      (res) => R.converge(R.divide, [R.sum, R.length])(res) as number
    )();
    const newOrder = R.clone(order);
    newOrder.discount = discount;
    return newOrder;
  }

  get orderForProcessing(): Order[] {
    return [new Order(), new Order(), new Order()];
  }

  get discountRules(): IRule[] {
    return [
      {
        qualifier: this.isAQualified,
        calculator: this.ACalculator,
      },
      {
        qualifier: this.isBQualified,
        calculator: this.BCalculator,
      },
      {
        qualifier: this.isCQualified,
        calculator: this.CCalculator,
      },
    ];
  }

  isAQualified(order: Order): boolean {
    return true;
  }
  ACalculator(order): number {
    return 1;
  }

  isBQualified(order: Order): boolean {
    return true;
  }
  BCalculator(order): number {
    return 1;
  }

  isCQualified(order: Order): boolean {
    return true;
  }
  CCalculator(order): number {
    return 1;
  }
}

const main = new Main();
console.log(main.ordersWithDiscounts());
