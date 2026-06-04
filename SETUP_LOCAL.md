# Guia de Setup Local - Prontuário IA

Este guia ajuda você a rodar o projeto localmente no VS Code sem dependências do Manus.

## Pré-requisitos

- **Node.js** 18+ (https://nodejs.org/)
- **pnpm** (gerenciador de pacotes)
  ```bash
  npm install -g pnpm
  ```
- **VS Code** (https://code.visualstudio.com/)

## 1. Clonar o Repositório

```bash
git clone https://github.com/JonathanCastro-07/medical-landing-page.git
cd medical-landing-page
```

## 2. Instalar Dependências

```bash
pnpm install
```

## 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```bash
cp .env.example .env.local  # Se existir
```

Ou crie manualmente com este conteúdo:

```env
# Aplicação
VITE_APP_TITLE=Prontuário IA
NODE_ENV=development

# Servidor
VITE_API_URL=http://localhost:3000
```

## 4. Rodar o Servidor de Desenvolvimento

```bash
pnpm run dev
```

O servidor iniciará em: **http://localhost:5173**

## 5. Build para Produção

```bash
pnpm run build
```

Os arquivos compilados ficarão em `dist/`

## 6. Verificar Erros de TypeScript

```bash
pnpm run check
```

## Estrutura do Projeto

```
medical-landing-page/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/    # Componentes React (Hero, Features, etc)
│   │   ├── pages/         # Páginas (Home, NotFound)
│   │   ├── contexts/      # Contextos React
│   │   ├── hooks/         # Custom hooks
│   │   ├── lib/           # Utilitários
│   │   ├── index.css      # Estilos globais (Tailwind)
│   │   ├── main.tsx       # Entry point
│   │   └── App.tsx        # Rotas principais
│   ├── public/            # Arquivos estáticos
│   └── index.html         # HTML principal
├── server/                # Backend Express (Node.js)
├── shared/                # Tipos compartilhados
├── package.json           # Dependências
├── tsconfig.json          # Configuração TypeScript
├── vite.config.ts         # Configuração Vite
└── tailwind.config.js     # Configuração Tailwind CSS
```

## Stack Tecnológico

- **Frontend:** React 19 + TypeScript
- **Estilização:** Tailwind CSS 4
- **Componentes:** shadcn/ui
- **Roteamento:** Wouter
- **Build:** Vite
- **Backend:** Node.js + Express
- **Gerenciador de Pacotes:** pnpm

## Editar Componentes

### Adicionar um novo componente

1. Crie o arquivo em `client/src/components/MeuComponente.tsx`
2. Importe em `client/src/pages/Home.tsx`
3. Use no JSX

Exemplo:
```tsx
// client/src/components/MeuComponente.tsx
export default function MeuComponente() {
  return <div className="p-4 bg-primary text-white">Meu Componente</div>;
}
```

### Editar estilos globais

- Edite `client/src/index.css` para mudanças globais
- Use classes Tailwind nos componentes
- Cores principais: `bg-primary`, `text-primary`, etc

## Remover Referências do Manus

Se encontrar referências ao Manus, remova:

1. **Em `client/index.html`:**
   - Remova scripts de analytics do Manus
   - Remova meta tags específicas do Manus

2. **Em `vite.config.ts`:**
   - Remova `vite-plugin-manus-runtime`

3. **Em componentes:**
   - Remova imports de `ManusDialog`
   - Remova chamadas a APIs do Manus

## Troubleshooting

### Erro: "Cannot find module"
```bash
pnpm install
```

### Erro: "Port 5173 already in use"
```bash
pnpm run dev -- --port 3001
```

### Erro: TypeScript
```bash
pnpm run check
```

## Publicar em Produção

### Opção 1: Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Opção 2: Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Opção 3: Seu próprio servidor
```bash
pnpm run build
# Copie a pasta 'dist' para seu servidor
```

## Próximos Passos

1. **Integrar Backend:** Conectar formulários a um servidor
2. **Adicionar Autenticação:** Implementar login de médicos
3. **Banco de Dados:** Adicionar Supabase ou PostgreSQL
4. **Deploy:** Publicar em Vercel, Netlify ou seu servidor

## Suporte

Para dúvidas sobre o código, consulte:
- Documentação React: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- TypeScript: https://www.typescriptlang.org

---

**Versão:** 1.0.0  
**Última atualização:** Junho 2026
