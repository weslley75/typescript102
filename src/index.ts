import {ValidationObject} from "typescript102";

const teste: ValidationObject<{
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    zip: number;
  }
  email: string;
  ordersIds: number[];
}> = {
  name: {
    email: true
  },
  age: {
    min: 18
  },
  email: {
    email: true,
  },
  address: {
    fieldOptions: {
      street: {},
      city: {},
      zip: {
        min: 1.5,
      },
    }
  },
  ordersIds: {
    minSize: 1,
    maxSize: 10,
  }
}