# simple-trivia-app
A take home challenge for G2I to demonstrate proficiency with React Native and related technologies.

**Installation / Running**

For physical phone

```
yarn install
yarn start
scan qr code with camera
```

For ios

```
yarn install
yarn ios
```

For android

```
yarn install
yarn android
```

To run linters

```
yarn prettier:write
yarn lint
```

This is an expo based react native project so expo app will need to be installed if you want to run the project on physical phone.
No env or other config needed

**Screenshots**

<div>
<img src="https://i.imgur.com/UEoUtJM.png" width=300>
<img src="https://i.imgur.com/j8HKFzQ.png" width=300>
<img src="https://i.imgur.com/ACYDkly.png" width=300>
</div>

**Folder Structure**

I like to organize my project into folders grouped by features. App file is where all initial loading / config and provider wrappers go. I also have api folder, navigation 
folder, and features folder at the root of the src folder. The api folder is where all config related to api calls would go. Navigation folder is where all setup related to 
navigation would go. Features folder is where the core application features are placed. Inside here I followed this structure (where applicable):

```
/features
  /feature
    /components
      /styles
        - somefile.ts
      - somefile.tsx
    /screens
      /styles
        - somefile.ts
      - somefile.tsx
    /store
      - somefile.ts
```

I like to separate my files into container components and presentation components. The container components go into screens folder and presentation components
go into components folder. I also like to place my styles into separate styles folder. The containers contain all the logic and functionality responsible for making
the component "function" and any store data. The presentation components are responsible for just rendering UI.

Last, I have a ui folder where I have reusable components that are not strictly tied to an application feature and all theme config is located here as well.

**Dependencies Used**

* TypeScript - better code safety
* Expo - helps with building out features much faster
* React Navigation - solid library for handling navigation in React Native projects
* Axios - help with handling http requests
* Styled-Components - Solid css-in-js library that provides an easy way to handle dynamic styles.
* Redux - Global state management library
* Redux Toolkit - Utility library to help with common usecases in every application that uses Redux.

**Challenges I faced**

This is actually my first time using Redux Toolkit. Up to this point I just used Redux and Typescript without any other utility libraries and wrote my own setup. However,
it did feel a bit "off" and not an ideal solution. So this time around I looked around in the docs and there is actually an article linked in the Redux-Typescript docs: 
[Do Not Create Union Types with Redux Action Types](https://phryneas.de/redux-typescript-no-discriminating-union). This is pretty much exactly what I've been doing up
until now. With all the recommendations to use Redux Toolkit and how much easier it is to work with Typescript using this utility library, I figured now is good time to
learn how to use it.  

It definitely took me a bit to figure out how to approach handling how to store the score and display the results at the end. I originally had issues with updating the results
and then navigating to the results screen and displaying the results but I did come up with an different aprroach to solve this. I'm honestly not sure if my solution is
an ideal one but I'm definitely eager to talk about ways to improve it!
