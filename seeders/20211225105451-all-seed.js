'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users',[{
        id:1,
        name:'admin',
        surname:'admin',
        username:'admin',
        password: bcrypt.hashSync('admin',10),
        email:'admin@raf.rs',
        gender:'Male',
        isAdmin:true,
        isModerator:true,
        createdAt: new Date(),
        updatedAt: new Date()

    },{
        id:2,
        name:'moderator',
        surname:'moderator',
        username:'moderator',
        password: bcrypt.hashSync('moderator',10),
        email:'moderator@raf.rs',
        gender:'Female',
        isAdmin:false,
        isModerator:true,
        createdAt: new Date(),
        updatedAt: new Date()

    },{
        id:3,
        name:'Marko',
        surname:'Markovic',
        username:'marko1',
        password: bcrypt.hashSync('password',10),
        email:'marko@gmail.com',
        gender:'Male',
        isAdmin:false,
        isModerator:false,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        id:4,
        name:'Jovana',
        surname:'Jovanovic',
        username:'jovana1',
        password: bcrypt.hashSync('password',10),
        email:'jovana@gmail.com',
        gender:'Female',
        isAdmin:false,
        isModerator:false,
        createdAt: new Date(),
        updatedAt: new Date()

    }],{});

    await queryInterface.bulkInsert('Activities', [{
            id:1,
            name:'Mladi odlučuju',
            organisation:'Youth Fest Novi Sad',
            description:`Youth Fest poziva volontere da anketiranjem mladih dostavljaju kratke izveštaje u formi bloga kojima bi nam odgovorili da li mladi učestvuju u donošenju odluka.`,
            time: "14:00",
            location:'Sentandrejski put 106b, Novi Sad',
            outdoor:true,
            date:"2022-3-1",
            createdAt: new Date(),
            updatedAt: new Date()
         },{
            id:2,
            name:'Čišćenje plaže Igalo',
            organisation:'Ne bacajmo boce',
            description:`Očistimo našu sredinu`,
            time: "10:00",
            location:'Plaža Igalo,hotel Palmon,Herceg Novi',
            outdoor:true,
            date:"2022-6-6",
            createdAt: new Date(),
            updatedAt: new Date()
         },{
            id:3,
            name:'Nek se čuje glas',
            organisation:`Okular`,
            description:'Pisanje članaka, blogova, beseda, intervjua, vesti i tekstova',
            time: "14:00",
            location:'Kralja Petra 23,Beograd',
            outdoor:false,
            date:"2022-4-15",
            createdAt: new Date(),
            updatedAt: new Date()
         }], {});

  },


  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Users', null, {


      });

      await queryInterface.bulkDelete('Activities', null, {


      });
  }
};
