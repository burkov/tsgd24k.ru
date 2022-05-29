import React, { FC } from "react";
import Layout from "../../components/Layout";
import {
  Link,
  List,
  ListItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr, UnorderedList,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from "@chakra-ui/icons";

const OtherPage: FC<{}> = ({}) => {
  return (
    <Layout heading="Полезная информация">
      <UnorderedList>
        <ListItem>
          <Link href="/other/pozh.pdf" isExternal={true} target="_blank">
            Памятка о пожарной безопасности
            <ExternalLinkIcon />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/other/azbuka.pdf" isExternal={true} target="_blank">
            Азбука ЖКХ для всех
            <ExternalLinkIcon />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/other/tabak.pdf" isExternal={true} target="_blank">
            Антитабачный закон
            <ExternalLinkIcon />
          </Link>
        </ListItem>
      </UnorderedList>
    </Layout>
  );
};

export default OtherPage;
