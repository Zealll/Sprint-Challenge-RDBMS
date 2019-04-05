
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'Create a Server', notes: 'Lorem', project_id: 1, completed: false},
        {description: 'Make the code look Clean', notes: 'Ipsum', project_id: 1, completed: false},
        {description: 'Create a React App', notes: 'Lorem', project_id: 2, completed: false},
        {description: 'Make all the Axios calls', notes: 'Ipsum', project_id: 2, completed: false}
      ]);
   
};
