# song-server

This is a code challenge that I was assigned as part of an interview process.

For instructions on getting the backend set up, see [readme for backend](https://github.com/sdspikes/song-server/tree/master/songs-backend).

The frontend should just require `npm install` and `npm start`.

### Possible improvements

The requirements said to use Redux to keep track of the state of the player and to use Material UI for the views.  I did not have time to learn enough about these technologies to incorporate them, so I just used standard React components to deal with the state as well as the UI.  If I were to spend more time on the project, I would incorporate the mentioned technologies.

I had originally assumed that I'd also need to provide features for uploading songs, but this seems not to be the case upon a careful re-read of the requirements.  That seems like an obvious next step.  I did include a backend route for adding metadata including file name, which is currently set as a POST route, but I had it as a GET so that I could hit routes like
`http://www.localhost:3000/new?title=One%20Day%20More&artist=Les%20Miserables%20Cast&album=Les%20Miserables&filename=onedaymore.mp3` in the browser to add items, but I did not provide a way to upload the actual audio files from the browser.

I also started with boilerplates to get started more quickly, but that lead to some cruft in the code.  If I had more time, I'd pare that down even more than I already did and make sure I understood the purpose of every line before committing.

The admonision to be side-effect free strikes me as fairly out of place in a web app, where the goal is often to acheive things that are usually considered "side effects" like I/O with the user/updates to the page.  If I were being asked to deliver this to a client, I would want to sit down and talk through what the actual requirement behind this was and make sure I could deliver it before agreeing to the project.

### Last thoughts

The writeup says to point out bits of the code I'm particularly proud of, but nothinng really stands out to me here.  I'm working in frameworks I am not especially flutent in (I've used most of them before but they aren't my home turf) under time pressure and mostly prioritized getting things working.  

I'm told to think of this as a first PR, which to me means that I should expect a fair bit of critical feedback -- when working in a new environment with new/unknown standards and practices, I'm bound to run afoul of some bugaboos of the project lead/other teammates.  I don't think it's especially worthwhile to spend a lot of time trying to mind-read and devine the best practices vs getting something out there, getting feedback, and iterating.
