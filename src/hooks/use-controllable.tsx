import { useEffect, useState } from "react";

type NextValueFn<T> = (value: T) => T;
type SetValueFn<T> = (value: NextValueFn<T> | T, omitOnChange?: boolean) => void;

export function useControllable<T = unknown>(
  defaultValue: T,
  controlledValue?: T,
  onChange?: (nextValue: T) => void,
): [T, SetValueFn<T>] {
  const isControlled = controlledValue !== undefined;
  const initialValue = !isControlled ? defaultValue : controlledValue;
  const [value, setValue] = useState<T>(initialValue);

  const setStateValue: SetValueFn<T> = (nextValue, omitOnChange = false) => {
    const nextValueIsFn = typeof nextValue === "function";
    const newValue = nextValueIsFn ? (nextValue as NextValueFn<T>)(value) : nextValue;

    setValue(newValue);
    if (!omitOnChange) onChange?.(newValue);
  };

  useEffect(() => {
    if (isControlled) setValue(controlledValue);
  }, [controlledValue, isControlled, setValue]);

  return [value, setStateValue];
}
