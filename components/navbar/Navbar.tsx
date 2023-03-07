import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Link,
  Spacer,
  StackDivider,
  useColorMode,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsSunFill } from "react-icons/bs";
import { RiMoonClearLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { pageLinks } from "./links";
import NextLink from "next/link";
import { useRef } from "react";

export type NavItem = {
  url: string;
  label: string;
};



const NavLink = (x: NavItem) => (
  <Link as={NextLink} href={x.url}>
    {x.label}
  </Link>
);


const MobileDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <HStack align="baseline" display={{ base: "flex", md: "none" }} w="full" px={4}>
      <IconButton
        aria-label="hamburger"
        as={RxHamburgerMenu}
        ref={btnRef}
        onClick={onOpen}
        size="sm"
        variant="ghost"
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <DrawerCloseButton />
          </DrawerHeader>

          <DrawerBody>
            <VStack w="full" h="full" divider={<StackDivider />}>
              {pageLinks.map((l) => NavLink(l))}
            </VStack>
          </DrawerBody>
          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Spacer />
    </HStack>
  );
};

export const Header = () => (
  <header>
    <HStack as ="nav" align="baseline" display={{ base: "none", md: "flex" }}>
      <Spacer />
      <HStack
        align="baseline"
        divider={<StackDivider />}
        spacing={4}
        p={4}
      >
        {pageLinks.map((l) => NavLink(l))}
        <Link href="https://drive.google.com/file/d/1A9OSN7WVSadcKqKAca-GyNj5dyGmwHTV/view?usp=share_link">Resume</Link>
      </HStack>
    </HStack>
  </header>
);

export const Navbar = () => (
  <>
    <Header />
    <MobileDrawer />
  </>
);
