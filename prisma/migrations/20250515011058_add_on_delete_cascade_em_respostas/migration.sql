-- DropForeignKey
ALTER TABLE "Respostas" DROP CONSTRAINT "Respostas_chamadoId_fkey";

-- AddForeignKey
ALTER TABLE "Respostas" ADD CONSTRAINT "Respostas_chamadoId_fkey" FOREIGN KEY ("chamadoId") REFERENCES "Chamados"("id") ON DELETE CASCADE ON UPDATE CASCADE;
