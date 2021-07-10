CREATE TABLE SystemUser (
    "id" TEXT NOT NULL,
    "username" VARCHAR(64) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(32) NOT NULL,
    "surname" VARCHAR(255),
    "name" VARCHAR(255),
    "patronymic" VARCHAR(255),
    "dateOfBirth" DATE,
    "city" VARCHAR(255),
    "registrationDate" DATE DEFAULT CURRENT_TIMESTAMP,
    "consentDataProcessing" BOOLEAN DEFAULT false,
    PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "SystemUser.username_unique" ON "SystemUser"("username");
CREATE UNIQUE INDEX "SystemUser.phone_unique" ON "SystemUser"("phone");
