DROP DATABASE IF EXISTS db;

CREATE DATABASE IF NOT EXISTS db;
USE db;
# -----------------------------------------------------------------------------
#       TABLE : ADMINISTRATEUR
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS ADMINISTRATEUR
 (
   IDUSER INTEGER(2) NOT NULL  ,
   NOM CHAR(32) NULL  ,
   PRENOM CHAR(32) NULL  ,
   EMAIL CHAR(32) NULL  ,
   MDP CHAR(32) NULL  ,
   DATE_NAISS DATE NULL  ,
   SEXE CHAR(32) NULL  
   , PRIMARY KEY (IDUSER) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : UTILISATEUR
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS UTILISATEUR
 (
   IDUSER INTEGER(2) NOT NULL  ,
   NOM CHAR(32) NULL  ,
   PRENOM CHAR(32) NULL  ,
   EMAIL CHAR(32) NULL  ,
   MDP CHAR(32) NULL  ,
   DATE_NAISS DATE NULL  ,
   SEXE CHAR(32) NULL  
   , PRIMARY KEY (IDUSER) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : ENFANT
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS ENFANT
 (
   IDUSER INTEGER(2) NOT NULL  ,
   IDUSER_1 INTEGER(2) NOT NULL  ,
   NOM CHAR(32) NULL  ,
   PRENOM CHAR(32) NULL  ,
   EMAIL CHAR(32) NULL  ,
   MDP CHAR(32) NULL  ,
   DATE_NAISS DATE NULL  ,
   SEXE CHAR(32) NULL  
   , PRIMARY KEY (IDUSER) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE ENFANT
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_ENFANT_TUTEUR
     ON ENFANT (IDUSER_1 ASC);

# -----------------------------------------------------------------------------
#       TABLE : CONTENUAUDIO
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS CONTENUAUDIO
 (
   IDAUDIO INTEGER(2) NOT NULL  ,
   NOM CHAR(32) NULL  ,
   URL CHAR(32) NULL  ,
   COVER CHAR(32) NULL  ,
   TIME DECIMAL(10,2) NULL  ,
   TYPE CHAR(32) NULL  ,
   CREATEDAT DATE NULL  ,
   UPDATEDAT DATE NULL  
   , PRIMARY KEY (IDAUDIO) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : TUTEUR
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS TUTEUR
 (
   IDUSER INTEGER(2) NOT NULL  ,
   NOM CHAR(32) NULL  ,
   PRENOM CHAR(32) NULL  ,
   EMAIL CHAR(32) NULL  ,
   MDP CHAR(32) NULL  ,
   DATE_NAISS DATE NULL  ,
   SEXE CHAR(32) NULL  
   , PRIMARY KEY (IDUSER) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : ABONNEMENT
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS ABONNEMENT
 (
   IDCARTE INTEGER(2) NOT NULL  ,
   TOKEN CHAR(32) NULL  ,
   DEFAULTS CHAR(32) NULL , 
   PRIMARY KEY (IDCARTE) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       TABLE : ECOUTER
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS ECOUTER
 (
   IDAUDIO INTEGER(2) NOT NULL  ,
   IDUSER INTEGER(2) NOT NULL  
   , PRIMARY KEY (IDAUDIO,IDUSER) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE ECOUTER
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_ECOUTER_CONTENUAUDIO
     ON ECOUTER (IDAUDIO ASC);

CREATE  INDEX I_FK_ECOUTER_ENFANT
     ON ECOUTER (IDUSER ASC);

# -----------------------------------------------------------------------------
#       TABLE : PAYER
# -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS PAYER
 (
   IDUSER INTEGER(2) NOT NULL  ,
   IDCARTE INTEGER(2) NOT NULL  ,
   IDAUDIO INTEGER(2) NOT NULL  ,
   DATEPAIEMENT DATE NULL  ,
   MONTANT_HT DECIMAL(10,2) NULL  ,
   MONTANT_TTC DECIMAL(10,2) NULL  ,
   SOURCE CHAR(32) NULL  ,
   CREATEDAT DATE NULL  ,
   UPDATEDAT DATE NULL  
   , PRIMARY KEY (IDUSER,IDCARTE,IDAUDIO) 
 ) 
 comment = "";

# -----------------------------------------------------------------------------
#       INDEX DE LA TABLE PAYER
# -----------------------------------------------------------------------------


CREATE  INDEX I_FK_PAYER_TUTEUR
     ON PAYER (IDUSER ASC);

CREATE  INDEX I_FK_PAYER_ABONNEMENT
     ON PAYER (IDCARTE ASC);

CREATE  INDEX I_FK_PAYER_CONTENUAUDIO
     ON PAYER (IDAUDIO ASC);


# -----------------------------------------------------------------------------
#       CREATION DES REFERENCES DE TABLE
# -----------------------------------------------------------------------------


ALTER TABLE ADMINISTRATEUR 
  ADD FOREIGN KEY FK_ADMINISTRATEUR_UTILISATEUR (IDUSER)
      REFERENCES UTILISATEUR (IDUSER) ;


ALTER TABLE ENFANT 
  ADD FOREIGN KEY FK_ENFANT_TUTEUR (IDUSER_1)
      REFERENCES TUTEUR (IDUSER) ;


ALTER TABLE ENFANT 
  ADD FOREIGN KEY FK_ENFANT_UTILISATEUR (IDUSER)
      REFERENCES UTILISATEUR (IDUSER) ;


ALTER TABLE TUTEUR 
  ADD FOREIGN KEY FK_TUTEUR_UTILISATEUR (IDUSER)
      REFERENCES UTILISATEUR (IDUSER) ;


ALTER TABLE ECOUTER 
  ADD FOREIGN KEY FK_ECOUTER_CONTENUAUDIO (IDAUDIO)
      REFERENCES CONTENUAUDIO (IDAUDIO) ;


ALTER TABLE ECOUTER 
  ADD FOREIGN KEY FK_ECOUTER_ENFANT (IDUSER)
      REFERENCES ENFANT (IDUSER) ;


ALTER TABLE PAYER 
  ADD FOREIGN KEY FK_PAYER_TUTEUR (IDUSER)
      REFERENCES TUTEUR (IDUSER) ;


ALTER TABLE PAYER 
  ADD FOREIGN KEY FK_PAYER_ABONNEMENT (IDCARTE)
      REFERENCES ABONNEMENT (IDCARTE) ;


ALTER TABLE PAYER 
  ADD FOREIGN KEY FK_PAYER_CONTENUAUDIO (IDAUDIO)
      REFERENCES CONTENUAUDIO (IDAUDIO) ;

