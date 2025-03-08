/*
  Warnings:

  - You are about to drop the `ContactForm` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ContactForm";

-- CreateTable
CREATE TABLE "SampleModel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "SampleModel_pkey" PRIMARY KEY ("id")
);
