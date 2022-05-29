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
  Tr,
  UnorderedList,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const HowToPayPage: FC<{}> = ({}) => {
  return (
    <Layout heading="Оплата">
      <UnorderedList>
        <ListItem>
          <Link
            href="http://www.tsgd24k2.ru/instr.pdf"
            isExternal={true}
            target="_blank"
          >
            Петроэлектросбыт: инстркуция пользователя
            <ExternalLinkIcon />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://ikus.pes.spb.ru/IKUSUser/"
            isExternal={true}
            target="_blank"
          >
            Петроэлектросбыт: личный кабинет
            <ExternalLinkIcon />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://lk.eis24.me/#/login?from=login&status=not_active"
            isExternal={true}
            target="_blank"
          >
            Внесение показаний приборов ГВС и ХВС
            <ExternalLinkIcon />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://lk.rt.ru/" isExternal={true} target="_blank">
            Ростелеком: личный кабинет и инстркуция пользователя
            <ExternalLinkIcon />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://online.sberbank.ru/CSAFront/index.do"
            isExternal={true}
            target="_blank"
          >
            Сбербанк Онлайн: личный кабинет и инстркуция пользователя
            <ExternalLinkIcon />
          </Link>
        </ListItem>
      </UnorderedList>
    </Layout>
  );
};

export default HowToPayPage;
