
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'SQL Sprint Challenge', description: 'Lorem Ipsum'},
        {name: 'React Sprint Challenge', description: 'Lorem Ipsum'}
      ]);
   
};
