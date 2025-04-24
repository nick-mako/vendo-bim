# Master's Thesis Experiment Website

This React app hosts a simulated e-commerce product page designed specifically for conducting a master's thesis experiment. The project investigates how AI-generated reviews influence consumer trust towards sellers and e-commerce platforms, focusing on the moderating role of warning labels.

## Research Question

How do AI-generated reviews affect user-perceived trustworthiness of sellers and platforms, and how does the presence of a warning label moderate these effects?

## Experiment Design

This experiment employs a between-subjects factorial design (2x2):

- Review Type: AI-generated vs. Human-generated
- Warning Label: Present vs. Absent

## URL Parameters

You can manipulate the experiment conditions by adjusting the following URL parameters:

- **`fruit`**: Set to `kiwi` to use AI-generated (alternative) reviews. Any other value defaults to human-generated reviews.
- **`weather`**: Set to `bad` to show a warning label about review authenticity. Any other value will hide the label.
- **`pid`**: Participant ID used for tracking in Google Analytics, enabling collection of control variables and attention checks. Default value is `unknown` if omitted.

Example URL:
https://your-app.com/vendo-bim/?fruit=kiwi&weather=bad&pid=Niklas

## Technical Implementation

- Platform: React (frontend), Qualtrics (survey integration)
- Analytics: Supabase
- Condition assignment via HTML parameters managed in Qualtrics
- Deployed and hosted using GitHub Pages

### Environment Setup

Create a `.env` file in the root directory with:

```
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Deployment

The application is currently accessible at:
[https://nick-mako.github.io/vendo-bim](https://nick-mako.github.io/vendo-bim)

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

- **`npm start`**: Launches the app in development mode at [http://localhost:3000](http://localhost:3000).
- **`npm test`**: Starts the interactive test runner.
- **`npm run build`**: Builds the production-ready app in the `build` folder.
- **`npm run eject`**: Removes the build abstraction layer for advanced configuration (irreversible).

### More Information

For further details on Create React App and React usage, see the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) and [React documentation](https://reactjs.org/).
