Q:   Explain the difference between RDBMS and SQL
     
     A: Even tho RDBMS (Relational DataBase Management Systems) uses SQL in order to create a database, RDBMS allows us to
        use KNEX, whic gives us extra flexibility to play around with how our database will be created. It helps us manage/model our database, it's tables, and it's columns in much more detail than SQL alone does.




Q:   Why do tables need a Primary Key
     
     A: A number use for a Primary Key is, when creating an object, a Primary Key is     assigned to it, so that the object remains unique no matter how many of it's     columns share similarities with another ibject's columns. A Primary Key will 
        always be UNIQUE. Another use is, when we are trying to connect two or more tables together, we use Primary Keys as reference along with Foreign Keys 




Q:   What is the name given to a table column that references the primary key on           another table.
     
     A: Foreign Key





Q:   What do we need in order to have a many to many relationship between two tables.

     A: There are multiple ways to tackle a Many to Many relationship: 
            the Bridge Table,
            the Boolean Column,
            or the Multiple Column method,
        But all of them have the same concept. They have at least two columns that will be used as Foreign Key to connect to both tables, and will manage the table connections like a relay