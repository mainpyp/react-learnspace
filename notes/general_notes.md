# Sources#
* [Documentation](https://react.dev/reference/react)
* [Learn React](https://react.dev/learn)
* [Learn React - Hatches](https://react.dev/learn/escape-hatches)  
* [Components](https://reactnative.dev/docs/components-and-apis)


# General Information
## What is React?
## React vs. ReactNative
**React** is a JavaScript library for building user interfaces, primarily for web applications. **React Native**, on the other hand, is a framework that allows developers to build mobile applications using React. While React targets web browsers, React Native targets mobile platforms like iOS and Android, allowing for the creation of native mobile apps with a single codebase.

If you are familiar with React, learning React Native is relatively easy. The main challenge lies in understanding mobile-specific components and platform-specific details, but the core learning curve is minimal.

## SSR vs. SSG

What is the difference between SSR and SSG I asked myself so I asked ChatGPT. The answer is surprisingly easy.

**In short**:
* **SSR**: Build the page when it’s requested.
* **SSG**: Pre-build the page before it’s requested.

### SSR (Server-Side Rendering):

* When someone visits a website, the server builds the page on the spot and sends it to the browser.
* It’s like going to a restaurant, ordering food, and the chef cooks your meal after you order.
* Good for real-time data and personalization, but it takes a bit of time since the page is built while you wait.

### SSG (Static Site Generation):

* The pages are pre-built in advance and stored, ready to be delivered instantly.
* It’s like going to a bakery where all the pastries are already baked and you just pick what you want. Super fast!
* Great for static content like blogs, where the content doesn’t change frequently.