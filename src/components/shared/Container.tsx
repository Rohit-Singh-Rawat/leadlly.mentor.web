import clsx from "clsx";
import { TContainerProps } from "@/helpers/types";

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div className={clsx(" w-full mx-auto ", className)}>
      {children}
    </div>
  );
};

export default Container;
