import React from 'react';
import NextLink from 'next/link';
import {
  ChakraProvider,
  Flex,
  Link,
  Stack,
  Avatar,
  Button,
  Icon
} from '@chakra-ui/react';
import { FastFeedbackIcon } from '@/public/icons';
import { useAuth } from '@/lib/auth';

const DashboardShell = ({ children }) => {
  const auth = useAuth();

  return (
    <ChakraProvider resetCSS>
      <Flex flexDirection="column">
        <Flex
          backgroundColor="white"
          alignItems="center"
          justifyContent="space-between"
          py={4}
          px={8}
        >
          <Stack
            spacing={4}
            isInline
            justifyContent="flex-start"
            alignItems="center"
          >
            <NextLink href="/" passHref>
              <Link>
                <FastFeedbackIcon color="black" name="logo" boxSize="32px" />
              </Link>
            </NextLink>
            <NextLink href="/dashboard" passHref>
              <Link mr={4}>Sites</Link>
            </NextLink>
            <NextLink href="/feedback" passHref>
              <Link>Feedback</Link>
            </NextLink>
          </Stack>
          <Flex alignItems="center">
            {auth.user && (
              <Button
                fontWeight="normal"
                variant="ghost"
                mr={2}
                onClick={() => auth.signout()}
              >
                Log out
              </Button>
            )}
            <Avatar size="sm" src={auth.user?.photoUrl} />
          </Flex>
        </Flex>
        <Flex backgroundColor="gray.50" p={8} height="100vh">
          <Flex margin="0 auto" direction="column" maxW="1250px" px={8}>
            {children}
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default DashboardShell;
