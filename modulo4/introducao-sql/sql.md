CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

// 1. a)varchar em 'id, name e gender' por que é assim que se declara uma string. primary key para chave de identificação unica, not null para fixar como obrigatorio e não opcional e DATE para data.

b)Show databases' mostra a grid de databeses. 'Show tables' mostra as tabelas contidas no database.

c)Describe' mostra o conteúdo da tabela.

2.
a)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "female"
);

b) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'

é impedido de criar por causa que, uma entrada PRIMARY KEY ja existente.

c)Error Code: 1136. Column count doesn't match value count at row 1

todas informações necessarias terem sido passadas, não foram passadas respectivas colunas entre parenteses da primeira linha.

d)Error Code: 1364. Field 'name' doesn't have a default value

era esperado mais um campo de dado name para que um novo item na tabela actor fosse criado.

e)Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

date precisa ser uma string no formato YYYY-MM-DD 

f)

 INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);


// 3.

a) select * from Actor Where gender = "female"

b) select * from Actor WHERE name = "Tony Ramos";

c) pesquisa nao da erro, porem, nao encontra nenhum actor.

d)select id, name, salary from Actor WHERE salary < 500000;

e)Error Code: 1054. Unknown column 'nome' in 'field list'

nome da coluna nome nao existe, porque na criaçao da tabela foi utilizado 'name'


// 4.

a) procura na tabela criada, nome que inicia com a ou j e que receba um salario 300000

b) SELECT * FROM Actor
WHERE (name  NOT LIKE "A%" ) AND salary > 300000;

C)SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%");

d) SELECT * FROM Actor 
WHERE  ( 
(name LIKE "%a%" OR name  LIKE "A%") OR (name LIKE "%g%" OR name LIKE "G%") AND salary BETWEEN 350000  AND 900000);

//5.

a)CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsy TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating TINYINT NOT NULL
);

b)
INSERT INTO Actor (id, name, synopsy, release_date, rating)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"06/01/2006",
"7"
);

c)INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"27/12/2012",
"10"
);

d)

INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"02/11/2017",
"8"
);

e)

INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
"004",
"Lisbela e o Prisioneiro",
"A jovem Lisbela adora ir ao cinema e vive sonhando com os galãs de Hollywood dos filmes que assiste. Leléu é um malandro conquistador, que em meio a uma de suas muitas aventuras chega à cidade da moça. Após se conhecerem eles logo se apaixonam, mas Lisbela está de casamento marcado. Em meio às dúvidas e aos problemas familiares que a nova paixão desperta, há ainda a presença de um matador que está atrás de Leléu, devido a ele ter se envolvido com sua esposa no passado.",
"22/08/2003",
"9"
);






