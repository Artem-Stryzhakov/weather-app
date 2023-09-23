# Note from your buddy :)

## Components

All components have been moved to `/src/components`

**The pros of this are:**

- Better organization
- Better looking imports. For example: `import { WeatherToday, Loading, WeekForecast, Forecast } from "./components";`. You had to import all of these components one by one previously
- Easy to exapnd

## File types

Converted all **.js** files to **.ts** and all **.jsx** files to **.tsx**.
`index.js` has to be a **.tsx** file becasue reasons :)

## Typing

All components that had props had their props typed. I prefer using `type` but you can use `interfaces`. The main difference is that types **can't** expand after being defined but interfaces **can**.

### Note about exporting props

It is better to export props in TS, especially commonly used ones. For example, I have used `BaseWeatherProps` from the `Weather` component in other props to add it (that is why it is named `Base`).
Imagine the prop is for a text `input`. It has text and width. This prop could be reused for a textarea or a custom component

## Reminder

Add the `.env` file to this branch locally