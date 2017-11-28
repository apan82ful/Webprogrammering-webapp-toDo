CREATE TABLE IF NOT EXISTS skivor(
  skivorArtikelNr INT NOT NULL AUTO_INCREMENT,
  skivorArtist VARCHAR(50),
  skivorTitle VARCHAR(50),
  skivorGenre VARCHAR(50),
  skivorPris INT,
  skivorRelease INT,
  skivorInStock BOOLEAN,
  PRIMARY KEY (skivorArtikelNr)
);

CREATE TABLE anstallda(
  anstalldaAnstallningsNr INT NOT NULL AUTO_INCREMENT,
  anstalldaNamn VARCHAR(50),
  anstalldaFodelseort VARCHAR(50),
  anstalldaTitel VARCHAR(50),
  anstalldaLon INT,
  anstalldaAnstallningsDatum DATE,
  PRIMARY KEY (anstalldaAnstallningsNr)
);





INSERT INTO anstallda(anstalldaNamn, anstalldaTitel, anstalldaLon, anstalldaAnstallningsDatum) VALUES
  ('Andreas', 'bs tekniker', 35000, '2011-10-18'),
  ('Johan', 'bollkalle', 1000, '2001-09-03'),
  ('Apan', 'kontoris', 22000, '2008-02-06');

INSERT INTO anstallda(anstalldaNamn, anstalldaTitel, anstalldaLon, anstalldaAnstallningsDatum) VALUES
  ('Judas', 'lärjunge', 5000, '1999-03-20');

INSERT INTO anstallda(anstalldaNamn, anstalldaFodelseort, anstalldaTitel,  anstalldaLon, anstalldaAnstallningsDatum) VALUES
  ('Ap', 'goteborg', 'ntoris', 200, '2003-04-07');



INSERT INTO skivor(skivorArtist, skivorTitle, skivorGenre, skivorPris, skivorRelease, skivorInStock) VALUES
  ('brant bjork','saved by magic', 'stonerock', 199, 2001,TRUE ),
  ('graveyard','hisingen blues', 'rock', 149,2009, TRUE ),
  ('nirvana','unplugged in la', 'grunge', 99, 1991, FALSE ),
  ('fatso jetson', 'toasted', 'rock', 49, 2001, FALSE );


UPDATE anstallda
SET anstalldaFodelseort='molndal' WHERE anstalldaAnstallningsNr=3;


DELETE FROM anstallda WHERE anstalldaFodelseort = 'goteborg';

SELECT * FROM anstallda ;







-- 9. Skriv en SQL-fråga som hämtar alla anställda från tabellen ”anställda”, sorterat på
-- senast inlagd.

-- 10. Skriv en SQL-fråga som lägger till en ny anställd i tabellen ”anställda”.

-- 16

-- 11. Skriv en SQL-fråga som tar bort alla anställda från tabellen ”anställda” som bor i
-- Göteborg.

-- 12. Skriv en SQL-fråga som uppdaterar någon av kolumnerna för alla anställda som
-- är ”chefer”.

-- 13. Lägg till en ny kolumn med SQL i tabellen ”anställda”.

-- Fördjupning:
-- Skriv egna SQL-frågor kopplat till tabellerna vi har skapat. Försök att använda
-- samtliga delar vi har gått genom: SELECT, UPDATE, INSERT INTO, DELETE,
-- ALTER.