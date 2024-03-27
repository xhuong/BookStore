/*
  Warnings:

  - You are about to drop the column `order_id` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `payment_date_time` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `payment_status` on the `Payment` table. All the data in the column will be lost.
  - The values [AMDIN] on the enum `Role_value` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[isbn]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[payment_id]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `payment_id` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payment_name` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Payment` DROP FOREIGN KEY `Payment_order_id_fkey`;

-- AlterTable
ALTER TABLE `Order` ADD COLUMN `payment_id` INTEGER NOT NULL,
    MODIFY `order_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `discount_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `Payment` DROP COLUMN `order_id`,
    DROP COLUMN `payment_date_time`,
    DROP COLUMN `payment_status`,
    ADD COLUMN `payment_name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Role` MODIFY `value` ENUM('ADMIN', 'CUSTOMER') NOT NULL DEFAULT 'CUSTOMER';

-- CreateIndex
CREATE UNIQUE INDEX `Book_isbn_key` ON `Book`(`isbn`);

-- CreateIndex
CREATE UNIQUE INDEX `Order_payment_id_key` ON `Order`(`payment_id`);

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_payment_id_fkey` FOREIGN KEY (`payment_id`) REFERENCES `Payment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
