import React, { FC, ReactNode } from "react";
import styles from "./container.module.scss";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={`${styles.container}`}>{children}</div>;
};

export default Container;
