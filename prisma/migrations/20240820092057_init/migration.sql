-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "aadhaarNo" TEXT NOT NULL,
    "voterId" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "contactNo" TEXT,
    "email" TEXT,
    "address" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "hashedPassword" TEXT
);
INSERT INTO "new_User" ("aadhaarNo", "address", "contactNo", "createdAt", "email", "firstName", "hashedPassword", "id", "lastName", "updatedAt", "voterId") SELECT "aadhaarNo", "address", "contactNo", "createdAt", "email", "firstName", "hashedPassword", "id", "lastName", "updatedAt", "voterId" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_aadhaarNo_key" ON "User"("aadhaarNo");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
