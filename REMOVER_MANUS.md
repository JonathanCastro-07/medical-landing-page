# Remover Referências do Manus

Este guia ajuda você a remover todas as dependências do Manus do projeto.

## Passo 1: Usar Configuração Vite Local

Se encontrar erros relacionados ao Manus ao rodar `pnpm run dev`:

```bash
# Renomeie os arquivos
mv vite.config.ts vite.config.manus.ts
mv vite.config.local.ts vite.config.ts

# Agora execute
pnpm run dev
```

## Passo 2: Remover Plugin do Manus do package.json

Se quiser remover completamente a dependência:

```bash
pnpm remove vite-plugin-manus-runtime
```

Depois edite `vite.config.ts` e remova estas linhas:

```typescript
// REMOVA ESTA LINHA:
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

// E REMOVA DESTA LINHA:
const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime(), ...];
// PARA:
const plugins = [react(), tailwindcss(), jsxLocPlugin()];
```

## Passo 3: Remover Componentes do Manus

Se encontrar `ManusDialog` em componentes:

```bash
grep -r "ManusDialog" client/src/
```

Remova os imports e usos:

```typescript
// REMOVA:
import ManusDialog from "@/components/ManusDialog";

// E REMOVA DO JSX:
<ManusDialog />
```

## Passo 4: Remover Scripts de Analytics

Em `client/index.html`, remova:

```html
<!-- REMOVA ESTAS LINHAS: -->
<script
  defer
  src="%VITE_ANALYTICS_ENDPOINT%/umami"
  data-website-id="%VITE_ANALYTICS_WEBSITE_ID%"
></script>
```

## Passo 5: Remover Diretório .manus

```bash
rm -rf .manus
rm -rf .manus-logs
```

## Passo 6: Remover Arquivo .project-config.json

```bash
rm .project-config.json
```

## Passo 7: Limpar node_modules e reinstalar

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## Verificar se tudo está funcionando

```bash
pnpm run check  # Verifica TypeScript
pnpm run dev    # Inicia servidor de desenvolvimento
```

## Estrutura Final Limpa

Após remover Manus, seu projeto terá apenas:

```
medical-landing-page/
├── client/
│   ├── src/
│   ├── public/
│   └── index.html
├── server/
├── shared/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── README.md
└── SETUP_LOCAL.md
```

## Próximos Passos

1. **Adicionar Backend:** Criar rotas Express em `server/`
2. **Integrar Banco de Dados:** Adicionar Supabase ou PostgreSQL
3. **Autenticação:** Implementar login de médicos
4. **Deploy:** Publicar em Vercel, Netlify ou seu servidor

## Troubleshooting

### Erro: "Cannot find module 'vite-plugin-manus-runtime'"
```bash
pnpm remove vite-plugin-manus-runtime
```

### Erro: "Cannot find module '@/components/ManusDialog'"
Remova o import do componente ManusDialog

### Erro: "VITE_ANALYTICS_ENDPOINT is undefined"
Remova os scripts de analytics do `client/index.html`

---

Agora seu projeto está limpo e pronto para desenvolvimento local! 🎉
