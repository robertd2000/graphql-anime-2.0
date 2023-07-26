import { FC, ReactNode } from "react";
import { Grid, Layout } from "antd";

const { useBreakpoint } = Grid;

interface LayoutCustomProps {
  children: ReactNode;
  backgroundColor?: string;
}

export const LayoutCustom: FC<LayoutCustomProps> = ({
  children,
  backgroundColor,
}) => {
  const screens = useBreakpoint();

  return (
    <Layout.Content
      style={{
        padding: screens.lg ? "2rem 10rem 1.5rem" : "1rem 3rem",
        backgroundColor,
      }}
    >
      <>{children}</>
    </Layout.Content>
  );
};
