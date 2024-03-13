import {
  Button as ButtonR,
  ButtonProps as ButtonPropsR,
} from "@chakra-ui/react";

type ButtonProps = ButtonPropsR & {};

export const Button = (props: ButtonProps) => {
  return <ButtonR {...props} />;
};
