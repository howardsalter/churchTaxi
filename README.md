# Church Taxi
Open Source Church Taxi application

Church Taxi is similar to Uber or Lyft only specifically for churches and no money involved … the core functionality will be around a google map showing people who need rides to church that are along a driver’s route to church

create /config/config.json using the following structure:
```
{
  "development": {
    "username": "root",
    "password": "",
    "database": "ct",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "",
    "database": "ct_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "",
    "database": "ct_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

When initially pulling the repository:
1) Go into the client directory
2) Run yarn install
3) cd ..
4) yarn install
5) yarn build
6) yarn start

