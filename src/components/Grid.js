import React from 'react';
import createAbosluteGrid from './lib/AbsoluteGrid.jsx';

// This is the component that will display your data
import DataCard from './DataCard';

 var sampleItems = [
  {key: 1, name: 'Test', sort: 0, filtered: 0},
  {key: 2, name: 'Test 1', sort: 1, filtered: 0},
];

// Pass your display component to create a new grid
const AbsoluteGrid = createAbsoluteGrid(DataCard);
React.render(<AbsoluteGrid items={sampleItems} />, document.getElementById('content'));