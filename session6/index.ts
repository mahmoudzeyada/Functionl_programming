import { AvailabilityPath } from "./AvailabilityPath";
import * as R from "ramda";
import InvoicingPath from "./invoicingPath";
import { Freight, Order, ShippingDate } from "./session6.class";
import {
  AvailabilityChoice,
  FreightChoice,
  InvoiceChoice,
  IProcessConfigration,
  ShippingChoice,
  ShippingDateChoice,
} from "./session6.type";

class App {
  calcAdjustedCostForOrder(
    processConfigration: IProcessConfigration,
    invoicePath: InvoicingPath,
    availabilityPath: AvailabilityPath
  ): (o: Order) => number {
    return (o: Order) =>
      this.adjustCost(
        o,
        this.invoicePathFunc(processConfigration, invoicePath),
        this.availabilityPathFunc(processConfigration, availabilityPath)
      );
  }

  private adjustCost(
    o: Order,
    calcFreight: (o: Order) => Freight,
    calcShippingDate: (o: Order) => ShippingDate
  ): number {
    const freight = calcFreight(o);
    const shippingDate = calcShippingDate(o);
    const cost =
      shippingDate.date.getFullYear() === 2021
        ? freight.cost + 100
        : freight.cost + 200;
    console.log(
      `Day of shipping ${shippingDate.date.toISOString()} with cost ${cost}`
    );
    return cost;
  }

  private invoicePathFunc(
    { invoiceChoice, shippingChoice, freightChoice }: IProcessConfigration,
    { freightRules, invoiceRules, shippingRules }: InvoicingPath
  ): (o: Order) => Freight {
    const invoiceFunc = R.find((x) => x.choice === invoiceChoice, invoiceRules)
      .calculator;
    const shippingFunc = R.find(
      (x) => x.choice === shippingChoice,
      shippingRules
    ).calculator;
    const freightFunc = R.find((x) => x.choice === freightChoice, freightRules)
      .calculator;
    return R.compose(freightFunc, shippingFunc, invoiceFunc);
  }

  private availabilityPathFunc(
    { availabilityChoice, shippingDateChoice }: IProcessConfigration,
    availabilityPath: AvailabilityPath
  ): (o: Order) => ShippingDate {
    const { availabilityRules, shippingDateRules } = availabilityPath;

    const availabilityFunc = R.find(
      (x) => x.choice === availabilityChoice,
      availabilityRules
    ).calculator.bind(availabilityPath);

    const shippingDateFunc = R.find(
      (x) => x.choice === shippingDateChoice,
      shippingDateRules
    ).calculator.bind(availabilityPath);

    return R.compose(shippingDateFunc, availabilityFunc);
  }
}

const app = new App();
const processConfigration: IProcessConfigration = {
  invoiceChoice: InvoiceChoice.INV1,
  shippingChoice: ShippingChoice.SH1,
  freightChoice: FreightChoice.FR1,
  availabilityChoice: AvailabilityChoice.AV1,
  shippingDateChoice: ShippingDateChoice.SD1,
};
const invoicePath = new InvoicingPath();
const availabilityPath = new AvailabilityPath();
const order = new Order(100);

app.calcAdjustedCostForOrder(
  processConfigration,
  invoicePath,
  availabilityPath
)(order);
