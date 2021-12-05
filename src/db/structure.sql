CREATE EXTENSION "pgcrypto";
CREATE OR REPLACE FUNCTION SYSTEM_TIMEZONE() RETURNS varchar(64) LANGUAGE SQL AS $$ SELECT "timezone" FROM SystemStatus; $$;
CREATE OR REPLACE FUNCTION TICKET_CODE( ipurposeId uuid ) RETURNS bigint LANGUAGE SQL AS $$ SELECT COUNT( id ) FROM Ticket WHERE "issuanceDate" = CAST( CURRENT_DATE AT TIME ZONE( SYSTEM_TIMEZONE() ) AS date ) AND "purposeId" = ipurposeId; $$;

CREATE TABLE SystemUser (
    "id" uuid DEFAULT gen_random_uuid() NOT NULL,
    "username" VARCHAR(64) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "role" VARCHAR(32) DEFAULT 'USER'
);
ALTER TABLE SystemUser ADD CONSTRAINT pkSystemUser PRIMARY KEY ( "id" );
CREATE UNIQUE INDEX iSystemUserUsername ON SystemUser( "username" );

CREATE TABLE AdminUser (
    "id" uuid DEFAULT gen_random_uuid() NOT NULL,
    "userId" uuid NOT NULL,
    "name" VARCHAR(255) NOT NULL
);
ALTER TABLE AdminUser ADD CONSTRAINT pkAdminUser PRIMARY KEY ( "id" );
ALTER TABLE AdminUser ADD CONSTRAINT fkAdminUserSystemUserId FOREIGN KEY ( "userId" ) REFERENCES  SystemUser( "id" ) ON DELETE CASCADE;

CREATE TABLE SystemStatus (
    "id" uuid DEFAULT gen_random_uuid() NOT NULL,
    "status" VARCHAR(64) DEFAULT 'off',
    "startDate" date DEFAULT '2000-01-01',
    "endDate" date DEFAULT '2100-01-01',
    "startTime" time DEFAULT '00:00:00',
    "endTime" time DEFAULT '24:00:00',
    "timezone" varchar(64) DEFAULT 'Asia/Novosibirsk'
);
ALTER TABLE SystemStatus ADD CONSTRAINT pkSystemStatus PRIMARY KEY ( "id" );

CREATE TABLE SystemWindow (
    "id" uuid DEFAULT gen_random_uuid() NOT NULL,
    "name" VARCHAR(64)
);
ALTER TABLE SystemWindow ADD CONSTRAINT pkSystemWindow PRIMARY KEY ( "id" );
CREATE UNIQUE INDEX iSystemWindow ON SystemWindow( "name" );

CREATE TABLE Purpose (
    "id" uuid DEFAULT gen_random_uuid() NOT NULL,
    "name" VARCHAR(64),
    "prefix" VARCHAR(16)
);
ALTER TABLE Purpose ADD CONSTRAINT pkPurpose PRIMARY KEY ( "id" );
CREATE UNIQUE INDEX iPurposeName ON Purpose( "name" );
CREATE UNIQUE INDEX iPurposePrefix ON Purpose( "prefix" );

CREATE TABLE SystemWindowPurpose (
    "id" uuid DEFAULT gen_random_uuid() NOT NULL,
    "windowId" uuid NOT NULL,
    "purposeId" uuid NOT NULL
);
ALTER TABLE SystemWindowPurpose ADD CONSTRAINT pkSystemWindowPurpose PRIMARY KEY ( "id" );
ALTER TABLE SystemWindowPurpose ADD CONSTRAINT fkSystemWindowPurposeSystemWindowId FOREIGN KEY ( "windowId" ) REFERENCES  SystemWindow( "id" ) ON DELETE CASCADE;
ALTER TABLE SystemWindowPurpose ADD CONSTRAINT fkSystemWindowPurposePurposeId FOREIGN KEY ( "purposeId" ) REFERENCES  Purpose( "id" ) ON DELETE CASCADE;
CREATE UNIQUE INDEX windowIdPurposeId ON SystemWindowPurpose ("windowId", "purposeId");

CREATE TABLE Session (
    "id" uuid DEFAULT gen_random_uuid() NOT NULL,
    "userId" uuid NOT NULL,
    "token" VARCHAR(64) NOT NULL,
    "ip" VARCHAR(64) NOT NULL
);
ALTER TABLE Session ADD CONSTRAINT pkSession PRIMARY KEY ( "id" );
ALTER TABLE Session ADD CONSTRAINT fkSessionSystemUserUserId FOREIGN KEY ( "userId" ) REFERENCES  SystemUser( "id" ) ON DELETE CASCADE;
CREATE UNIQUE INDEX iSession ON Session ( "token" );

CREATE TABLE WorkerStatus (
    "id" uuid DEFAULT gen_random_uuid() NOT NULL,
    "name" VARCHAR(64) NOT NULL
);

ALTER TABLE WorkerStatus ADD CONSTRAINT pkWorkerStatus PRIMARY KEY ( "id" );

CREATE TABLE TicketStatus (
    "id" uuid DEFAULT gen_random_uuid() NOT NULL,
    "name" VARCHAR(64) NOT NULL
);

ALTER TABLE TicketStatus ADD CONSTRAINT pkTicketStatus PRIMARY KEY ( "id" );

CREATE TABLE FieldType (
    "id" uuid DEFAULT gen_random_uuid() NOT NULL,
    "name" VARCHAR(64) NOT NULL
);

ALTER TABLE FieldType ADD CONSTRAINT pkFieldType PRIMARY KEY ( "id" );

CREATE TABLE Worker (
    "id" uuid DEFAULT gen_random_uuid() NOT NULL,
    "userId" uuid NOT NULL,
    "statusId" uuid NOT NULL,
    "windowId" uuid,
    "name" VARCHAR(255) NOT NULL
);

ALTER TABLE Worker ADD CONSTRAINT pkWorker PRIMARY KEY ( "id" );
ALTER TABLE Worker ADD CONSTRAINT fkWorkerSystemWindowWindowId FOREIGN KEY ( "windowId" ) REFERENCES  SystemWindow( "id" );
ALTER TABLE Worker ADD CONSTRAINT fkWorkerSystemUserUserId FOREIGN KEY ( "userId" ) REFERENCES  SystemUser( "id" ) ON DELETE CASCADE;
ALTER TABLE Worker ADD CONSTRAINT fkWorkerWorkerStatusStatusId FOREIGN KEY ( "statusId" ) REFERENCES  WorkerStatus( "id" );

CREATE TABLE Ticket (
    "id" uuid DEFAULT gen_random_uuid() NOT NULL,
    "workerId" uuid,
    "statusId" uuid NOT NULL,
    "purposeId" uuid NOT NULL,
    "codePrefix" VARCHAR(16)  NOT NULL,
    "codeNumber" INTEGER NOT NULL,
    "issuanceDate" date DEFAULT CURRENT_DATE AT TIME ZONE( SYSTEM_TIMEZONE() ),
    "serviceTime" time DEFAULT '00:00:00',
    "startServiceTime" time DEFAULT '00:00:00',
    "issuanceTime" time DEFAULT CURRENT_TIME( 0 ) AT TIME ZONE( SYSTEM_TIMEZONE() ),
    "waitingTime" time DEFAULT '00:00:00'
);

ALTER TABLE Ticket ADD CONSTRAINT pkTicket PRIMARY KEY ( "id" );
ALTER TABLE Ticket ADD CONSTRAINT fkTicketWorkerWorkerId FOREIGN KEY ( "workerId" ) REFERENCES  Worker( "id" ) ON DELETE CASCADE;
ALTER TABLE Ticket ADD CONSTRAINT fkTicketTicketStatusStatusId FOREIGN KEY ( "statusId" ) REFERENCES TicketStatus( "id" );

CREATE TABLE AdditionalField (
    "id" uuid DEFAULT gen_random_uuid() NOT NULL,
    "purposeId" uuid NOT NULL,
    "fieldTypeId" uuid NOT NULL,
    "name" VARCHAR(255) NOT NULL
);

ALTER TABLE AdditionalField ADD CONSTRAINT pkAdditionalField PRIMARY KEY ( "id" );
ALTER TABLE AdditionalField ADD CONSTRAINT fkAdditionalFieldPurposePurposeId FOREIGN KEY ( "purposeId" ) REFERENCES Purpose( "id" ) ON DELETE CASCADE;
ALTER TABLE AdditionalField ADD CONSTRAINT fkAdditionalFieldFieldTypeFieldTypeId FOREIGN KEY ( "fieldTypeId" ) REFERENCES FieldType( "id" ) ON DELETE CASCADE;

INSERT INTO WorkerStatus (name) VALUES ('work');
INSERT INTO WorkerStatus (name) VALUES ('break');
INSERT INTO WorkerStatus (name) VALUES ('not work');

INSERT INTO TicketStatus (name) VALUES ('wait');
INSERT INTO TicketStatus (name) VALUES ('served');
INSERT INTO TicketStatus (name) VALUES ('serving');
INSERT INTO TicketStatus (name) VALUES ('called');
INSERT INTO TicketStatus (name) VALUES ('absent');

INSERT INTO FieldType (name) VALUES ('text');
INSERT INTO FieldType (name) VALUES ('number');
