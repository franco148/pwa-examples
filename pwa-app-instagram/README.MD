# Progressive Web Apps Example
Progressive Web Apps Example

# How to Use
You need [Node.js](https://nodejs.org) installed on your machine. Simply download the installer from [nodejs.org](https://nodejs.org) and go through the installation steps.

Once Node.js is installed, open your command prompt or terminal and **navigate into this project folder**. There, run `npm install` to install all required dependencies.

Finally, run `npm start` to start the development server and visit [localhost:8080](http://localhost:8080) to see the running application.

# What are service workers?
- SW run on a separate single thread and this is important. They do not share the same thread as the normal Javascript code loaded by your HTML pages runs on.
- They have their own thread because service workers run in the background. So htey also are decoupled from HTML pages. Whilst you do register a service worker through HTML code or through an HTML page initially, once you registered it, it simply has a certain scope. For example it could be the domain of your page. So the SW is then not attached to a single page, but available to all the pages of your web application.
- SW are background processes run in the background.

##### What can you do in service workers then?
- Since they run in the background, they are really good at one thing, reacting to events. They can listen to some events, either emitted by your normal javascripts pages or also by your HTML code or by another server, like web push notifications.
- SW are all about reacting to events, they sit there in the background and they do nothing but they can react to all kinds of incoming events and then do something, like for example return a cached asset or show a notification to the user and you will see all these things throughout the course. So that are service workders, background processes attached to entire application than of a single page and all about events.

#### "Listenable" Events (in Service Worker)
- FETCH: Browser or Page-related JavaScript initiates a Fetch (Http request)
- PUSH NOTIFICATIONS: Service worker receives Web Push Notification (from server)
- NOTIFICATION INTERACTION: User interacts with displayed Notification.
- BACKGROUND SYNC: Service Worker receives Background Sync Event (e.g. Internet Connection was restored)
- SERVICE WORKDER LIFECYCLE: Service Worker Phase changes
















