![Currency Wallet](./assets/currency-wallet.gif)

# Currency Wallet

See the live version of [Currency Wallet](https://jarekwach.github.io/Currency-Wallet/).

Currency wallet is an application that calculates the potential profit or loss from your currencies converted into PLN. Application data is saved in localStorage, and current exchange rates are downloaded using the [API](https://apilayer.com/marketplace/exchangerates_data-api).

**Main features**:

- The purchase price of a given currency from the selected day is completed automatically using the API (the possibility of modifying the price)
- Calculation of profit or loss (current purchase price downloaded from the API)
- Application data is saved in localStorage (no loss of entries after refreshing or closing the browser)
- Wallet form validation

&nbsp;

## 💡 Technologies & tools

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

&nbsp;

## Future plans

- Deleting wallet items

&nbsp;

## :gear: Installation

The project uses [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/).
To run it locally you should install all dependencies:

```
npm i
```

The API key is needed for the proper operation of the application. You need to generate it from the [APILayer](https://apilayer.com/marketplace/exchangerates_data-api) website.

- Enter your API key in the `.env.example` file

```
REACT_APP_API_KEY=yourAPIkey
```

- Rename `.env.example` to `.env`

&nbsp;

To run webpack and create a localhost port you should type:

```
npm start
```

&nbsp;

## 🙋‍♂️ Feel free to contact me

Find me on...

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jarosław-wąchała/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jaroslaw.wachala@gmail.com)

&nbsp;

## 👏 Special thanks / Credits

Thanks to my [Mentor - devmentor.pl](https://devmentor.pl/) – for providing me with this task and for code review.
