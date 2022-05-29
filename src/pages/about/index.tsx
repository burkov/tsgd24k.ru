import React, { FC } from "react";
import Layout from "../../components/Layout";
import { Link, Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons';

/*


 */
const AboutPage: FC<{}> = ({}) => {
  return (
    <Layout heading="О доме">
      <TableContainer width="60%">
        <Table size="sm">
          <Tbody>
            <Tr>
              <Td>Дата постройки </Td>
              <Td>2000 год</Td>
            </Tr>
            <Tr>
              <Td>Тип здания</Td>
              <Td>монолитно-кирпичный</Td>
            </Tr>
            <Tr>
              <Td>Количество этажей </Td>
              <Td>10 + мансарды</Td>
            </Tr>
            <Tr>
              <Td>Полезная площадь</Td>
              <Td>12816м2</Td>
            </Tr>
            <Tr>
              <Td>Жилая площадь</Td>
              <Td>11261м2</Td>
            </Tr>
            <Tr>
              <Td>Торговые помещения и офисы</Td>
              <Td>397м2</Td>
            </Tr>
            <Tr>
              <Td>Встроенный гараж</Td>
              <Td>1158м2 (31 место)</Td>
            </Tr>
            <Tr>
              <Td>Количество подъездов</Td>
              <Td>3</Td>
            </Tr>
            <Tr>
              <Td>Количество квартир</Td>
              <Td> 143 (141 частные, 2 муниципальные)</Td>
            </Tr>
            <Tr>
              <Td>Общая площадь земельного участка в собственности дома</Td>
              <Td>5200м2 (парковка 2150м2 (74 место))</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <div style={{ marginTop: "12px" }}>
        <Link href="/about/history.pdf" isExternal={true} target="_blank">
          Историческая справка о местности под названием "ДАЧНОЕ" <ExternalLinkIcon />
        </Link>
      </div>
    </Layout>
  );
};

export default AboutPage;
