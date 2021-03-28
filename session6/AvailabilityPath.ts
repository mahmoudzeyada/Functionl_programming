import {
  AvailabilityChoice,
  IAvailabilityRule,
  IShippingDateRule,
  ShippingDateChoice,
} from "./session6.type";
import { Availability, Order, ShippingDate } from "./session6.class";
export class AvailabilityPath {
  get availabilityRules(): IAvailabilityRule[] {
    return [
      {
        choice: AvailabilityChoice.AV1,
        calculator: this.calcAvailability1,
      },
      {
        choice: AvailabilityChoice.AV2,
        calculator: this.calcAvailability2,
      },
      {
        choice: AvailabilityChoice.AV3,
        calculator: this.calcAvailability3,
      },
      {
        choice: AvailabilityChoice.AV4,
        calculator: this.calcAvailability4,
      },
    ];
  }

  get shippingDateRules(): IShippingDateRule[] {
    return [
      {
        choice: ShippingDateChoice.SD1,
        calculator: this.calcShippingDate1,
      },
      {
        choice: ShippingDateChoice.SD2,
        calculator: this.calcShippingDate2,
      },
      {
        choice: ShippingDateChoice.SD3,
        calculator: this.calcShippingDate3,
      },
      {
        choice: ShippingDateChoice.SD4,
        calculator: this.calcShippingDate4,
      },
      {
        choice: ShippingDateChoice.SD5,
        calculator: this.calcShippingDate5,
      },
    ];
  }

  private calcAvailability1(o: Order): Availability {
    console.log("Availability 1");
    const availabilityDate = this.addDays(o.date, 1);
    const availability = new Availability(availabilityDate);
    return availability;
  }

  private calcAvailability2(o: Order): Availability {
    console.log("Availability 2");
    const availabilityDate = this.addDays(o.date, 2);
    const availability = new Availability(availabilityDate);
    return availability;
  }

  private calcAvailability3(o: Order): Availability {
    console.log("Availability 3");
    const availabilityDate = this.addDays(o.date, 3);
    const availability = new Availability(availabilityDate);
    return availability;
  }

  private calcAvailability4(o: Order): Availability {
    console.log("Availability 4");
    const availabilityDate = this.addDays(o.date, 4);
    const availability = new Availability(availabilityDate);
    return availability;
  }

  private calcShippingDate1(a: Availability): ShippingDate {
    console.log("ShippingDate 1");
    const date = this.addHours(a.date, 1);
    const shippingDate = new ShippingDate(date);
    return shippingDate;
  }

  private calcShippingDate2(a: Availability): ShippingDate {
    console.log("ShippingDate 2");
    const date = this.addHours(a.date, 2);
    const shippingDate = new ShippingDate(date);
    return shippingDate;
  }

  private calcShippingDate3(a: Availability): ShippingDate {
    console.log("ShippingDate 3");
    const date = this.addHours(a.date, 3);
    const shippingDate = new ShippingDate(date);
    return shippingDate;
  }

  private calcShippingDate4(a: Availability): ShippingDate {
    console.log("ShippingDate 4");
    const date = this.addHours(a.date, 4);
    const shippingDate = new ShippingDate(date);
    return shippingDate;
  }

  private calcShippingDate5(a: Availability): ShippingDate {
    console.log("ShippingDate 5");
    const date = this.addHours(a.date, 5);
    const shippingDate = new ShippingDate(date);
    return shippingDate;
  }

  private addDays(date: Date, days: number): Date {
    const clonedDate = new Date(date.valueOf());
    clonedDate.setDate(clonedDate.getDate() + days);
    return clonedDate;
  }

  private addHours(date: Date, hours: number): Date {
    const clonedDate = new Date(date.valueOf());
    clonedDate.setHours(clonedDate.getHours() + hours);
    return clonedDate;
  }
}
