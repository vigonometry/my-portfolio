import { VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Navbar } from "../navbar/Navbar";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <VStack w="full" align="stretch" spacing={4}>
    <Navbar />
    {children}
  </VStack>
);
