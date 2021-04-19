import React from 'react';
import { Heading, Box, Text, Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { FastFeedbackIcon } from '@/public/icons';
import DashboardShell from './DashboardShell';

const FreePlanEmptyState = () => (
  //   <ChakraProvider resetCSS>
  <DashboardShell>
    <Box width="100%" backgroundColor="white" borderRadius="8px" p={8}>
      <Heading>Get feedback on yours site instantly.</Heading>
      <Text>Start today, then grow with us</Text>
      <Button variant="solid" size="md">
        Upgrade to Starter
      </Button>
    </Box>
  </DashboardShell>
  //   </ChakraProvider>
);

export default FreePlanEmptyState;
