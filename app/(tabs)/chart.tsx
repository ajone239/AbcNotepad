import { Theme } from '@/src/colors';
import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { LineChart } from 'react-native-chart-kit'

export default function Chart() {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                ]
            }
        ]
    };

    return (
        <View style={styles.container}>
            <LineChart
                data={data}
                width={Dimensions.get("window").width} // from react-native
                height={Dimensions.get("window").height}
                chartConfig={{
                    backgroundColor: Theme.background,
                    backgroundGradientFrom: Theme.background,
                    backgroundGradientTo: Theme.background,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: Theme.text,
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
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

