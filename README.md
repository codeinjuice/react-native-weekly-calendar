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
  }
});
```

### Select Date
![select_dates](https://user-images.githubusercontent.com/8908724/77604941-04b48a00-6f57-11ea-93b2-8e9179ef3255.gif)

### Change Week
![change_weeks](https://user-images.githubusercontent.com/8908724/77604967-11d17900-6f57-11ea-90cf-f14250211121.gif)

### Pick Date (iOS & Android)
![pick_dates_ios](https://user-images.githubusercontent.com/8908724/77604971-15650000-6f57-11ea-9e53-d9a3c3c091f1.gif)
![pick_dates_android](https://user-images.githubusercontent.com/8908724/77611922-fe7bd900-6f69-11ea-85e3-9dd3eacaabf5.gif)


## Properties
All properties are optional.
| Prop  | Default  | PropTypes | Description |
| :------------ |:---------------:| :---------------:| :-----|
| selected | `moment()` | `string` or `Date` or `Moment` | Set initially selected day. Format for string: 'YYYY-MM-DD'. Date and Moment instance are allowed as well. Default provides Moment instance of today|
| startWeekday | `7` | `number` | Set which weekday to render first. If firstDay = 1, week starts from Monday. If firstDay = 7, week starts from Sunday. |
| titleFormat | `undefined` | `string` | Set format to display title (e.g. titleFormat='MMM YYYY' displays "Jan 2020") |
| weekdayFormat | `'ddd'` | `string` | Set format to display weekdays (e.g. weekdayFormat='dd' displays "Mo" and weekdayFormat='ddd' displays "Mon") |
| locale | `'en'` | `string` | Set locale (e.g. Korean='ko', English='en', Chinese(Mandarin)='zh-cn', etc.) |
| events | `[]` | `array` | Set list of events you want to display below weekly calendar. Default is empty array []. |
| renderEvent | `undefined` | `func` | Specify how each event should be rendered below weekly calendar. Event & index are given as parameters. |
| renderFirstEvent | `undefined` | `func` | Specify how first event should be rendered below weekly calendar. Event & index are given as parameters. |
| renderLastEvent | `undefined` | `func` | Specify how last event should be rendered below weekly calendar. Event & index are given as parameters. |
| renderDay | `undefined` | `func` | Specify how day should be rendered below weekly calendar. Event Views, day (Moment object), index are given as parameters. |
| renderFirstDay | `undefined` | `func` | Specify how first day should be rendered below weekly calendar. Event Views, day (Moment object), index are given as parameters. |
| renderLastDay | `undefined` | `func` | Specify how last day should be rendered below weekly calendar. Event Views, day (Moment object), index are given as parameters. |
| onDayPress |  `undefined` | `func` | Handler which gets executed on day press. Default = undefined |
| themeColor | `'#46c3ad'` | `string` | Set theme color. Either color code or color name that is registered in RN StyleSheet works. |
| style | `{}` | `object` | Set style of `WeeklyCalendar` component |
| titleStyle | `{}` | `object` | Set text style of calendar title |
| dayLabelStyle | `{}` | `object` | Set text style of weekday labels |

## Customization
```javascript
<View style={styles.container}>
  <WeeklyCalendar
    events={sampleEvents} 
    selected='2020-03-23'
    startWeekday={7}
    weekdayFormat='ddd'
    locale='ko'
    renderEvent={(event, j) => {
      let startTime = moment(event.start).format('LT').toString()
      let duration = event.duration.split(':')
      let seconds = parseInt(duration[0]) * 3600 + parseInt(duration[1]) * 60 + parseInt(duration[2])
      let endTime = moment(event.start).add(seconds, 'seconds').format('LT').toString()
      return (
        <View key={j}>
          <View style={styles.event}>
            <View style={styles.eventDuration}>
              <View style={styles.durationContainer}>
                <View style={styles.durationDot} />
                <Text style={styles.durationText}>{startTime}</Text>
              </View>
              <View style={{ paddingTop: 10 }} />
              <View style={styles.durationContainer}>
                <View style={styles.durationDot} />
                <Text style={styles.durationText}>{endTime}</Text>
              </View>
              <View style={styles.durationDotConnector} />
            </View>
            <View style={styles.eventNote}>
              <Text style={styles.eventText}>{event.note}</Text>
            </View>
          </View>
          <View style={styles.lineSeparator} />
        </View>
      )
    }}
    renderLastEvent={(event, j) => {
      let startTime = moment(event.start).format('LT').toString()
      let duration = event.duration.split(':')
      let seconds = parseInt(duration[0]) * 3600 + parseInt(duration[1]) * 60 + parseInt(duration[2])
      let endTime = moment(event.start).add(seconds, 'seconds').format('LT').toString()
      return (
        <View key={j}>
          <View style={styles.event}>
            <View style={styles.eventDuration}>
              <View style={styles.durationContainer}>
                <View style={styles.durationDot} />
                <Text style={styles.durationText}>{startTime}</Text>
              </View>
              <View style={{ paddingTop: 10 }} />
              <View style={styles.durationContainer}>
                <View style={styles.durationDot} />
                <Text style={styles.durationText}>{endTime}</Text>
              </View>
              <View style={styles.durationDotConnector} />
            </View>
            <View style={styles.eventNote}>
              <Text style={styles.eventText}>{event.note}</Text>
            </View>
          </View>
        </View>
      )
    }}
    renderDay={(eventViews, weekdayToAdd, i) => (
      <View key={i.toString()} style={styles.day}>
        <View style={styles.dayLabel}>
          <Text style={[styles.monthDateText, { color: 'pink' }]}>{weekdayToAdd.format('M/D').toString()}</Text>
          <Text style={[styles.dayText, { color: 'pink' }]}>{weekdayToAdd.format('ddd').toString()}</Text>
        </View>
        <View style={[styles.allEvents, eventViews.length === 0 ? { width: '100%', backgroundColor: 'pink' } : {}]}>
          {eventViews}
        </View>
      </View>
    )}
    onDayPress={(weekday, i) => {
      console.log(weekday.format('ddd') + ' is selected! And it is day ' + (i+1) + ' of the week!')
    }}
    themeColor='pink'
    style={{ height: 400 }}
    titleStyle={{ color: 'blue' }}
    dayLabelStyle={{ color: 'green' }}
  />
</View>
```
![customized](https://user-images.githubusercontent.com/8908724/77616782-d5614580-6f75-11ea-8736-6e315ad8802d.png)
