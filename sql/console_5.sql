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

CREATE TABLE lanar(
  lanarBokId INT,
  lanarAnställdId INT,
  lanarLanar DATE,
  
)