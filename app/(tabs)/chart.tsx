import { Theme } from '@/src/colors';
import { selectEntries } from '@/src/entrySlice';

import React from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit'
import { useSelector } from 'react-redux';


const millisInADay = 24 * 60 * 60 * 1000;
const daysToLookBack = 7;

function sameDay(d1: Date, d2: Date) {
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
}


export default function Chart() {
    const entries = useSelector(selectEntries)

    const entriesDates = entries.map(entry => new Date(entry.dateCreated))

    const maxDate = entriesDates.reduce((p, v) => (p > v ? p : v));

    const dates = Array.from(
        new Array(daysToLookBack),
        (_, i) => new Date(maxDate.getTime() - (daysToLookBack - i - 1) * millisInADay)
    )

    const options: Intl.DateTimeFormatOptions = {
        month: 'numeric',
        day: '2-digit',
    }

    const datesLabels = dates
        .map(day => day.toLocaleDateString('en-US', options).toString())

    const datesCounts = entriesDates.reduce(
        (acc, val) => {
            const index = dates.findIndex((date) => sameDay(date, val));
            acc[index]++;
            return acc
        },
        new Array(daysToLookBack).fill(0)
    )


    const data = {
        labels: datesLabels,
        datasets: [{ data: datesCounts, }]
    };

    return (
        <View style={styles.container}>
            <LineChart
                data={data}
                width={Dimensions.get("window").width} // from react-native
                height={Dimensions.get("window").height - 50}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: Theme.background,
                    backgroundGradientFrom: Theme.background,
                    backgroundGradientTo: Theme.background,
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    propsForDots: {
                        r: "5",
                        strokeWidth: "2",
                        stroke: Theme.text,
                    }
                }}
                bezier
                style={{
                    marginVertical: 10,
                    borderRadius: 10,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.background,
    },
    text: {
        color: Theme.text,
    }
});

