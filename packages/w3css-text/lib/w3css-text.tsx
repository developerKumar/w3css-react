import React, { ReactChild, ReactChildren } from "react";

type IText = {
  children: ReactChild | ReactChildren,
  message: string
}
const Text = ({ children, message }: IText) => <p>{children} {message}</p>;
export { Text };
