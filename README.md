# evacuate-me

This is a very cool project by the very cool authors

* [Ella Wirstad Gustafsson](https://www.github.com/ellawg "Ella's github page")
* [Johannes Loor](https://www.github.com/johannesloor "Johannes' github page")
* [Linda Cnattingius](https://www.github.com/lindacnatt "Linda's github page")
* [Martin Linder Nilsson](https://www.github.com/martinlindernilsson "Martin's github page")

Evacuate me is an evacuation planner for the upcoming apocalypse. After entering their name, the user is encouraged to make a series of choices that will result in a suggested planet from the Star Wars universe to escape to, in case of an apocalypse. The choices will filter out the planet suggestions based on the user’s preferred population density, gravity, weather and terrain, using input from buttons and sliders. The last page will present the planet best suited according to the user’s preferences, some information about said planet, and a list of people with whom the user will be sharing this new home. This list of people will consist of previous users and known residents from the SWAPI database.

The app will be built with the framework Vue, and data will be fetched from the API using HTTP request. 

All data about the planets will be fetched from the SWAPI database and filtered depending on user input. Images and animations, however, will be specific for our app and fetched from our own database, since this is not included in the SWAPI database. Information about previous users and their designated planets will be stored in the model. Each planet will have a maximum of 25 stored users, when this number is exceeded, the first user added to the list will be replaced. 

# What we have done

  - Started each screen 
  - API calls
  - Set up hosting on firebase, https://evacuate-me-d8a07.firebaseapp.com

 
# What we still plan to do
- Finish all the screens
- create more advanced animations and interactions
- illustrate more images 

# Project file structure 


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
