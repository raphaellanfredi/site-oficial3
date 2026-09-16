---
name: super-eva
description: Audita, corrige e replica o agente de IA do Captain (Eva/Chatwoot) em qualquer conta, via MCP. Use ao auditar o Captain de uma conta e as conversas que ele atendeu, ao depurar roteamento errado, handoff mudo, alucinação por exemplo vazado, negação de recurso ou promessa sem registro, ao corrigir description/instruction/guardrail/tools de cenário, e TAMBÉM ao replicar a configuração do Captain para uma conta nova — as três leis e os limites de API valem tanto para auditar quanto para montar do zero. Acione ao citar Captain, cenário do Captain, captain_assistants_playground, auditoria do agente, ou ao montar o Captain de um cliente novo.
---

# Super Eva — auditoria e replicação do Captain

O prompt completo, pronto para colar numa sessão conectada ao MCP da conta, está em
`references/auditoria-captain-prompt.md`. Ele tem 6 partes: as três leis do cenário,
os sete padrões de falha nas conversas, o checklist de 11 itens da configuração, a
bateria adversarial de 9 entradas, os limites de API que já custaram 422, e o formato
de entrega.

**Ao replicar o Captain para uma conta nova**, use o mesmo arquivo de trás para frente:
as três leis viram regra de escrita dos cenários, o checklist de 11 itens vira critério
de aceite antes de entregar, e a bateria adversarial roda igual — a conta nova nasce
testada em vez de nascer para ser auditada daqui a um mês.

## Pré-requisito

Sessão conectada ao MCP da conta (ferramentas `captain_*`, `conversations_*`,
`kanban_tasks_*`, `help_center_*`). Sem elas não há auditoria: nem as conversas nem a
configuração são legíveis, e a bateria adversarial não roda. Confirme a conexão antes
de começar; se não houver, diga isso em vez de auditar de memória.

## Três regras que valem em toda sessão desta skill

1. **Regra de ouro — audite e proponha, aplique só com aval.** A conta é de um cliente.
   Exceção única, e urgente: remover dado real de cliente de dentro de um exemplo do
   prompt pode ser aplicado na hora, avisando em seguida.

2. **O playground executa de verdade.** `captain_assistants_playground` aplica etiqueta,
   muda prioridade e **cria card real** — um teste de emergência já criou card com
   `invoked_mcp_tools: 3`. Depois da bateria, liste o que foi criado e limpe. `Net::ReadTimeout`
   é para repetir a chamada, não para mudar o cenário.

3. **Não declare pronto sem re-testar.** Cada correção volta para a mesma entrada da
   bateria antes de passar para a próxima. E diga explicitamente o que o playground
   **não** valida — criação de card, por exemplo, depende de conversa real.

## As três leis, em uma linha cada

- **LEI 1** — `description` é roteador (lida sozinha, antes do cenário; lista densa de
  gatilhos com as palavras do cliente, máx. 500 caracteres); `instruction` é roteiro.
- **LEI 2** — o exemplo pesa mais que a regra: nunca dado real de cliente num exemplo,
  e ao depurar leia primeiro os exemplos.
- **LEI 3** — guardrail restringe fala, cenário dispara ferramenta: ação obrigatória em
  guardrail não acontece.

Os casos concretos que provaram cada uma estão na Parte 1 do arquivo de referência — leia
com eles ao lado, porque a lei sozinha não impediu nem quem a descobriu de repetir o erro.
