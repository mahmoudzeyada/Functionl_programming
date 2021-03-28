export class Order {
  constructor(readonly cost = 0, readonly date = new Date()) {}
}

export class Invoice {
  constructor(readonly cost: number) {}
}

export class Shipping {
  constructor(readonly shipperId: number, readonly cost: number) {}
}

export class Freight {
  constructor(readonly cost: number) {}
}

export class Availability {
  constructor(readonly date: Date) {}
}

export class ShippingDate {
  constructor(readonly date: Date) {}
}
