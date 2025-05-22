/*
  Warnings:

  - The `status` column on the `Chamados` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Aberto', 'EmAndamento', 'Concluido');

-- AlterTable
ALTER TABLE "Chamados" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'Aberto';
