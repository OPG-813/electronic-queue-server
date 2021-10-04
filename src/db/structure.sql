CREATE TABLE SystemUser (
    "id" VARCHAR(64) NOT NULL,
    "username" VARCHAR(64) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "role" VARCHAR(32) DEFAULT 'USER'
);
ALTER TABLE SystemUser ADD CONSTRAINT pkSystemUser PRIMARY KEY ( "id" );
CREATE UNIQUE INDEX iSystemUserUsername ON SystemUser( "username" );

CREATE TABLE AdminUser (
    "id" VARCHAR(64) NOT NULL,
    "userId" VARCHAR(64) NOT NULL,
    "name" VARCHAR(255) NOT NULL
);
ALTER TABLE AdminUser ADD CONSTRAINT pkAdminUser PRIMARY KEY ( "id" );
ALTER TABLE AdminUser ADD CONSTRAINT fkAdminUserSystemUserId FOREIGN KEY ( "userId" ) REFERENCES  SystemUser( "id" ) ON DELETE CASCADE;

CREATE TABLE SystemStatus (
    "id" VARCHAR(64) NOT NULL,
    "status" VARCHAR(64) DEFAULT 'off',
    "startDate" date DEFAULT '2000-01-01',
    "endDate" date DEFAULT '2100-01-01',
    "startTime" time DEFAULT '00:00:00',
    "endTime" time DEFAULT '24:00:00',
    "timezone" varchar(64) DEFAULT 'Asia/Novosibirsk'
);
ALTER TABLE SystemStatus ADD CONSTRAINT pkSystemStatus PRIMARY KEY ( "id" );

CREATE TABLE SystemWindow (
    "id" VARCHAR(64) NOT NULL,
    "name" VARCHAR(64)
);
ALTER TABLE SystemWindow ADD CONSTRAINT pkSystemWindow PRIMARY KEY ( "id" );

CREATE TABLE Purpose (
    "id" VARCHAR(64) NOT NULL,
    "name" VARCHAR(64)
);
ALTER TABLE Purpose ADD CONSTRAINT pkPurpose PRIMARY KEY ( "id" );

CREATE TABLE SystemWindowPurpose (
    "id" VARCHAR(64) NOT NULL,
    "windowId" VARCHAR(64) NOT NULL,
    "purposeId" VARCHAR(64) NOT NULL
);
ALTER TABLE SystemWindowPurpose ADD CONSTRAINT pkSystemWindowPurpose PRIMARY KEY ( "id" );
ALTER TABLE SystemWindowPurpose ADD CONSTRAINT fkSystemWindowPurposeSystemWindowId FOREIGN KEY ( "windowId" ) REFERENCES  SystemWindow( "id" ) ON DELETE CASCADE;
ALTER TABLE SystemWindowPurpose ADD CONSTRAINT fkSystemWindowPurposePurposeId FOREIGN KEY ( "purposeId" ) REFERENCES  Purpose( "id" ) ON DELETE CASCADE;

CREATE TABLE Session (
    "id" VARCHAR(64) NOT NULL,
    "userId" VARCHAR(64) NOT NULL,
    "token" VARCHAR(64) NOT NULL,
    "ip" VARCHAR(64) NOT NULL
);
ALTER TABLE Session ADD CONSTRAINT pkSession PRIMARY KEY ( "id" );
ALTER TABLE Session ADD CONSTRAINT fkSessionSystemUserUserId FOREIGN KEY ( "userId" ) REFERENCES  SystemUser( "id" ) ON DELETE CASCADE;
CREATE UNIQUE INDEX iSession ON Session ( "token" );
