import { useState } from 'react';
import { Skeleton, Button } from '@mantine/core';

export default function SkeletonBox() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Skeleton className='skeleton' visible={loading} >
      </Skeleton>
    </>
  );
}