import React, { FC } from "react";
import Layout from "../../components/Layout";
import {
  Flex,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";

const rows: [string, any][] = [
  ["Наш адрес:", "198215, Дачный пр.24 корпус 2"],
  ["Телефон/факс:", "+7 (812) 372 24 05"],
  ["Электронная почта:", <Link href="mailto:tsgd@mail.ru">tsgd@mail.ru</Link>],
  ["Сайт:", <Link href="https://www.tsgd24k2.ru">www.tsgd24k2.ru</Link>],
  ["Правление ТСЖ", ""],
  ["Председатель правления:", "Коваль Александр Алексеевич"],
  ["Заместитель пердседателя:", "Галацевич Анатолий Александрович"],
  ["Ревизионная комиссия:", "Авхименьева Ольга Владиславовна"],
  ["", "Лебедева Ольга Викторовна"],
  ["Главный бухгалтер:", "Тарасова Ольга Степановна"],
  ["Управлящий домом:", "Лебедев Анатолий Александрович"],
  ["Члены правления:", "Иванов Александр Яковлевич"],
  ["", "Красиков Владимир Семенович"],
  ["", "Лебедев Анатолий Александрович"],
  ["Часы приема членов правления:", "Понедельник с 18:00 до 20:00"],
  [
    "Часы приема главного бухгалтера:",
    "Понедельник и четверг с 18:00 до 20:00",
  ],
];

const ContactsPage: FC<{}> = ({}) => {
  return (
    <Layout heading="Контакты">
      <Flex>
        <TableContainer width="50%">
          <Table size="sm">
            <Tbody>
              {rows.map(([a, b]) => {
                return (
                  <Tr>
                    <Td width="20%">{a}</Td>
                    <Td>{b}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <Flex direction="column" gap="12px">
          <div id="karta">
            <a
              href="https://maps.yandex.ru/?um=constructor:zYrWB-3HQkalmAVNpInu5TnE-yaHMLvh&amp;source=constructor"
              target="_blank"
            >
              <img
                src="https://api-maps.yandex.ru/services/constructor/1.0/static/?sid=zYrWB-3HQkalmAVNpInu5TnE-yaHMLvh&amp;width=326&amp;height=261&amp;lang=ru_RU&amp;sourceType=constructor"
                alt=""
                style={{ border: 0 }}
                width="328px"
              />
            </a>
          </div>
          <img src="./contacts/roof.gif" alt={"roof view"} width="328px" />
        </Flex>
      </Flex>
    </Layout>
  );
};

export default ContactsPage;
