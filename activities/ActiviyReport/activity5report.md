# Activity 5: React Tools & Music App with Fixed Data

**Course:** Web Application Development  
**Instructor:** Bobby Estey  
**Author:**   ADEWALE OLAOMO  
**Date:** March 14, 2026

---

## Project Overview

The Community Resource and Event Management System is a website that helps groups like churches and non-profits manage shared resources and schedule events. Many organizations use spreadsheets, emails or handwritten lists which can cause scheduling conflicts and miscommunication. This system provides a centralized digital solution.
This activity focuses on building a React application that displays music album information. The project demonstrates fundamental React concepts including components, props, state management with hooks, and event handling.

Code Git Link: https://github.com/whaleswqeb/Topic_5_JavaScript_Web_Application_Development/tree/main/Code

---

## Part 1: Music App Initial Setup

### Screenshots

**Figure 1: Floder Structure of the React Application**

![Creating React App](folderstructurepart1.png)

---

**Figure 2: React Application Running**

![Default Files](homepagepart1.png)

---

**Figure 3: Creating Index.js**

![Creating index.js](index.png)

---

**Figure 4: Adding Bootstrap CSS**

![Bootstrap CDN](bootstrapcssadded.png)

---

**Figure 5: Card Component JSX Layout**

![First Card](cardpart1.png)

---

**Figure 6: Props Passing to the Card.jsx**

![Three Cards](proppassing.png)

---

**Figure 7: Importing Card**

![Import Card](importedallcard.png)

---

**Figure 8: Responsiveness of Application**

![Final Part 1](reponsiveness.png)

---

### Part 1 Summary

In Part 1, I built a React app from scratch using create-react-app. I learned JSX syntax rules including single parent element requirement and using className instead of class. I integrated Bootstrap CSS for styling and created a card interface. When I needed multiple cards, copying HTML proved inefficient, so I created a reusable Card component. I then enhanced it with props so each card could display different album data while maintaining the same structure. This separation of structure from content is fundamental to React development.

---

## Part 2: State Changer Demo (Mini App)

### Screenshots

**Figure 9: Statechanger App**

![alt text](image.png)

---

**Figure 10: useState Hook Code**

![alt text](image-2.png)
---

**Figure 11: App.js Of StateChanger App**

![alt text](image-3.png)

---

**Figure 12: Counter.css**

![alt text](image-4.png)

---

**Figure 13: After Clicks on Button**

![alt text](image-5.png)

---

**Figure 14: Message Change**

![alt text](image-6.png)

---

**Figure 15: Multiple Counters**

![alt text](image-7.png)

---

### Part 2 Summary

The State Changer Demo introduced React hooks, specifically useState. Before hooks, only class components could have state. Now functional components can use state through hooks. The Counter component demonstrated two independent state variables: one tracking button clicks and another tracking text input. Each state maintains its own value and update function. When state changes, React automatically re-renders the component. The input demonstrated the controlled component pattern where form elements are controlled by React state. Adding three Counters showed each maintains its own independent state, proving state encapsulation.

---

## Part 3: Music App with State and Props

### Screenshots

**Figure 16: App.js**

![alt text](image-8.png)

---

**Figure 17: Album Data Array**

![alt text](image-9.png)

---

**Figure 18: RenderedList Function**

![alt text](image-10.png)

---

**Figure 19: Card.jsx**

![alt text](image-12.png)

---

**Figure 20: Browser View**

![alt text](image-11.png)

---

**Figure 21: Made responsive**

![alt text](image-13.png)

---

**Figure 22: Final Application**

![alt text](image-14.png)

---

### Part 3 Summary

Applying state concepts to the music app transformed how album data is managed. Instead of hardcoding Card props, the App component now maintains an albumList state array. The renderedList function uses map to transform each album object into a Card component. This makes the application more maintainable and scalable, as adding albums just requires adding objects to the state array. The map function, practiced with simple examples, proves essential for transforming data into UI components. Flexbox styling creates a responsive horizontal layout with cards wrapping on smaller screens. The key prop on each Card helps React efficiently update the DOM.

---

## Map Function Examples

To understand map, I have added this code for rendering the list inside the App.js:

```
<div className="card-container">
  {albumList.map((album) => (
    <div className="card" key={album.id}>
      <img src={album.image} alt={album.title} className="album-image" />

      <div className="card-body">
        <h3 className="album-title">{album.title}</h3>
        <p className="album-artist">Artist: {album.artist}</p>
        <p className="album-year">Year: {album.year}</p>
        <p className="album-description">{album.description}</p>

        <button className="btn btn-primary">
          View Album
        </button>
      </div>
    </div>
  ))}
</div>
```

In the music app, map works the same way but returns JSX Card components instead of strings.

---

## Key Terminology

| Term                 | Definition                                                              |
| -------------------- | ----------------------------------------------------------------------- |
| React                | JavaScript library for building user interfaces through components      |
| JSX                  | Syntax extension allowing HTML-like code in JavaScript                  |
| Component            | Reusable piece of UI that returns JSX                                   |
| Props                | Read-only data passed from parent to child component                    |
| State                | Mutable data within a component that triggers re-rendering when changed |
| useState             | React hook adding state to functional components                        |
| Hook                 | Functions that let components "hook into" React features                |
| Map                  | JavaScript array method transforming each element into something new    |
| Controlled Component | Form element whose value is controlled by React state                   |
| Flexbox              | CSS layout model for arranging elements flexibly                        |

---



**Final Summary**

In this activity, I explored several important concepts used in modern React development.  
* I figured out how to make parts of the user interface in React that I can use again. This helps keep the application organized. It is easier to take care of the application. I made React components that represent different parts of the user interface. 
* I used props to share data, between components.
Props help a parent component give information to child components.
This makes components flexible and reusable because they can work with data.
I pass data from a parent to a child using props.
This way I can make components that work in different ways.  
* I took a look, at how to manage state with React hooks. The state is really important because it lets components keep track of and change values that're not always the same. This happens when people use the application or when something else happens in the application. State is what makes this possible for components. 
* Using the map function to make all these elements was really helpful. It reminded me of the ideas behind making React applications like making small parts that work together managing what is happening at any given time and making the user interface change on the fly. React development is about these things. They are the basics that you need to know to make interactive web applications, with React.