import { Order, Invoice, Shipping, Freight } from "./session6.class";
import {
  FreightChoice,
  IFreightRule,
  IInvoiceRule,
  InvoiceChoice,
  IShippingRule,
  ShippingChoice,
} from "./session6.type";

export default class InvoicingPath {
  get invoiceRules(): IInvoiceRule[] {
    return [
      {
        choice: InvoiceChoice.INV1,
        calculator: this.calcInvoice1,
      },
      {
        choice: InvoiceChoice.INV2,
        calculator: this.calcInvoice2,
      },
      {
        choice: InvoiceChoice.INV3,
        calculator: this.calcInvoice3,
      },
      {
        choice: InvoiceChoice.INV4,
        calculator: this.calcInvoice4,
      },
      {
        choice: InvoiceChoice.INV5,
        calculator: this.calcInvoice5,
      },
    ];
  }

  get shippingRules(): IShippingRule[] {
    return [
      {
        choice: ShippingChoice.SH1,
        calculator: this.calcShipping1,
      },
      {
        choice: ShippingChoice.SH2,
        calculator: this.calcShipping2,
      },
      {
        choice: ShippingChoice.SH3,
        calculator: this.calcShipping3,
      },
    ];
  }

  get freightRules(): IFreightRule[] {
    return [
      {
        choice: FreightChoice.FR1,
        calculator: this.calcFreight1,
      },
      {
        choice: FreightChoice.FR2,
        calculator: this.calcFreight2,
      },
      {
        choice: FreightChoice.FR3,
        calculator: this.calcFreight3,
      },
      {
        choice: FreightChoice.FR4,
        calculator: this.calcFreight4,
      },
      {
        choice: FreightChoice.FR5,
        calculator: this.calcFreight5,
      },
    ];
  }

  private calcInvoice1(o: Order): Invoice {
    console.log("Invoice 1");
    const invoiceCost = o.cost * 1.1;
    const invoice = new Invoice(invoiceCost);
    return invoice;
  }

  private calcInvoice2(o: Order): Invoice {
    console.log("Invoice 2");
    const invoiceCost = o.cost * 1.2;
    const invoice = new Invoice(invoiceCost);
    return invoice;
  }

  private calcInvoice3(o: Order): Invoice {
    console.log("Invoice 3");
    const invoiceCost = o.cost * 1.3;
    const invoice = new Invoice(invoiceCost);
    return invoice;
  }

  private calcInvoice4(o: Order): Invoice {
    console.log("Invoice 4");
    const invoiceCost = o.cost * 1.4;
    const invoice = new Invoice(invoiceCost);
    return invoice;
  }

  private calcInvoice5(o: Order): Invoice {
    console.log("Invoice 5");
    const invoiceCost = o.cost * 1.5;
    const invoice = new Invoice(invoiceCost);
    return invoice;
  }

  private calcShipping1(i: Invoice): Shipping {
    console.log("Shipping 1");
    const shipperId = i.cost > 1000 ? 1 : 2;
    const cost = i.cost;
    const s = new Shipping(shipperId, cost);
    return s;
  }

  private calcShipping2(i: Invoice): Shipping {
    console.log("Shipping 2");
    const shipperId = i.cost > 1200 ? 1 : 2;
    const cost = i.cost;
    const s = new Shipping(shipperId, cost);
    return s;
  }

  private calcShipping3(i: Invoice): Shipping {
    console.log("Shipping 3");
    const shipperId = i.cost > 1300 ? 1 : 2;
    const cost = i.cost;
    const s = new Shipping(shipperId, cost);
    return s;
  }

  private calcFreight1(s: Shipping): Freight {
    console.log("Freight 1");
    const freightCost = s.shipperId === 1 ? s.cost * 0.25 : s.cost * 0.5;
    const f = new Freight(freightCost);
    return f;
  }

  private calcFreight2(s: Shipping): Freight {
    console.log("Freight 2");
    const freightCost = s.shipperId === 1 ? s.cost * 0.28 : s.cost * 0.52;
    const f = new Freight(freightCost);
    return f;
  }

  private calcFreight3(s: Shipping): Freight {
    console.log("Freight 3");
    const freightCost = s.shipperId === 1 ? s.cost * 0.3 : s.cost * 0.6;
    const f = new Freight(freightCost);
    return f;
  }

  private calcFreight4(s: Shipping): Freight {
    console.log("Freight 4");
    const freightCost = s.shipperId === 1 ? s.cost * 0.35 : s.cost * 0.65;
    const f = new Freight(freightCost);
    return f;
  }

  private calcFreight5(s: Shipping): Freight {
    console.log("Freight 5");
    const freightCost = s.shipperId === 1 ? s.cost * 0.15 : s.cost * 0.2;
    const f = new Freight(freightCost);
    return f;
  }
}
