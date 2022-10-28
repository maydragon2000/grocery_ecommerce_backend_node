const bcrypt = require('bcryptjs');
const users = [
  {
    name: 'Richard E. Romero',
    email: 'richard@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '828-896-3442',
  },
  {
    name: 'Brain H. Landry',
    email: 'brain@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '714-200-5488',
  },
  {
    name: 'Thomas',
    email: 'thomas@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '818-363-8091',
  },
  {
    name: 'Danielle R. Martin',
    email: 'danielle@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '831-539-6621',
  },

  {
    name: 'Linda',
    email: 'linda@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '801-844-8271',
  },
  {
    name: 'Eddie N. Garcia',
    email: 'eddie@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '917-313-4731',
  },
  {
    name: 'Williams',
    email: 'williams@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '714-776-3942',
  },
  {
    name: 'Gordon C. Lowery',
    email: 'gordon@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '858-243-0632',
  },
  {
    name: 'Lester J. Massey',
    email: 'lester@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '715-657-9865',
  },

  {
    name: 'Samuel',
    email: 'samuel@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '307-202-3590',
  },
  {
    name: 'Henry M. Koch',
    email: 'henry@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '912-587-2159',
  },
  {
    name: 'Kathryn J. Brown',
    email: 'kathryn@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '707-275-4858',
  },

  {
    name: 'Josephine M. Peel',
    email: 'josephine@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '734-256-1159',
  },
  {
    name: 'Justin J. Ruiz',
    email: 'justin@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '212-512-2888',
  },
  {
    name: 'Aurora E. Amerson',
    email: 'aurora@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '660-515-7629',
  },
  {
    name: 'Christopher M. Fox',
    email: 'christopher@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '812-886-0550',
  },

  {
    name: 'James J. Allen',
    email: 'james@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '818-356-8600',
  },
  {
    name: 'Hilary W. Becker',
    email: 'hilary@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '802-516-2269',
  },

  {
    name: 'Jon B. Krueger',
    email: 'jon@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '360-943-7332',
  },
  {
    name: 'Paul R. Bruns',
    email: 'paul@gmail.com',
    password: bcrypt.hashSync('12345678'),
    phone: '715-651-7487',
  },
];

module.exports = users;
