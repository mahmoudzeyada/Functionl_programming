import {
  Order,
  Invoice,
  Shipping,
  Freight,
  Availability,
  ShippingDate,
} from "./session6.class";

export enum InvoiceChoice {
  INV1 = "INV1",
  INV2 = "INV2",
  INV3 = "INV3",
  INV4 = "INV4",
  INV5 = "INV5",
}

export enum ShippingChoice {
  SH1 = "SH1",
  SH2 = "SH2",
  SH3 = "SH3",
}

export enum FreightChoice {
  FR1 = "FR1",
  FR2 = "FR2",
  FR3 = "FR3",
  FR4 = "FR4",
  FR5 = "FR5",
}

export enum AvailabilityChoice {
  AV1 = "AV1",
  AV2 = "AV2",
  AV3 = "AV3",
  AV4 = "AV4",
}

export enum ShippingDateChoice {
  SD1 = "SD1",
  SD2 = "SD2",
  SD3 = "SD3",
  SD4 = "SD4",
  SD5 = "SD5",
}

export interface IInvoiceRule {
  calculator: (o: Order) => Invoice;
  choice: InvoiceChoice;
}

export interface IShippingRule {
  calculator: (i: Invoice) => Shipping;
  choice: ShippingChoice;
}

export interface IFreightRule {
  calculator: (s: Shipping) => Freight;
  choice: FreightChoice;
}

export interface IAvailabilityRule {
  calculator: (o: Order) => Availability;
  choice: AvailabilityChoice;
}

export interface IShippingDateRule {
  calculator: (a: Availability) => ShippingDate;
  choice: ShippingDateChoice;
}

export interface IProcessConfigration {
  readonly invoiceChoice: InvoiceChoice;
  readonly shippingChoice: ShippingChoice;
  readonly freightChoice: FreightChoice;
  readonly availabilityChoice: AvailabilityChoice;
  readonly shippingDateChoice: ShippingDateChoice;
}
