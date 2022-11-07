import React, { useState } from 'react';

export function useCount(count: number) {
  const [state, setCount] = useState(count);

  return [state, setCount];
}
