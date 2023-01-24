
<!-- ICON MOON PHASES APP -->
<div align="center">
   <img src="assets/icon.png" alt="MoonPhasesIcon" width="200" style="border-radius: 1rem" />
</div>

<!-- Shields -->
<div align="center">
  <img src="https://img.shields.io/github/languages/top/EmmanuellaAlbuquerque/MoonPhasesApp?color=9cf" alt="top language">
  <img src="https://img.shields.io/github/repo-size/EmmanuellaAlbuquerque/MoonPhasesApp?color=9cf" alt="repo size">
  <a href="https://github.com/EmmanuellaAlbuquerque/MoonPhasesApp/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/emmanuellaalbuquerque/MoonPhasesApp?color=9cf" alt="MIT License">
  </a> 
</div>

<p align="center">Aplicativo para acompanhar as fases da lua.</p>

# Moon Phases App

<div align="center">
  <img style="width: 200px; border-radius: 1rem" src=".github/MoonPhasesAppGiF.gif" alt="mobile app gif">
</div>

## :art: Telas

|Splash Screen|Loading Screen|App Screen|Permission Screen|
|:---:|:---:|:---:|:---:|
|<div style="width:250px">![myImage](.github/tela1splash.jpg)</div>| <div style="width:250px">![myImage](.github/tela2loading.jpg)</div>| <div style="width:250px">![myImage](.github/tela3app.jpg)</div>| <div style="width:250px">![myImage](.github/tela4permission.jpg)</div> 

## :mag_right: Sobre

O projeto MoonPhasesApp exibe em qual fase a lua se encontra no dia em questão e, fornece informações sobre a previsão do clima durante o dia e noite.

## ✨ Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React-Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)

## :rocket: Executando o projeto

Utilize o **yarn** ou o **npm install** para instalar as dependências do projeto.
Em seguida, inicie o projeto.

```sh
npx expo start
```

Lembre-se de obter a API KEY do Dev QWeather ([API Config](https://dev.qweather.com/en/docs/configuration/api-config/)). Em seguida, defina o arquivo .env na home do projeto.
 
 ```sh
# .env.example

Q_WEATHER_KEY=
```

## :iphone: Gerando o apk

```sh
# Importing secrets from a dotenv file
eas secret:push --scope project --env-file .env

# Build for Android Emulator/device
eas build -p android --profile preview
```

## :memo: Licença

Esse projeto está sob a licença do MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✍️ Autor

---

<div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
  <a 
  style="display: flex; flex-direction: column; justify-content: center; align-items: center; color: #333;"
    href="https://github.com/EmmanuellaAlbuquerque">
    <img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/57198678?s=460&u=18118f08f358d2615421a0694cc00b1c10b8bba0&v=4" width="100px;" alt="eu"/>
    <br />
    <sub>
      <b style="color: #333;">
        Emmanuella Albuquerque
      </b>
    </sub>
  </a>
  Made with ❤️ by Manu
</div>