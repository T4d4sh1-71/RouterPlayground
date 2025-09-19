import { Stack } from 'expo-router';

export default function RootLayout(){
    return (
    
    
        <Stack>
            <Stack.Screen name="about" options={{title: "About Page"}}/>
            <Stack.Screen name="contact" options={{title: "Contact Page"}}/>
            <Stack.Screen name="index" options={{title: "Home page"}}/>
        </Stack>

    )
}