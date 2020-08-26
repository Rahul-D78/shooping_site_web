# Preparing the database

Do the following as root

```sql
create database shopdb; 
create user shopper identified by 'shopps';
use shopdb;
grant all privileges on shopdb to shopper;
grant all privileges on shopdb.* to shopper;
```