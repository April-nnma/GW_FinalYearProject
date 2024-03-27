import {
  Popover as PopoverA,
  PopoverProps as PopoverPropsA,
} from "@chakra-ui/react";
type PopoverProps = PopoverPropsA;
export const Popover = (props: PopoverProps) => {
  return <PopoverA {...props} />;
};
