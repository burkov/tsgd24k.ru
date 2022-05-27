import React, { ReactNode } from "react";
import { FaTable, FaTelegram } from "react-icons/fa";

import {
  Box,
  Button,
  Container,
  Flex, Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import dayjs from "dayjs";
import { AtSignIcon } from '@chakra-ui/icons';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <Button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};

const Footer = () => (
  <Box
    bg={useColorModeValue("gray.50", "gray.900")}
    color={useColorModeValue("gray.700", "gray.200")}
    style={{
      position: "fixed",
      left: 0,
      bottom: 0,
      right: 0,
    }}
  >
    <Container
      as={Stack}
      maxW={"6xl"}
      py={4}
      direction={{ base: "column", md: "row" }}
      spacing={4}
      justify={{ base: "center", md: "space-between" }}
      align={{ base: "center", md: "center" }}
    >
      <Flex alignItems="center">
        <Text fontSize="xs" style={{ display: "inline-block", marginRight: "6px" }}>
          © {dayjs().year()} ТСЖ "Дачный 24". Разработка сайта:
        </Text>
        <Link fontSize="xs" href="https://t.me/alex_burkov" target="_blank">
          @alex_burkov
        </Link>
      </Flex>
    </Container>
  </Box>
);
export default Footer;
