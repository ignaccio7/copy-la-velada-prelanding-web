# Dependencias a utilizar
Para los estilos
```bash
  pnpx astro add tailwind  
```

Y para las animaciones
```bash
  pnpm install @midudev/tailwind-animations
```
Y luego seguir los pasos de **https://tailwindcss-animations.vercel.app/**

Para la fuente
```bash
  pnpm add @fontsource-variable/jost
```
Y luego seguir los pasos de **https://fontsource.org/fonts/jost/install**

# Recursos utilizados

1. Para optimizar los svg: https://jakearchibald.github.io/svgomg/
2. Para instalar fuentes como una dependencia: https://fontsource.org/
3. Para obtener el timestamp de una fecha cualquiera en milisegundos: https://www.epochconverter.com/
4. Para los iconos: https://tabler.io/icons

# Trucos nuevos

### Para cambiar el color de una svg segun la preferencia que tenga en el sistema *se puede ver en el archivo public/favicon.svg*:
```css
  <style>
    path { fill: #000; }
    @media (prefers-color-scheme: dark) {
        path { fill: #FFF; }
    }
  </style>
```

### Para crear multiples archivos en la terminal de linux
```bash
  touch {Countdown,Footer,Hero,Info,PrincipalDate}.astro 
```