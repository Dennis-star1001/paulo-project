import { MyCard } from '@/components/card';
import { Stack } from '@chakra-ui/react';

import gossipImage from '../../../src/assets/gossip-card.svg';

export const GossipPage = () => {
  return (
    <>
      <Stack spacing={14}>
        <MyCard
          imageUrl={gossipImage}
          autor='Posted By: Michael John'
          description='Sed elementum turpis netus maecenas et quis neque feugiat. Dolor purus egestas hac adipiscing mauris convallis sed. Mattis a rhoncus vulputate elit blandit egestas feugiat sed augue. Tempor commodo risus lacus nec purus dictum dolor.'
          date='Wed, Aug 24 2023 | 1:00pm GMT'
        />
        {/* 
        <MyCard
          imageUrl={gossipImage}
          autor='Posted By: Michael John'
          description='Sed elementum turpis netus maecenas et quis neque feugiat. Dolor purus egestas hac adipiscing mauris convallis sed. Mattis a rhoncus vulputate elit blandit egestas feugiat sed augue. Tempor commodo risus lacus nec purus dictum dolor.'
          date='Wed, Aug 24 2023 | 1:00pm GMT'
        />

        <MyCard
          imageUrl={gossipImage}
          autor='Posted By: Michael John'
          description='Sed elementum turpis netus maecenas et quis neque feugiat. Dolor purus egestas hac adipiscing mauris convallis sed. Mattis a rhoncus vulputate elit blandit egestas feugiat sed augue. Tempor commodo risus lacus nec purus dictum dolor.'
          date='Wed, Aug 24 2023 | 1:00pm GMT'
        /> */}
      </Stack>
    </>
  );
};
