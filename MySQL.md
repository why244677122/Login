​:shit:​  ​:pig:​ ​ ​:dog:​  

| MySQL语句            | 内容                                       |
| ------------------ | ---------------------------------------- |
| 1.创建一个数据库MYSQLDATA | CREATE DATABASE MYSQLDATA                |
| 2.选择你所创建的数据库       | USE MYSQLDATA                            |
| 3.查看现在的数据库中存在什么表   | SHOW TABLES                              |
| 4.创建一个数据库表         | CREATE TABLE MYTABLE (name VARCHAR(20), sex CHAR(1)) |
| 5.显示结构             | DESCRIBE MYTABLE                         |
| 6.往表里添加内容          | INSERT INTO MYTABLE (`name`, `sex`) VALUES ("王","15") |
| 7.删表里中所有的数据,不删除表格  | SELECT * FROM `MYTABLE` WHERE            |
| 8.删表中的 符合条件的       | DELETE FROM user WHERE sex = "女" AND name > 8 |
| 9.查询表中所有内容         | [SELECT](http://localhost/phpmyadmin/url.php?url=http%3A%2F%2Fdev.mysql.com%2Fdoc%2Frefman%2F5.5%2Fen%2Fselect.html) * FROM MYTABLE |
| 10.修改表中内容          | UPDATE `MYTABLE` SET `name`="啊",`sex`="男" WHERE name = "啊" |

