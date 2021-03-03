import React from 'react';
import { Box, Skeleton, Flex, Link } from '@chakra-ui/react';
import { Table, Tr, Th, Td } from './Table';
import { SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import SiteTableSkeleton from './SiteTableSkeleton';
import { format, parseISO } from 'date-fns';
import NextLink from 'next/link';

const SiteTable = ({ sites }) => {
  return (
    <Flex
      width="100%"
      backgroundColor="white"
      borderRadius="8px"
      p={16}
      justify="center"
      align="center"
      direction="column"
    >
      <Table>
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Site Link</Th>
            <Th>Feedback Link</Th>
            <Th>Date Added</Th>
            <Th>{''}</Th>
          </Tr>
        </thead>
        <tbody>
          {sites.map((site) => (
            <Box as="tr" key={site.url}>
              <Td fontWeight="bold">{site.name}</Td>
              <Td>
                <Link href={site.url} isExternal>
                  {site.url}
                </Link>
              </Td>
              <Td>
                <NextLink href="/p/[siteId]" as={`/p/${site.id}`} passHref>
                  <Link color="blue.500" fontWeight="medium">
                    View Feedback
                  </Link>
                </NextLink>
              </Td>
              <Td>{format(parseISO(site.createdAt), 'PPpp')}</Td>
            </Box>
          ))}
        </tbody>
      </Table>
    </Flex>
  );
};

export default SiteTable;
