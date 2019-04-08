
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'Create a Server', notes: 'Lorem', project_id: 1},
        {description: 'Make the code look Clean', notes: 'Ipsum', project_id: 1},
        {description: 'Create a React App', notes: 'Lorem', project_id: 2},
        {description: 'Make all the Axios calls', notes: 'Ipsum', project_id: 2}
      ]);
   
};
