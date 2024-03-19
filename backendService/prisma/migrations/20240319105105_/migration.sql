/*
  Warnings:

  - The values [AMDIN] on the enum `Role_value` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Role` MODIFY `value` ENUM('ADMIN', 'CUSTOMER') NOT NULL DEFAULT 'CUSTOMER';
