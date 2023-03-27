declare module 'typescript102' {
  type StringOptions = {
    email?: boolean;
    uppercase?: boolean;
    lowercase?: boolean;
  };

  type ArrayOptions<T> = {
    minSize?: number;
    maxSize?: number;
    itemOptions?: ValidationObject<T>;
  };

  type NumberOptions = {
    min?: number;
    max?: number;
  }

  type ObjectOptions<T> = {
    fieldOptions?: FieldOptions<T>;
  };

  type FieldOptions<T> = {
    [K in keyof T]: T[K] extends string
      ? StringOptions
      : T[K] extends number
        ? NumberOptions
        : T[K] extends Array<infer U>
          ? ArrayOptions<U>
          : T[K] extends object
            ? ObjectOptions<T[K]>
            : {};
  };

  export type ValidationObject<T> = FieldOptions<T>;

}