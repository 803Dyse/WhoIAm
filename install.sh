#!/bin/bash

echo "🚀 Instalando dependências do projeto..."

# Instalar dependências principais
npm install next@14.0.4 react@^18 react-dom@^18

# Instalar dependências de desenvolvimento
npm install -D @types/node@^20 @types/react@^18 @types/react-dom@^18 typescript@^5

# Instalar Tailwind CSS
npm install -D tailwindcss@^3.3.0 postcss@^8 autoprefixer@^10.0.1

# Instalar ESLint
npm install -D eslint@^8 eslint-config-next@14.0.4

# Instalar ícones
npm install lucide-react@^0.294.0

echo "✅ Dependências instaladas com sucesso!"
echo ""
echo "Para executar o projeto:"
echo "npm run dev"
echo ""
echo "Para fazer build:"
echo "npm run build"