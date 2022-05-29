import React, { FC } from "react";
import Layout from "../../components/Layout";
import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

type Row = [number, string, string | null];

const rows: Row[] = [
  [133, "25.01.2014", "Протокол № 103 от 01.10.2014"],
  [92, "10.03.2014", "Протокол № 103 от 01.10.2014"],
  [41, "19.05.2014", "Протокол № 121 от 21.12.2016"],
  [51, "22.07.2014", "Протокол № 121 от 21.12.2016"],
  [141, "09.09.2014", "Протокол № 121 от 21.12.2016"],
  [106, "21.04.2015", "Протокол № 135 от 18.05.2018"],
  [1, "30.07.2015", "Протокол № 121 от 21.12.2016"],
  [68, "08.04.2016", "Протокол № 140 от 24.01.2019"],
  [94, "12.07.2016", null],
  [103, "04.08.2016", "Протокол № 142 от 19.04.2019"],
  [87, "05.08.2016", "Протокол № 143 от 11.06.2019"],
  [34, "26.01.2017", "Протокол № 144 от 04.07.2019"],
  [113, "16.03.2017", "Протокол № 145 от 22.08.2019"],
  [139, "16.03.2017", "Протокол № 165 от 29.06.2021"],
  [77, "03.11.2017", null],
  [114, "22.02.2018", "Протокол № 165 от 29.06.2021"],
  [18, "19.03.2018", "Протокол № 168 от 20.09.2021"],
  [35, "23.01.2020", "Протокол № 175 от 02.03.2022"],
  [45, "27.01.2020", "Протокол № 175 от 02.03.2022"],
  [108, "04.03.2020", "Протокол № 175 от 02.03.2022"],
  [90, "20.07.2021", null],
  [8, "16.09.2021", null],
  [131, "12.12.2021", null],
  [103, "24.02.2022", null],
];

const ParkingPage: FC<{}> = ({}) => {
  return (
    <Layout heading="Парковка">
      <Flex justify="left" gap="12px">
        <img src="./parking/schema.jpg" height="auto" width="400px" />
        <img src="./parking/view.jpg" height="auto" width="400px" />
      </Flex>
      <Flex justify="left">
        <TableContainer width="812px">
          <Table size="sm" style={{ marginTop: "6px" }}>
            <Thead>
              <Tr>
                <Th width="5%">№</Th>
                <Th width="10%">№ квартиры</Th>
                <Th width="20%">Дата подачи завяления</Th>
                <Th>Решение правления о выделении места</Th>
              </Tr>
            </Thead>
            <Tbody>
              {rows.map(([kv, date, doc], i) => {
                return (
                  <Tr key={i}>
                    <Td>{i}</Td>
                    <Td>{kv}</Td>
                    <Td>{date}</Td>
                    <Td>{doc}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Layout>
  );
};

export default ParkingPage;
