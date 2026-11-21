const QUESTIONS = [
  {
    "number": 1,
    "question": "Por qual opção a AWS é responsável no modelo de responsabilidade compartilhada da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Criptografia de dados do lado do cliente"
      },
      {
        "letter": "b",
        "text": "Gerenciamento de permissões de usuário"
      },
      {
        "letter": "c",
        "text": "Configuração de rede e firewall"
      },
      {
        "letter": "d",
        "text": "Hardware e Infraestrutura"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 2,
    "question": "Uma empresa quer executar uma consulta de gráfico que fornece nomes, endereços e transações de usuários de cartão de crédito. A empresa quer que o gráfico mostre se os nomes, endereços e transações indicam possível fraude. Qual serviço de banco de dados da AWS atenderá a esses requisitos?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Timestream"
      },
      {
        "letter": "b",
        "text": "Amazon DocumentDB (Compatibilidade com MongoDB)"
      },
      {
        "letter": "c",
        "text": "Amazon Neptune"
      },
      {
        "letter": "d",
        "text": "Amazon DynamoDB"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 3,
    "question": "Uma empresa geralmente não usa toda a sua capacidade atual do Amazon EC2 para executar cargas de trabalho sem estado. A empresa quer otimizar seus custos de EC2. Qual tipo de instância EC2 atenderá a esses requisitos?",
    "options": [
      {
        "letter": "a",
        "text": "Instâncias sob demanda"
      },
      {
        "letter": "b",
        "text": "Instâncias dedicadas"
      },
      {
        "letter": "c",
        "text": "Instâncias Spot"
      },
      {
        "letter": "d",
        "text": "Instâncias reservadas"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 4,
    "question": "Qual plano de suporte da AWS fornece o conjunto completo de verificações do AWS Trusted Advisor pelo MENOR custo?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Enterprise Support"
      },
      {
        "letter": "b",
        "text": "AWS Business Support"
      },
      {
        "letter": "c",
        "text": "AWS Developer Support"
      },
      {
        "letter": "d",
        "text": "AWS Enterprise On-Ramp Support"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 5,
    "question": "Um administrador de sistemas quer monitorar a utilização da CPU das instâncias Amazon EC2 de uma empresa. Qual serviço AWS pode fornecer essas informações?",
    "options": [
      {
        "letter": "a",
        "text": "AWS CloudTrail"
      },
      {
        "letter": "b",
        "text": "Amazon CloudWatch"
      },
      {
        "letter": "c",
        "text": "AWS Config"
      },
      {
        "letter": "d",
        "text": "AWS Trusted Advisor"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 6,
    "question": "Uma empresa executa instâncias do Amazon EC2 em um laboratório de pesquisa. As instâncias são executadas por 3 horas por semana e não podem ser interrompidas. Qual é a opção de compra de instância MAIS econômica para atender a esses requisitos?",
    "options": [
      {
        "letter": "a",
        "text": "Instâncias Sob-demanda"
      },
      {
        "letter": "b",
        "text": "Instâncias Reservadas Conversíveis"
      },
      {
        "letter": "c",
        "text": "Compute Savings Plan"
      },
      {
        "letter": "d",
        "text": "Instâncias Spot"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 7,
    "question": "Uma empresa de varejo está construindo um novo aplicativo móvel. A empresa está avaliando se deve construir o aplicativo em um data center on-premises ou na Nuvem AWS. Quais dos seguintes são benefícios de construir este aplicativo na Nuvem AWS? (Escolha dois.)",
    "options": [
      {
        "letter": "a",
        "text": "Maior velocidade para testar novos projetos"
      },
      {
        "letter": "b",
        "text": "Uma grande despesa de capital inicial e baixas despesas variáveis"
      },
      {
        "letter": "c",
        "text": "Flexibilidade para escalar em minutos conforme o aplicativo se torna popular"
      },
      {
        "letter": "d",
        "text": "Controle total sobre a segurança física da infraestrutura"
      }
    ],
    "correct": [
      "a",
      "c"
    ],
    "multiple": true
  },
  {
    "number": 8,
    "question": "Qual serviço AWS oferece suporte à implantação e gerenciamento de aplicativos na Nuvem AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon CodeGuru"
      },
      {
        "letter": "b",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "letter": "c",
        "text": "AWS Fargate"
      },
      {
        "letter": "d",
        "text": "AWS CodeCommit"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 9,
    "question": "Uma empresa deseja integrar o processamento de linguagem natural (PNL) em painéis de business intelligence (BI). A empresa quer fazer perguntas e receber respostas com visualizações relevantes. Qual serviço ou ferramenta da AWS atenderá a esses requisitos?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Lex"
      },
      {
        "letter": "b",
        "text": "Amazon QuickSight Q"
      },
      {
        "letter": "c",
        "text": "Amazon Rekognition"
      },
      {
        "letter": "d",
        "text": "Amazon Macie"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 10,
    "question": "Qual princípio de design de arquitetura descreve a necessidade de isolar falhas entre componentes dependentes na Nuvem AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Use um design monolítico."
      },
      {
        "letter": "b",
        "text": "Projeto para pontos únicos de falha."
      },
      {
        "letter": "c",
        "text": "Acople fracamente os componentes."
      },
      {
        "letter": "d",
        "text": "Projeto para automação."
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 11,
    "question": "Qual serviço da AWS ajudará uma empresa a planejar uma migração para a AWS coletando dados de configuração, uso e comportamento de data centers locais?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Application Discovery Service"
      },
      {
        "letter": "b",
        "text": "AWS Resource Groups"
      },
      {
        "letter": "c",
        "text": "AWS Service Catalog"
      },
      {
        "letter": "d",
        "text": "AWS Systems Manager"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 12,
    "question": "Qual serviço da AWS usa uma combinação de editores e assinantes?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Lambda"
      },
      {
        "letter": "b",
        "text": "Amazon CloudWatch"
      },
      {
        "letter": "c",
        "text": "Amazon Simple Notification Service (Amazon SNS)"
      },
      {
        "letter": "d",
        "text": "AWS CloudFormation"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 13,
    "question": "Qual recurso do AWS Cloud Adoption Framework (AWS CAF) pertence à perspectiva de negócios?",
    "options": [
      {
        "letter": "a",
        "text": "Gerenciamento de programas e projetos"
      },
      {
        "letter": "b",
        "text": "Observabilidade"
      },
      {
        "letter": "c",
        "text": "Ciência de dados"
      },
      {
        "letter": "d",
        "text": "Gerenciamento de alterações e liberações"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 14,
    "question": "Quais opções são recursos de perspectiva de pessoas do AWS Cloud Adoption Framework (AWS CAF)? (Escolha dois.)",
    "options": [
      {
        "letter": "a",
        "text": "Gestão de riscos"
      },
      {
        "letter": "b",
        "text": "Gestão de portfólio"
      },
      {
        "letter": "c",
        "text": "Alinhamento organizacional"
      },
      {
        "letter": "d",
        "text": "Desenho da organização"
      }
    ],
    "correct": [
      "c",
      "d"
    ],
    "multiple": true
  },
  {
    "number": 15,
    "question": "O que o Amazon CloudFront oferece?",
    "options": [
      {
        "letter": "a",
        "text": "Distribuição automática do tráfego de entrada de aplicativos em vários destinos, como instâncias do Amazon EC2, contêineres, endereços IP e funções do AWS Lambda."
      },
      {
        "letter": "b",
        "text": "Dimensionamento automático para todos os recursos para alimentar um aplicativo a partir de uma única interface unificada."
      },
      {
        "letter": "c",
        "text": "Capacidade de gerenciar diretamente o tráfego globalmente por meio de uma variedade de tipos de roteamento, incluindo roteamento baseado em latência, DNS geográfico, proximidade geográfica e round robin ponderado."
      },
      {
        "letter": "d",
        "text": "Entrega segura de dados, vídeos, aplicativos e APIs para usuários em todo o mundo com baixa latência."
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 16,
    "question": "Qual serviço da AWS fornece aplicativos locais com acesso de baixa latência aos dados armazenados na Nuvem AWS?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Backup"
      },
      {
        "letter": "b",
        "text": "Amazon CloudFront"
      },
      {
        "letter": "c",
        "text": "AWS DataSync"
      },
      {
        "letter": "d",
        "text": "AWS Storage Gateway"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 17,
    "question": "Um arquiteto de soluções precisa manter uma frota de instâncias do Amazon EC2 para que quaisquer instâncias danificadas sejam substituídas por novas. Qual serviço da AWS o arquiteto de soluções deve usar?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Elastic Container Service (Amazon ECS)"
      },
      {
        "letter": "b",
        "text": "Amazon GuardDuty"
      },
      {
        "letter": "c",
        "text": "AWS Shield"
      },
      {
        "letter": "d",
        "text": "AWS Auto Scaling"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 18,
    "question": "Quando um usuário deseja utilizar suas licenças de software existentes por soquete, por núcleo ou por máquina virtual para um servidor Microsoft Windows em execução na AWS, qual tipo de instância do Amazon EC2 é necessário?",
    "options": [
      {
        "letter": "a",
        "text": "Instâncias Dedicadas"
      },
      {
        "letter": "b",
        "text": "Hosts Dedicados"
      },
      {
        "letter": "c",
        "text": "Instâncias Reservadas"
      },
      {
        "letter": "d",
        "text": "Instâncias Spot"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 19,
    "question": "Quais dos seguintes serviços da AWS não têm servidor? (Escolha dois.)",
    "options": [
      {
        "letter": "a",
        "text": "AWS Outposts"
      },
      {
        "letter": "b",
        "text": "AWS Lambda"
      },
      {
        "letter": "c",
        "text": "AWS Fargate"
      },
      {
        "letter": "d",
        "text": "Amazon Elastic Kubernetes Service (Amazon EKS)"
      }
    ],
    "correct": [
      "b",
      "c"
    ],
    "multiple": true
  },
  {
    "number": 20,
    "question": "Uma empresa precisa conectar seu data center on-premises à Nuvem AWS. A empresa precisa de uma conexão dedicada, de baixa latência e com desempenho de rede consistente. Qual serviço da AWS atenderá a esses requisitos?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon CloudFront"
      },
      {
        "letter": "b",
        "text": "AWS Managed VPN"
      },
      {
        "letter": "c",
        "text": "AWS Global Accelerator"
      },
      {
        "letter": "d",
        "text": "AWS Direct Connect"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 21,
    "question": "Qual diretriz é um princípio de design bem arquitetado para a construção de aplicativos em nuvem?",
    "options": [
      {
        "letter": "a",
        "text": "Use componentes firmemente acoplados."
      },
      {
        "letter": "b",
        "text": "Mantenha os dados estáticos mais próximos dos recursos de computação."
      },
      {
        "letter": "c",
        "text": "Projeto para recuperação automatizada de falhas."
      },
      {
        "letter": "d",
        "text": "Provisão de recursos para capacidade máxima."
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 22,
    "question": "Qual serviço da AWS as empresas podem usar para criar infraestrutura a partir de código?",
    "options": [
      {
        "letter": "a",
        "text": "AWS CloudFormation"
      },
      {
        "letter": "b",
        "text": "AWS Outposts"
      },
      {
        "letter": "c",
        "text": "Amazon Elastic Kubernetes Service (Amazon EKS)"
      },
      {
        "letter": "d",
        "text": "AWS CodePipeline"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 23,
    "question": "Qual tarefa exige que um usuário faça login como usuário raiz da conta da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "A exclusão de usuários IAM"
      },
      {
        "letter": "b",
        "text": "A exclusão de instâncias do Amazon EC2"
      },
      {
        "letter": "c",
        "text": "A criação de uma organização no AWS Organizations"
      },
      {
        "letter": "d",
        "text": "A exclusão de uma conta AWS"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 24,
    "question": "Uma biblioteca deseja automatizar a classificação de livros eletrônicos com base no conteúdo dos livros. Qual serviço AWS a biblioteca deve usar para atender a esse requisito?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon CloudSearch"
      },
      {
        "letter": "b",
        "text": "Amazon Redshift"
      },
      {
        "letter": "c",
        "text": "Amazon Comprehend"
      },
      {
        "letter": "d",
        "text": "Amazon Aurora"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 25,
    "question": "Quais serviços da AWS uma empresa pode usar para obter uma arquitetura pouco acoplada? (Escolha dois.)",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Simple Queue Service (Amazon SQS)"
      },
      {
        "letter": "b",
        "text": "AWS Step Functions"
      },
      {
        "letter": "c",
        "text": "Amazon WorkSpaces"
      },
      {
        "letter": "d",
        "text": "AWS Trusted Advisor"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "multiple": true
  },
  {
    "number": 26,
    "question": "Qual opção é um ambiente que consiste em um ou mais data centers?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Outposts"
      },
      {
        "letter": "b",
        "text": "VPC"
      },
      {
        "letter": "c",
        "text": "Zona de disponibilidade"
      },
      {
        "letter": "d",
        "text": "Amazon CloudFront"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 27,
    "question": "Uma empresa possui um aplicativo com requisitos robustos de hardware. O aplicativo deve ser acessado por alunos que utilizam laptops leves e de baixo custo. Qual serviço da AWS ajudará a empresa a implantar o aplicativo sem investir em infraestrutura de back-end ou hardware de cliente de última geração?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon AppStream 2.0"
      },
      {
        "letter": "b",
        "text": "AWS AppSync"
      },
      {
        "letter": "c",
        "text": "Amazon WorkLink"
      },
      {
        "letter": "d",
        "text": "AWS Elastic Beanstalk"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 28,
    "question": "Uma empresa precisa transferir dados entre um bucket do Amazon S3 e um aplicativo onpremises. Quem é o responsável pela segurança desses dados, de acordo com o modelo de responsabilidade compartilhada da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "A empresa"
      },
      {
        "letter": "b",
        "text": "Fornecedor de firewall"
      },
      {
        "letter": "c",
        "text": "AWS"
      },
      {
        "letter": "d",
        "text": "Parceiro do AWS Marketplace"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 29,
    "question": "Qual pilar do AWS Well-Architected Framework se refere à capacidade de um sistema se recuperar de interrupções de infraestrutura ou serviço e adquirir recursos de computação dinamicamente para atender à demanda?",
    "options": [
      {
        "letter": "a",
        "text": "Eficiência de desempenho"
      },
      {
        "letter": "b",
        "text": "Segurança"
      },
      {
        "letter": "c",
        "text": "Confiabilidade"
      },
      {
        "letter": "d",
        "text": "Otimização de custos"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 30,
    "question": "O site de uma empresa está enfrentando ataques DDoS. Qual serviço da AWS pode ajudar a proteger o site da empresa contra esses ataques?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Shield"
      },
      {
        "letter": "b",
        "text": "Amazon GuardDuty"
      },
      {
        "letter": "c",
        "text": "AWS Amplify"
      },
      {
        "letter": "d",
        "text": "AWS Resource Access Manager"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 31,
    "question": "Uma empresa está hospedando um aplicativo na Nuvem AWS. A empresa deseja verificar se os serviços subjacentes da AWS e a infraestrutura geral da AWS estão operando normalmente. Qual combinação de serviços da AWS a empresa pode usar para coletar as informações necessárias? (Escolha dois.)",
    "options": [
      {
        "letter": "a",
        "text": "AWS Personal Health Dashboard"
      },
      {
        "letter": "b",
        "text": "AWS Service Catalog"
      },
      {
        "letter": "c",
        "text": "AWS Trusted Advisor"
      },
      {
        "letter": "d",
        "text": "AWS Service Health Dashboard"
      }
    ],
    "correct": [
      "a",
      "d"
    ],
    "multiple": true
  },
  {
    "number": 32,
    "question": "Qual conceito de nuvem é demonstrado usando o AWS Compute Optimizer?",
    "options": [
      {
        "letter": "a",
        "text": "Alcance global"
      },
      {
        "letter": "b",
        "text": "Validação de segurança"
      },
      {
        "letter": "c",
        "text": "Redimensionamento"
      },
      {
        "letter": "d",
        "text": "Elasticidade"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 33,
    "question": "Um usuário tem uma carga de trabalho com estado que será executada no Amazon EC2 pelos próximos três anos. Qual é o modelo de preços MAIS econômico para esta carga de trabalho?",
    "options": [
      {
        "letter": "a",
        "text": "Instâncias Reservadas"
      },
      {
        "letter": "b",
        "text": "Instâncias spot"
      },
      {
        "letter": "c",
        "text": "Instâncias sob demanda"
      },
      {
        "letter": "d",
        "text": "Instâncias Dedicadas"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 34,
    "question": "Quem permite a criptografia de dados em repouso para o Amazon Elastic Block Store (Amazon EBS)?",
    "options": [
      {
        "letter": "a",
        "text": "Cliente"
      },
      {
        "letter": "b",
        "text": "AWS Key Management Service (AWS KMS)"
      },
      {
        "letter": "c",
        "text": "AWS Trusted Advisor"
      },
      {
        "letter": "d",
        "text": "AWS Support"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 35,
    "question": "Uma empresa está planejando hospedar suas cargas de trabalho na AWS. Qual serviço da AWS exige que a empresa atualize e corrija o sistema operacional convidado?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Aurora"
      },
      {
        "letter": "b",
        "text": "Amazon S3"
      },
      {
        "letter": "c",
        "text": "Amazon DynamoDB"
      },
      {
        "letter": "d",
        "text": "Amazon EC2"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 36,
    "question": "Qual serviço ou recurso da AWS procurará e identificará recursos da AWS que são compartilhados externamente?",
    "options": [
      {
        "letter": "a",
        "text": "AWS IAM Access Analyzer"
      },
      {
        "letter": "b",
        "text": "AWS Fargate"
      },
      {
        "letter": "c",
        "text": "Amazon OpenSearch Service"
      },
      {
        "letter": "d",
        "text": "AWS Control Tower"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 37,
    "question": "Qual serviço da AWS uma empresa pode usar para projetar e criar visualmente aplicativos sem servidor?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Application Composer"
      },
      {
        "letter": "b",
        "text": "AWS Batch"
      },
      {
        "letter": "c",
        "text": "AWS App Runner"
      },
      {
        "letter": "d",
        "text": "AWS Lambda"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 38,
    "question": "Uma empresa está usando o Amazon DynamoDB para seu banco de dados de aplicativos. Quais tarefas são de responsabilidade da AWS, de acordo com o modelo de responsabilidade compartilhada da AWS? (Escolha dois.)",
    "options": [
      {
        "letter": "a",
        "text": "Classificar os dados."
      },
      {
        "letter": "b",
        "text": "Configurar permissões de acesso."
      },
      {
        "letter": "c",
        "text": "Gerenciar a camada de infraestrutura e o sistema operacional."
      },
      {
        "letter": "d",
        "text": "Fornecer terminais públicos para armazenar e recuperar dados."
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 39,
    "question": "Uma empresa deseja criar uma plataforma de comércio eletrônico acessível globalmente para seus clientes. A empresa deseja usar um serviço web DNS altamente disponível e escalável para conectar os usuários à plataforma. Qual serviço da AWS atenderá a esses requisitos?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon EC2"
      },
      {
        "letter": "b",
        "text": "Amazon VPC"
      },
      {
        "letter": "c",
        "text": "Amazon RDS"
      },
      {
        "letter": "d",
        "text": "Amazon Route 53"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 40,
    "question": "Uma empresa está migrando para a Nuvem AWS e planeja executar cargas de trabalho experimentais por 3 a 6 meses na AWS. Qual modelo de precificação atenderá a esses requisitos?",
    "options": [
      {
        "letter": "a",
        "text": "Use hosts dedicados."
      },
      {
        "letter": "b",
        "text": "Compre instâncias reservadas."
      },
      {
        "letter": "c",
        "text": "Use instâncias sob demanda."
      },
      {
        "letter": "d",
        "text": "Use Savings Plans por um período de 3 anos."
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 41,
    "question": "Uma empresa que possui AWS Enterprise Support está lançando uma nova versão de um produto popular em 2 meses. A empresa espera um grande aumento no tráfego de seu site. O site está hospedado em instâncias do Amazon EC2. Que medidas a empresa deve tomar para avaliar a sua prontidão para escalar para este lançamento?",
    "options": [
      {
        "letter": "a",
        "text": "Revise os relatórios de cobertura no console do AWS Cost Management."
      },
      {
        "letter": "b",
        "text": "Substitua as instâncias EC2 por funções AWS Lambda."
      },
      {
        "letter": "c",
        "text": "Envie uma solicitação no AWS Marketplace para monitorar o evento."
      },
      {
        "letter": "d",
        "text": "Use o suporte do AWS Infrastructure Event Management (IEM)"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 42,
    "question": "Uma empresa deseja lançar diversas cargas de trabalho na AWS. Cada carga de trabalho está relacionada a uma unidade de negócios diferente. A empresa deseja separar e acompanhar os custos de cada unidade de negócios. Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
    "options": [
      {
        "letter": "a",
        "text": "Use uma planilha para controlar os proprietários e os custos de cada recurso."
      },
      {
        "letter": "b",
        "text": "Use o AWS Organizations e crie uma conta para cada unidade de negócios."
      },
      {
        "letter": "c",
        "text": "Use o console de faturamento da AWS para atribuir proprietários a recursos e rastrear custos."
      },
      {
        "letter": "d",
        "text": "Use uma tabela do Amazon DynamoDB para registrar os custos de cada unidade de negócios."
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 43,
    "question": "Uma empresa deseja um serviço de banco de dados de série temporal que facilite o armazenamento e a análise de trilhões de eventos todos os dias. Qual serviço da AWS atenderá a esse requisito?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Neptune"
      },
      {
        "letter": "b",
        "text": "Amazon Timestream"
      },
      {
        "letter": "c",
        "text": "Amazon DocumentDB (compatível com MongoDB)"
      },
      {
        "letter": "d",
        "text": "Amazon Forecast"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 44,
    "question": "Qual dos itens a seguir é um serviço gerenciado da AWS usado especificamente para extrair, transformar e carregar dados (ETL)?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Athena"
      },
      {
        "letter": "b",
        "text": "AWS Snowball Edge"
      },
      {
        "letter": "c",
        "text": "Amazon S3"
      },
      {
        "letter": "d",
        "text": "AWS Glue"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 45,
    "question": "Uma empresa quer testar um novo aplicativo. Qual princípio da AWS ajudará a empresa a testar o aplicativo?",
    "options": [
      {
        "letter": "a",
        "text": "Assuma compromissos de longo prazo em troca de um desconto no custo."
      },
      {
        "letter": "b",
        "text": "Gerenciar todas as tarefas de manutenção associadas à nuvem."
      },
      {
        "letter": "c",
        "text": "Aumente ou diminua a escala quando necessário, sem compromissos de longo prazo."
      },
      {
        "letter": "d",
        "text": "Tenha controle total sobre a infraestrutura do aplicativo."
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 46,
    "question": "Uma empresa tem um aplicativo on-premises. O aplicativo tem tempos de processamento de menos de 5 minutos e é invocado apenas algumas vezes por dia. A empresa quer mover o aplicativo para a Nuvem AWS. Qual serviço da AWS dará suporte a esse aplicativo de forma MAIS econômica?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Lambda"
      },
      {
        "letter": "b",
        "text": "Amazon EC2"
      },
      {
        "letter": "c",
        "text": "Amazon Elastic Container Service (Amazon ECS)"
      },
      {
        "letter": "d",
        "text": "Amazon Elastic Kubernetes Service (Amazon EKS)"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 47,
    "question": "Uma empresa está aprendendo sobre as perspectivas do AWS Cloud Adoption Framework (AWS CAF). Qual perspectiva do AWS CAF aborda a capacidade de gerenciamento de estratégia?",
    "options": [
      {
        "letter": "a",
        "text": "Perspectiva de Negócios."
      },
      {
        "letter": "b",
        "text": "Perspectiva de Pessoas."
      },
      {
        "letter": "c",
        "text": "Perspectiva de Governança."
      },
      {
        "letter": "d",
        "text": "Perspectiva Operacional."
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 48,
    "question": "Uma empresa precisa provisionar instâncias Amazon EC2 ininterruptas, quando necessário, e pagar pela capacidade de computação por segundo. Qual opção de compra de instância EC2 atenderá a esses requisitos?",
    "options": [
      {
        "letter": "a",
        "text": "Instâncias sob demanda"
      },
      {
        "letter": "b",
        "text": "Instâncias reservadas"
      },
      {
        "letter": "c",
        "text": "Instâncias dedicadas"
      },
      {
        "letter": "d",
        "text": "Instâncias Spot"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 49,
    "question": "Qual serviço da AWS pode migrar instâncias do Amazon EC2 de uma região da AWS para outra?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Database Migration Service (AWS DMS)"
      },
      {
        "letter": "b",
        "text": "AWS Migration Hub"
      },
      {
        "letter": "c",
        "text": "AWS Application Migration Service"
      },
      {
        "letter": "d",
        "text": "AWS DataSync"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 50,
    "question": "Uma empresa precisa bloquear ataques de injeção de SQL. Qual serviço ou recurso da AWS fornece essa funcionalidade?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Trusted Advisor"
      },
      {
        "letter": "b",
        "text": "Grupos de Segurança"
      },
      {
        "letter": "c",
        "text": "AWS WAF"
      },
      {
        "letter": "d",
        "text": "Network ACLs"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 51,
    "question": "Uma empresa quer executar seu aplicativo em instâncias do Amazon EC2. A empresa precisa manter o aplicativo on-premises para atender a um requisito de conformidade. Qual oferta da AWS atenderá a esses requisitos?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon CloudFront"
      },
      {
        "letter": "b",
        "text": "AWS Outposts"
      },
      {
        "letter": "c",
        "text": "AWS Fargate"
      },
      {
        "letter": "d",
        "text": "Instâncias dedicadas"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 52,
    "question": "Uma empresa quer conectar seus serviços AWS suportados e VPCs. A empresa não quer expor seu tráfego interno à internet pública. Qual serviço AWS atenderá a esses requisitos?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Internet Gateway"
      },
      {
        "letter": "b",
        "text": "AWS PrivateLink"
      },
      {
        "letter": "c",
        "text": "Amazon Inspector"
      },
      {
        "letter": "d",
        "text": "Amazon Connect"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 53,
    "question": "Uma empresa quer implantar um aplicativo que armazena dados em um banco de dados relacional. A empresa quer que tarefas de banco de dados, como backups automatizados e snapshots de banco de dados, sejam gerenciadas pela AWS. Qual serviço da AWS atenderá a esses requisitos?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon RDS"
      },
      {
        "letter": "b",
        "text": "Amazon S3"
      },
      {
        "letter": "c",
        "text": "Amazon Elastic Block Store (Amazon EBS)"
      },
      {
        "letter": "d",
        "text": "Amazon DocumentDB"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 54,
    "question": "Uma empresa que opera servidores on-premises decide iniciar uma nova linha de negócios. A empresa determina que servidores adicionais são necessários para as novas cargas de trabalho. Qual vantagem da computação em nuvem pode ajudar a empresa a provisionar infraestrutura adicional o mais rápido possível?",
    "options": [
      {
        "letter": "a",
        "text": "Torne-se global em minutos"
      },
      {
        "letter": "b",
        "text": "Troque despesas fixas por despesas variáveis"
      },
      {
        "letter": "c",
        "text": "Aumente a velocidade e a agilidade"
      },
      {
        "letter": "d",
        "text": "Beneficie de enormes economias de escala"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 55,
    "question": "Uma empresa tem um plano AWS Business Support. A empresa precisa obter acesso ao AWS DDoS Response Team (DRT) para ajudar a mitigar eventos DDoS. Qual serviço ou recurso da AWS a empresa deve usar para atender a esses requisitos?",
    "options": [
      {
        "letter": "a",
        "text": "AWS WAF"
      },
      {
        "letter": "b",
        "text": "AWS Shield Advanced"
      },
      {
        "letter": "c",
        "text": "AWS Enterprise Support"
      },
      {
        "letter": "d",
        "text": "AWS Shield Standard"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 56,
    "question": "Uma empresa quer acessar com segurança um bucket do Amazon S3 de uma instância do Amazon EC2 sem acessar a internet. O que a empresa deve usar para atingir esse objetivo?",
    "options": [
      {
        "letter": "a",
        "text": "Gateway de Internet"
      },
      {
        "letter": "b",
        "text": "Conexão VPN"
      },
      {
        "letter": "c",
        "text": "Gateway NAT"
      },
      {
        "letter": "d",
        "text": "Endpoint de VPC"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 57,
    "question": "Uma empresa quer um serviço AWS que possa automatizar a implantação de software em instâncias do Amazon EC2 e instâncias on-premises. Qual serviço AWS atenderá a esse requisito?",
    "options": [
      {
        "letter": "a",
        "text": "AWS CodeBuild"
      },
      {
        "letter": "b",
        "text": "AWS CodeCommit"
      },
      {
        "letter": "c",
        "text": "AWS CodePipeline"
      },
      {
        "letter": "d",
        "text": "AWS CodeDeploy"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 58,
    "question": "Uma empresa quer usar uma solução de rede AWS que pode atuar como um gateway centralizado entre várias VPCs e redes locais. Qual serviço ou recurso da AWS atenderá a esse requisito?",
    "options": [
      {
        "letter": "a",
        "text": "AWS PrivateLink"
      },
      {
        "letter": "b",
        "text": "AWS Transit Gateway"
      },
      {
        "letter": "c",
        "text": "AWS Direct Connect"
      },
      {
        "letter": "d",
        "text": "Gateway VPC endpoint"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 59,
    "question": "Uma empresa quer migrar seus aplicativos baseados em servidor para a Nuvem AWS. A empresa quer determinar o custo total de propriedade para seus recursos de computação que serão hospedados na Nuvem AWS. Qual combinação de serviços ou ferramentas da AWS atenderá a esses requisitos? (Escolha duas.)",
    "options": [
      {
        "letter": "a",
        "text": "AWS Pricing Calculator"
      },
      {
        "letter": "b",
        "text": "Migration Evaluator"
      },
      {
        "letter": "c",
        "text": "AWS Application Discovery Service"
      },
      {
        "letter": "d",
        "text": "AWS Support Center"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "multiple": true
  },
  {
    "number": 60,
    "question": "Qual serviço da AWS Cloud fornece recomendações sobre como otimizar o desempenho dos serviços da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "AWS CloudTrail"
      },
      {
        "letter": "b",
        "text": "AWS Trusted Advisor"
      },
      {
        "letter": "c",
        "text": "Amazon Inspector"
      },
      {
        "letter": "d",
        "text": "Amazon CloudWatch"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 61,
    "question": "Uma empresa está lançando um novo site que deverá ter níveis de tráfego altamente variáveis. O site será executado no Amazon EC2 e deve ter alta disponibilidade. Qual é a abordagem MAIS econômica?",
    "options": [
      {
        "letter": "a",
        "text": "Crie um grupo do Amazon EC2 Auto Scaling e configure um Elastic Load Balancer."
      },
      {
        "letter": "b",
        "text": "Use a AWS CLI para iniciar e encerrar instâncias do Amazon EC2 para atender à demanda."
      },
      {
        "letter": "c",
        "text": "Inicie o site usando uma instância do Amazon EC2 em execução em um host dedicado."
      },
      {
        "letter": "d",
        "text": "Determine o tráfego esperado mais alto e use um tipo de instância apropriado."
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 62,
    "question": "Para que um praticante de nuvem acessaria o AWS Artifact?",
    "options": [
      {
        "letter": "a",
        "text": "Criar um relatório de avaliação de segurança para serviços da AWS."
      },
      {
        "letter": "b",
        "text": "Baixar detalhes de configuração para todos os recursos da AWS."
      },
      {
        "letter": "c",
        "text": "Obter acesso a documentos de segurança e conformidade da AWS."
      },
      {
        "letter": "d",
        "text": "Acessar materiais de treinamento para serviços da AWS."
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 63,
    "question": "O que um praticante de nuvem pode usar para categorizar e rastrear custos da AWS por projeto?",
    "options": [
      {
        "letter": "a",
        "text": "Tags de Alocação de Custos"
      },
      {
        "letter": "b",
        "text": "AWS Trusted Advisor"
      },
      {
        "letter": "c",
        "text": "Múltiplas contas"
      },
      {
        "letter": "d",
        "text": "Faturamento consolidado"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 64,
    "question": "Um profissional de nuvem prevê um aumento no tráfego de aplicativos em uma data e horário futuros, quando ocorrerá um evento de vendas. Como o profissional de nuvem pode configurar o Amazon EC2 Auto Scaling para garantir que o número correto de instâncias do Amazon EC2 esteja disponível antes do evento?",
    "options": [
      {
        "letter": "a",
        "text": "Configurar uma política de escalonamento agendado."
      },
      {
        "letter": "b",
        "text": "Configurar escalonamento preditivo."
      },
      {
        "letter": "c",
        "text": "Configurar uma política de escalonamento por etapas."
      },
      {
        "letter": "d",
        "text": "Configurar uma política de escalonamento de rastreamento de destino."
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 65,
    "question": "Um cliente precisa determinar o Custo Total de Propriedade (TCO) para uma carga de trabalho que requer isolamento físico. Qual modelo de hospedagem deve ser considerado?",
    "options": [
      {
        "letter": "a",
        "text": "Instâncias sob-demanda"
      },
      {
        "letter": "b",
        "text": "Hosts dedicados"
      },
      {
        "letter": "c",
        "text": "Instâncias reservadas"
      },
      {
        "letter": "d",
        "text": "Instâncias Spot"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 66,
    "question": "Qual tipo de credencial um Cloud Practitioner deve usar para acesso programático a recursos da AWS a partir da AWS CLI/API?",
    "options": [
      {
        "letter": "a",
        "text": "Certificado SSL/TLS"
      },
      {
        "letter": "b",
        "text": "Chaves públicas SSH"
      },
      {
        "letter": "c",
        "text": "Nome de usuário e senha"
      },
      {
        "letter": "d",
        "text": "Chaves de acesso"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 67,
    "question": "Qual das seguintes implantações envolve o pilar de confiabilidade do AWS Well-Architected Framework?",
    "options": [
      {
        "letter": "a",
        "text": "Usar o CloudFormation para implantar a infraestrutura"
      },
      {
        "letter": "b",
        "text": "Anexar uma WebACL a uma distribuição do CloudFront"
      },
      {
        "letter": "c",
        "text": "Volume de IOPS provisionado do Amazon EBS"
      },
      {
        "letter": "d",
        "text": "Implantação do Amazon RDS MultiAZ"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 68,
    "question": "Um site tem uma base de clientes global e os usuários relataram baixo desempenho ao se conectar ao site. Qual serviço da AWS irá melhorar a experiência do cliente reduzindo a latência?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon CloudFront"
      },
      {
        "letter": "b",
        "text": "AWS Direct Connect"
      },
      {
        "letter": "c",
        "text": "Amazon EC2 Auto Scaling"
      },
      {
        "letter": "d",
        "text": "Amazon ElastiCache"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 69,
    "question": "Qual é a melhor prática para gerenciar chaves de acesso do IAM da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Os clientes devem rotacionar as chaves de acesso regularmente."
      },
      {
        "letter": "b",
        "text": "Nunca use chaves de acesso, sempre use funções do IAM."
      },
      {
        "letter": "c",
        "text": "Não há necessidade de gerenciar chaves de acesso."
      },
      {
        "letter": "d",
        "text": "A AWS rotaciona as chaves de acesso de acordo com um cronograma."
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 70,
    "question": "Qual recurso da AWS pode ser usado para iniciar uma instância pré-configurada do Amazon Elastic Compute Cloud (EC2)?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Machine Image (AMI)"
      },
      {
        "letter": "b",
        "text": "Amazon AppStream 2.0"
      },
      {
        "letter": "c",
        "text": "Amazon EC2 Systems Manager"
      },
      {
        "letter": "d",
        "text": "Amazon Elastic Block Store (EBS)"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 71,
    "question": "Quantos dados uma empresa pode armazenar no serviço Amazon S3?",
    "options": [
      {
        "letter": "a",
        "text": "Virtualmente ilimitado"
      },
      {
        "letter": "b",
        "text": "100 TB"
      },
      {
        "letter": "c",
        "text": "1 PB"
      },
      {
        "letter": "d",
        "text": "100 PB"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 72,
    "question": "Uma empresa está migrando um aplicativo monolítico que não escala bem para a nuvem e refatorando-o em uma arquitetura de microsserviços. A qual prática recomendada do AWS WellArchitected Framework este plano está relacionado?",
    "options": [
      {
        "letter": "a",
        "text": "Gerencie mudanças na automação."
      },
      {
        "letter": "b",
        "text": "Use várias soluções para melhorar o desempenho."
      },
      {
        "letter": "c",
        "text": "Pare de gastar dinheiro com tarefas pesadas e indiferenciadas."
      },
      {
        "letter": "d",
        "text": "Implemente serviços fracamente acoplados."
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 73,
    "question": "Um aplicativo usa um banco de dados PostgreSQL em execução em uma única instância do Amazon EC2. Um Cloud Practitioner foi solicitado a aumentar a disponibilidade do banco de dados para que haja recuperação automática em caso de falha. Quais tarefas o praticante de nuvem pode executar para atender a esse requisito?",
    "options": [
      {
        "letter": "a",
        "text": "Configurar o EC2 Auto Recovery para mover a instância para outra região."
      },
      {
        "letter": "b",
        "text": "Definir o valor DeleteOnTermination como false para o volume raiz do EBS."
      },
      {
        "letter": "c",
        "text": "Configurar um Elastic Load Balancer na frente da instância do EC2."
      },
      {
        "letter": "d",
        "text": "Migrar o banco de dados para o Amazon RDS e habilitar o recurso Multi-AZ."
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 74,
    "question": "Um usuário está planejando iniciar três instâncias EC2 atrás de um único Elastic Load Balancer. A implantação deve ser altamente disponível. O que o usuário deve fazer para atingir esse objetivo?",
    "options": [
      {
        "letter": "a",
        "text": "Lançar as instâncias como Instâncias Spot do EC2 na mesma Região da AWS e na mesma Zona de Disponibilidade."
      },
      {
        "letter": "b",
        "text": "Iniciar as instâncias em várias Zonas de Disponibilidade em uma única Região da AWS."
      },
      {
        "letter": "c",
        "text": "Iniciar as instâncias em várias Regiões da AWS e usar endereços IP elásticos."
      },
      {
        "letter": "d",
        "text": "Iniciar as instâncias como Instâncias Reservadas do EC2 na mesma Região da AWS, mas em Zonas de Disponibilidade diferentes."
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 75,
    "question": "Qual recurso um novo usuário da AWS deve usar para obter ajuda com a implantação de tecnologias populares com base nas melhores práticas da AWS, incluindo arquitetura e instruções de implantação?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Artifact"
      },
      {
        "letter": "b",
        "text": "AWS Config"
      },
      {
        "letter": "c",
        "text": "AWS Partner Solutions"
      },
      {
        "letter": "d",
        "text": "AWS CloudFormation"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 76,
    "question": "Uma empresa usa instâncias do Amazon EC2 para executar aplicativos dedicados a diferentes departamentos. A empresa precisa detalhar os custos desses aplicativos e alocá-los ao departamento relevante. As instâncias do EC2 são executadas em uma única VPC. Como a empresa pode atender a esses requisitos?",
    "options": [
      {
        "letter": "a",
        "text": "Habilitar alertas de cobrança por meio do Amazon CloudWatch e do Amazon SNS."
      },
      {
        "letter": "b",
        "text": "Criar tags por departamento nas instâncias e, em seguida, executar um relatório de alocação de custos."
      },
      {
        "letter": "c",
        "text": "Adicionar VPCs adicionais da Amazon e iniciar cada aplicativo em uma VPC separada."
      },
      {
        "letter": "d",
        "text": "Habilitar o acesso à cobrança para usuários do IAM e visualizar os custos no Cost Explorer."
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 77,
    "question": "De acordo com o modelo de responsabilidade compartilhada da AWS, qual das seguintes opções é uma responsabilidade da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Configurar ACLs de rede para bloquear ataques maliciosos."
      },
      {
        "letter": "b",
        "text": "Atualizar as regras do grupo de segurança para habilitar a conectividade."
      },
      {
        "letter": "c",
        "text": "Aplicar patches no software em execução nas instâncias do Amazon EC2."
      },
      {
        "letter": "d",
        "text": "Atualizar o firmware nos hosts EC2 subjacentes"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 78,
    "question": "Os clientes que usam os serviços da AWS devem aplicar patches nos sistemas operacionais em qual dos seguintes serviços?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Fargate"
      },
      {
        "letter": "b",
        "text": "Amazon DynamoDB"
      },
      {
        "letter": "c",
        "text": "AWS Lambda"
      },
      {
        "letter": "d",
        "text": "Amazon EC2"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 79,
    "question": "Uma empresa planeja implantar um banco de dados relacional na AWS. O departamento de TI realizará a administração do banco de dados. Qual serviço a empresa deve usar?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon DynamoDB"
      },
      {
        "letter": "b",
        "text": "Amazon EC2"
      },
      {
        "letter": "c",
        "text": "Amazon ElastiCache"
      },
      {
        "letter": "d",
        "text": "Amazon Redshift"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 80,
    "question": "Um profissional de nuvem precisa de uma ferramenta que possa auxiliar na visualização e no gerenciamento dos custos e do uso da AWS ao longo do tempo. Qual ferramenta o profissional de nuvem deve usar?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Budgets"
      },
      {
        "letter": "b",
        "text": "Amazon Inspector"
      },
      {
        "letter": "c",
        "text": "AWS Organizations"
      },
      {
        "letter": "d",
        "text": "AWS Cost Explorer"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 81,
    "question": "Uma grande empresa está interessada em evitar contratos de longo prazo e migrar de custos fixos para custos variáveis. Qual é a proposta de valor da AWS para essa empresa?",
    "options": [
      {
        "letter": "a",
        "text": "Preços de pagamento conforme o uso"
      },
      {
        "letter": "b",
        "text": "Otimização de custos automatizada"
      },
      {
        "letter": "c",
        "text": "Descontos por volume"
      },
      {
        "letter": "d",
        "text": "Economias de escala"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 82,
    "question": "Qual serviço da AWS fornece um sistema gerenciado de controle de versão de software?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon CodeDeploy"
      },
      {
        "letter": "b",
        "text": "AWS CodeCommit"
      },
      {
        "letter": "c",
        "text": "AWS DataSync"
      },
      {
        "letter": "d",
        "text": "AWS CodePipeline"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 83,
    "question": "Um usuário IAM individual deve ter acesso concedido a um bucket do Amazon S3 usando uma política de bucket. Qual elemento na política de bucket do S3 deve ser atualizado para definir a conta de usuário para a qual o acesso será concedido?",
    "options": [
      {
        "letter": "a",
        "text": "Action"
      },
      {
        "letter": "b",
        "text": "Resource"
      },
      {
        "letter": "c",
        "text": "Principal"
      },
      {
        "letter": "d",
        "text": "Condition"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 84,
    "question": "Qual é um método de proteção contra ataques de negação de serviço distribuída (DDoS) na Nuvem AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Usar o monitoramento do Amazon CloudWatch."
      },
      {
        "letter": "b",
        "text": "Configurar um firewall na frente dos recursos."
      },
      {
        "letter": "c",
        "text": "Monitorar o AWS Health Dashboard."
      },
      {
        "letter": "d",
        "text": "Habilitar o registro do AWS CloudTrail."
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 85,
    "question": "Uma empresa está implantando um banco de dados MySQL na AWS. O banco de dados deve ser facilmente escalável e ter backup automático habilitado. Qual serviço da AWS a empresa deve usar?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon DocumentDB"
      },
      {
        "letter": "b",
        "text": "Amazon Athena"
      },
      {
        "letter": "c",
        "text": "Amazon DynamoDB"
      },
      {
        "letter": "d",
        "text": "Amazon Aurora"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 86,
    "question": "Uma empresa está implantando um aplicativo no Amazon EC2 que requer acesso de baixa latência a componentes do aplicativo em um data center on-premises. Qual serviço ou recurso da AWS a empresa pode usar para estender sua VPC existente para o data center on-premises?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Direct Connect"
      },
      {
        "letter": "b",
        "text": "Amazon Connect"
      },
      {
        "letter": "c",
        "text": "Amazon Workspaces"
      },
      {
        "letter": "d",
        "text": "AWS Outposts"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 87,
    "question": "Qual das seguintes opções ajudará um usuário a determinar se ele precisa solicitar um aumento de limite de serviço do Amazon EC2?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Trusted Advisor"
      },
      {
        "letter": "b",
        "text": "AWS Health Dashboard"
      },
      {
        "letter": "c",
        "text": "Amazon RDS"
      },
      {
        "letter": "d",
        "text": "AWS Cost Explorer"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 88,
    "question": "Uma empresa está implantando uma nova carga de trabalho e os requisitos de licenciamento de software exigem que a carga de trabalho seja executada em um servidor físico específico. Qual opção de implantação de instância do Amazon EC2 deve ser usada?",
    "options": [
      {
        "letter": "a",
        "text": "Hosts Dedicados"
      },
      {
        "letter": "b",
        "text": "Instâncias Spot"
      },
      {
        "letter": "c",
        "text": "Instâncias Reservadas"
      },
      {
        "letter": "d",
        "text": "Instâncias Dedicadas"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 89,
    "question": "Qual das seguintes opções é de responsabilidade exclusiva da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Gerenciamento de patches"
      },
      {
        "letter": "b",
        "text": "Controles de acesso a dados do cliente"
      },
      {
        "letter": "c",
        "text": "Gerenciamento de Zonas de Disponibilidade"
      },
      {
        "letter": "d",
        "text": "Implantação de aplicativos"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 90,
    "question": "Uma empresa executa um trabalho em lote em uma instância do Amazon EC2 e leva 6 horas para ser concluído. Espera-se que a carga de trabalho dobre de volume a cada mês, com um aumento proporcional no tempo de processamento. Qual é a arquitetura de nuvem mais eficiente para lidar com a crescente carga de trabalho?",
    "options": [
      {
        "letter": "a",
        "text": "Altere o tipo de volume do Amazon EC2 para um volume SSD com IOPS provisionadas."
      },
      {
        "letter": "b",
        "text": "Execute a carga de trabalho em lote em paralelo em várias instâncias do Amazon EC2."
      },
      {
        "letter": "c",
        "text": "Execute o aplicativo em uma instância bare metal do Amazon EC2."
      },
      {
        "letter": "d",
        "text": "Execute o trabalho em lote em um tipo de instância do Amazon EC2 maior, com mais CPU."
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 91,
    "question": "A AWS consegue reduzir continuamente seus preços devido a:",
    "options": [
      {
        "letter": "a",
        "text": "Economias de escala."
      },
      {
        "letter": "b",
        "text": "Planos de economia de computação."
      },
      {
        "letter": "c",
        "text": "Serviços de computação elástica."
      },
      {
        "letter": "d",
        "text": "Preços de pagamento conforme o uso."
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 92,
    "question": "Uma empresa tem muitos recursos de computação subutilizados no on-premises. Qual recurso da Nuvem AWS ajudará a resolver esse problema?",
    "options": [
      {
        "letter": "a",
        "text": "Tolerância a falhas"
      },
      {
        "letter": "b",
        "text": "Implantação global"
      },
      {
        "letter": "c",
        "text": "Elasticidade"
      },
      {
        "letter": "d",
        "text": "Alta disponibilidade"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 93,
    "question": "Um usuário precisa identificar instâncias subutilizadas do Amazon EC2 para reduzir custos. Qual serviço ou recurso da AWS atenderá a esse requisito?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Health Dashboard"
      },
      {
        "letter": "b",
        "text": "AWS Cost Explorer"
      },
      {
        "letter": "c",
        "text": "AWS Trusted Advisor"
      },
      {
        "letter": "d",
        "text": "AWS CodeBuild"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 94,
    "question": "Uma empresa está planejando implantar um aplicativo com um banco de dados relacional na AWS. A camada de aplicação requer acesso ao sistema operacional da instância do banco de dados para executar scripts. A empresa prefere manter a sobrecarga de gerenciamento no mínimo. Qual implantação deve ser usada para o banco de dados?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon DynamoDB"
      },
      {
        "letter": "b",
        "text": "Amazon RDS"
      },
      {
        "letter": "c",
        "text": "Amazon EC2"
      },
      {
        "letter": "d",
        "text": "Amazon S3"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 95,
    "question": "Uma Nuvem Privada Virtual (VPC) da Amazon pode incluir vários:",
    "options": [
      {
        "letter": "a",
        "text": "Zonas de Disponibilidade."
      },
      {
        "letter": "b",
        "text": "Regiões da AWS."
      },
      {
        "letter": "c",
        "text": "Locais de borda."
      },
      {
        "letter": "d",
        "text": "Gateways de Internet."
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 96,
    "question": "Uma empresa precisa publicar mensagens para milhares de assinantes simultaneamente usando um mecanismo de push. Qual serviço da AWS a empresa deve usar?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Simple Workflow Service (SWF)"
      },
      {
        "letter": "b",
        "text": "Amazon Simple Queue Service (Amazon SQS)"
      },
      {
        "letter": "c",
        "text": "Amazon Simple Notification Service (Amazon SNS)"
      },
      {
        "letter": "d",
        "text": "AWS Step Functions"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 97,
    "question": "Uma empresa está planejando migrar vários aplicativos legados para a Nuvem AWS. A solução deve ser econômica. Qual abordagem a empresa deve adotar?",
    "options": [
      {
        "letter": "a",
        "text": "Re-hospede os aplicativos em instâncias do Amazon EC2 com o tamanho adequado."
      },
      {
        "letter": "b",
        "text": "Migrar os aplicativos para hosts dedicados no Amazon EC2."
      },
      {
        "letter": "c",
        "text": "Usar um site estático do Amazon S3 para hospedar o código do aplicativo legado."
      },
      {
        "letter": "d",
        "text": "Usar o AWS Lambda para hospedar os aplicativos legados na nuvem."
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 98,
    "question": "Um profissional de nuvem está desenvolvendo um novo aplicativo e deseja integrar recursos dos serviços da AWS diretamente no aplicativo. Qual das seguintes opções é a MELHOR ferramenta para esse propósito?",
    "options": [
      {
        "letter": "a",
        "text": "Interface de Linha de Comando (CLI) da AWS"
      },
      {
        "letter": "b",
        "text": "AWS CodePipeline"
      },
      {
        "letter": "c",
        "text": "AWS CodeDeploy"
      },
      {
        "letter": "d",
        "text": "Kit de Desenvolvimento de Software da AWS (SDK)"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 99,
    "question": "Para que são usadas as chaves de acesso do AWS Identity and Access Management (IAM)?",
    "options": [
      {
        "letter": "a",
        "text": "Fazer login no Console de Gerenciamento da AWS."
      },
      {
        "letter": "b",
        "text": "Habilitar a criptografia em trânsito para servidores web."
      },
      {
        "letter": "c",
        "text": "Fazer chamadas programáticas para a AWS a partir das APIs da AWS."
      },
      {
        "letter": "d",
        "text": "Garantir a integridade dos arquivos de log."
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 100,
    "question": "Qual serviço da AWS uma equipe pode usar para implantar infraestrutura na AWS usando linguagens de programação familiares?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon CodeGuru"
      },
      {
        "letter": "b",
        "text": "AWS Config"
      },
      {
        "letter": "c",
        "text": "AWS Cloud Development Kit (AWS CDK)"
      },
      {
        "letter": "d",
        "text": "AWS CodeCommit"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 101,
    "question": "Qual dos seguintes recursos ou serviços da AWS pode ser usado para fornecer volumes de armazenamento raiz para instâncias do Amazon EC2?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Elastic Block Store (EBS)"
      },
      {
        "letter": "b",
        "text": "Amazon Machine Image"
      },
      {
        "letter": "c",
        "text": "Amazon Simple Storage Service (S3)"
      },
      {
        "letter": "d",
        "text": "Amazon Elastic File System (EFS)"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 102,
    "question": "Um Cloud Practitioner requer recuperação pontual (PITR) para uma tabela do Amazon DynamoDB. Quem é responsável por configurar e executar backups?",
    "options": [
      {
        "letter": "a",
        "text": "O cliente é responsável por ambas as tarefas."
      },
      {
        "letter": "b",
        "text": "A AWS é responsável por ambas as tarefas."
      },
      {
        "letter": "c",
        "text": "A AWS é responsável pela configuração e o usuário é responsável por executar backups."
      },
      {
        "letter": "d",
        "text": "O cliente é responsável pela configuração e a AWS é responsável por executar backups."
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 103,
    "question": "Qual das seguintes opções representa uma proposta de valor para o uso da Nuvem AWS?",
    "options": [
      {
        "letter": "a",
        "text": "A AWS fornece acesso total aos seus data centers."
      },
      {
        "letter": "b",
        "text": "A AWS é responsável por proteger seus aplicativos."
      },
      {
        "letter": "c",
        "text": "Os clientes podem solicitar hardware especializado."
      },
      {
        "letter": "d",
        "text": "Não é necessário firmar contratos de longo prazo."
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 104,
    "question": "Quais vantagens um administrador de banco de dados obtém ao usar o Amazon Relational Database Service (RDS)?",
    "options": [
      {
        "letter": "a",
        "text": "O RDS simplifica as tarefas de administração de banco de dados relacional."
      },
      {
        "letter": "b",
        "text": "Os bancos de dados RDS são dimensionados automaticamente com base na carga."
      },
      {
        "letter": "c",
        "text": "O RDS oferece 99,99999999999% de confiabilidade e durabilidade."
      },
      {
        "letter": "d",
        "text": "O RDS permite que os usuários ajustem dinamicamente os recursos de CPU e RAM."
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 105,
    "question": "Qual serviço da AWS uma empresa pode usar para descobrir e proteger dados confidenciais armazenados em buckets do Amazon S3?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Macie"
      },
      {
        "letter": "b",
        "text": "AWS Policy Generator"
      },
      {
        "letter": "c",
        "text": "Amazon Detective"
      },
      {
        "letter": "d",
        "text": "Amazon GuardDuty"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 106,
    "question": "Um profissional de nuvem precisa monitorar a utilização de CPU e rede de uma nova instância do Amazon EC2. Qual serviço da AWS deve ser usado?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Systems Manager"
      },
      {
        "letter": "b",
        "text": "Amazon Inspector"
      },
      {
        "letter": "c",
        "text": "AWS CloudTrail"
      },
      {
        "letter": "d",
        "text": "Amazon CloudWatch"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 107,
    "question": "Uma empresa planeja usar instâncias reservadas para obter preços com desconto para instâncias do Amazon EC2. A empresa pode precisar alterar o tipo de instância do EC2 durante o período de um ano. Qual opção de compra de instância é a MAIS econômica para este caso de uso?",
    "options": [
      {
        "letter": "a",
        "text": "Instâncias Reservadas Regionais"
      },
      {
        "letter": "b",
        "text": "Instâncias Reservadas Padrão"
      },
      {
        "letter": "c",
        "text": "Instâncias Reservadas Conversíveis"
      },
      {
        "letter": "d",
        "text": "Instâncias Reservadas Zonais"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 108,
    "question": "Qual serviço ou recurso da AWS pode ajudar a proteger um site hospedado fora da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Tabelas de rotas da Amazon VPC"
      },
      {
        "letter": "b",
        "text": "Grupos de segurança do Amazon EC2"
      },
      {
        "letter": "c",
        "text": "AWS Web Application Firewall (WAF)"
      },
      {
        "letter": "d",
        "text": "ACLs de rede da Amazon VPC"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 109,
    "question": "Qual serviço da AWS ajuda os clientes a atender aos requisitos de conformidade corporativa, contratual e regulatória para segurança de dados usando dispositivos de hardware dedicados na Nuvem AWS?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Secrets Manager"
      },
      {
        "letter": "b",
        "text": "AWS Key Management Service (AWS KMS)"
      },
      {
        "letter": "c",
        "text": "AWS CloudHSM"
      },
      {
        "letter": "d",
        "text": "AWS Directory Service"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 110,
    "question": "Como uma organização pode obter acesso a relatórios de conformidade nativamente por meio do console da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Identity and Access Management (IAM)"
      },
      {
        "letter": "b",
        "text": "AWS Artifact"
      },
      {
        "letter": "c",
        "text": "AWS Certificate Manager (ACM)"
      },
      {
        "letter": "d",
        "text": "AWS Security Hub"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 111,
    "question": "Qual serviço da AWS é usado para enviar mensagens de texto e e-mail de aplicativos distribuídos?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Simple Queue Service (Amazon SQS)"
      },
      {
        "letter": "b",
        "text": "Amazon Simple Workflow Service (Amazon SWF)"
      },
      {
        "letter": "c",
        "text": "Amazon Simple Notification Service (Amazon SNS)"
      },
      {
        "letter": "d",
        "text": "Amazon Simple Email Service (Amazon SES)"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 112,
    "question": "Qual serviço ou recurso da AWS permite que uma empresa receba uma única fatura mensal da AWS ao usar várias contas da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Cost Explorer"
      },
      {
        "letter": "b",
        "text": "Relatório de Custo e Uso da AWS"
      },
      {
        "letter": "c",
        "text": "Faturamento consolidado"
      },
      {
        "letter": "d",
        "text": "Amazon Cloud Directory"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 113,
    "question": "Uma empresa está interessada em migrar seu banco de dados NoSQL on-premises para a Nuvem AWS. Qual serviço da AWS a empresa deve usar para substituir seu banco de dados existente?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon DynamoDB"
      },
      {
        "letter": "b",
        "text": "Amazon Quantum Ledger Database (Amazon QLDB)"
      },
      {
        "letter": "c",
        "text": "Amazon Redshift"
      },
      {
        "letter": "d",
        "text": "Amazon RDS para MySQL"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 114,
    "question": "O que pode ser usado para permitir que um aplicativo em execução em uma instância do Amazon EC2 armazene dados com segurança em um bucket do Amazon S3 sem usar credenciais de longo prazo?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Systems Manager"
      },
      {
        "letter": "b",
        "text": "Chave de acesso do AWS IAM"
      },
      {
        "letter": "c",
        "text": "Amazon Connect"
      },
      {
        "letter": "d",
        "text": "Função do AWS IAM"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 115,
    "question": "Como uma organização pode aproveitar os preços escalonados em várias unidades de negócios dentro de uma organização?",
    "options": [
      {
        "letter": "a",
        "text": "Políticas de controle de serviço (SCPs) do AWS Organizations."
      },
      {
        "letter": "b",
        "text": "Relatórios de utilização do Cost Explorer."
      },
      {
        "letter": "c",
        "text": "AURI - Instâncias Reservadas com Pagamento Integral Antecipado"
      },
      {
        "letter": "d",
        "text": "Faturamento consolidado do AWS Organizations."
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 116,
    "question": "Como uma organização deve implantar um aplicativo em execução em várias instâncias do EC2 para garantir que uma falha de energia não cause uma interrupção do aplicativo?",
    "options": [
      {
        "letter": "a",
        "text": "Iniciar as instâncias do EC2 em diferentes VPCs"
      },
      {
        "letter": "b",
        "text": "Iniciar as instâncias do EC2 em regiões separadas"
      },
      {
        "letter": "c",
        "text": "Iniciar as instâncias do EC2 em diferentes Zonas de Disponibilidade"
      },
      {
        "letter": "d",
        "text": "Iniciar as instâncias do EC2 em Locais de Borda"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 117,
    "question": "De acordo com o modo de responsabilidade compartilhada, qual tarefa de segurança e conformidade é de responsabilidade da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Criptografar dados em repouso"
      },
      {
        "letter": "b",
        "text": "Conceder permissões a usuários e serviços"
      },
      {
        "letter": "c",
        "text": "Atualizar o firmware do host do Amazon EC2"
      },
      {
        "letter": "d",
        "text": "Atualizar sistemas operacionais"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 118,
    "question": "Para que um profissional de nuvem pode usar a Calculadora de Custo Total de Propriedade (TCO) da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Habilitar alertas de faturamento para monitorar os custos reais da AWS em comparação com os custos estimados"
      },
      {
        "letter": "b",
        "text": "Gerar relatórios que detalham os custos de computação da Nuvem AWS por duração, recurso ou tags"
      },
      {
        "letter": "c",
        "text": "Estimar uma fatura mensal para os recursos da Nuvem AWS que serão usados"
      },
      {
        "letter": "d",
        "text": "Estimar a economia ao comparar a Nuvem AWS com um ambiente onpremises"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 119,
    "question": "Qual serviço, ferramenta ou recurso da AWS pode ajudar as empresas a identificar instâncias subutilizadas do Amazon EC2 e reduzir seus custos?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Trusted Advisor"
      },
      {
        "letter": "b",
        "text": "Amazon Inspector"
      },
      {
        "letter": "c",
        "text": "Faturamento consolidado"
      },
      {
        "letter": "d",
        "text": "Cost Explorer"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 120,
    "question": "Um usuário tem conhecimento limitado dos serviços da AWS, mas deseja implantar rapidamente um aplicativo Node.js escalável em uma Amazon VPC. Qual serviço deve ser usado para implantar o aplicativo?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon EC2"
      },
      {
        "letter": "b",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "letter": "c",
        "text": "Amazon LightSail"
      },
      {
        "letter": "d",
        "text": "AWS CloudFormation"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 121,
    "question": "Qual modelo de preços do Amazon EC2 deve ser evitado se uma carga de trabalho não puder aceitar interrupções caso a capacidade fique temporariamente indisponível?",
    "options": [
      {
        "letter": "a",
        "text": "Instâncias sob demanda"
      },
      {
        "letter": "b",
        "text": "Instâncias reservadas conversíveis"
      },
      {
        "letter": "c",
        "text": "Instâncias reservadas padrão"
      },
      {
        "letter": "d",
        "text": "Instâncias spot"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 122,
    "question": "Um usuário precisa de um relatório automatizado de avaliação de segurança que identifique acessos não intencionais à rede em instâncias do Amazon EC2 e vulnerabilidades nessas instâncias. Qual serviço da AWS fornecerá esse relatório de avaliação?",
    "options": [
      {
        "letter": "a",
        "text": "Grupos de segurança do EC2"
      },
      {
        "letter": "b",
        "text": "AWS Config"
      },
      {
        "letter": "c",
        "text": "Amazon Macie"
      },
      {
        "letter": "d",
        "text": "Amazon Inspector"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 123,
    "question": "Uma empresa precisa usar software de terceiros para sua carga de trabalho na AWS. Existe algum recurso ou serviço da AWS que a empresa possa usar para comprar o software?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Marketplace"
      },
      {
        "letter": "b",
        "text": "AWS Resource Access Manager"
      },
      {
        "letter": "c",
        "text": "AWS License Manager"
      },
      {
        "letter": "d",
        "text": "AWS Managed Services"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 124,
    "question": "Uma empresa de comércio eletrônico planeja usar a Nuvem AWS para entregar novas funcionalidades rapidamente e de forma iterativa, minimizando o tempo de lançamento no mercado. Qual recurso da Nuvem AWS fornece essa funcionalidade?",
    "options": [
      {
        "letter": "a",
        "text": "Agilidade"
      },
      {
        "letter": "b",
        "text": "Elasticidade"
      },
      {
        "letter": "c",
        "text": "Tolerância a falhas"
      },
      {
        "letter": "d",
        "text": "Custo-benefício"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 125,
    "question": "Qual tecnologia pode ajustar automaticamente a capacidade de computação conforme a demanda por um aplicativo aumenta ou diminui?",
    "options": [
      {
        "letter": "a",
        "text": "Balanceamento de carga"
      },
      {
        "letter": "b",
        "text": "Auto Scaling"
      },
      {
        "letter": "c",
        "text": "Alta disponibilidade"
      },
      {
        "letter": "d",
        "text": "Tolerância a falhas"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 126,
    "question": "O que um profissional de nuvem deve garantir ao projetar uma arquitetura de alta disponibilidade na AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Os servidores têm conectividade de rede de baixa latência e alta taxa de transferência."
      },
      {
        "letter": "b",
        "text": "Há servidores suficientes disponíveis o tempo todo para operar com carga máxima."
      },
      {
        "letter": "c",
        "text": "Um único componente de aplicativo monolítico lida com todas as operações."
      },
      {
        "letter": "d",
        "text": "A falha de um único componente não deve afetar o aplicativo."
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 127,
    "question": "Qual benefício da AWS permite que as empresas substituam despesas fixas iniciais por despesas variáveis ​ao usar serviços de tecnologia sob demanda?",
    "options": [
      {
        "letter": "a",
        "text": "Alta disponibilidade"
      },
      {
        "letter": "b",
        "text": "Alcance global"
      },
      {
        "letter": "c",
        "text": "Economias de escala"
      },
      {
        "letter": "d",
        "text": "Preços de pagamento conforme o uso"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 128,
    "question": "Um profissional de nuvem quer saber se existem serviços que podem proteger contra ataques DDoS (Ataque de Negação de Serviço Distribuído) direcionados a serviços da AWS. Qual serviço ou ferramenta da AWS fornecerá essa proteção?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon GuardDuty"
      },
      {
        "letter": "b",
        "text": "Lista de controle de acesso à rede (ACL)"
      },
      {
        "letter": "c",
        "text": "AWS Shield"
      },
      {
        "letter": "d",
        "text": "Grupo de segurança"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 129,
    "question": "Qual serviço da AWS um profissional de nuvem deve usar para automatizar o gerenciamento de configuração usando o Puppet?",
    "options": [
      {
        "letter": "a",
        "text": "AWS OpsWorks"
      },
      {
        "letter": "b",
        "text": "AWS CloudFormation"
      },
      {
        "letter": "c",
        "text": "AWS Systems Manager"
      },
      {
        "letter": "d",
        "text": "AWS Config"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 130,
    "question": "Qual ferramenta do Amazon EC2 atua como um firewall virtual para controlar o tráfego de entrada e saída para uma instância do EC2?",
    "options": [
      {
        "letter": "a",
        "text": "Lista de controle de acesso à rede (ACL)"
      },
      {
        "letter": "b",
        "text": "AWS WAF"
      },
      {
        "letter": "c",
        "text": "AWS Shield"
      },
      {
        "letter": "d",
        "text": "Grupo de segurança"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 131,
    "question": "De acordo com o modelo de responsabilidade compartilhada, qual tarefa relacionada à segurança é de responsabilidade do cliente?",
    "options": [
      {
        "letter": "a",
        "text": "Manter as configurações de firewall em nível de hardware."
      },
      {
        "letter": "b",
        "text": "Proteger servidores e racks nos data centers da AWS."
      },
      {
        "letter": "c",
        "text": "Manter a configuração física da rede."
      },
      {
        "letter": "d",
        "text": "Manter a criptografia do lado do servidor."
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 132,
    "question": "Qual serviço um Cloud Practitioner pode usar para configurar limites personalizados de custo e uso e habilitar alertas para quando os limites definidos forem excedidos?",
    "options": [
      {
        "letter": "a",
        "text": "Faturamento consolidado"
      },
      {
        "letter": "b",
        "text": "AWS Trusted Advisor"
      },
      {
        "letter": "c",
        "text": "AWS Budgets"
      },
      {
        "letter": "d",
        "text": "Cost Explorer"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 133,
    "question": "Qual painel da AWS exibe informações relevantes e oportunas para ajudar os usuários a gerenciar eventos em andamento e fornece notificações proativas para ajudar no planejamento de atividades agendadas?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Service Health Dashboard"
      },
      {
        "letter": "b",
        "text": "Painel do AWS Trusted Advisor"
      },
      {
        "letter": "c",
        "text": "Painel do Amazon CloudWatch"
      },
      {
        "letter": "d",
        "text": "AWS Personal Health Dashboard"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 134,
    "question": "Qual é a função do Auto Scaling do Amazon EC2?",
    "options": [
      {
        "letter": "a",
        "text": "Aumenta ou diminui o tamanho das instâncias do EC2 automaticamente, com base na demanda."
      },
      {
        "letter": "b",
        "text": "Modifica automaticamente a taxa de transferência de rede das instâncias do EC2, com base na demanda."
      },
      {
        "letter": "c",
        "text": "Aumenta ou diminui o número de instâncias do EC2 automaticamente, com base na demanda."
      },
      {
        "letter": "d",
        "text": "Atualiza automaticamente o modelo de preços do EC2, com base na demanda."
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 135,
    "question": "Qual das seguintes opções descreve melhor uma Zona de Disponibilidade na Nuvem AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Um ou mais locais de borda espalhados pelo mundo"
      },
      {
        "letter": "b",
        "text": "Um ou mais data centers físicos"
      },
      {
        "letter": "c",
        "text": "Um local geográfico completamente isolado"
      },
      {
        "letter": "d",
        "text": "Uma sub-rede para implantar recursos"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 136,
    "question": "Uma empresa precisa de um painel para gerar relatórios ao usar uma solução de Business Intelligence. Qual serviço da AWS pode ser usado?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon QuickSight"
      },
      {
        "letter": "b",
        "text": "Amazon Redshift"
      },
      {
        "letter": "c",
        "text": "Amazon Kinesis"
      },
      {
        "letter": "d",
        "text": "Amazon Athena"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 137,
    "question": "Qual serviço da AWS pode ser usado para executar contêineres Docker?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon ECR"
      },
      {
        "letter": "b",
        "text": "AWS Lambda"
      },
      {
        "letter": "c",
        "text": "Amazon ECS"
      },
      {
        "letter": "d",
        "text": "Amazon AMI"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 138,
    "question": "Qual serviço da AWS pode ser usado para carregar dados do Amazon S3, transformá-los e movê-los para outro destino?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Redshift"
      },
      {
        "letter": "b",
        "text": "AWS Glue"
      },
      {
        "letter": "c",
        "text": "Amazon Kinesis"
      },
      {
        "letter": "d",
        "text": "Amazon EMR"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 139,
    "question": "Uma empresa precisa de uma conexão consistente e dedicada entre os recursos da AWS e um sistema on-premises. Qual serviço da AWS pode atender a esse requisito?",
    "options": [
      {
        "letter": "a",
        "text": "AWS DataSync"
      },
      {
        "letter": "b",
        "text": "AWS Direct Connect"
      },
      {
        "letter": "c",
        "text": "AWS Managed VPN"
      },
      {
        "letter": "d",
        "text": "Amazon Connect"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 140,
    "question": "Qual serviço de armazenamento híbrido da AWS permite que os aplicativos locais de um usuário usem o armazenamento em nuvem da AWS perfeitamente?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Connect"
      },
      {
        "letter": "b",
        "text": "AWS Direct Connect"
      },
      {
        "letter": "c",
        "text": "AWS Storage Gateway"
      },
      {
        "letter": "d",
        "text": "AWS Backup"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 141,
    "question": "Qual serviço da AWS pode atuar como uma solução de armazenamento híbrida para conectar cargas de trabalho locais com a nuvem da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Backup"
      },
      {
        "letter": "b",
        "text": "AWS Storage Gateway"
      },
      {
        "letter": "c",
        "text": "Amazon Connect"
      },
      {
        "letter": "d",
        "text": "AWS Direct Connect"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 142,
    "question": "Qual serviço da AWS pode ser usado para executar operações de extração, transformação e carregamento (ETL) de dados para que você possa preparar os dados para análises?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon S3 Select"
      },
      {
        "letter": "b",
        "text": "Amazon QuickSight"
      },
      {
        "letter": "c",
        "text": "AWS Glue"
      },
      {
        "letter": "d",
        "text": "Amazon Athena"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 143,
    "question": "De acordo com o modelo de responsabilidade compartilhada da AWS, qual tarefa é de responsabilidade do cliente?",
    "options": [
      {
        "letter": "a",
        "text": "Manter a infraestrutura do Amazon API Gateway."
      },
      {
        "letter": "b",
        "text": "Atualizar o sistema operacional das instâncias do AWS Lambda."
      },
      {
        "letter": "c",
        "text": "Manter a infraestrutura necessária para executar o Amazon DynamoDB."
      },
      {
        "letter": "d",
        "text": "Atualizar o sistema operacional convidado nas instâncias do Amazon EC2."
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 144,
    "question": "Qual serviço da AWS um Cloud Practitioner deve usar para estabelecer uma conexão de rede segura entre uma rede on-premises e a AWS?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Web Application Firewall (WAF)"
      },
      {
        "letter": "b",
        "text": "Rede Privada Virtual"
      },
      {
        "letter": "c",
        "text": "Amazon Virtual Private Cloud (VPC)"
      },
      {
        "letter": "d",
        "text": "AWS Mobile Hub"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 145,
    "question": "Qual das seguintes opções pode ser usada para identificar um usuário específico que encerrou uma instância de banco de dados do Amazon RDS?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Inspector"
      },
      {
        "letter": "b",
        "text": "AWS Trusted Advisor"
      },
      {
        "letter": "c",
        "text": "Amazon CloudWatch"
      },
      {
        "letter": "d",
        "text": "AWS CloudTrail"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 146,
    "question": "Qual serviço da AWS o AWS Snowball Edge suporta nativamente?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon EC2"
      },
      {
        "letter": "b",
        "text": "AWS Server Migration Service (AWS SMS)"
      },
      {
        "letter": "c",
        "text": "AWS Database Migration Service (AWS DMS)"
      },
      {
        "letter": "d",
        "text": "AWS Trusted Advisor"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 147,
    "question": "Uma empresa está migrando máquinas virtuais (VMs) de seu data center para a Nuvem AWS. A empresa planeja implantar essas máquinas migradas no Amazon EC2. Qual modelo de computação em nuvem a empresa usará para esta operação?",
    "options": [
      {
        "letter": "a",
        "text": "Software como Serviço (SaaS)"
      },
      {
        "letter": "b",
        "text": "Plataforma como Serviço (PaaS)"
      },
      {
        "letter": "c",
        "text": "Função como Serviço (FaaS)"
      },
      {
        "letter": "d",
        "text": "Infraestrutura como Serviço (IaaS)"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 148,
    "question": "Um profissional de nuvem notou que endereços IP pertencentes à AWS estão sendo usados ​ para tentar inundar as portas de alguns sistemas da empresa. Para quem o problema deve ser relatado?",
    "options": [
      {
        "letter": "a",
        "text": "Rede de Parceiros da AWS (APN)"
      },
      {
        "letter": "b",
        "text": "AWS Professional Services"
      },
      {
        "letter": "c",
        "text": "Equipe de Confiança e Segurança da AWS"
      },
      {
        "letter": "d",
        "text": "Gerente de Contas Técnicas (TAM) da AWS"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 149,
    "question": "Qual princípio de design de arquitetura em nuvem é suportado pela implantação de cargas de trabalho em várias Zonas de Disponibilidade?",
    "options": [
      {
        "letter": "a",
        "text": "Habilitar elasticidade."
      },
      {
        "letter": "b",
        "text": "Projetar para falhas."
      },
      {
        "letter": "c",
        "text": "Automatizar infraestrutura."
      },
      {
        "letter": "d",
        "text": "Projetar para agilidade."
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 150,
    "question": "Qual serviço da AWS é um serviço de controle de versão totalmente gerenciado que hospeda repositórios seguros baseados em Git?",
    "options": [
      {
        "letter": "a",
        "text": "AWS CodePipeline"
      },
      {
        "letter": "b",
        "text": "AWS CodeDeploy"
      },
      {
        "letter": "c",
        "text": "AWS CodeBuild"
      },
      {
        "letter": "d",
        "text": "AWS CodeCommit"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 151,
    "question": "Uma empresa precisa de um serviço da AWS que possa monitorar continuamente a conta da AWS da empresa. Se houver alguma alteração na arquitetura, os membros da equipe devem ser contatados. Qual serviço atenderá a esses requisitos?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon GuardDuty"
      },
      {
        "letter": "b",
        "text": "Amazon Macie"
      },
      {
        "letter": "c",
        "text": "AWS Config"
      },
      {
        "letter": "d",
        "text": "AWS Trusted Advisor"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 152,
    "question": "Uma Política de Controle de Serviço (SCP) é usada para gerenciar as permissões máximas disponíveis e está associada a qual dos seguintes itens? As políticas de controle de serviço (SCPs) gerenciam permissões para qual dos seguintes itens?",
    "options": [
      {
        "letter": "a",
        "text": "Zonas de Disponibilidade"
      },
      {
        "letter": "b",
        "text": "Regiões da AWS"
      },
      {
        "letter": "c",
        "text": "Infraestrutura Global da AWS"
      },
      {
        "letter": "d",
        "text": "AWS Organizations"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 153,
    "question": "Um profissional de nuvem precisa migrar 70 TB de dados de um data center on-premises para a Nuvem AWS. A empresa tem uma conexão de internet lenta e instável. Qual serviço da AWS o profissional de nuvem pode usar para transferir os dados?",
    "options": [
      {
        "letter": "a",
        "text": "AWS DataSync"
      },
      {
        "letter": "b",
        "text": "AWS Snowball"
      },
      {
        "letter": "c",
        "text": "Amazon S3 Glacier"
      },
      {
        "letter": "d",
        "text": "AWS Storage Gateway"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 154,
    "question": "Um profissional de nuvem precisa de um método simples para identificar se o acesso irrestrito aos recursos foi permitido por grupos de segurança. Qual serviço o profissional de nuvem pode usar?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon CloudWatch"
      },
      {
        "letter": "b",
        "text": "Logs de fluxo da VPC"
      },
      {
        "letter": "c",
        "text": "AWS Trusted Advisor"
      },
      {
        "letter": "d",
        "text": "AWS CloudTrail"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 155,
    "question": "Qual serviço gerenciado pela AWS pode ser usado para processar grandes quantidades de dados usando uma estrutura Hadoop hospedada?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon DynamoDB"
      },
      {
        "letter": "b",
        "text": "Amazon Redshift"
      },
      {
        "letter": "c",
        "text": "Amazon Athena"
      },
      {
        "letter": "d",
        "text": "Amazon EMR"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 156,
    "question": "Uma empresa possui 50 unidades de negócios diferentes e exige que as informações de faturamento de cada unidade de negócios sejam visualizadas separadamente. O que um profissional de nuvem deve recomendar?",
    "options": [
      {
        "letter": "a",
        "text": "Use contas da AWS separadas para cada unidade de negócios e, em seguida, filtre por unidade usando o relatório de cobertura."
      },
      {
        "letter": "b",
        "text": "Aplique tags nos recursos de cada unidade de negócios e, em seguida, filtre por unidade no Cost Explorer."
      },
      {
        "letter": "c",
        "text": "Use uma VPC diferente para cada unidade de negócios e, em seguida, filtre por unidade usando um Relatório de Custo e Uso da AWS."
      },
      {
        "letter": "d",
        "text": "Coloque cada unidade de negócios em uma região da AWS diferente e, em seguida, filtre por unidade no Cost Explorer."
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 157,
    "question": "Uma empresa precisa otimizar custos e uso de recursos por meio do monitoramento da integridade operacional de todos os recursos em execução na AWS. Qual serviço da AWS atenderá a esses requisitos?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon CloudWatch"
      },
      {
        "letter": "b",
        "text": "AWS Control Tower"
      },
      {
        "letter": "c",
        "text": "AWS Config"
      },
      {
        "letter": "d",
        "text": "AWS CloudTrail"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 158,
    "question": "Qual método de autenticação é usado para autenticar chamadas programáticas para serviços da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Chaves de acesso"
      },
      {
        "letter": "b",
        "text": "Par de chaves"
      },
      {
        "letter": "c",
        "text": "Certificado do servidor"
      },
      {
        "letter": "d",
        "text": "Senha do console"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 159,
    "question": "Como uma organização pode rastrear o inventário de recursos e o histórico de configuração para fins de segurança e conformidade regulatória?",
    "options": [
      {
        "letter": "a",
        "text": "Criar uma trilha do Amazon CloudTrail"
      },
      {
        "letter": "b",
        "text": "Configurar o AWS Config com os tipos de recursos"
      },
      {
        "letter": "c",
        "text": "Implementar o Amazon GuardDuty"
      },
      {
        "letter": "d",
        "text": "Executar um relatório com o AWS Artifact"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 160,
    "question": "Qual entidade do IAM está associada a um ID de chave de acesso e uma chave de acesso secreta?",
    "options": [
      {
        "letter": "a",
        "text": "Grupo do IAM"
      },
      {
        "letter": "b",
        "text": "Função do IAM"
      },
      {
        "letter": "c",
        "text": "Política do IAM"
      },
      {
        "letter": "d",
        "text": "Usuário do IAM"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 161,
    "question": "Qual das seguintes opções é uma vantagem da computação em nuvem da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Trocar despesas fixas por despesas variáveis."
      },
      {
        "letter": "b",
        "text": "Trocar segurança por elasticidade."
      },
      {
        "letter": "c",
        "text": "Trocar elasticidade por desempenho."
      },
      {
        "letter": "d",
        "text": "Trocar excelência operacional por agilidade."
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 162,
    "question": "Como um usuário pode bloquear um endereço IP suspeito de se conectar a uma instância do Amazon EC2?",
    "options": [
      {
        "letter": "a",
        "text": "Bloquear o IP na regra de entrada de um grupo de segurança e ACL de rede."
      },
      {
        "letter": "b",
        "text": "Bloquear o IP na regra de entrada de uma ACL de rede."
      },
      {
        "letter": "c",
        "text": "Bloquear o IP na regra de saída de um grupo de segurança."
      },
      {
        "letter": "d",
        "text": "Bloquear o IP na regra de saída de um grupo de segurança e ACL de rede."
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 163,
    "question": "Uma empresa possui um site que entrega conteúdo estático de um bucket do Amazon S3 para usuários de todo o mundo. Qual serviço da AWS entregará o conteúdo com baixa latência?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "letter": "b",
        "text": "AWS Lambda"
      },
      {
        "letter": "c",
        "text": "AWS Global Accelerator"
      },
      {
        "letter": "d",
        "text": "Amazon CloudFront"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 164,
    "question": "Qual é um benefício específico de um plano de suporte Enterprise?",
    "options": [
      {
        "letter": "a",
        "text": "Arquiteto de Soluções AWS incluso"
      },
      {
        "letter": "b",
        "text": "Associado de Suporte em Nuvem incluso"
      },
      {
        "letter": "c",
        "text": "Gerente de Suporte Técnico incluso"
      },
      {
        "letter": "d",
        "text": "Gerente Técnico de Contas incluso"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 165,
    "question": "Qual serviço ou recurso da AWS pode ser usado para capturar informações sobre o tráfego IP de entrada e saída em interfaces de rede em uma VPC?",
    "options": [
      {
        "letter": "a",
        "text": "Gateway da Internet"
      },
      {
        "letter": "b",
        "text": "Logs de fluxo da VPC"
      },
      {
        "letter": "c",
        "text": "Endpoint da VPC"
      },
      {
        "letter": "d",
        "text": "AWS CloudTrail"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 166,
    "question": "Uma empresa planeja conectar seu data center on-premises à Nuvem AWS e requer largura de banda e desempenho consistentes. Qual serviço da AWS a empresa deve escolher?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Connect"
      },
      {
        "letter": "b",
        "text": "Amazon CloudFront"
      },
      {
        "letter": "c",
        "text": "VPN da AWS"
      },
      {
        "letter": "d",
        "text": "AWS Direct Connect"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 167,
    "question": "Qual serviço da AWS ou componente da VPC permite que o tráfego de entrada da internet acesse uma VPC?",
    "options": [
      {
        "letter": "a",
        "text": "Gateway NAT"
      },
      {
        "letter": "b",
        "text": "Tabela de rotas da VPC"
      },
      {
        "letter": "c",
        "text": "Gateway Privado Virtual"
      },
      {
        "letter": "d",
        "text": "Gateway da Internet"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 168,
    "question": "Qual é um benefício de migrar um banco de dados on-premises para o Amazon Relational Database Service (RDS)?",
    "options": [
      {
        "letter": "a",
        "text": "Você pode executar qualquer mecanismo de banco de dados"
      },
      {
        "letter": "b",
        "text": "Não há necessidade de gerenciar sistemas operacionais"
      },
      {
        "letter": "c",
        "text": "Você pode escalar verticalmente sem tempo de inatividade"
      },
      {
        "letter": "d",
        "text": "Não é necessária administração de banco de dados"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 169,
    "question": "Uma empresa de TI implantou sua infraestrutura na nuvem da AWS. Deve haver um banco de dados que suporte leituras com latência inferior a um milissegundo para aplicativos críticos. Qual serviço da AWS atenderá a esse requisito?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Glue"
      },
      {
        "letter": "b",
        "text": "Amazon ElastiCache"
      },
      {
        "letter": "c",
        "text": "Amazon RDS"
      },
      {
        "letter": "d",
        "text": "Amazon EMR"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 170,
    "question": "Uma empresa de comércio eletrônico está usando grupos de Auto Scaling para gerenciar um grupo de servidores web em execução no Amazon EC2 e que também estão posicionados atrás de um Elastic Load Balancer. Essa arquitetura segue qual prática recomendada do AWS WellArchitected Framework?",
    "options": [
      {
        "letter": "a",
        "text": "Proteger a carga de trabalho"
      },
      {
        "letter": "b",
        "text": "Pensar em paralelo"
      },
      {
        "letter": "c",
        "text": "Projetar para falhas"
      },
      {
        "letter": "d",
        "text": "Desacoplar componentes de infraestrutura"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 171,
    "question": "Qual plano de suporte da AWS fornece acesso a revisões arquitetônicas e operacionais, bem como acesso 24 horas por dia, 7 dias por semana, a engenheiros de suporte na nuvem por e-mail, chat online e telefone?",
    "options": [
      {
        "letter": "a",
        "text": "Enterprise"
      },
      {
        "letter": "b",
        "text": "Developer"
      },
      {
        "letter": "c",
        "text": "Business"
      },
      {
        "letter": "d",
        "text": "Basic"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 172,
    "question": "Qual tecnologia permite que a capacidade de computação se ajuste conforme as cargas mudam?",
    "options": [
      {
        "letter": "a",
        "text": "Auto Scaling"
      },
      {
        "letter": "b",
        "text": "Round robin"
      },
      {
        "letter": "c",
        "text": "Balanceamento de carga"
      },
      {
        "letter": "d",
        "text": "Failover automático"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 173,
    "question": "Um gerente está planejando migrar aplicativos para a Nuvem AWS e precisa obter relatórios de conformidade da AWS. Como esses relatórios podem ser gerados?",
    "options": [
      {
        "letter": "a",
        "text": "Crie um ticket de suporte com o Suporte da AWS."
      },
      {
        "letter": "b",
        "text": "Baixe os relatórios do AWS Secrets Manager."
      },
      {
        "letter": "c",
        "text": "Baixe os relatórios do AWS Artifact."
      },
      {
        "letter": "d",
        "text": "Entre em contato com a equipe de Conformidade da AWS."
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 174,
    "question": "Como o Amazon CloudFront entrega conteúdo aos usuários finais com baixa latência usando a infraestrutura global da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Conexões do AWS Direct Connect"
      },
      {
        "letter": "b",
        "text": "Locais de borda"
      },
      {
        "letter": "c",
        "text": "Regiões da AWS"
      },
      {
        "letter": "d",
        "text": "Zonas de disponibilidade"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 175,
    "question": "Uma empresa usa atualmente um aplicativo baseado em SAML (Security Assertion Markup Language) para fazer login em aplicativos de negócios de terceiros e gostaria de hospedá-lo na AWS usando serviços gerenciados. Qual serviço da AWS atenderá a esse requisito?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Single Sign-On."
      },
      {
        "letter": "b",
        "text": "AWS CLI."
      },
      {
        "letter": "c",
        "text": "Amazon Cognito."
      },
      {
        "letter": "d",
        "text": "AWS Identity and Access Management (IAM)."
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 176,
    "question": "Uma instância do Amazon EC2 executando a AMI do Amazon Linux 2 é cobrada em qual incremento?",
    "options": [
      {
        "letter": "a",
        "text": "Por hora"
      },
      {
        "letter": "b",
        "text": "Por CPU"
      },
      {
        "letter": "c",
        "text": "Por GB"
      },
      {
        "letter": "d",
        "text": "Por segundo"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 177,
    "question": "Uma empresa possui um aplicativo baseado em Linux de missão crítica. O aplicativo deve ser executado todas as segundas-feiras, das 6h às 22h. Como o aplicativo é crítico, ele não pode ser interrompido. Qual opção de compra de instância do Amazon EC2 atende a esses requisitos com o melhor custo-benefício?",
    "options": [
      {
        "letter": "a",
        "text": "Instâncias Reservadas Regionais"
      },
      {
        "letter": "b",
        "text": "Instâncias Spot"
      },
      {
        "letter": "c",
        "text": "Hosts Dedicados"
      },
      {
        "letter": "d",
        "text": "Reserva de Capacidade Sob Demanda com Savings Plan"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 178,
    "question": "Como o Auto Scaling do Amazon EC2 ajuda na resiliência?",
    "options": [
      {
        "letter": "a",
        "text": "Iniciando e encerrando instâncias conforme necessário"
      },
      {
        "letter": "b",
        "text": "Distribuindo conexões para instâncias do EC2"
      },
      {
        "letter": "c",
        "text": "Alterando os tipos de instância para aumentar a capacidade"
      },
      {
        "letter": "d",
        "text": "Automatizando o failover de aplicativos"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 179,
    "question": "Qual serviço da AWS desacopla os componentes do aplicativo para que eles possam ser executados independentemente?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Simple Queue Service (Amazon SQS)"
      },
      {
        "letter": "b",
        "text": "AWS Glue"
      },
      {
        "letter": "c",
        "text": "Amazon Simple Workflow Service (Amazon SWF)"
      },
      {
        "letter": "d",
        "text": "Amazon Simple Notification Service (Amazon SNS)"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 180,
    "question": "Uma nova aplicação web está sendo desenvolvida por uma empresa. Fazer login na aplicação por meio de um provedor de identidade social é um requisito essencial para a empresa. Qual serviço da AWS atenderá a esses requisitos?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Single Sign-On."
      },
      {
        "letter": "b",
        "text": "AWS Directory Service."
      },
      {
        "letter": "c",
        "text": "AWS Identity and Access Management (IAM)."
      },
      {
        "letter": "d",
        "text": "Amazon Cognito."
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 181,
    "question": "Uma organização está considerando implementar uma nova carga de trabalho na Nuvem AWS. No entanto, a empresa primeiro deseja prever os custos. Qual ferramenta a empresa deve usar para estimar o custo da carga de trabalho?",
    "options": [
      {
        "letter": "a",
        "text": "Calculadora de preços da AWS."
      },
      {
        "letter": "b",
        "text": "Cost Explorer."
      },
      {
        "letter": "c",
        "text": "Relatório de custos e uso da AWS."
      },
      {
        "letter": "d",
        "text": "Painel de faturamento e gerenciamento de custos da AWS."
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 182,
    "question": "Uma empresa precisa invocar um fluxo de trabalho do AWS Step Functions sempre que o estado de uma instância do Amazon EC2 mudar. Qual serviço da AWS a empresa pode usar para atender a esse requisito?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon EventBridge"
      },
      {
        "letter": "b",
        "text": "Amazon Connect"
      },
      {
        "letter": "c",
        "text": "AWS Fargate"
      },
      {
        "letter": "d",
        "text": "Amazon SageMaker"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 183,
    "question": "Como uma empresa pode separar os custos de armazenamento, Amazon EC2, Amazon S3 e outros serviços da AWS por departamento?",
    "options": [
      {
        "letter": "a",
        "text": "Criar uma VPC separada para cada departamento"
      },
      {
        "letter": "b",
        "text": "Usar o AWS Organizations"
      },
      {
        "letter": "c",
        "text": "Adicionar tags específicas do departamento a cada recurso"
      },
      {
        "letter": "d",
        "text": "Criar uma conta da AWS separada para cada departamento"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 184,
    "question": "Um usuário precisa de uma maneira rápida de determinar se alguma instância do Amazon EC2 possui portas que permitem acesso irrestrito. Qual serviço da AWS atenderá a esse requisito?",
    "options": [
      {
        "letter": "a",
        "text": "Logs do AWS CloudWatch"
      },
      {
        "letter": "b",
        "text": "AWS Trusted Advisor"
      },
      {
        "letter": "c",
        "text": "AWS Shield"
      },
      {
        "letter": "d",
        "text": "Logs de fluxo da VPC"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 185,
    "question": "Qual pilar do AWS Well-Architected Framework inclui o princípio de design de definir cargas de trabalho, aplicativos e infraestrutura como código (IaC)?",
    "options": [
      {
        "letter": "a",
        "text": "Segurança"
      },
      {
        "letter": "b",
        "text": "Confiabilidade"
      },
      {
        "letter": "c",
        "text": "Excelência operacional"
      },
      {
        "letter": "d",
        "text": "Eficiência de desempenho"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 186,
    "question": "Uma empresa tem usado uma política IAM gerenciada pela AWS para conceder permissões aos usuários, mas precisa adicionar algumas permissões. Como isso pode ser feito?",
    "options": [
      {
        "letter": "a",
        "text": "Criar uma Política de Controle de Serviço."
      },
      {
        "letter": "b",
        "text": "Editar a política gerenciada pela AWS."
      },
      {
        "letter": "c",
        "text": "Criar uma política IAM personalizada."
      },
      {
        "letter": "d",
        "text": "Criar uma regra no AWS WAF."
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 187,
    "question": "Qual modelo de preços do Amazon EC2 é o mais econômico para um servidor de banco de dados sempre ativo e dimensionado corretamente, executando um projeto que durará 1 ano?",
    "options": [
      {
        "letter": "a",
        "text": "Instâncias spot"
      },
      {
        "letter": "b",
        "text": "Instâncias reservadas conversíveis"
      },
      {
        "letter": "c",
        "text": "Instâncias sob demanda"
      },
      {
        "letter": "d",
        "text": "Instâncias reservadas padrão"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 188,
    "question": "Depois que uma organização migrou vários servidores para a AWS, ela não tem certeza do que deve gerenciar diretamente. Qual custo é de responsabilidade direta da empresa?",
    "options": [
      {
        "letter": "a",
        "text": "Custo da segurança física para o data center da AWS."
      },
      {
        "letter": "b",
        "text": "Custo da infraestrutura de hardware na AWS."
      },
      {
        "letter": "c",
        "text": "Custo de energia para os servidores da AWS."
      },
      {
        "letter": "d",
        "text": "Custo das licenças de software de aplicativo."
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 189,
    "question": "Quais são os benefícios de usar o Amazon Rekognition com arquivos de imagem?",
    "options": [
      {
        "letter": "a",
        "text": "Pode ajudar na compressão de imagens"
      },
      {
        "letter": "b",
        "text": "Pode ser usado para transcodificar áudio"
      },
      {
        "letter": "c",
        "text": "Pode ser usado para identificar objetos em uma imagem"
      },
      {
        "letter": "d",
        "text": "Pode ser usado para redimensionar imagens"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 190,
    "question": "Uma organização migra uma carga de trabalho para instâncias do Amazon EC2 na AWS. A relação custo-benefício é fundamental para executar a carga de trabalho corretamente na nuvem. O que a empresa pode fazer para atender a esse requisito?",
    "options": [
      {
        "letter": "a",
        "text": "Use o AWS Key Management Service (AWS KMS)."
      },
      {
        "letter": "b",
        "text": "Use várias contas da AWS e faturamento consolidado."
      },
      {
        "letter": "c",
        "text": "Ajuste o tamanho de todas as instâncias do EC2 usadas na implantação."
      },
      {
        "letter": "d",
        "text": "Use o AWS CloudFormation para implantar a infraestrutura."
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 191,
    "question": "Qual serviço permite que uma organização visualize dados operacionais de vários serviços da AWS por meio de uma interface de usuário unificada e automatize tarefas operacionais?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon CloudWatch"
      },
      {
        "letter": "b",
        "text": "AWS Config"
      },
      {
        "letter": "c",
        "text": "AWS Systems Manager"
      },
      {
        "letter": "d",
        "text": "AWS OpsWorks"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 192,
    "question": "Qual serviço pode ser usado para criar facilmente várias contas?",
    "options": [
      {
        "letter": "a",
        "text": "AWS CloudFormation"
      },
      {
        "letter": "b",
        "text": "AWS Organizations"
      },
      {
        "letter": "c",
        "text": "Amazon Connect"
      },
      {
        "letter": "d",
        "text": "AWS IAM"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 193,
    "question": "Uma organização migrou recentemente para a AWS e deseja habilitar a proteção inteligente contra ameaças e o monitoramento contínuo em todas as suas contas. Qual serviço da AWS a empresa deve usar para atingir esse objetivo?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Detective"
      },
      {
        "letter": "b",
        "text": "AWS Shield"
      },
      {
        "letter": "c",
        "text": "Amazon GuardDuty"
      },
      {
        "letter": "d",
        "text": "Amazon Macie"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 194,
    "question": "Como a infraestrutura global da AWS oferece alta disponibilidade e tolerância a falhas aos clientes?",
    "options": [
      {
        "letter": "a",
        "text": "A infraestrutura da AWS consiste em sub-redes contendo várias Zonas de Disponibilidade com vários data centers localizados na mesma região geográfica."
      },
      {
        "letter": "b",
        "text": "A AWS permite que os usuários escolham regiões e data centers da AWS para que possam selecionar os data centers mais próximos em diferentes regiões."
      },
      {
        "letter": "c",
        "text": "A infraestrutura da AWS é composta por várias regiões da AWS em diversas zonas de disponibilidade localizadas em áreas com baixo risco de inundação e interconectadas por redes de baixa latência e fontes de alimentação redundantes"
      },
      {
        "letter": "d",
        "text": "A infraestrutura da AWS consiste em regiões isoladas da AWS com zonas de disponibilidade independentes, conectadas por redes de baixa latência e fontes de alimentação redundantes."
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 195,
    "question": "Qual serviço pode ser usado para mover exabytes de dados para a AWS de forma econômica?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Snowmobile"
      },
      {
        "letter": "b",
        "text": "Replicação entre Regiões (CRR) do S3"
      },
      {
        "letter": "c",
        "text": "S3 Transfer Acceleration"
      },
      {
        "letter": "d",
        "text": "AWS Snowball"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 196,
    "question": "É importante que os usuários tenham acesso a todos os recursos de que precisam. Além disso, o usuário precisa da capacidade de aumentar e diminuir a escala rapidamente. Esses recursos são descritos por qual benefício da Nuvem AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Economia de escala"
      },
      {
        "letter": "b",
        "text": "Elasticidade"
      },
      {
        "letter": "c",
        "text": "Confiabilidade"
      },
      {
        "letter": "d",
        "text": "Preços de pagamento conforme o uso"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 197,
    "question": "No modelo de responsabilidade compartilhada da AWS, qual das seguintes opções é um exemplo de responsabilidade do cliente na Nuvem AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Gerenciamento de locais de borda"
      },
      {
        "letter": "b",
        "text": "Configuração de firewall"
      },
      {
        "letter": "c",
        "text": "Infraestrutura global"
      },
      {
        "letter": "d",
        "text": "Segurança física"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 198,
    "question": "Existem serviços ou recursos da AWS que identificam e pesquisam recursos da AWS compartilhados externamente?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon OpenSearch Service (Amazon Elasticsearch Service)."
      },
      {
        "letter": "b",
        "text": "AWS Fargate."
      },
      {
        "letter": "c",
        "text": "AWS IAM Access Analyzer."
      },
      {
        "letter": "d",
        "text": "AWS Control Tower."
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 199,
    "question": "Qual serviço ou recurso da AWS pode ser usado para restringir as ações individuais da API que usuários e funções em cada conta membro podem acessar?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Organizations"
      },
      {
        "letter": "b",
        "text": "AWS IAM"
      },
      {
        "letter": "c",
        "text": "Amazon Macie"
      },
      {
        "letter": "d",
        "text": "AWS Shield"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 200,
    "question": "Qual serviço da AWS pode ser usado para rastrear a atividade dos usuários na AWS?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Directory Service"
      },
      {
        "letter": "b",
        "text": "Amazon Inspector"
      },
      {
        "letter": "c",
        "text": "AWS CloudTrail"
      },
      {
        "letter": "d",
        "text": "Amazon CloudWatch"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 201,
    "question": "Qual das opções abaixo é um exemplo de benefício arquitetônico da migração para a nuvem?",
    "options": [
      {
        "letter": "a",
        "text": "Escalabilidade vertical"
      },
      {
        "letter": "b",
        "text": "Elasticidade"
      },
      {
        "letter": "c",
        "text": "Serviços monolíticos"
      },
      {
        "letter": "d",
        "text": "Hardware proprietário"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 202,
    "question": "A capacidade de uma arquitetura de suportar falhas com tempo de inatividade mínimo demonstra qual benefício da Nuvem AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Agilidade"
      },
      {
        "letter": "b",
        "text": "Escalabilidade"
      },
      {
        "letter": "c",
        "text": "Elasticidade"
      },
      {
        "letter": "d",
        "text": "Alta disponibilidade"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 203,
    "question": "Qual serviço da AWS fornece downloads sob demanda de relatórios de segurança e conformidade da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Trusted Advisor"
      },
      {
        "letter": "b",
        "text": "AWS Directory Service"
      },
      {
        "letter": "c",
        "text": "Amazon Inspector"
      },
      {
        "letter": "d",
        "text": "AWS Artifact"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 204,
    "question": "Uma empresa possui diversas unidades de negócios que utilizam os mesmos serviços da AWS para gerenciar seus diferentes aplicativos. Qual serviço ou ferramenta da AWS a empresa pode usar para receber descontos por volume em várias contas da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Cost Explorer"
      },
      {
        "letter": "b",
        "text": "AWS Organizations"
      },
      {
        "letter": "c",
        "text": "Relatório de Custos e Uso da AWS"
      },
      {
        "letter": "d",
        "text": "Orçamentos da AWS"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 205,
    "question": "Qual entidade do IAM pode ser usada para atribuir permissões aos serviços da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Security Token Service (STS)"
      },
      {
        "letter": "b",
        "text": "ID da Chave de Acesso e Chave de Acesso Secreta do IAM"
      },
      {
        "letter": "c",
        "text": "Política do IAM"
      },
      {
        "letter": "d",
        "text": "Função do IAM"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 206,
    "question": "A Infraestrutura Global da AWS consiste em quais dos seguintes componentes?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Organizations"
      },
      {
        "letter": "b",
        "text": "Amazon LightSail"
      },
      {
        "letter": "c",
        "text": "Amazon Alexa"
      },
      {
        "letter": "d",
        "text": "Regiões da AWS"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 207,
    "question": "Qual entidade do IAM pode ser usada para atribuir permissões a vários usuários?",
    "options": [
      {
        "letter": "a",
        "text": "Política de senha do IAM"
      },
      {
        "letter": "b",
        "text": "Função do IAM"
      },
      {
        "letter": "c",
        "text": "Grupo do IAM"
      },
      {
        "letter": "d",
        "text": "Usuário do IAM"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 208,
    "question": "Um engenheiro de operações de segurança precisa implementar detecção e monitoramento de ameaças para comportamentos maliciosos ou não autorizados. Qual serviço deve ser usado?",
    "options": [
      {
        "letter": "a",
        "text": "AWS KMS"
      },
      {
        "letter": "b",
        "text": "AWS CloudHSM"
      },
      {
        "letter": "c",
        "text": "AWS Shield"
      },
      {
        "letter": "d",
        "text": "Amazon GuardDuty"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 209,
    "question": "O AWS Direct Connect é usado por uma empresa que deseja estabelecer conectividade entre várias regiões da AWS usando VPCs. Qual serviço ou recurso da AWS a empresa deve usar para atender a esses requisitos?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Route 53"
      },
      {
        "letter": "b",
        "text": "AWS PrivateLink"
      },
      {
        "letter": "c",
        "text": "Amazon Connect"
      },
      {
        "letter": "d",
        "text": "AWS Transit Gateway"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 210,
    "question": "Você executou uma instância sob demanda do Amazon EC2 com Linux por 4 horas, 5 minutos e 6 segundos. Por quanto tempo você será cobrado?",
    "options": [
      {
        "letter": "a",
        "text": "4 horas"
      },
      {
        "letter": "b",
        "text": "5 horas"
      },
      {
        "letter": "c",
        "text": "4 horas e 6 minutos"
      },
      {
        "letter": "d",
        "text": "4 horas, 5 minutos e 6 segundos"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 211,
    "question": "Uma empresa precisa de um único serviço que possa gerenciar seus requisitos de backup e restauração, seus data lakes e arquivos, tudo em um só lugar. Qual serviço da AWS é adequado para todos esses casos de uso?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Elastic File System (Amazon EFS)."
      },
      {
        "letter": "b",
        "text": "Amazon Simple Storage Service (Amazon S3)."
      },
      {
        "letter": "c",
        "text": "Amazon Elastic Block Store (Amazon EBS)."
      },
      {
        "letter": "d",
        "text": "Amazon FSx for Lustre."
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 212,
    "question": "Seu CTO quer migrar para a nuvem. Quais são as vantagens de custo da migração para a nuvem?",
    "options": [
      {
        "letter": "a",
        "text": "Você pode reduzir seus custos de marketing"
      },
      {
        "letter": "b",
        "text": "Você provisiona apenas o que precisa e ajusta de acordo com a carga máxima"
      },
      {
        "letter": "c",
        "text": "Você não precisa pagar pelo licenciamento de aplicativos"
      },
      {
        "letter": "d",
        "text": "Você obtém transferência de dados gratuita de e para a nuvem"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 213,
    "question": "Uma empresa está considerando migrar de um ambiente on-premises para a Nuvem AWS. Para lidar com a carga de trabalho de forma eficiente, a equipe de TI precisa descarregar esse trabalho pesado o máximo possível. O que a equipe de TI deve fazer para atingir esse objetivo?",
    "options": [
      {
        "letter": "a",
        "text": "Usar o Amazon Elastic Container Service (Amazon ECS) em instâncias do Amazon EC2."
      },
      {
        "letter": "b",
        "text": "Usar o AWS Managed Services para provisionar, executar e dar suporte à infraestrutura da empresa."
      },
      {
        "letter": "c",
        "text": "Provisionar capacidade computacional em excesso para eventos sazonais e picos de tráfego para evitar tempo de inatividade."
      },
      {
        "letter": "d",
        "text": "Incluir atualizações de hardware no calendário operacional para garantir a disponibilidade."
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 214,
    "question": "Como parte de sua arquitetura de nuvem, uma empresa deseja que suas cargas de trabalho sejam resilientes, tenham desempenho correto e consistente e se recuperem de erros em tempo hábil. A qual pilar do AWS Well-Architected Framework esses requisitos estão relacionados?",
    "options": [
      {
        "letter": "a",
        "text": "Eficiência de desempenho"
      },
      {
        "letter": "b",
        "text": "Confiabilidade"
      },
      {
        "letter": "c",
        "text": "Excelência operacional"
      },
      {
        "letter": "d",
        "text": "Segurança"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 215,
    "question": "Qual das seguintes opções é um benefício da migração para a Nuvem AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Compromissos de longo prazo"
      },
      {
        "letter": "b",
        "text": "Compras de capital"
      },
      {
        "letter": "c",
        "text": "Terceirize todas as operações de TI"
      },
      {
        "letter": "d",
        "text": "Pagar pelo que usar"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 216,
    "question": "A capacidade de escalar horizontalmente instâncias do Amazon EC2 com base na demanda é um exemplo de qual conceito?",
    "options": [
      {
        "letter": "a",
        "text": "Alta disponibilidade"
      },
      {
        "letter": "b",
        "text": "Economia de escala"
      },
      {
        "letter": "c",
        "text": "Agilidade"
      },
      {
        "letter": "d",
        "text": "Elasticidade"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 217,
    "question": "Qual serviço totalmente gerenciado da AWS permite que os usuários tragam seus próprios algoritmos de aprendizado de máquina?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Forecast"
      },
      {
        "letter": "b",
        "text": "AWS Artifact"
      },
      {
        "letter": "c",
        "text": "Amazon SageMaker"
      },
      {
        "letter": "d",
        "text": "AWS Data Pipeline"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 218,
    "question": "Qual modelo de preços do Amazon EC2 deve ser usado para atender aos requisitos de licença de software por núcleo?",
    "options": [
      {
        "letter": "a",
        "text": "Hosts Dedicados"
      },
      {
        "letter": "b",
        "text": "Instâncias Reservadas"
      },
      {
        "letter": "c",
        "text": "Instâncias Sob Demanda"
      },
      {
        "letter": "d",
        "text": "Instâncias Spot"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 219,
    "question": "Qual das seguintes opções é uma prática recomendada de arquitetura pela AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Projete para falhas"
      },
      {
        "letter": "b",
        "text": "Pense em servidores, não em serviços"
      },
      {
        "letter": "c",
        "text": "Use processos operacionais manuais"
      },
      {
        "letter": "d",
        "text": "Projete para o sucesso"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 220,
    "question": "Qual equipe está disponível para dar suporte a clientes da AWS com um plano de suporte Enterprise com problemas de conta?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Concierge"
      },
      {
        "letter": "b",
        "text": "AWS Technical Account Manager"
      },
      {
        "letter": "c",
        "text": "Faturamento e Contas da AWS"
      },
      {
        "letter": "d",
        "text": "Suporte Técnico da AWS"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 221,
    "question": "Qual serviço da AWS permite armazenamento em nuvem híbrida entre o ambiente onpremises e a Nuvem AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon S3 Cross Region Replication (CRR)"
      },
      {
        "letter": "b",
        "text": "Amazon CloudFront"
      },
      {
        "letter": "c",
        "text": "Amazon Elastic File System (EFS)"
      },
      {
        "letter": "d",
        "text": "AWS Storage Gateway"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 222,
    "question": "Para executar tarefas analíticas, uma empresa precisa de um data warehouse. Consultas SQL padrão devem ser suportadas pelo data warehouse. Qual serviço da AWS atende a esses requisitos?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Redshift"
      },
      {
        "letter": "b",
        "text": "Amazon EMR"
      },
      {
        "letter": "c",
        "text": "Amazon RDS"
      },
      {
        "letter": "d",
        "text": "Amazon Athena"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 223,
    "question": "Qual serviço pode ser usado para melhorar o desempenho para usuários em todo o mundo?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Connect"
      },
      {
        "letter": "b",
        "text": "Amazon CloudFront"
      },
      {
        "letter": "c",
        "text": "Amazon ElastiCache"
      },
      {
        "letter": "d",
        "text": "AWS LightSail"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 224,
    "question": "O modelo de responsabilidade compartilhada da AWS está incluído em qual pilar do AWS Well-Architected Framework?",
    "options": [
      {
        "letter": "a",
        "text": "Excelência operacional"
      },
      {
        "letter": "b",
        "text": "Confiabilidade"
      },
      {
        "letter": "c",
        "text": "Segurança"
      },
      {
        "letter": "d",
        "text": "Eficiência de desempenho"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 225,
    "question": "Qual afirmação está correta em relação ao Modelo de Responsabilidade Compartilhada da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "A AWS é responsável por criptografar os dados do cliente"
      },
      {
        "letter": "b",
        "text": "Os clientes são responsáveis ​pela segurança da nuvem"
      },
      {
        "letter": "c",
        "text": "Os clientes são responsáveis ​por aplicar patches nos sistemas de armazenamento"
      },
      {
        "letter": "d",
        "text": "A AWS é responsável pela segurança das regiões e zonas de disponibilidade"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 226,
    "question": "Uma organização possui uma nuvem local e acessa sua Nuvem AWS pela Internet. Como ela pode criar uma conexão de nuvem híbrida privada que evite a Internet?",
    "options": [
      {
        "letter": "a",
        "text": "AWS VPN CloudHub"
      },
      {
        "letter": "b",
        "text": "AWS Managed VPN"
      },
      {
        "letter": "c",
        "text": "AWS Direct Connect"
      },
      {
        "letter": "d",
        "text": "AWS VPC Endpoint"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 227,
    "question": "Qual serviço pode ser usado para atribuir uma política a um grupo?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Cognito"
      },
      {
        "letter": "b",
        "text": "AWS IAM"
      },
      {
        "letter": "c",
        "text": "AWS STS"
      },
      {
        "letter": "d",
        "text": "AWS Shield"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 228,
    "question": "Qual é o principal benefício do princípio de \"acoplamento fraco\"?",
    "options": [
      {
        "letter": "a",
        "text": "Reduz a complexidade operacional"
      },
      {
        "letter": "b",
        "text": "Reduz as interdependências para que uma falha em um componente não se propague para outros componentes"
      },
      {
        "letter": "c",
        "text": "Permite que os aplicativos sejam dimensionados automaticamente com base na demanda atual"
      },
      {
        "letter": "d",
        "text": "Automatiza a implantação de infraestrutura usando código"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 229,
    "question": "Qual serviço pode ser adicionado a um banco de dados para fornecer melhor desempenho para algumas solicitações?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Redshift"
      },
      {
        "letter": "b",
        "text": "Amazon ElastiCache"
      },
      {
        "letter": "c",
        "text": "Amazon EFS"
      },
      {
        "letter": "d",
        "text": "Amazon RDS"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 230,
    "question": "Qual afirmação é verdadeira em relação aos dados armazenados em uma região da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Os dados são sempre replicados para outra região"
      },
      {
        "letter": "b",
        "text": "Os dados são sempre replicados automaticamente para pelo menos uma outra zona de disponibilidade"
      },
      {
        "letter": "c",
        "text": "Os dados não são replicados fora de uma região, a menos que você configure isso"
      },
      {
        "letter": "d",
        "text": "Os dados são arquivados automaticamente após 90 dias"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 231,
    "question": "É necessário que uma empresa tenha acesso a armazenamento de arquivos escalável, altamente confiável e totalmente gerenciado que seja executado no protocolo Server Message Block (SMB). Qual serviço da AWS atenderá a esses requisitos?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon S3."
      },
      {
        "letter": "b",
        "text": "Amazon FSX para Windows File Server."
      },
      {
        "letter": "c",
        "text": "Amazon Elastic File System (Amazon EFS)."
      },
      {
        "letter": "d",
        "text": "Amazon Elastic Block Store (Amazon EBS)."
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 232,
    "question": "Em qual serviço da AWS uma empresa pode coletar dados sobre a configuração, o uso e o comportamento de seus data centers locais para auxiliar no planejamento de uma migração para a AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Grupos de Recursos da AWS"
      },
      {
        "letter": "b",
        "text": "AWS Application Discovery Service"
      },
      {
        "letter": "c",
        "text": "AWS Service Catalog"
      },
      {
        "letter": "d",
        "text": "AWS Systems Manager"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 233,
    "question": "Quando uma instância do Amazon EC2 é interrompida, qual dos seguintes serviços da AWS pode ser usado para identificar o usuário que a interrompeu?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Inspector"
      },
      {
        "letter": "b",
        "text": "Logs de Fluxo da VPC"
      },
      {
        "letter": "c",
        "text": "AWS CloudTrail"
      },
      {
        "letter": "d",
        "text": "Amazon CloudWatch"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 234,
    "question": "Qual tipo de armazenamento pode ser montado usando o protocolo NFS em várias instâncias EC2 simultaneamente?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon EBS"
      },
      {
        "letter": "b",
        "text": "Amazon EFS"
      },
      {
        "letter": "c",
        "text": "Amazon S3"
      },
      {
        "letter": "d",
        "text": "Amazon Instance Store"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 235,
    "question": "O que uma organização precisa fazer no Amazon IAM para habilitar o acesso do usuário aos serviços que estão sendo lançados em uma nova região?",
    "options": [
      {
        "letter": "a",
        "text": "Nada, o IAM é global"
      },
      {
        "letter": "b",
        "text": "Habilitar o modo global no IAM para provisionar o acesso necessário"
      },
      {
        "letter": "c",
        "text": "Criar novas contas de usuário na nova região"
      },
      {
        "letter": "d",
        "text": "Atualizar as contas de usuário para permitir o acesso de outra região"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 236,
    "question": "Como posso implantar a infraestrutura da Nuvem AWS em várias regiões da AWS de forma rápida, automática e confiável?",
    "options": [
      {
        "letter": "a",
        "text": "Use o AWS CodeStar para configurar uma cadeia de ferramentas de entrega contínua para implantação automatizada."
      },
      {
        "letter": "b",
        "text": "Use o AWS Systems Manager para automatizar tarefas de gerenciamento, como criar Amazon Machine Images (AMIs) do Amazon EC2 e aplicar patches."
      },
      {
        "letter": "c",
        "text": "Criar e lançar uma Amazon Machine Image (AMI) do Amazon EC2 contendo o código-fonte com ganchos de implantação integrados para lançar outros serviços da AWS"
      },
      {
        "letter": "d",
        "text": "Criar e usar um modelo do AWS CloudFormation"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 237,
    "question": "Qual tipo de AWS Storage Gateway pode ser usado para fazer backup de dados com softwares de backup populares?",
    "options": [
      {
        "letter": "a",
        "text": "Volume Gateway"
      },
      {
        "letter": "b",
        "text": "Tape Gateway"
      },
      {
        "letter": "c",
        "text": "Backup Gateway"
      },
      {
        "letter": "d",
        "text": "File Gateway"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 238,
    "question": "Qual serviço da AWS usa um dispositivo de armazenamento de hardware altamente seguro para armazenar chaves de criptografia?",
    "options": [
      {
        "letter": "a",
        "text": "AWS CloudHSM"
      },
      {
        "letter": "b",
        "text": "AWS IAM"
      },
      {
        "letter": "c",
        "text": "Amazon Cloud Directory"
      },
      {
        "letter": "d",
        "text": "AWS WAF"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 239,
    "question": "Qual serviço da AWS permite adicionar cadastro de usuário, login e controle de acesso a aplicativos web e móveis?",
    "options": [
      {
        "letter": "a",
        "text": "AWS CloudHSM"
      },
      {
        "letter": "b",
        "text": "Amazon Cognito"
      },
      {
        "letter": "c",
        "text": "AWS Directory Service"
      },
      {
        "letter": "d",
        "text": "AWS Artifact"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 240,
    "question": "Uma empresa de TI precisa de um canal de comunicação privado e criptografado entre seu data center local e uma VPC na Nuvem AWS. Qual serviço ou recurso da AWS atende a esse requisito?",
    "options": [
      {
        "letter": "a",
        "text": "VPN Site-to-Site da AWS"
      },
      {
        "letter": "b",
        "text": "AWS Global Accelerator"
      },
      {
        "letter": "c",
        "text": "Pontos de extremidade da VPC"
      },
      {
        "letter": "d",
        "text": "AWS PrivateLink"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 241,
    "question": "Qual serviço pode ser usado para gerenciar versões de configuração?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Service Catalog"
      },
      {
        "letter": "b",
        "text": "Amazon Inspector"
      },
      {
        "letter": "c",
        "text": "AWS Config"
      },
      {
        "letter": "d",
        "text": "AWS Artifact"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 242,
    "question": "Um usuário tem uma conta da AWS com um plano de Suporte da AWS de nível Business e precisa de assistência para lidar com uma interrupção de serviço de produção. Qual ação o usuário deve tomar?",
    "options": [
      {
        "letter": "a",
        "text": "Contatar a equipe dedicada de Suporte Concierge da AWS"
      },
      {
        "letter": "b",
        "text": "Abrir um caso de suporte para sistema crítico de negócios desabilitado"
      },
      {
        "letter": "c",
        "text": "Contatar o Technical Account Manager dedicado"
      },
      {
        "letter": "d",
        "text": "Abrir um caso de suporte para sistema de produção desabilitado"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 243,
    "question": "Qual ferramenta pode ser usada para criar alertas quando o custo real ou previsto dos serviços da AWS exceder um determinado limite?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Budgets"
      },
      {
        "letter": "b",
        "text": "AWS CloudTrail"
      },
      {
        "letter": "c",
        "text": "AWS Cost Explorer"
      },
      {
        "letter": "d",
        "text": "Relatório de Custo e Uso da AWS"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 244,
    "question": "Como a \"elasticidade\" beneficia o design de um aplicativo?",
    "options": [
      {
        "letter": "a",
        "text": "Selecionando a camada de armazenamento correta para sua carga de trabalho"
      },
      {
        "letter": "b",
        "text": "Reservando capacidade para reduzir custos"
      },
      {
        "letter": "c",
        "text": "Dimensionando recursos automaticamente com base na demanda"
      },
      {
        "letter": "d",
        "text": "Reduzindo as interdependências entre os componentes do aplicativo"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 245,
    "question": "Qual é a camada de armazenamento do Amazon S3 mais econômica para dados que não são acessados ​com frequência, mas exigem alta disponibilidade?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon S3 One Zone-IA"
      },
      {
        "letter": "b",
        "text": "Amazon Glacier"
      },
      {
        "letter": "c",
        "text": "Amazon S3 Standard-IA"
      },
      {
        "letter": "d",
        "text": "Amazon S3 Standard"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 246,
    "question": "Uma empresa precisa de economias significativas nos custos de suas cargas de trabalho não interrompíveis na AWS. Qual modelo de precificação de instâncias EC2 a empresa deve selecionar?",
    "options": [
      {
        "letter": "a",
        "text": "Instâncias spot"
      },
      {
        "letter": "b",
        "text": "Hosts dedicados"
      },
      {
        "letter": "c",
        "text": "Instâncias sob-demanda"
      },
      {
        "letter": "d",
        "text": "Instâncias reservadas"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 247,
    "question": "Qual serviço da AWS oferece uma maneira rápida e automatizada de criar e gerenciar contas da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon LightSail"
      },
      {
        "letter": "b",
        "text": "AWS Organizations"
      },
      {
        "letter": "c",
        "text": "Amazon Connect"
      },
      {
        "letter": "d",
        "text": "AWS QuickSight"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 248,
    "question": "Qual serviço da AWS deve ser usado para criar um alarme de faturamento?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon QuickSight"
      },
      {
        "letter": "b",
        "text": "Amazon CloudWatch"
      },
      {
        "letter": "c",
        "text": "AWS Trusted Advisor"
      },
      {
        "letter": "d",
        "text": "AWS CloudTrail"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 249,
    "question": "Há necessidade de executar consultas e pesquisar e analisar logs interativamente dentro de uma organização. Qual serviço ou recurso da AWS atenderá a esse requisito?",
    "options": [
      {
        "letter": "a",
        "text": "Fluxos de logs do Amazon CloudWatch."
      },
      {
        "letter": "b",
        "text": "Amazon EventBridge (Amazon CloudWatch Events)."
      },
      {
        "letter": "c",
        "text": "Amazon CloudWatch Logs Insights."
      },
      {
        "letter": "d",
        "text": "Detecção de anomalias do Amazon CloudWatch."
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 250,
    "question": "Ao armazenar senhas na AWS, qual é o método MAIS seguro?",
    "options": [
      {
        "letter": "a",
        "text": "Armazenar senhas no AWS Secrets Manager."
      },
      {
        "letter": "b",
        "text": "Armazenar senhas no AWS Storage Gateway."
      },
      {
        "letter": "c",
        "text": "Armazenar senhas como parâmetros do AWS CloudFormation."
      },
      {
        "letter": "d",
        "text": "Armazenar senhas em um bucket do Amazon S3."
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 251,
    "question": "Um administrador de sistemas descobre que várias instâncias do Amazon EC2 foram encerradas. É responsabilidade do administrador de sistemas identificar o usuário ou a chamada de API da AWS que encerrou essas instâncias. Qual serviço da AWS o administrador de sistemas deve usar para atender a esse requisito?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Trusted Advisor"
      },
      {
        "letter": "b",
        "text": "AWS CloudTrail"
      },
      {
        "letter": "c",
        "text": "Amazon Detective"
      },
      {
        "letter": "d",
        "text": "Amazon Inspector"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 252,
    "question": "Uma empresa deseja enviar logs de fluxo da VPC para o Amazon S3. De qual ação a empresa é responsável sob o Modelo de Responsabilidade Compartilhada?",
    "options": [
      {
        "letter": "a",
        "text": "Gerenciar a infraestrutura que executa o bucket do S3."
      },
      {
        "letter": "b",
        "text": "Gerenciar as atualizações do sistema operacional no bucket do S3."
      },
      {
        "letter": "c",
        "text": "Gerenciar as opções de criptografia no bucket do S3."
      },
      {
        "letter": "d",
        "text": "Gerenciar os dados em trânsito."
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 253,
    "question": "Qual serviço da AWS oferece proteção gerenciada contra DDoS?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon GuardDuty"
      },
      {
        "letter": "b",
        "text": "AWS Shield"
      },
      {
        "letter": "c",
        "text": "Amazon Inspector"
      },
      {
        "letter": "d",
        "text": "AWS Firewall Manager"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 254,
    "question": "O que a política de uso aceitável da AWS para testes de penetração permite?",
    "options": [
      {
        "letter": "a",
        "text": "Os clientes realizam avaliações de segurança ou testes de penetração em sua infraestrutura da AWS sem aprovação prévia para serviços selecionados."
      },
      {
        "letter": "b",
        "text": "A AWS realiza testes de penetração em recursos do cliente sem notificação."
      },
      {
        "letter": "c",
        "text": "Os clientes realizam avaliações de segurança ou testes de penetração em sua infraestrutura da AWS após obterem autorização da AWS."
      },
      {
        "letter": "d",
        "text": "Avaliadores de segurança autorizados realizam testes de penetração em qualquer cliente da AWS sem autorização."
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 255,
    "question": "O que uma organização precisa fazer para migrar para outra região da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Solicitar outra conta da AWS nessa região."
      },
      {
        "letter": "b",
        "text": "Enviar uma solicitação para estender sua conta para a região adicional."
      },
      {
        "letter": "c",
        "text": "Criar uma conta IAM separada para essa região."
      },
      {
        "letter": "d",
        "text": "Simplesmente começar a implantar recursos na região adicional."
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 256,
    "question": "Qual recurso do AWS IAM permite identificar permissões desnecessárias que foram atribuídas aos usuários?",
    "options": [
      {
        "letter": "a",
        "text": "Assistente de Grupos"
      },
      {
        "letter": "b",
        "text": "Assistente de Funções"
      },
      {
        "letter": "c",
        "text": "Assistente de Permissões"
      },
      {
        "letter": "d",
        "text": "Assistente de Acesso"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 257,
    "question": "Como o faturamento consolidado no AWS Organizations pode ajudar a reduzir as despesas mensais gerais?",
    "options": [
      {
        "letter": "a",
        "text": "Agrupando o uso em várias contas para obter um desconto na camada de preços."
      },
      {
        "letter": "b",
        "text": "Aproveitando as políticas de controle de serviço (SCP) para gerenciamento centralizado de serviços."
      },
      {
        "letter": "c",
        "text": "Automatizando a criação de novas contas por meio de APIs."
      },
      {
        "letter": "d",
        "text": "Fornecendo uma visão consolidada do faturamento mensal em várias contas."
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 258,
    "question": "Qual é o benefício de usar serviços totalmente gerenciados em comparação com a implantação de software de terceiros no EC2?",
    "options": [
      {
        "letter": "a",
        "text": "Redução da sobrecarga operacional"
      },
      {
        "letter": "b",
        "text": "Segurança aprimorada"
      },
      {
        "letter": "c",
        "text": "Você tem maior controle e flexibilidade"
      },
      {
        "letter": "d",
        "text": "Você não precisa fazer backup dos seus dados"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 259,
    "question": "Qual serviço da AWS monitora continuamente as contas da AWS em busca de atividades maliciosas e comportamentos não autorizados?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Macie"
      },
      {
        "letter": "b",
        "text": "Amazon Inspector"
      },
      {
        "letter": "c",
        "text": "Amazon GuardDuty"
      },
      {
        "letter": "d",
        "text": "AWS Config"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 260,
    "question": "Os clientes do Suporte Business da AWS têm acesso a qual dos seguintes itens?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Health API"
      },
      {
        "letter": "b",
        "text": "Equipe de Resposta a DDoS da AWS (DRT)"
      },
      {
        "letter": "c",
        "text": "AWS Technical Account Manager (TAM)"
      },
      {
        "letter": "d",
        "text": "Concierge do AWS Support"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 261,
    "question": "Uma organização está migrando seu aplicativo do SQL Server local para a AWS. Como parte da migração, a empresa deseja reduzir a sobrecarga operacional, mas não possui recursos para refatorar o aplicativo. Qual serviço de banco de dados suportaria esses requisitos de forma MAIS eficaz?",
    "options": [
      {
        "letter": "a",
        "text": "Microsoft SQL Server no Amazon EC2"
      },
      {
        "letter": "b",
        "text": "Amazon DynamoDB"
      },
      {
        "letter": "c",
        "text": "Amazon RDS para SQL Server"
      },
      {
        "letter": "d",
        "text": "Amazon Redshift"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 262,
    "question": "Qual programa da AWS pode ajudar uma organização a projetar, construir e gerenciar suas cargas de trabalho na AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Consultores de Tecnologia da APN"
      },
      {
        "letter": "b",
        "text": "Gerente de Desenvolvimento de Negócios da AWS"
      },
      {
        "letter": "c",
        "text": "AWS Technical Account Manager"
      },
      {
        "letter": "d",
        "text": "Parceiros de Consultoria da APN"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 263,
    "question": "Qual serviço permite que uma organização traga seu próprio licenciamento para hardware de host que esteja fisicamente isolado de outras contas da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Instâncias Spot do EC2"
      },
      {
        "letter": "b",
        "text": "Hosts Dedicados do EC2"
      },
      {
        "letter": "c",
        "text": "Instâncias Reservadas do EC2"
      },
      {
        "letter": "d",
        "text": "Instâncias Dedicadas do EC2"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 264,
    "question": "Um profissional de nuvem está desenvolvendo um plano de recuperação de desastres e pretende replicar dados entre várias áreas geográficas. Qual das seguintes opções atende a esses requisitos?",
    "options": [
      {
        "letter": "a",
        "text": "Regiões da AWS"
      },
      {
        "letter": "b",
        "text": "Contas da AWS"
      },
      {
        "letter": "c",
        "text": "Locais de borda"
      },
      {
        "letter": "d",
        "text": "Zonas de disponibilidade"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 265,
    "question": "Uma empresa implantou vários bancos de dados relacionais no Amazon RDS. Todo mês, o fornecedor do software de banco de dados lança novos patches de segurança que precisam ser aplicados ao banco de dados. Qual é a maneira MAIS eficiente de aplicar os patches de segurança?",
    "options": [
      {
        "letter": "a",
        "text": "Use o AWS Systems Manager para automatizar a aplicação de patches no banco de dados de acordo com um cronograma."
      },
      {
        "letter": "b",
        "text": "Conecte-se a cada instância de banco de dados mensalmente e baixe e aplique os patches de segurança necessários do fornecedor."
      },
      {
        "letter": "c",
        "text": "No AWS Config, configure uma regra para as instâncias e o nível de patch necessário."
      },
      {
        "letter": "d",
        "text": "Habilite a aplicação automática de patches para as instâncias usando o console do Amazon RDS."
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 266,
    "question": "Qual é o nome do portal online de autoatendimento que a AWS fornece para permitir que os clientes visualizem relatórios, como relatórios PCI, e aceitem contratos?",
    "options": [
      {
        "letter": "a",
        "text": "AWS DocuFact"
      },
      {
        "letter": "b",
        "text": "AWS Artifact"
      },
      {
        "letter": "c",
        "text": "Portal de Conformidade da AWS"
      },
      {
        "letter": "d",
        "text": "Portal de Documentação da AWS"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 267,
    "question": "Um desenvolvedor precisa de uma maneira de provisionar automaticamente uma coleção de recursos da AWS. Qual serviço da AWS é usado principalmente para implantar infraestrutura como código?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "letter": "b",
        "text": "Jenkins"
      },
      {
        "letter": "c",
        "text": "AWS CodeDeploy"
      },
      {
        "letter": "d",
        "text": "AWS CloudFormation"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 268,
    "question": "Um usuário implanta uma instância de banco de dados Amazon Aurora em várias Zonas de Disponibilidade. Essa estratégia envolve qual pilar do AWS Well-Architected Framework?",
    "options": [
      {
        "letter": "a",
        "text": "Eficiência de desempenho"
      },
      {
        "letter": "b",
        "text": "Otimização de custos"
      },
      {
        "letter": "c",
        "text": "Confiabilidade"
      },
      {
        "letter": "d",
        "text": "Segurança"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 269,
    "question": "Qual recurso do DynamoDB fornece aceleração na memória para tabelas, resultando em melhorias significativas de desempenho?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon DynamoDB Accelerator (DAX)"
      },
      {
        "letter": "b",
        "text": "Amazon ElastiCache"
      },
      {
        "letter": "c",
        "text": "Amazon EFS"
      },
      {
        "letter": "d",
        "text": "Amazon CloudFront"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 270,
    "question": "Quais informações devem ser inseridas na Calculadora de TCO da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "O número de servidores em sua empresa"
      },
      {
        "letter": "b",
        "text": "O número de sistemas de armazenamento em sua empresa"
      },
      {
        "letter": "c",
        "text": "O número de usuários finais em sua empresa"
      },
      {
        "letter": "d",
        "text": "O número de aplicativos em sua empresa"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 271,
    "question": "Qual serviço é usado para introduzir tolerância a falhas em uma arquitetura de aplicativo?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon DynamoDB"
      },
      {
        "letter": "b",
        "text": "Amazon Elastic Load Balancer"
      },
      {
        "letter": "c",
        "text": "Amazon ElastiCache"
      },
      {
        "letter": "d",
        "text": "Amazon CloudFront"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 272,
    "question": "Qual das seguintes afirmações está correta sobre a replicação entre regiões do Amazon S3?",
    "options": [
      {
        "letter": "a",
        "text": "Os buckets S3 de origem e destino não podem estar em regiões da AWS diferentes"
      },
      {
        "letter": "b",
        "text": "Os buckets S3 de origem e destino devem ter o versionamento desativado"
      },
      {
        "letter": "c",
        "text": "O proprietário do bucket S3 de origem deve ter as regiões da AWS de origem e destino desativadas para sua conta"
      },
      {
        "letter": "d",
        "text": "Os buckets S3 configurados para replicação entre regiões podem pertencer a uma única conta da AWS ou a contas diferentes"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 273,
    "question": "Como uma empresa pode proteger seus dados do Amazon S3 de um desastre regional?",
    "options": [
      {
        "letter": "a",
        "text": "Habilitar a Autenticação Multifator (MFA) para excluir"
      },
      {
        "letter": "b",
        "text": "Usar a Replicação entre Regiões (CRR) para copiar para outra região"
      },
      {
        "letter": "c",
        "text": "Usar ações de ciclo de vida para mover para outra classe de armazenamento do S3"
      },
      {
        "letter": "d",
        "text": "Arquivar no Amazon Glacier"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 274,
    "question": "Com qual serviço um desenvolvedor pode fazer upload de código usando um arquivo ZIP ou WAR e ter o serviço lidando com a implantação de ponta a ponta dos recursos?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon ECS"
      },
      {
        "letter": "b",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "letter": "c",
        "text": "AWS CodeDeploy"
      },
      {
        "letter": "d",
        "text": "AWS CodeCommit"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 275,
    "question": "Qual tipo de backup automatizado do Amazon RDS permite restaurar o banco de dados com uma granularidade de apenas 5 minutos?",
    "options": [
      {
        "letter": "a",
        "text": "Backup de snapshot"
      },
      {
        "letter": "b",
        "text": "Recuperação point-in-time"
      },
      {
        "letter": "c",
        "text": "Backup incremental"
      },
      {
        "letter": "d",
        "text": "Backup completo"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 276,
    "question": "Qual das seguintes descrições está incorreta em relação ao design das Zonas de Disponibilidade?",
    "options": [
      {
        "letter": "a",
        "text": "Cada sub-rede em uma VPC é mapeada para todas as AZs na região"
      },
      {
        "letter": "b",
        "text": "Cada AZ é projetada como uma zona de falha independente"
      },
      {
        "letter": "c",
        "text": "As AZs são fisicamente separadas dentro de uma região metropolitana típica e estão localizadas em planícies de inundação de baixo risco"
      },
      {
        "letter": "d",
        "text": "As AZs têm conexões de rede diretas, de baixa latência, alta taxa de transferência e redundantes entre si"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 277,
    "question": "Uma empresa deseja utilizar um modelo de nuvem de pagamento conforme o uso para todos os seus aplicativos, sem custos de CAPEX e que seja altamente elástico. Qual modelo de entrega de nuvem será o mais adequado para eles?",
    "options": [
      {
        "letter": "a",
        "text": "Híbrida"
      },
      {
        "letter": "b",
        "text": "Pública"
      },
      {
        "letter": "c",
        "text": "Local"
      },
      {
        "letter": "d",
        "text": "Privada"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 278,
    "question": "Como uma empresa pode se conectar de sua rede local a VPCs em várias regiões usando conexões privadas?",
    "options": [
      {
        "letter": "a",
        "text": "VPN gerenciada da AWS"
      },
      {
        "letter": "b",
        "text": "Gateway do AWS Direct Connect"
      },
      {
        "letter": "c",
        "text": "Amazon CloudFront"
      },
      {
        "letter": "d",
        "text": "Emparelhamento de VPC entre regiões"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 279,
    "question": "Qual tipo de armazenamento armazena objetos compostos por pares de chave-valor?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon S3"
      },
      {
        "letter": "b",
        "text": "Amazon EFS"
      },
      {
        "letter": "c",
        "text": "Amazon DynamoDB"
      },
      {
        "letter": "d",
        "text": "Amazon EBS"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 280,
    "question": "Qual prática recomendada do AWS IAM recomenda aplicar as permissões mínimas necessárias para executar uma tarefa ao criar políticas do IAM?",
    "options": [
      {
        "letter": "a",
        "text": "Conceder o privilégio mínimo"
      },
      {
        "letter": "b",
        "text": "Habilitar MFA para usuários privilegiados"
      },
      {
        "letter": "c",
        "text": "Usar funções para delegar permissões"
      },
      {
        "letter": "d",
        "text": "Criar usuários individuais do IAM"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 281,
    "question": "Qual recurso do Amazon EC2 permite que um administrador crie uma imagem padronizada que pode ser usada para iniciar novas instâncias?",
    "options": [
      {
        "letter": "a",
        "text": "Ponto de Montagem do Amazon EBS"
      },
      {
        "letter": "b",
        "text": "Amazon Golden Image"
      },
      {
        "letter": "c",
        "text": "Amazon Machine Image"
      },
      {
        "letter": "d",
        "text": "Modelo de Bloco da Amazon"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 282,
    "question": "Qual serviço da AWS permite que desenvolvedores e cientistas de dados criem, treinem e implantem modelos de aprendizado de máquina?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Rekognition"
      },
      {
        "letter": "b",
        "text": "Amazon Comprehend"
      },
      {
        "letter": "c",
        "text": "Amazon SageMaker"
      },
      {
        "letter": "d",
        "text": "Amazon MQ"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 283,
    "question": "Uma empresa precisa de proteção contra ataques de negação de serviço distribuídos (DDoS) em seu site e assistência de especialistas da AWS durante esses eventos. Qual serviço gerenciado da AWS atenderá a esses requisitos?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Shield Advanced"
      },
      {
        "letter": "b",
        "text": "Amazon GuardDuty"
      },
      {
        "letter": "c",
        "text": "AWS Web Application Firewall"
      },
      {
        "letter": "d",
        "text": "AWS Firewall Manager"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 284,
    "question": "Qual serviço da AWS pode ser usado para enviar notificações automatizadas para endpoints HTTP?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon SNS"
      },
      {
        "letter": "b",
        "text": "Amazon SES"
      },
      {
        "letter": "c",
        "text": "Amazon SWF"
      },
      {
        "letter": "d",
        "text": "Amazon SQS"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 285,
    "question": "Qual recurso do Amazon S3 permite definir regras para transferir objetos automaticamente entre diferentes classes de armazenamento em intervalos de tempo definidos?",
    "options": [
      {
        "letter": "a",
        "text": "Gerenciamento do Ciclo de Vida de Objetos"
      },
      {
        "letter": "b",
        "text": "Escalabilidade Automática do Ciclo de Vida"
      },
      {
        "letter": "c",
        "text": "Arquivamento do S3"
      },
      {
        "letter": "d",
        "text": "Gerenciamento Elástico de Dados"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 286,
    "question": "Um profissional de nuvem precisa implantar rapidamente uma solução de TI popular e começar a usá-la imediatamente. O que o profissional de nuvem deve usar?",
    "options": [
      {
        "letter": "a",
        "text": "Documentação do AWS WellArchitected Framework"
      },
      {
        "letter": "b",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "letter": "c",
        "text": "Implantações de referência do AWS Quick Start"
      },
      {
        "letter": "d",
        "text": "Amazon CloudFront"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 287,
    "question": "De acordo com o Modelo de Responsabilidade Compartilhada da AWS, qual das seguintes opções NÃO é de responsabilidade do cliente?",
    "options": [
      {
        "letter": "a",
        "text": "Aplicar criptografia a dados armazenados em um volume EBS"
      },
      {
        "letter": "b",
        "text": "Instalar atualizações de firmware em servidores host"
      },
      {
        "letter": "c",
        "text": "Adicionar regras de firewall a grupos de segurança e ACLs de rede"
      },
      {
        "letter": "d",
        "text": "Aplicar políticas de bucket para compartilhar dados do Amazon S3"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 288,
    "question": "Qual serviço de segurança da AWS fornece um firewall no nível da sub-rede dentro de uma VPC?",
    "options": [
      {
        "letter": "a",
        "text": "Grupo de Segurança"
      },
      {
        "letter": "b",
        "text": "Política do IAM"
      },
      {
        "letter": "c",
        "text": "Política de Bucket"
      },
      {
        "letter": "d",
        "text": "Lista de Controle de Acesso à Rede (NACL)"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 289,
    "question": "Qual é o nome do serviço de registro Docker gerenciado pela AWS usado pelo Amazon Elastic Container Service (ECS)?",
    "options": [
      {
        "letter": "a",
        "text": "Docker Image Repository"
      },
      {
        "letter": "b",
        "text": "ECS Container Registry"
      },
      {
        "letter": "c",
        "text": "Elastic Container Registry"
      },
      {
        "letter": "d",
        "text": "Docker Container Registry"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 290,
    "question": "Qual plano de suporte é a opção de menor custo que permite a abertura de casos ilimitados?",
    "options": [
      {
        "letter": "a",
        "text": "Business"
      },
      {
        "letter": "b",
        "text": "Enterprise"
      },
      {
        "letter": "c",
        "text": "Developer"
      },
      {
        "letter": "d",
        "text": "Basic"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 291,
    "question": "Qual serviço é usado para armazenar dados em cache?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Simple Queue Service (SQS)"
      },
      {
        "letter": "b",
        "text": "AWS Key Management Service (KMS)"
      },
      {
        "letter": "c",
        "text": "Amazon Elastic File System (EFS)"
      },
      {
        "letter": "d",
        "text": "Amazon DynamoDB DAX"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 292,
    "question": "Qual serviço da AWS faz parte do conjunto de serviços \"sem servidor\" e executa código como funções?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon ECS"
      },
      {
        "letter": "b",
        "text": "Amazon EKS"
      },
      {
        "letter": "c",
        "text": "AWS CodeCommit"
      },
      {
        "letter": "d",
        "text": "AWS Lambda"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 293,
    "question": "Que tipo de volumes EBS podem ser criptografados?",
    "options": [
      {
        "letter": "a",
        "text": "Somente volumes raiz podem ter criptografia aplicada no momento da inicialização"
      },
      {
        "letter": "b",
        "text": "Somente volumes não-raiz criados a partir de snapshots"
      },
      {
        "letter": "c",
        "text": "Somente volumes não-raiz"
      },
      {
        "letter": "d",
        "text": "Volumes raiz e não-raiz"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 294,
    "question": "Qual serviço você pode usar para monitorar, armazenar e acessar arquivos de log gerados por instâncias EC2 e servidores locais?",
    "options": [
      {
        "letter": "a",
        "text": "AWS OpsWorks"
      },
      {
        "letter": "b",
        "text": "Amazon Kinesis"
      },
      {
        "letter": "c",
        "text": "Amazon CloudWatch Logs"
      },
      {
        "letter": "d",
        "text": "AWS CloudTrail"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 295,
    "question": "Qual serviço da AWS pode ser usado para preparar e carregar dados para análise usando um processo de extração, transformação e carregamento (ETL)?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon EMR"
      },
      {
        "letter": "b",
        "text": "AWS Glue"
      },
      {
        "letter": "c",
        "text": "Amazon Athena"
      },
      {
        "letter": "d",
        "text": "AWS Lambda"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 296,
    "question": "Qual é a relação entre sub-redes e zonas de disponibilidade?",
    "options": [
      {
        "letter": "a",
        "text": "Você pode criar uma ou mais subredes em cada zona de disponibilidade"
      },
      {
        "letter": "b",
        "text": "As sub-redes abrangem várias zonas de disponibilidade"
      },
      {
        "letter": "c",
        "text": "Você pode criar uma sub-rede por zona de disponibilidade"
      },
      {
        "letter": "d",
        "text": "As sub-redes contêm uma ou mais zonas de disponibilidade"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 297,
    "question": "Qual serviço fornece alertas e orientações de correção quando a AWS está passando por eventos que podem impactá-lo?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Trusted Advisor"
      },
      {
        "letter": "b",
        "text": "AWS Inspector"
      },
      {
        "letter": "c",
        "text": "AWS Shield"
      },
      {
        "letter": "d",
        "text": "AWS Health Dashboard"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 298,
    "question": "Qual das opções abaixo é um exemplo de otimização de custos?",
    "options": [
      {
        "letter": "a",
        "text": "Substituir uma instância de computação EC2 por uma instância AWS Lambda"
      },
      {
        "letter": "b",
        "text": "Escolher a instância EC2 mais rápida para garantir o desempenho"
      },
      {
        "letter": "c",
        "text": "Provisionar capacidade extra para permitir o crescimento"
      },
      {
        "letter": "d",
        "text": "Implantar recursos com o AWS CloudFormation"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 299,
    "question": "Qual serviço da AWS pode ajudar a fornecer ações recomendadas para otimização de custos?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Artifact"
      },
      {
        "letter": "b",
        "text": "AWS Inspector"
      },
      {
        "letter": "c",
        "text": "Amazon CloudWatch Events"
      },
      {
        "letter": "d",
        "text": "AWS Trusted Advisor"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 300,
    "question": "Qual serviço da AWS permite que dispositivos conectados interajam de forma fácil e segura com aplicativos em nuvem e outros dispositivos?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Server Migration Service (SMS)"
      },
      {
        "letter": "b",
        "text": "AWS IoT Core"
      },
      {
        "letter": "c",
        "text": "AWS Directory Service"
      },
      {
        "letter": "d",
        "text": "Amazon Workspaces"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 301,
    "question": "Como você pode configurar o Amazon Route 53 para monitorar a integridade e o desempenho do seu aplicativo?",
    "options": [
      {
        "letter": "a",
        "text": "Usando DNS lookup"
      },
      {
        "letter": "b",
        "text": "Usando a API do Route 53"
      },
      {
        "letter": "c",
        "text": "Usando verificações de integridade do Route 53"
      },
      {
        "letter": "d",
        "text": "Usando o CloudWatch"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 302,
    "question": "O que é um local de borda?",
    "options": [
      {
        "letter": "a",
        "text": "Um endpoint de rede de distribuição de conteúdo (CDN) para o CloudFront"
      },
      {
        "letter": "b",
        "text": "Um endpoint de conexão de peering de VPC"
      },
      {
        "letter": "c",
        "text": "Um endpoint público para o Amazon S3"
      },
      {
        "letter": "d",
        "text": "Um gateway privado virtual para VPN"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 303,
    "question": "Qual dos seguintes modelos de preços do Amazon EC2 permite que os clientes usem licenças de software vinculadas a servidores existentes?",
    "options": [
      {
        "letter": "a",
        "text": "Instâncias Sob-Demanda"
      },
      {
        "letter": "b",
        "text": "Instâncias Spot"
      },
      {
        "letter": "c",
        "text": "Instâncias Reservadas"
      },
      {
        "letter": "d",
        "text": "Hosts Dedicados"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 304,
    "question": "Um aplicativo implantado em várias Zonas de Disponibilidade pode ser descrito como:",
    "options": [
      {
        "letter": "a",
        "text": "Ser seguro"
      },
      {
        "letter": "b",
        "text": "Ser altamente disponível"
      },
      {
        "letter": "c",
        "text": "Ter alcance global"
      },
      {
        "letter": "d",
        "text": "Ter elasticidade"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 305,
    "question": "Qual plano de suporte da AWS fornece suporte somente por e-mail por meio de Associados de Suporte na Nuvem?",
    "options": [
      {
        "letter": "a",
        "text": "Developer"
      },
      {
        "letter": "b",
        "text": "Enterprise"
      },
      {
        "letter": "c",
        "text": "Basic"
      },
      {
        "letter": "d",
        "text": "Business"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 306,
    "question": "Como uma empresa de educação online pode garantir que seus cursos em vídeo sejam reproduzidos com latência mínima para seus usuários em todo o mundo?",
    "options": [
      {
        "letter": "a",
        "text": "Use o Amazon S3 Transfer Acceleration para acelerar os downloads"
      },
      {
        "letter": "b",
        "text": "Use o Amazon EBS Cross Region Replication para aproximar o conteúdo dos usuários"
      },
      {
        "letter": "c",
        "text": "Use o Amazon Aurora Global Database"
      },
      {
        "letter": "d",
        "text": "Use o Amazon CloudFront para aproximar o conteúdo dos usuários"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 307,
    "question": "Ao projetar uma VPC, qual é a finalidade de um Internet Gateway?",
    "options": [
      {
        "letter": "a",
        "text": "Fornece acesso à Internet para instâncias EC2 em sub-redes privadas"
      },
      {
        "letter": "b",
        "text": "Permite comunicações com a Internet para instâncias em sub-redes públicas"
      },
      {
        "letter": "c",
        "text": "É usado para fazer conexões VPN com uma VPC"
      },
      {
        "letter": "d",
        "text": "É um host bastion para conexões de gerenciamento de entrada"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 308,
    "question": "Um endereço IP elástico pode ser remapeado entre instâncias EC2 em quais limites?",
    "options": [
      {
        "letter": "a",
        "text": "Locais de Borda"
      },
      {
        "letter": "b",
        "text": "Zonas de Disponibilidade"
      },
      {
        "letter": "c",
        "text": "Regiões"
      },
      {
        "letter": "d",
        "text": "Sub-redes de Banco de Dados"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 309,
    "question": "Qual serviço executa o código do seu aplicativo somente quando necessário, sem precisar executar servidores?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon EC2"
      },
      {
        "letter": "b",
        "text": "Amazon ECS"
      },
      {
        "letter": "c",
        "text": "AWS LightSail"
      },
      {
        "letter": "d",
        "text": "AWS Lambda"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 310,
    "question": "Um Cloud Practitioner está criando os fluxos de trabalho de processos de negócios associados a um sistema de atendimento de pedidos. Qual serviço da AWS pode auxiliar na coordenação de tarefas entre componentes de aplicativos distribuídos?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon SWF"
      },
      {
        "letter": "b",
        "text": "Amazon SQS"
      },
      {
        "letter": "c",
        "text": "Amazon SNS"
      },
      {
        "letter": "d",
        "text": "AWS STS"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 311,
    "question": "Onde os snapshots do Amazon EBS são armazenados?",
    "options": [
      {
        "letter": "a",
        "text": "No Amazon S3"
      },
      {
        "letter": "b",
        "text": "Em um sistema de arquivos do Amazon EFS"
      },
      {
        "letter": "c",
        "text": "Dentro do armazenamento de blocos do EBS"
      },
      {
        "letter": "d",
        "text": "Em um armazenamento de instância do Amazon EBS"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 312,
    "question": "Qual serviço da AWS é adequado para uma carga de trabalho orientada a eventos?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "letter": "b",
        "text": "Amazon EC2"
      },
      {
        "letter": "c",
        "text": "AWS Lambda"
      },
      {
        "letter": "d",
        "text": "Amazon Open 3D Engine"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 313,
    "question": "Qual tipo de Elastic Load Balancer opera no nível de conexão TCP?",
    "options": [
      {
        "letter": "a",
        "text": "Network Load Balancer (NLB)"
      },
      {
        "letter": "b",
        "text": "Amazon Route 53 Load Balancer"
      },
      {
        "letter": "c",
        "text": "Classic Load Balancer (CLB)"
      },
      {
        "letter": "d",
        "text": "Application Load Balancer (ALB)"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 314,
    "question": "Qual modelo de precificação interromperá uma instância do Amazon EC2 em execução se a capacidade ficar temporariamente indisponível?",
    "options": [
      {
        "letter": "a",
        "text": "Instâncias Reservadas Conversíveis"
      },
      {
        "letter": "b",
        "text": "Instâncias Sob-Demanda"
      },
      {
        "letter": "c",
        "text": "Instâncias Reservadas Padrão"
      },
      {
        "letter": "d",
        "text": "Instâncias Spot"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 315,
    "question": "Qual serviço da AWS pode hospedar um site estático?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon QuickSight"
      },
      {
        "letter": "b",
        "text": "Amazon Route 53"
      },
      {
        "letter": "c",
        "text": "Amazon S3"
      },
      {
        "letter": "d",
        "text": "AWS X-Ray"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 316,
    "question": "Qual serviço da AWS oferece a capacidade de detectar vazamentos acidentais de informações de identificação pessoal (PII) e dados de credenciais do usuário?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Shield"
      },
      {
        "letter": "b",
        "text": "Amazon Macie"
      },
      {
        "letter": "c",
        "text": "Amazon GuardDuty"
      },
      {
        "letter": "d",
        "text": "Amazon Inspector"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 317,
    "question": "Quais planos de suporte da AWS oferecem acesso 24 horas por dia, 7 dias por semana, ao atendimento ao cliente?",
    "options": [
      {
        "letter": "a",
        "text": "Business"
      },
      {
        "letter": "b",
        "text": "Todos os planos"
      },
      {
        "letter": "c",
        "text": "Enterprise"
      },
      {
        "letter": "d",
        "text": "Basic"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 318,
    "question": "Qual tipo de escalonamento o Amazon EC2 Auto Scaling oferece?",
    "options": [
      {
        "letter": "a",
        "text": "Horizontal"
      },
      {
        "letter": "b",
        "text": "Linear"
      },
      {
        "letter": "c",
        "text": "Incremental"
      },
      {
        "letter": "d",
        "text": "Vertical"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 319,
    "question": "Um aplicativo web em execução na AWS recebeu solicitações maliciosas do mesmo conjunto de endereços IP. Qual serviço da AWS pode ajudar a proteger o aplicativo e bloquear o tráfego malicioso?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon GuardDuty"
      },
      {
        "letter": "b",
        "text": "Amazon SNS"
      },
      {
        "letter": "c",
        "text": "AWS WAF"
      },
      {
        "letter": "d",
        "text": "AWS IAM"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 320,
    "question": "Qual das seguintes opções NÃO é uma prática recomendada para proteger o usuário raiz de uma conta da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Remover permissões administrativas"
      },
      {
        "letter": "b",
        "text": "Proteger as chaves de acesso do usuário raiz da AWS"
      },
      {
        "letter": "c",
        "text": "Não compartilhar as credenciais do usuário raiz"
      },
      {
        "letter": "d",
        "text": "Habilitar MFA"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 321,
    "question": "Uma empresa está usando a AWS CLI e o acesso programático a recursos da AWS a partir de sua rede local. Qual é um requisito obrigatório neste cenário?",
    "options": [
      {
        "letter": "a",
        "text": "Usando uma conexão AWS Direct Connect"
      },
      {
        "letter": "b",
        "text": "Usando uma chave de acesso e uma chave secreta da AWS"
      },
      {
        "letter": "c",
        "text": "Usando um par de chaves do Amazon EC2"
      },
      {
        "letter": "d",
        "text": "Usando o Amazon API Gateway"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 322,
    "question": "Qual das seguintes afirmações sobre o modelo de preços pay-as-you-go da AWS está correta?",
    "options": [
      {
        "letter": "a",
        "text": "Resulta em redução de despesas de capital"
      },
      {
        "letter": "b",
        "text": "É relevante apenas para Amazon EC2, Amazon S3 e Amazon DynamoDB"
      },
      {
        "letter": "c",
        "text": "Requer pagamento antecipado pelos serviços da AWS"
      },
      {
        "letter": "d",
        "text": "Reduz as despesas operacionais"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 323,
    "question": "Qual serviço da AWS foi projetado para ser usado para análises operacionais?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Athena"
      },
      {
        "letter": "b",
        "text": "Amazon EMR"
      },
      {
        "letter": "c",
        "text": "Amazon QuickSight"
      },
      {
        "letter": "d",
        "text": "Amazon Elasticsearch Service"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 324,
    "question": "Como uma empresa pode facilitar o compartilhamento de dados por meio de conexões privadas entre duas contas que ela possui em uma região?",
    "options": [
      {
        "letter": "a",
        "text": "Configurar intervalos de endereços CIDR correspondentes"
      },
      {
        "letter": "b",
        "text": "Criar um ELB interno"
      },
      {
        "letter": "c",
        "text": "Criar uma conexão de peering de subrede"
      },
      {
        "letter": "d",
        "text": "Criar uma conexão de peering de VPC"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 325,
    "question": "Qual serviço ou recurso da AWS ajuda a restringir o serviço, os recursos e as ações de API individuais da AWS que os usuários e funções em cada conta membro podem acessar?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Firewall Manager"
      },
      {
        "letter": "b",
        "text": "Amazon Cognito"
      },
      {
        "letter": "c",
        "text": "AWS Organizations"
      },
      {
        "letter": "d",
        "text": "AWS Shield"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 326,
    "question": "Você está avaliando serviços da AWS que podem auxiliar na criação de ambientes de aplicativos escaláveis. Qual das afirmações abaixo descreve melhor o serviço Elastic Load Balancer?",
    "options": [
      {
        "letter": "a",
        "text": "Distribui automaticamente o tráfego de entrada do aplicativo entre vários destinos, como instâncias do Amazon EC2, contêineres e endereços IP"
      },
      {
        "letter": "b",
        "text": "Ajuda você a garantir que tenha o número correto de instâncias do Amazon EC2 disponíveis para lidar com a carga do seu aplicativo"
      },
      {
        "letter": "c",
        "text": "Um serviço de rede que fornece uma alternativa ao uso da Internet para conectar os sites locais dos clientes à AWS"
      },
      {
        "letter": "d",
        "text": "Um serviço de Sistema de Nomes de Domínio (DNS) altamente disponível e escalável"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 327,
    "question": "Sua empresa migrou recentemente para a AWS. Como seu CTO pode monitorar os custos da organização?",
    "options": [
      {
        "letter": "a",
        "text": "AWS CloudTrail"
      },
      {
        "letter": "b",
        "text": "AWS Cost Explorer"
      },
      {
        "letter": "c",
        "text": "Calculadora Mensal Simples da AWS"
      },
      {
        "letter": "d",
        "text": "Faturamento Consolidado da AWS"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 328,
    "question": "Como um administrador de sistemas pode especificar um script para ser executado em uma instância EC2 durante a inicialização?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Config"
      },
      {
        "letter": "b",
        "text": "Metadados"
      },
      {
        "letter": "c",
        "text": "Dados do Usuário"
      },
      {
        "letter": "d",
        "text": "Executar Comando"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 329,
    "question": "Qual das seguintes opções atua como um firewall virtual no nível da instância do Amazon EC2 para controlar o tráfego de uma ou mais instâncias?",
    "options": [
      {
        "letter": "a",
        "text": "Gateways virtuais privados (VPG)"
      },
      {
        "letter": "b",
        "text": "Grupos de segurança"
      },
      {
        "letter": "c",
        "text": "Listas de Controle de Acesso à Rede (ACL)"
      },
      {
        "letter": "d",
        "text": "Tabela de rotas"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 330,
    "question": "Você precisa conectar a rede local da sua empresa à AWS e gostaria de estabelecer um serviço VPN gerenciado pela AWS. Qual dos seguintes itens de configuração precisa ser configurado no lado da Amazon VPC da conexão?",
    "options": [
      {
        "letter": "a",
        "text": "Um dispositivo de Tradução de Endereços de Rede (NAT)"
      },
      {
        "letter": "b",
        "text": "Um Gateway Virtual Privado"
      },
      {
        "letter": "c",
        "text": "Um Gateway do Cliente"
      },
      {
        "letter": "d",
        "text": "Um Firewall"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 331,
    "question": "Como um administrador de banco de dados pode reduzir a sobrecarga operacional de um banco de dados MySQL?",
    "options": [
      {
        "letter": "a",
        "text": "Migrar o banco de dados para o AWS Lambda"
      },
      {
        "letter": "b",
        "text": "Usar o AWS CloudFormation para gerenciar operações"
      },
      {
        "letter": "c",
        "text": "Migrar o banco de dados para uma instância do EC2"
      },
      {
        "letter": "d",
        "text": "Migrar o banco de dados para uma instância do Amazon RDS"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 332,
    "question": "Seu gerente pediu que você explicasse alguns dos recursos de segurança disponíveis na nuvem AWS. Como você pode descrever a função do Amazon CloudHSM?",
    "options": [
      {
        "letter": "a",
        "text": "É uma Infraestrutura de Chave Pública (PKI)"
      },
      {
        "letter": "b",
        "text": "Ele pode ser usado para gerar, usar e gerenciar chaves de criptografia na nuvem"
      },
      {
        "letter": "c",
        "text": "Ele fornece criptografia do lado do servidor para objetos S3"
      },
      {
        "letter": "d",
        "text": "É um firewall para uso com aplicativos da web"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 333,
    "question": "Como uma empresa pode configurar a cópia automática e assíncrona de objetos em buckets do Amazon S3 entre regiões?",
    "options": [
      {
        "letter": "a",
        "text": "Usando ações de ciclo de vida"
      },
      {
        "letter": "b",
        "text": "Configurando a replicação multimestre"
      },
      {
        "letter": "c",
        "text": "Isso é feito por padrão pela AWS"
      },
      {
        "letter": "d",
        "text": "Usando replicação entre regiões"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 334,
    "question": "Qual serviço de banco de dados da AWS não possui esquema e pode ser escalado dinamicamente sem incorrer em tempo de inatividade?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Redshift"
      },
      {
        "letter": "b",
        "text": "Amazon DynamoDB"
      },
      {
        "letter": "c",
        "text": "Amazon Aurora"
      },
      {
        "letter": "d",
        "text": "Amazon RDS"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 335,
    "question": "Qual código HTTP indica um upload bem-sucedido de um objeto para o Amazon S3?",
    "options": [
      {
        "letter": "a",
        "text": "400"
      },
      {
        "letter": "b",
        "text": "300"
      },
      {
        "letter": "c",
        "text": "500"
      },
      {
        "letter": "d",
        "text": "200"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 336,
    "question": "Qual é um exemplo de escalonamento vertical?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Lambda adicionando funções executadas simultaneamente"
      },
      {
        "letter": "b",
        "text": "Adicionando réplicas de leitura a um banco de dados Amazon RDS"
      },
      {
        "letter": "c",
        "text": "Aumentando o tamanho da instância com o Amazon RDS"
      },
      {
        "letter": "d",
        "text": "AWS Auto Scaling adicionando mais instâncias EC2"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 337,
    "question": "Qual é o nome do contêiner de nível superior usado para armazenar objetos no Amazon S3?",
    "options": [
      {
        "letter": "a",
        "text": "Diretório"
      },
      {
        "letter": "b",
        "text": "Bucket"
      },
      {
        "letter": "c",
        "text": "Pasta"
      },
      {
        "letter": "d",
        "text": "Armazenamento de Instâncias"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 338,
    "question": "Qual tipo de banco de dados da AWS é ideal para análises usando consultas SQL?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Redshift"
      },
      {
        "letter": "b",
        "text": "Amazon S3"
      },
      {
        "letter": "c",
        "text": "Amazon RDS"
      },
      {
        "letter": "d",
        "text": "Amazon DynamoDB"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 339,
    "question": "Sua organização tem escritórios ao redor do mundo e alguns funcionários viajam entre eles. Como suas contas devem ser configuradas?",
    "options": [
      {
        "letter": "a",
        "text": "Defina a conta do usuário como uma conta \"global\" ao ser criada"
      },
      {
        "letter": "b",
        "text": "Habilite a MFA para as contas"
      },
      {
        "letter": "c",
        "text": "Crie uma conta separada no IAM em cada região para a qual eles viajarão"
      },
      {
        "letter": "d",
        "text": "O IAM é um serviço global; basta criar os usuários em um só lugar"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 340,
    "question": "Qual opção de acesso a dados do AWS Glacier recupera dados de um arquivo em 1 a 5 minutos?",
    "options": [
      {
        "letter": "a",
        "text": "Express"
      },
      {
        "letter": "b",
        "text": "Accelerated"
      },
      {
        "letter": "c",
        "text": "Standard"
      },
      {
        "letter": "d",
        "text": "Expedited"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 341,
    "question": "Qual ferramenta de segurança da AWS usa um agente instalado em instâncias do EC2 e avalia aplicativos em busca de vulnerabilidades e desvios das melhores práticas?",
    "options": [
      {
        "letter": "a",
        "text": "AWS Inspector"
      },
      {
        "letter": "b",
        "text": "AWS Trusted Advisor"
      },
      {
        "letter": "c",
        "text": "AWS Personal Health Dashboard"
      },
      {
        "letter": "d",
        "text": "Calculadora de TCO da AWS"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 342,
    "question": "Qual serviço da AWS facilita a coordenação dos componentes de aplicativos distribuídos como uma série de etapas em um fluxo de trabalho visual?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon SWF"
      },
      {
        "letter": "b",
        "text": "AWS Step Functions"
      },
      {
        "letter": "c",
        "text": "Amazon SNS"
      },
      {
        "letter": "d",
        "text": "Amazon SES"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 343,
    "question": "Como você pode implantar suas instâncias do EC2 para que, se um único data center falhar, você ainda tenha instâncias disponíveis?",
    "options": [
      {
        "letter": "a",
        "text": "Entre regiões"
      },
      {
        "letter": "b",
        "text": "Entre sub-redes"
      },
      {
        "letter": "c",
        "text": "Entre VPCs"
      },
      {
        "letter": "d",
        "text": "Entre Zonas de Disponibilidade"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 344,
    "question": "Qual recurso você deve usar para acessar os relatórios de segurança e conformidade da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "AWS IAM"
      },
      {
        "letter": "b",
        "text": "AWS Organizations"
      },
      {
        "letter": "c",
        "text": "AWS Artifact"
      },
      {
        "letter": "d",
        "text": "AWS Business Associate Addendun (BAA)"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 345,
    "question": "De que maneiras o modelo de preços da AWS beneficia as organizações?",
    "options": [
      {
        "letter": "a",
        "text": "Elimina custos de licenciamento"
      },
      {
        "letter": "b",
        "text": "Reduz o custo de pessoal no desenvolvimento de aplicativos"
      },
      {
        "letter": "c",
        "text": "Reduzir o custo de manutenção de recursos ociosos"
      },
      {
        "letter": "d",
        "text": "Concentrar os gastos em despesas de capital, em vez de despesas operacionais"
      }
    ],
    "correct": "c",
    "multiple": false
  },
  {
    "number": 346,
    "question": "Qual recurso do Amazon S3 permite criar regras para controlar a transferência de objetos entre diferentes classes de armazenamento?",
    "options": [
      {
        "letter": "a",
        "text": "Gerenciamento de ciclo de vida"
      },
      {
        "letter": "b",
        "text": "Compartilhamento de objetos"
      },
      {
        "letter": "c",
        "text": "Versionamento"
      },
      {
        "letter": "d",
        "text": "Políticas de bucket"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 347,
    "question": "Qual tecnologia da AWS pode ser chamada de \"disco rígido virtual na nuvem\"?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon ENI"
      },
      {
        "letter": "b",
        "text": "Volume do Amazon EBS"
      },
      {
        "letter": "c",
        "text": "Bucket do Amazon S3"
      },
      {
        "letter": "d",
        "text": "Sistema de arquivos do Amazon EFS"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 348,
    "question": "Uma startup de comércio eletrônico precisa entregar rapidamente novos recursos do site de forma iterativa, minimizando o tempo de lançamento no mercado. Qual recurso da Nuvem AWS permite isso?",
    "options": [
      {
        "letter": "a",
        "text": "Agilidade"
      },
      {
        "letter": "b",
        "text": "Alta disponibilidade"
      },
      {
        "letter": "c",
        "text": "Confiabilidade"
      },
      {
        "letter": "d",
        "text": "Elasticidade"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 349,
    "question": "Qual tecnologia da AWS permite agrupar recursos que compartilham uma ou mais tags?",
    "options": [
      {
        "letter": "a",
        "text": "Grupos de recursos"
      },
      {
        "letter": "b",
        "text": "Grupos de consolidação"
      },
      {
        "letter": "c",
        "text": "Grupos de organização"
      },
      {
        "letter": "d",
        "text": "Grupos de tags"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 350,
    "question": "O que você precisa para fazer login no console da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Par de chaves"
      },
      {
        "letter": "b",
        "text": "Certificado"
      },
      {
        "letter": "c",
        "text": "Chave de acesso e ID secreto"
      },
      {
        "letter": "d",
        "text": "Nome de usuário e senha"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 351,
    "question": "A que tipo de serviço de computação em nuvem correspondem o AWS Elastic Beanstalk e o Amazon RDS?",
    "options": [
      {
        "letter": "a",
        "text": "SaaS"
      },
      {
        "letter": "b",
        "text": "PaaS"
      },
      {
        "letter": "c",
        "text": "lasS"
      },
      {
        "letter": "d",
        "text": "Híbrido"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 352,
    "question": "Qual das afirmações abaixo NÃO caracteriza a computação em nuvem?",
    "options": [
      {
        "letter": "a",
        "text": "A computação em nuvem permite trocar despesas variáveis ​por despesas de capital"
      },
      {
        "letter": "b",
        "text": "Com a computação em nuvem, você pode aumentar sua velocidade e agilidade"
      },
      {
        "letter": "c",
        "text": "Com a computação em nuvem, você se beneficia de enormes economias de escala"
      },
      {
        "letter": "d",
        "text": "A computação em nuvem é a entrega sob demanda de poder computacional"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 353,
    "question": "Qual serviço permite monitorar e solucionar problemas de sistemas usando arquivos de log de sistema e aplicativo gerados por esses sistemas?",
    "options": [
      {
        "letter": "a",
        "text": "Métricas do CloudTrail"
      },
      {
        "letter": "b",
        "text": "Logs do CloudTrail"
      },
      {
        "letter": "c",
        "text": "Métricas do CloudWatch"
      },
      {
        "letter": "d",
        "text": "Logs do CloudWatch"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 354,
    "question": "Onde as contas do Amazon Identity and Access Management (IAM) precisam ser criadas para uma organização global?",
    "options": [
      {
        "letter": "a",
        "text": "Em cada região onde os usuários estão localizados"
      },
      {
        "letter": "b",
        "text": "Em cada área geográfica onde os usuários estão localizados"
      },
      {
        "letter": "c",
        "text": "Crie-as globalmente e, em seguida, replique-as regionalmente"
      },
      {
        "letter": "d",
        "text": "Crie-as apenas uma vez, pois o IAM é um serviço global"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 355,
    "question": "Qual é a maneira mais eficiente de estabelecer conectividade de rede do ambiente local para várias VPCs em diferentes regiões da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Usar o AWS VPN"
      },
      {
        "letter": "b",
        "text": "Usar um AWS Transit Gateway"
      },
      {
        "letter": "c",
        "text": "Usar o AWS Direct Connect"
      },
      {
        "letter": "d",
        "text": "Usar o AWS Client VPN"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 356,
    "question": "Com base no modelo de responsabilidade compartilhada, qual das seguintes tarefas de segurança e conformidade é de responsabilidade da AWS?",
    "options": [
      {
        "letter": "a",
        "text": "Criptografar dados em trânsito"
      },
      {
        "letter": "b",
        "text": "Atualizar o firmware do host do Amazon EC2"
      },
      {
        "letter": "c",
        "text": "Conceder acesso a indivíduos e serviços"
      },
      {
        "letter": "d",
        "text": "Atualizar sistemas operacionais"
      }
    ],
    "correct": "b",
    "multiple": false
  },
  {
    "number": 357,
    "question": "Qual serviço da AWS pode ser usado para executar contêineres Docker?",
    "options": [
      {
        "letter": "a",
        "text": "Amazon Redshift"
      },
      {
        "letter": "b",
        "text": "AMI da Amazon"
      },
      {
        "letter": "c",
        "text": "Amazon ECR"
      },
      {
        "letter": "d",
        "text": "AWS Fargate"
      }
    ],
    "correct": "d",
    "multiple": false
  },
  {
    "number": 358,
    "question": "Qual é a maneira mais fácil de armazenar um backup de um volume EBS no Amazon S3?",
    "options": [
      {
        "letter": "a",
        "text": "Criar um snapshot do volume"
      },
      {
        "letter": "b",
        "text": "Usar ações do ciclo de vida do S3 para fazer backup do volume"
      },
      {
        "letter": "c",
        "text": "Usar o Amazon Kinesis para processar os dados e armazenar os resultados no S3"
      },
      {
        "letter": "d",
        "text": "Escrever um script personalizado para copiar os dados para um bucket"
      }
    ],
    "correct": "a",
    "multiple": false
  },
  {
    "number": 359,
    "question": "De acordo com o Modelo de Responsabilidade Compartilhada da AWS, qual das seguintes opções é um controle compartilhado?",
    "options": [
      {
        "letter": "a",
        "text": "Aplicação de patches no sistema operacional"
      },
      {
        "letter": "b",
        "text": "Conscientização e treinamento"
      },
      {
        "letter": "c",
        "text": "Criptografia de dados do lado do cliente"
      },
      {
        "letter": "d",
        "text": "Proteção da infraestrutura"
      }
    ],
    "correct": "b",
    "multiple": false
  }
];

module.exports = QUESTIONS;