import { Tabs } from 'expo-router';

export default function TabsLayout(){
    return (
    <Tabs
        screenOptions={{
            headerShown: false
        }}
    >
        <Tabs.Screen name="something" options={{title: "Something is here"}}/>
        <Tabs.Screen name="secondSomething" options={{title: "A second something"}}/>
        <Tabs.Screen name="lookHere" options={{title: "Look here"}}/>

    </Tabs>
           

    )
}