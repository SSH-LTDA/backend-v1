/*
  Warnings:

  - You are about to drop the column `size` on the `Accommodation` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Booking` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[checkInDate,accommodationId]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `beds` to the `Accommodation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Accommodation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Accommodation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `checkInDate` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `checkOutDate` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Booking_date_accommodationId_key";

-- AlterTable
ALTER TABLE "Accommodation" DROP COLUMN "size",
ADD COLUMN     "beds" INTEGER NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "date",
ADD COLUMN     "checkInDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "checkOutDate" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Booking_checkInDate_accommodationId_key" ON "Booking"("checkInDate", "accommodationId");
