import { FC, ReactNode } from "react";
import { Popover } from "antd";

interface PopoverProps {
  children: ReactNode;
  content: ReactNode;
  title: ReactNode;
}
export const CardPopover: FC<PopoverProps> = ({ children, content, title }) => {
  return (
    <Popover
      title={title}
      content={content}
      placement="right"
      mouseLeaveDelay={0}
    >
      {children}
    </Popover>
  );
};
