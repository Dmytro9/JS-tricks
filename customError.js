const errors = [
  {
    field: 'email',
    message: 'Must be valid email'
  },
  {
    field: 'password',
    message: 'Must be at least 4 characters'
  }
];

const error = new Error('Something went wrong');
error.reason = errors;
throw error;
