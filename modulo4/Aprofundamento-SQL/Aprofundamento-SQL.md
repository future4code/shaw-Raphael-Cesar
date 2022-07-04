1.
a) exclui uma coluna.
b) muda o nome da propriedade
c) muda o tipo da propriedade mas nao altera o nome.
d)

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

2.
a)

UPDATE Actor SET name = "Fiuk", 
birth_date = "1990-10-25"
WHERE id = "003";

b)
UPDATE Actor SET name = UPPER("Juliana Paes")
WHERE id = "005";

UPDATE Actor SET name = ("Juliana Paes")
WHERE id = "005";

c)

UPDATE Actor SET name = "gretchen", 
salary = 2000000,
birth_date = "1959-05-29",
gender = "female"
WHERE id = "005";

d)

nao muda nada na tabela ja que o dado nao pertence a tabela

UPDATE Actor SET name = "gretchen", 
salary = 2000000,
birth_date = "1959-05-29",
gender = "male"
WHERE id = "555";

3.

a)

DELETE FROM Actor WHERE name = "Fernanda Montinegro";

b)

DELETE FROM Actor WHERE (gender = "male") AND salary >1000000;

4.

a)

SELECT MAX(salary) from Actor;

b)

SELECT MIN(salary) FROM Actor WHERE gender = "female";

c)

SELECT COUNT(*) FROM Actor WHERE gender = "female";

d)

SELECT SUM(salary) FROM Actor;

5.

a)

Faz a contagem de cada sexo separadamente.

b)

SELECT id, name FROM Actor ORDER BY name DESC;

c)

SELECT * FROM Actor ORDER BY salary ASC;

d)

SELECT * FROM Actor ORDER BY salary ASC LIMIT 3;

e)

SELECT COUNT(*), AVG(salary), gender
FROM Actor
GROUP BY gender;

6.

a)

ALTER TABLE Movies ADD playing_limit_date DATE;

b)

ALTER TABLE Movies CHANGE rating rating FLOAT;

c)

UPDATE Movie SET playing_limit_date = "2020-05-27"
WHERE id = "001";

UPDATE Movie SET playing_limit_date = "2022-05-06"
WHERE id = "002";

d)


