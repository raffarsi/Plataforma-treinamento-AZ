// ============================================================================
// AZ-900 Prep Hub — Laboratórios Práticos (js/labs.js)
// Dados puros (sem lógica de UI). Como a plataforma é 100% estática (sem
// backend), não é possível verificar programaticamente o que o aluno faz no
// portal real do Azure. Por isso, cada laboratório segue o formato:
//   1) Passos numerados e específicos, para o aluno executar em portal.azure.com
//   2) Um "quiz de verificação" ao final — perguntas que só quem realmente
//      navegou pelas telas do laboratório consegue responder com facilidade,
//      combinadas com 1 pergunta conceitual que reforça o domínio da AZ-900.
// Cada questão do quiz segue o mesmo padrão do banco principal: opts[4],
// correct (índice) e exp (explicação da resposta correta).
// ============================================================================

const LAB_BANK = [
{
  id: 1,
  icon: `📁`,
  title: `Criar um Grupo de Recursos`,
  domain: `Resource Groups`,
  objective: `Praticar a criação de um Grupo de Recursos, entendendo como o Azure organiza recursos relacionados sob o mesmo ciclo de vida.`,
  steps: [
    `Acesse portal.azure.com e faça login com sua conta Azure (gratuita ou de testes).`,
    `Na barra de busca superior, digite "Grupos de recursos" e selecione o serviço.`,
    `Clique em "+ Criar".`,
    `Selecione sua assinatura, digite um nome (ex.: rg-lab-az900) e escolha a região "Brazil South".`,
    `Clique em "Revisar + criar" e, depois de validado, clique em "Criar".`,
    `Aguarde a notificação de conclusão e clique em "Ir para o recurso" para ver o grupo criado.`
  ],
  quiz: [
    { q: `No formulário de criação de um Grupo de Recursos, quais campos são obrigatórios?`, opts: [`Assinatura, nome do grupo de recursos e região`, `Apenas o nome do grupo`, `Cartão de crédito e senha`, `Nome de usuário e domínio`], correct: 0, exp: `Todo Grupo de Recursos precisa estar associado a uma assinatura, ter um nome único dentro dela e uma região onde os metadados serão armazenados.` },
    { q: `Depois de criado, qual aba do Grupo de Recursos mostra todos os recursos contidos nele?`, opts: [`Visão geral (Overview)`, `Diagnosticar e solucionar problemas`, `Bloqueios`, `Política de conformidade`], correct: 0, exp: `A aba "Visão geral" lista todos os recursos atualmente contidos no Grupo de Recursos.` },
    { q: `Por que organizar os recursos deste laboratório em um Grupo de Recursos dedicado é uma boa prática?`, opts: [`Facilita excluir todos os recursos do laboratório de uma só vez, ao final`, `Aumenta a velocidade da internet`, `Reduz a criptografia dos dados`, `Impede qualquer acesso de outros usuários`], correct: 0, exp: `Manter tudo em um único Grupo de Recursos permite eliminar todo o laboratório com uma única exclusão, evitando esquecer recursos gerando custo.` }
  ]
},
{
  id: 2,
  icon: `🖥️`,
  title: `Criar uma Máquina Virtual gratuita`,
  domain: `Compute Services`,
  objective: `Provisionar (ou simular a criação até a etapa de revisão) de uma VM na camada gratuita B1s e entender as opções de configuração de computação.`,
  steps: [
    `No portal, pesquise por "Máquinas Virtuais" e clique em "+ Criar" > "Máquina virtual do Azure".`,
    `Selecione o Grupo de Recursos criado no Laboratório 1 (rg-lab-az900).`,
    `Dê um nome à VM (ex.: vm-lab-az900) e escolha a imagem (ex.: Ubuntu Server ou Windows Server).`,
    `Em "Tamanho", clique em "Ver todos os tamanhos" e procure por um tamanho da série B (ex.: B1s), associado à camada gratuita.`,
    `Configure a conta de administrador e o tipo de autenticação (senha ou chave SSH).`,
    `Em "Portas de entrada públicas", mantenha apenas a porta estritamente necessária (RDP ou SSH).`,
    `Clique em "Revisar + criar" e observe o resumo de preço estimado exibido antes de confirmar a criação.`
  ],
  quiz: [
    { q: `Qual série de VM costuma estar associada à camada gratuita/baixo custo do Azure?`, opts: [`Série B (burstable)`, `Série M (memória massiva)`, `Série N (GPU)`, `Série H (alto desempenho)`], correct: 0, exp: `VMs da série B são "burstable", com custo reduzido, ideais para cargas leves e para a camada gratuita do Azure.` },
    { q: `Na tela de revisão antes de criar a VM, o que o Azure exibe para ajudar na decisão de custo?`, opts: [`Uma estimativa de custo/preço da configuração escolhida`, `O código-fonte do sistema operacional`, `A lista de todos os usuários da assinatura`, `O histórico de logins da conta`], correct: 0, exp: `A tela de revisão mostra um resumo com o custo estimado da configuração selecionada, antes de qualquer cobrança real.` },
    { q: `Por que é importante restringir as portas de entrada públicas ao criar uma VM?`, opts: [`Para reduzir a superfície de ataque e aumentar a segurança`, `Para deixar a VM mais rápida`, `Para economizar armazenamento`, `Para trocar automaticamente de região`], correct: 0, exp: `Expor apenas as portas estritamente necessárias reduz os pontos de entrada disponíveis para possíveis ataques.` }
  ]
},
{
  id: 3,
  icon: `💾`,
  title: `Storage Account e upload de Blob`,
  domain: `Storage`,
  objective: `Criar uma conta de armazenamento, um contêiner de blobs, subir um arquivo de teste e comparar as camadas de acesso disponíveis.`,
  steps: [
    `Pesquise por "Contas de armazenamento" e clique em "+ Criar".`,
    `Selecione o grupo de recursos rg-lab-az900, dê um nome único à conta (ex.: stlabaz900xxxx) e escolha a região.`,
    `Em "Redundância", observe as opções (LRS, ZRS, GRS) e escolha "LRS" para este laboratório.`,
    `Clique em "Revisar + criar" e depois em "Criar".`,
    `Após a implantação, acesse a conta, vá em "Contêineres" e crie um novo contêiner (ex.: meus-arquivos).`,
    `Faça upload de qualquer arquivo de teste para o contêiner.`,
    `Clique no arquivo enviado e explore o campo "Camada de acesso" (Hot, Cool, Archive).`
  ],
  quiz: [
    { q: `Quais camadas de acesso você encontrou disponíveis para o blob enviado?`, opts: [`Hot, Cool e Archive`, `Rápida, Média e Lenta`, `Bronze, Prata e Ouro`, `Norte, Sul e Leste`], correct: 0, exp: `O Blob Storage oferece as camadas Hot (uso frequente), Cool (uso esporádico) e Archive (arquivamento de longo prazo).` },
    { q: `Qual opção de redundância replica os dados apenas dentro do mesmo data center?`, opts: [`LRS (armazenamento localmente redundante)`, `GRS (georredundante)`, `Nenhuma delas replica dados`, `ZRS sempre replica em outro país`], correct: 0, exp: `LRS copia os dados três vezes de forma síncrona dentro de um único data center — a opção de menor custo, mas sem proteção contra a perda do data center inteiro.` },
    { q: `Para um arquivo raramente acessado, mas exigindo o menor custo possível de armazenamento, qual camada você escolheria?`, opts: [`Archive`, `Hot`, `Premium SSD`, `Cool`], correct: 0, exp: `Archive tem o menor custo de armazenamento entre as camadas, ao custo de um tempo de recuperação mais lento.` }
  ]
},
{
  id: 4,
  icon: `💰`,
  title: `Calculadora de Preços e Orçamento`,
  domain: `Cost Management`,
  objective: `Explorar a Calculadora de Preços do Azure e configurar um orçamento (Budget) no Cost Management + Billing.`,
  steps: [
    `Abra uma nova aba e acesse a Calculadora de Preços do Azure (pesquise "Azure pricing calculator").`,
    `Adicione um produto (ex.: Virtual Machines) e configure região, sistema operacional e tamanho.`,
    `Observe a estimativa de custo mensal exibida na calculadora.`,
    `Volte ao portal.azure.com e pesquise por "Cost Management + Billing".`,
    `No menu, clique em "Orçamentos" e depois em "+ Adicionar".`,
    `Defina um escopo (sua assinatura), um valor de orçamento mensal (ex.: R$ 50) e um alerta em 80% do valor.`,
    `Salve o orçamento.`
  ],
  quiz: [
    { q: `O que a Calculadora de Preços do Azure permite fazer antes de provisionar qualquer recurso?`, opts: [`Estimar o custo mensal de uma configuração de serviços`, `Criar a VM automaticamente`, `Excluir recursos antigos`, `Alterar a senha da conta`], correct: 0, exp: `A calculadora simula configurações de serviços e apresenta uma estimativa de custo, sem provisionar nada de verdade.` },
    { q: `No Cost Management + Billing, o que um Orçamento (Budget) permite configurar?`, opts: [`Um limite de gasto com alertas automáticos ao se aproximar dele`, `O número máximo de usuários administradores`, `A velocidade da rede virtual`, `O tema visual do portal`], correct: 0, exp: `Orçamentos definem um teto de gastos e disparam alertas quando o consumo se aproxima ou ultrapassa o valor definido.` },
    { q: `Por que configurar um alerta de orçamento é uma boa prática mesmo em contas de teste/gratuitas?`, opts: [`Evita surpresas na fatura, avisando antes que o gasto saia do controle`, `Aumenta automaticamente o desempenho dos recursos`, `É obrigatório para criar qualquer recurso`, `Substitui a necessidade de qualquer monitoramento`], correct: 0, exp: `Alertas de orçamento dão visibilidade proativa do gasto, permitindo agir antes que a fatura feche com um valor inesperado.` }
  ]
},
{
  id: 5,
  icon: `📜`,
  title: `Azure Policy — exigir uma tag`,
  domain: `Azure Policy`,
  objective: `Atribuir uma definição interna do Azure Policy que exige uma tag específica em novos recursos.`,
  steps: [
    `Pesquise por "Policy" (Azure Policy) no portal.`,
    `Clique em "Definições" e procure pela definição interna "Require a tag on resources" (Exigir uma tag em recursos).`,
    `Clique nela e depois em "Atribuir".`,
    `Defina o escopo como o grupo de recursos rg-lab-az900.`,
    `No parâmetro da tag, digite um nome (ex.: Projeto).`,
    `Em "Efeito de imposição de política", verifique se está como "Habilitado" (efeito Deny).`,
    `Clique em "Revisar + criar" e depois em "Criar".`,
    `Tente criar um novo recurso simples nesse grupo sem a tag e observe o bloqueio (a avaliação pode levar alguns minutos).`
  ],
  quiz: [
    { q: `Qual efeito a política "Exigir uma tag em recursos" costuma aplicar por padrão?`, opts: [`Deny (bloqueia a criação do recurso sem a tag)`, `Audit apenas, sem bloquear nada`, `Exclui o recurso automaticamente`, `Envia um e-mail para a Microsoft`], correct: 0, exp: `O efeito "Deny" impede que a solicitação de criação do recurso seja concluída quando a condição da política não é atendida.` },
    { q: `Em qual escopo você atribuiu a política neste laboratório?`, opts: [`No grupo de recursos rg-lab-az900`, `Em toda a organização`, `Em um único disco gerenciado`, `Em uma política de custo`], correct: 0, exp: `A política foi atribuída no escopo do grupo de recursos, afetando apenas os recursos criados dentro dele.` },
    { q: `Qual a diferença entre Azure Policy e RBAC, reforçada por este laboratório?`, opts: [`Policy controla a configuração/conformidade dos recursos; RBAC controla quem pode fazer o quê`, `São exatamente a mesma ferramenta`, `RBAC também bloqueia recursos sem tag`, `Policy substitui a necessidade de autenticação`], correct: 0, exp: `Policy avalia se a configuração do recurso está em conformidade (ex.: possui a tag exigida); RBAC define permissões de identidades.` }
  ]
},
{
  id: 6,
  icon: `👤`,
  title: `Microsoft Entra ID — usuários e grupos`,
  domain: `Microsoft Entra ID`,
  objective: `Explorar a criação de usuários, grupos de segurança e as opções de MFA no Microsoft Entra ID.`,
  steps: [
    `Pesquise por "Microsoft Entra ID" no portal.`,
    `Clique em "Usuários" e depois em "+ Novo usuário" > "Criar novo usuário".`,
    `Preencha um nome de usuário de teste (ex.: aluno.teste) e um nome de exibição.`,
    `Clique em "Revisar + criar" e depois em "Criar".`,
    `Volte ao menu do Entra ID e clique em "Grupos" > "+ Novo grupo".`,
    `Crie um grupo de segurança (ex.: GrupoLabAZ900) e adicione o usuário criado como membro.`,
    `Explore o menu "Segurança" > "Métodos de autenticação" para ver as opções de MFA disponíveis (sem precisar ativar).`
  ],
  quiz: [
    { q: `Qual é a função de um Grupo no Microsoft Entra ID, como observado ao criar um?`, opts: [`Simplificar o gerenciamento de permissões para vários usuários de uma vez`, `Armazenar arquivos de backup`, `Substituir a necessidade de VNets`, `Configurar regiões do Azure`], correct: 0, exp: `Grupos permitem atribuir acesso a múltiplos usuários simultaneamente, em vez de configurar cada um individualmente.` },
    { q: `O que MFA (Autenticação Multifator) adiciona ao processo de login, segundo as opções de segurança exploradas?`, opts: [`Uma ou mais verificações adicionais além da senha`, `Uma segunda senha idêntica à primeira`, `Nenhuma mudança perceptível`, `A remoção completa da necessidade de login`], correct: 0, exp: `MFA exige fatores adicionais de verificação (app autenticador, SMS, biometria) além da senha, dificultando acessos não autorizados.` },
    { q: `Qual a diferença entre o Microsoft Entra ID e o Active Directory Domain Services tradicional, reforçada neste laboratório?`, opts: [`Entra ID é um serviço de identidade baseado em nuvem; AD DS é local, baseado em LDAP/Kerberos`, `São o mesmo produto com nomes diferentes`, `AD DS só existe na nuvem`, `Entra ID exige um controlador de domínio físico`], correct: 0, exp: `Entra ID foi desenhado para cenários de nuvem (SaaS, aplicações web); AD DS gerencia redes corporativas locais tradicionais.` }
  ]
},
{
  id: 7,
  icon: `📈`,
  title: `Azure Monitor — criar um alerta`,
  domain: `Monitoring Tools`,
  objective: `Configurar uma regra de alerta básica de métrica usando o Azure Monitor sobre um recurso do laboratório.`,
  steps: [
    `Pesquise por "Monitor" (Azure Monitor) no portal.`,
    `No menu, clique em "Alertas" e depois em "+ Criar" > "Regra de alerta".`,
    `Em "Escopo", selecione um recurso do seu grupo de recursos (ex.: a VM ou a conta de armazenamento criada).`,
    `Em "Condição", escolha uma métrica disponível (ex.: "Porcentagem de CPU" para uma VM).`,
    `Defina um limite (ex.: maior que 80%).`,
    `Em "Ações", crie um novo grupo de ações com notificação por e-mail.`,
    `Dê um nome à regra de alerta e clique em "Criar regra de alerta".`
  ],
  quiz: [
    { q: `O que uma regra de alerta do Azure Monitor faz quando a condição definida é atendida?`, opts: [`Dispara uma notificação ou ação automatizada configurada`, `Exclui o recurso monitorado automaticamente`, `Aumenta o preço do recurso`, `Bloqueia o login de todos os usuários`], correct: 0, exp: `Alertas monitoram continuamente a condição definida e disparam a ação configurada (e-mail, SMS, webhook) quando ela é atendida.` },
    { q: `Qual tipo de dado você usou como condição do alerta (ex.: percentual de CPU)?`, opts: [`Uma métrica numérica coletada em intervalos regulares`, `Um log de texto livre`, `Uma política de conformidade`, `Um relatório financeiro anual`], correct: 0, exp: `Métricas são séries numéricas leves, ideais para condições de alerta quase em tempo real, como uso de CPU.` },
    { q: `Por que monitoramento proativo (alertas) é importante mesmo em ambientes de laboratório/teste?`, opts: [`Permite detectar e responder a problemas rapidamente, antes que afetem o usuário final`, `Substitui a necessidade de qualquer segurança`, `Reduz automaticamente os custos a zero`, `É exigido apenas em contas empresariais`], correct: 0, exp: `Alertas dão visibilidade em tempo real sobre problemas, permitindo ação corretiva rápida, independentemente do tamanho do ambiente.` }
  ]
},
{
  id: 8,
  icon: `🌍`,
  title: `Regiões e Availability Zones`,
  domain: `Regiões e Availability Zones`,
  objective: `Explorar o mapa de regiões do Azure e identificar quais regiões oferecem Availability Zones.`,
  steps: [
    `Acesse a página de infraestrutura global do Azure (pesquise "Azure global infrastructure regions map").`,
    `Localize a região "Brazil South" e verifique se ela é listada com suporte a Availability Zones.`,
    `Volte ao portal.azure.com, pesquise por "Máquinas Virtuais" e, ao iniciar a criação de uma nova (sem precisar concluir), observe se a opção "Zona de disponibilidade" aparece para a região escolhida.`,
    `Compare com outra região (ex.: East US) e note a diferença na disponibilidade de zonas.`,
    `Anote quantas Availability Zones a região com suporte geralmente oferece.`
  ],
  quiz: [
    { q: `Quantas Availability Zones, no mínimo, uma região com suporte a esse recurso costuma oferecer?`, opts: [`Três`, `Uma`, `Dez`, `Nenhuma`], correct: 0, exp: `Regiões com suporte a Availability Zones normalmente possuem ao menos três zonas fisicamente separadas.` },
    { q: `O que diferencia uma região do Azure de uma Availability Zone, segundo o que você explorou?`, opts: [`Uma região contém um ou mais data centers, podendo ser dividida em zonas fisicamente separadas`, `São exatamente a mesma coisa`, `Uma zona sempre contém múltiplas regiões`, `Regiões não têm relação com zonas`], correct: 0, exp: `Uma região é a unidade geográfica maior; Availability Zones são subdivisões físicas dentro de uma região com energia e rede independentes.` },
    { q: `Por que a escolha de região pode impactar tanto a latência quanto a conformidade legal de uma solução?`, opts: [`Porque a proximidade geográfica afeta a latência, e a localização física dos dados pode estar sujeita a leis locais de residência de dados`, `Porque cada região tem um preço fixo global idêntico`, `Porque a região determina apenas a cor do portal`, `Porque isso não tem nenhum impacto técnico ou legal`], correct: 0, exp: `Regiões mais próximas do usuário reduzem latência, e algumas regulamentações exigem que dados permaneçam dentro de fronteiras específicas.` }
  ]
},
{
  id: 9,
  icon: `🔑`,
  title: `RBAC — atribuir uma função`,
  domain: `Identity, Access and Security`,
  objective: `Atribuir uma função RBAC (ex.: Leitor) a um usuário no grupo de recursos do laboratório.`,
  steps: [
    `Acesse o grupo de recursos rg-lab-az900 no portal.`,
    `No menu lateral, clique em "Controle de acesso (IAM)".`,
    `Clique em "+ Adicionar" > "Adicionar atribuição de função".`,
    `Escolha a função "Leitor" (Reader) na lista de funções internas.`,
    `Em "Membros", selecione o usuário de teste criado no Laboratório 6 (aluno.teste).`,
    `Clique em "Revisar + atribuir".`,
    `Volte à aba "Controle de acesso (IAM)" > "Atribuições de função" e confirme que o usuário aparece com a função Leitor.`
  ],
  quiz: [
    { q: `O que a função "Leitor" (Reader) permite que um usuário faça, segundo o modelo RBAC?`, opts: [`Apenas visualizar recursos, sem poder alterá-los`, `Excluir qualquer recurso da assinatura`, `Alterar políticas de segurança globais`, `Redefinir a senha de outros usuários`], correct: 0, exp: `A função Leitor concede apenas permissão de visualização, sem permitir criar, modificar ou excluir recursos.` },
    { q: `Em qual escopo você atribuiu a função RBAC neste laboratório?`, opts: [`No grupo de recursos rg-lab-az900`, `Em toda a organização`, `Em um único arquivo de blob`, `Em uma política de custo`], correct: 0, exp: `A atribuição foi feita no escopo do grupo de recursos, afetando os recursos contidos nele.` },
    { q: `Se essa mesma função fosse atribuída no nível da assinatura em vez do grupo de recursos, o que aconteceria?`, opts: [`A permissão seria herdada por todos os grupos de recursos e recursos daquela assinatura`, `Nada mudaria`, `A permissão deixaria de funcionar`, `O usuário perderia acesso a tudo`], correct: 0, exp: `O RBAC segue um modelo hierárquico de herança: permissões atribuídas em escopos superiores são herdadas pelos escopos inferiores.` }
  ]
},
{
  id: 10,
  icon: `🧹`,
  title: `Limpeza — excluir o grupo de recursos`,
  domain: `Resource Groups`,
  objective: `Encerrar o laboratório excluindo todos os recursos criados de uma só vez, evitando cobranças desnecessárias.`,
  steps: [
    `Acesse o grupo de recursos rg-lab-az900 no portal.`,
    `Clique em "Excluir grupo de recursos" no menu superior.`,
    `Digite o nome do grupo de recursos para confirmar a exclusão.`,
    `Clique em "Excluir" e aguarde a conclusão do processo.`,
    `Confirme na lista de "Grupos de recursos" que ele não aparece mais.`
  ],
  quiz: [
    { q: `O que acontece com todos os recursos dentro de um Grupo de Recursos quando ele é excluído?`, opts: [`Todos são excluídos permanentemente junto com o grupo`, `Apenas o nome do grupo é removido, os recursos continuam ativos`, `Eles são movidos automaticamente para outra assinatura`, `Nada acontece até exclusão manual de cada um`], correct: 0, exp: `Excluir um Grupo de Recursos remove permanentemente todos os recursos nele contidos — por isso é uma operação irreversível.` },
    { q: `Por que excluir o grupo de recursos inteiro é mais prático do que excluir cada recurso individualmente?`, opts: [`Porque remove tudo relacionado ao laboratório em uma única operação, economizando tempo e evitando esquecer algo gerando custo`, `Porque é a única forma de excluir uma VM`, `Porque aumenta a segurança da assinatura`, `Porque reduz a necessidade de autenticação`], correct: 0, exp: `Consolidar os recursos do laboratório em um único grupo permite eliminar tudo de uma vez, reduzindo o risco de esquecer algo ativo.` },
    { q: `Qual recurso do Azure poderia ter impedido essa exclusão acidental, caso estivesse configurado?`, opts: [`Um Resource Lock (bloqueio de recurso) do tipo CanNotDelete`, `Uma política de preços`, `Um Availability Set`, `Uma tag de cor`], correct: 0, exp: `Locks do tipo "CanNotDelete" bloqueiam a exclusão de recursos mesmo para quem tem permissão via RBAC, adicionando uma camada extra de proteção.` }
  ]
}
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = LAB_BANK;
}
