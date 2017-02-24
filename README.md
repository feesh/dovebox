# 🐥📦 DoveBox
A patrol dashboard using React, Redux, and Sass. This demo monitors a flock of Doves and interacts with the [test API here](https://github.com/spacedarcy/MCUITest).

[View lightbox online. 👀](http://static.trishang.com/db/)

![Screenshot of demo](http://static.trishang.com/db/screenshot-dovebox.jpg "Screenshot of lightbox demo")

### 👉 Get started
Testing this out locally? Start here to get set up:
1. Download or clone the [server repo](https://github.com/spacedarcy/MCUITest).
3. Download or clone this repo.
4. Install dependencies. Run `npm install`.
5. Start the API server with `npm start`.
6. Start the DoveBox dashboard, run `npm start`.
7. Open your browser to [http://localhost:3333/](http://localhost:3333/).
8. To build for distribution, run `npm build`. Files will be packaged to the `/dist` folder.

### 🌟 Features
- Search for a specific dove
- Delete a dove that's misbehaving
- Launch a new dove into the flock

### 🚀 Future upgrades
Although this was a fun project to start on, given the time constraints there are definitely additional potential features I'd love to continue implementing, including:
- [ ] Tests!
- [ ] Better error handling, particularly around the API integration.
- [ ] Improved animations, between opening the add panel, and also visual feedback when adding a brand new dove or deleting a dove.
- [ ] Documentation throughout the code.
- [ ] Cross browser and mobile testing.
- [ ] SVG doves set to the appropriate color.
- [ ] Rainbow sort order for the dove list.

### 🖥 Technologies used
- Javascript (React, Redux)
- Sass & PostCSS
- Webpack
- Babel
- Tested across Chrome, Safari, Firefox, and IE
