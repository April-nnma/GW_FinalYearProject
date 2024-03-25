import {
  Avatar as AvatarA,
  AvatarProps as AvatarPropsA,
  AvatarGroup,
} from "@chakra-ui/react";

type AvatarObject = React.FC<AvatarPropsA> & { Group: typeof AvatarGroup };

export const Avatar: AvatarObject = (props) => {
  return <AvatarA {...props} />;
};

Avatar.Group = AvatarGroup;

export default Avatar;
