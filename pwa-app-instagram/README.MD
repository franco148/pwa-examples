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


#### Why Caching?
 **Why support Offline Access?**
 Because we need to make our applications available even when there is no internet conection. With service workers we can pre-cache or in general cache certain file, assets, your web app might need and therefore can still display this page and even allow navigation whilst your application is offline, super useful in such circunstances.

#### The Cache API
When working with web applications, there actually are multiple possible caches to work with. The server can cache some resources but these still need to be sent over the wire, so they disqualify for offline access. The browser also manages its own cache totally without you telling it to do so, this is the cache we disabled in the first module. Now this cache managed by the browser has one big disadvantage, IT IS MANAGED BY THE BROWSER, you can not rely on it you can't explicity tell it which assets to cache and which not to cache. So we as developer have no control over it or only a very limited amount and we can not rely on these files being there when you need them, that is where the cache API steps in.

A separate cache storage also living in the browser but managed by us as a developer. This cache holds simple key-value pairs where the key are the HTTP requests you want to send, so to put it in a simplified picture, simply the URL you are tyring to reach, thought it really is the complete request and the value is the response you got back. So of course you need to have made that request successfully at least one time so that you got the response you actually want to display, otherwise you can not cache it. You can not cache what is not there, but once you have got that response one time, you can store it on the key, so on that request you sent and then fetch it later on, when you need to send that same request again but have no internet connection and that simply is how the cache API works. You store key value pairs, request and response. 

Now the cache API can be accessed from both service workers and your ordinary Javascript on your pages. So you can access it not only from service workers but also from your day-to-day Javascript running in your pages loaded through your HTML pages.











