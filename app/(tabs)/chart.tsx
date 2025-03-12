import SegmentedSelector, { SelectionDetails } from '@/components/SegmentedSelector';
import { Theme } from '@/src/colors';
import { selectEntries } from '@/src/entrySlice';

import React, { useState } from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit'
import { useSelector } from 'react-redux';

type Lookback = SelectionDetails & {
    lookback: number;
    frequency: number;
};

const lookbacks: Lookback[] = [
    {
        label: "7d",
        lookback: 7,
        frequency: 1,
    },
    {
        label: "14d",
        lookback: 14,
        frequency: 2,
    },
    {
        label: "1mo",
        lookback: 31,
        frequency: 4,
    }
]

const millisInADay = 24 * 60 * 60 * 1000;


function sameDay(d1: Date, d2: Date) {
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
}


export default function Chart() {
    const [daysToLookBack, setDaysToLookBack] = useState<number>(lookbacks[0].lookback);
    const [dateLabelFrequency, setDateLabelFrequency] = useState<number>(lookbacks[0].frequency);

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
        .filter((_, i) => (i % dateLabelFrequency) == 0);

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
            <View style={styles.selectorContainer}>
                <SegmentedSelector
                    details={lookbacks}
                    onSelected={(detail) => {
                        const lb = detail as Lookback;
                        setDaysToLookBack(lb.lookback)
                        setDateLabelFrequency(lb.frequency)
                    }} />
            </View>

            <LineChart
                data={data}
                width={Dimensions.get("window").width - 10}
                height={Dimensions.get("window").height - 100}
                yAxisInterval={1}
                chartConfig={{
                    backgroundColor: Theme.background,
                    backgroundGradientFrom: Theme.background,
                    backgroundGradientTo: Theme.background,
                    decimalPlaces: 1,
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
    selectorContainer: {
        width: 160,
        margin: 5,
    },
    text: {
        color: Theme.text,
    }
});

