CREATE TABLE dator(
datorArtikelNr INT NOT NULL AUTO_INCREMENT,
datorFabrikat VARCHAR(50),
datorProcessorTyp VARCHAR(50),
datorHastighetGhz INT,
datorRam INT,
datorHarddiskStorlek INT,
PRIMARY KEY(datorArtikelNr)
);

INSERT INTO dator (datorFabrikat,datorProcessorTyp,datorHastighetGhz,datorRam,datorHarddiskStorlek)VALUES('macbook air','intel',300,8,30),
  ('HP','AMD',4000,2,50),
  ('HP','AMD',4000,10,50),
  ('CHROME','AMD',40,16,55);

SELECT * FROM dator WHERE datorHarddiskStorlek > 50;



