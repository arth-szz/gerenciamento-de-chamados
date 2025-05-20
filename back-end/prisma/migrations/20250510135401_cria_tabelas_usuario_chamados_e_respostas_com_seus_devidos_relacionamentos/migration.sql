/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Usuarios" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "tipo_usuario" TEXT NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chamados" (
    "id" TEXT NOT NULL,
    "usuario_Id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Chamados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Respostas" (
    "id" TEXT NOT NULL,
    "chamado_Id" TEXT NOT NULL,
    "usuario_Id" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL,
    "data_envio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Respostas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Chamados" ADD CONSTRAINT "Chamados_usuario_Id_fkey" FOREIGN KEY ("usuario_Id") REFERENCES "Usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Respostas" ADD CONSTRAINT "Respostas_chamado_Id_fkey" FOREIGN KEY ("chamado_Id") REFERENCES "Chamados"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Respostas" ADD CONSTRAINT "Respostas_usuario_Id_fkey" FOREIGN KEY ("usuario_Id") REFERENCES "Usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
