# Instalação da Biblioteca de Crop de Imagem

Para usar o editor de imagem com crop no formulário do blog, você precisa instalar a biblioteca `react-easy-crop`.

## Comando de Instalação

Execute o seguinte comando na pasta `front`:

```bash
npm install react-easy-crop
```

ou se estiver usando yarn:

```bash
yarn add react-easy-crop
```

## O que foi implementado

- **ImageCropModal**: Componente modal para ajustar/cortar imagens
- **Funcionalidades**:
  - Arrastar para reposicionar a imagem
  - Zoom com slider (1x a 3x)
  - Rotação da imagem (90° por clique)
  - Proporção 16:9 para a capa
  - Botões de cancelar e confirmar
  - Interface responsiva

## Como usar

1. Instale a dependência acima
2. No formulário de adicionar notícia, ao fazer upload de uma imagem, o modal de crop abrirá automaticamente
3. Ajuste a imagem como desejar
4. Clique em "Confirmar" para usar a imagem cortada

## Arquivos criados/modificados

- `src/components/PageBlog/ImageCropModal/index.jsx` - Componente do modal
- `src/styles/Blog/image-crop-modal/style.css` - Estilos do modal
- `src/components/PageBlog/PageAdicionarNoticia/index.jsx` - Atualizado para usar o crop
