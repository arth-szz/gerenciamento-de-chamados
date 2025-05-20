/*
  Warnings:

  - You are about to drop the column `tipo_usuario` on the `Usuarios` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Usuarios" DROP COLUMN "tipo_usuario",
ADD COLUMN     "ehAdm" BOOLEAN NOT NULL DEFAULT false;
