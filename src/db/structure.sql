CREATE TABLE SystemUser (
    "id" TEXT NOT NULL,
    "username" VARCHAR(64) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(32) NOT NULL,
    "role" VARCHAR(32) DEFAULT 'USER',
    "surname" VARCHAR(255),
    "name" VARCHAR(255),
    "patronymic" VARCHAR(255),
    "dateOfBirth" DATE,
    "city" VARCHAR(255),
    "registrationDate" DATE DEFAULT CURRENT_DATE,
    "consentDataProcessing" BOOLEAN DEFAULT false
);
ALTER TABLE SystemUser ADD CONSTRAINT pkSystemUser PRIMARY KEY ( "id" );
CREATE UNIQUE INDEX iSystemUserUsername ON SystemUser( "username" );
CREATE UNIQUE INDEX iSystemUserPhone ON SystemUser( "phone" );
