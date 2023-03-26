-- CreateTable
CREATE TABLE "User" (
    "code" TEXT NOT NULL,
    "replied" BOOLEAN NOT NULL DEFAULT false,
    "monthly" BOOLEAN NOT NULL,
    "max_bid" INTEGER NOT NULL,
    "bid" INTEGER,
    "binding" BOOLEAN,

    CONSTRAINT "User_pkey" PRIMARY KEY ("code")
);
