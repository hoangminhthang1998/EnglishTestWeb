const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: 'doing DIY' },
      'task-2': { id: 'task-2', content: 'making crafts' },
      'task-3': { id: 'task-3', content: 'playing beach game' },
      'task-4': { id: 'task-4', content: 'playing computer game' },
      'task-5': { id: 'task-5', content: 'playing football' },
      'task-6': { id: 'task-6', content: 'sing' },
      'task-7': { id: 'task-7', content: 'texting' },
      'task-8': { id: 'task-8', content: 'visiting museums' },
    },
    columns: {
      'column-1': { 
        id: 'column-1',
        title: 'sing',
        correctAnswer: ['task-6'],
        taskIds: [],
      },
      'column-2': { 
        id: 'column-2',
        title: 'visiting museums',
        correctAnswer: ['task-8'],
        taskIds: [],
      },
      'column-3': { 
        id: 'column-3',
        title: 'playing football',
        correctAnswer: ['task-5'],
        taskIds: [],
      },
      'column-4': { 
        id: 'column-4',
        title: 'playing computer game',
        correctAnswer: ['task-4'],
        taskIds: [],
      },
      'column-5': { 
        id: 'column-5',
        title: 'playing beach game',
        correctAnswer: ['task-3'],
        taskIds: [],
      },
      'column-6': {
        id: 'column-6',
        title: 'Chọn đáp án',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6', 'task-7', 'task-8'],
      },
    },
    // Facilitate reordering of the columnsq
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5'],
    columnAnswer: ['column-6']
  };
  
  export default initialData;
  