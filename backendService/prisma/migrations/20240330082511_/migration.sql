/*
  Warnings:

  - You are about to drop the column `end_date` on the `Discount` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `Discount` table. All the data in the column will be lost.
  - Added the required column `end_time` to the `Discount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_time` to the `Discount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Discount` DROP COLUMN `end_date`,
    DROP COLUMN `start_date`,
    ADD COLUMN `end_time` DATETIME(3) NOT NULL,
    ADD COLUMN `start_time` DATETIME(3) NOT NULL;
