import React, { FC } from "react";
import {
  Link,
  Table,
  TableContainer,
  Tbody,
  Td, Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import dayjs from "dayjs";
import { dateFormats } from "../../misc/dateformats";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { AllMarkdownRemark } from "../../types/AllMarkdownRemark";

const DocumentsTable: FC<{ data: AllMarkdownRemark }> = ({ data }) => {
  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th width="15%">Дата публикации</Th>
            <Th>Документ</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.allMarkdownRemark.edges.map(
            ({
              node: {
                id,
                frontmatter: { title, date, file },
              },
            }) => {
              const { publicURL } = file ?? {};
              return (
                <Tr key={id}>
                  <Td>{dayjs(date).format(dateFormats.DDMMYYYY)}</Td>
                  <Td>{title}</Td>
                  <Td>
                    {file ? (
                      <Link href={publicURL} target="_blank" isExternal={true}>
                        Скачать <ExternalLinkIcon />
                      </Link>
                    ) : (
                      <Text color='red'>ОТСУТСТВУЕТ</Text>
                    )}
                  </Td>
                </Tr>
              );
            }
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DocumentsTable;
