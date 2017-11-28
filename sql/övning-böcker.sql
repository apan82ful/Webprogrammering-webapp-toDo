CREATE TABLE amnesOmrade(
amnesOmradeAmneId INT NOT NULL AUTO_INCREMENT,
amnesOmradeAmneNamn VARCHAR(50),
  PRIMARY KEY (amnesOmradeAmneId)
);

CREATE TABLE bocker(
  bockerBokId INT NOT NULL AUTO_INCREMENT,
  bockerBokNamn VARCHAR(50),
  bockerAmneId INT,
  PRIMARY KEY (bockerBokId),
  FOREIGN KEY (bockerAmneId) REFERENCES amnesOmrade(amnesOmradeAmneId)
);

CREATE TABLE avdelning(
  avdelningID INT NOT NULL AUTO_INCREMENT,
  avdelningNamn VARCHAR(50),
  PRIMARY KEY (avdelningID)
);

CREATE TABLE anstallda(
  anstalldId INT NOT NULL AUTO_INCREMENT,
  anstalldaNamn VARCHAR(50),
  anstalldaAvdelningId INT,
  PRIMARY KEY (anstalldId),
  FOREIGN KEY (anstalldaAvdelningId) REFERENCES avdelning(avdelningID)
);

CREATE TABLE lanar(
  lanarUtlanId INT NOT NULL AUTO_INCREMENT,
  lanarUtlanBokId INT,
  lanarUtlanAnstalldId INT,
  lanarUtlanDatum DATE,
  lanarTillbakaDatum DATE,
  PRIMARY KEY (lanarUtlanId),
  FOREIGN KEY (lanarUtlanAnstalldId) REFERENCES anstallda(anstalldId),
  FOREIGN KEY (lanarUtlanBokId) REFERENCES bocker(bockerBokId)
);

INSERT INTO amnesOmrade(amnesOmradeAmneNamn)VALUES ('java'),('html'),('javascript'),('css');
SELECT * FROM amnesOmrade;

INSERT INTO bocker(bockerBokNamn, bockerAmneId) VALUES
  ('beginners guide for java',1),
  ('html boken',2),
  ('scriptboken',3),
  ('advanced guide for java',1),
  ('html advanced',2),
  ('scriptboken 2',3),
  ('super advanced guide for java',1),
  ('cssboken',4),
  ('cssboken 2',4);

SELECT * FROM bocker;

INSERT INTO avdelning (avdelningNamn) VALUES
  ('itavdelning'),
  ('supportavdelning'),
  ('saljavdelning'),
  ('teknikeravdelning');

SELECT * FROM avdelning;

INSERT INTO anstallda (anstalldaNamn, anstalldaAvdelningId) VALUES
  ('andreas',2),
  ('johan',3),
  ('mikael',4),
  ('daniel',1),
  ('lisa',1),
  ('emelie',2),
  ('emma',3);

SELECT * FROM anstallda;

INSERT INTO lanar (lanarUtlanBokId, lanarUtlanAnstalldId, lanarUtlanDatum, lanarTillbakaDatum) VALUES
  (1,1,'2017-11-14','2017-11-30'),
  (4,3,'2017-11-10','2017-11-20');

SELECT * FROM lanar;

SELECT bockerBokNamn, lanarUtlanDatum, lanarTillbakaDatum, anstalldaNamn FROM bocker
INNER JOIN lanar ON bocker.bockerBokId = lanar.lanarUtlanBokId
INNER JOIN anstallda ON lanar.lanarUtlanAnstalldId = anstallda.anstalldId;

SELECT bockerBokNamn, lanarUtlanDatum, lanarTillbakaDatum, anstalldaNamn, avdelningNamn FROM bocker
INNER JOIN lanar ON bocker.bockerBokId = lanar.lanarUtlanBokId
INNER JOIN anstallda ON lanar.lanarUtlanAnstalldId = anstallda.anstalldId
INNER JOIN avdelning ON anstallda.anstalldaAvdelningId = avdelning.avdelningID;

SELECT bockerBokNamn, lanarUtlanDatum, lanarTillbakaDatum, anstalldaNamn, avdelningNamn FROM bocker
INNER JOIN lanar ON bocker.bockerBokId = lanar.lanarUtlanBokId
INNER JOIN anstallda ON lanar.lanarUtlanAnstalldId = anstallda.anstalldId
INNER JOIN avdelning ON anstallda.anstalldaAvdelningId = avdelning.avdelningID
WHERE lanarTillbakaDatum > Now();

SELECT bockerBokNamn






