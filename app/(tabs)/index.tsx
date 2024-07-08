import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useEffect, useState } from 'react';

export default function TabOneScreen() {
    const [resp, setResp] = useState("");

    async function run() {
        try {
            const r = await fetch("/id", {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const t = await r.text();
            if (r.ok) {
                setResp("Successfully got ID: " + t);
            } else {
                setResp("Got Error: " + t);
            }
        } catch (e) {
            setResp("Got Error: " + e);
        }
    }

    useEffect(() => {
        run();
    }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{resp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
