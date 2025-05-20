/*
  Warnings:

  - You are about to drop the column `data_criacao` on the `Chamados` table. All the data in the column will be lost.
  - You are about to drop the column `usuario_Id` on the `Chamados` table. All the data in the column will be lost.
  - You are about to drop the column `chamado_Id` on the `Respostas` table. All the data in the column will be lost.
  - You are about to drop the column `data_envio` on the `Respostas` table. All the data in the column will be lost.
  - You are about to drop the column `usuario_Id` on the `Respostas` table. All the data in the column will be lost.
  - Added the required column `usuarioId` to the `Chamados` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chamadoId` to the `Respostas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `Respostas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Chamados" DROP CONSTRAINT "Chamados_usuario_Id_fkey";

-- DropForeignKey
ALTER TABLE "Respostas" DROP CONSTRAINT "Respostas_chamado_Id_fkey";

-- DropForeignKey
ALTER TABLE "Respostas" DROP CONSTRAINT "Respostas_usuario_Id_fkey";

-- AlterTable
ALTER TABLE "Chamados" DROP COLUMN "data_criacao",
DROP COLUMN "usuario_Id",
ADD COLUMN     "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "usuarioId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Respostas" DROP COLUMN "chamado_Id",
DROP COLUMN "data_envio",
DROP COLUMN "usuario_Id",
ADD COLUMN     "chamadoId" TEXT NOT NULL,
ADD COLUMN     "dataEnvio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "usuarioId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Chamados" ADD CONSTRAINT "Chamados_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Respostas" ADD CONSTRAINT "Respostas_chamadoId_fkey" FOREIGN KEY ("chamadoId") REFERENCES "Chamados"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Respostas" ADD CONSTRAINT "Respostas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
