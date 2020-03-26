# react-native-weekly-calendar
React Native Weekly Calendar component with customization

## Installation
```bash
yarn add react-native-weekly-calendar
```


## Usage
```javascript
import React from 'react';
import { StyleSheet, View } from 'react-native';
import WeeklyCalendar from 'react-native-weekly-calendar';

export default function App() {

  const sampleEvents = [
    { 'start': '2020-03-23 09:00:00', 'duration': '00:20:00', 'note': 'Walk my dog' },
    { 'start': '2020-03-24 14:00:00', 'duration': '01:00:00', 'note': 'Doctor\'s appointment' },
    { 'start': '2020-03-25 08:00:00', 'duration': '00:30:00', 'note': 'Morning exercise' },
    { 'start': '2020-03-25 14:00:00', 'duration': '02:00:00', 'note': 'Meeting with client' },
    { 'start': '2020-03-25 19:00:00', 'duration': '01:00:00', 'note': 'Dinner with family' },
    { 'start': '2020-03-26 09:30:00', 'duration': '01:00:00', 'note': 'Schedule 1' },
    { 'start': '2020-03-26 11:00:00', 'duration': '02:00:00', 'note': 'Schedule 2' },
    { 'start': '2020-03-26 15:00:00', 'duration': '01:30:00', 'note': 'Schedule 3' },
    { 'start': '2020-03-26 18:00:00', 'duration': '02:00:00', 'note': 'Schedule 4' },
    { 'start': '2020-03-26 22:00:00', 'duration': '01:00:00', 'note': 'Schedule 5' }
  ]

  return (
    <View style={styles.container}>
      <WeeklyCalendar events={sampleEvents} style={{ height: 400 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

![select_dates](https://user-images.githubusercontent.com/8908724/77604941-04b48a00-6f57-11ea-93b2-8e9179ef3255.gif)
![change_weeks](https://user-images.githubusercontent.com/8908724/77604967-11d17900-6f57-11ea-90cf-f14250211121.gif)
![pick_dates_ios](https://user-images.githubusercontent.com/8908724/77604971-15650000-6f57-11ea-9e53-d9a3c3c091f1.gif)
![pick_dates_android](https://user-images.githubusercontent.com/8908724/77611922-fe7bd900-6f69-11ea-85e3-9dd3eacaabf5.gif)


## Properties
All properties are optional.
| Prop  | Default  | PropTypes | Description |
| :------------ |:---------------:| :---------------:| :-----|
| selected | `moment()` | <code>string &#124; Date &#124; Moment</code> | Set initially selected day. Format for string: 'YYYY-MM-DD'. Date and Moment instance are allowed as well. |
| startWeekday | `7` | `number` | Set which weekday to render first. If firstDay = 1, week starts from Monday. If firstDay = 7, week starts from Sunday. |
| titleFormat | `undefined` | `string` | Set format to display title (e.g. titleFormat='MMM YYYY' displays "Jan 2020") |
| weekdayFormat | `'ddd'` | `string` | Set format to display weekdays (e.g. weekdayFormat='dd' displays "Mo" and weekdayFormat='ddd' displays "Mon") |
| locale | `'en'` | `string` | Set locale (e.g. Korean='ko', English='en', Chinese(Mandarin)='zh-cn', etc.) |
| events | `[]` | `array` | Set list of events you want to display below weekly calendar. Default is empty array []. |
| renderEvent | `undefined` | `func` | Specify how each event should be rendered below weekly calendar. Event & index are given as parameters. |
