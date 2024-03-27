import {
  Avatar as AvatarR,
  AvatarProps as AvatarPropsR,
} from "@chakra-ui/avatar";

type AvatarProps = AvatarPropsR & {};

export const Avatar = (props: AvatarProps) => {
  return <AvatarR {...props} />;
};
//bug Header
