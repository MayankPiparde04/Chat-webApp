import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, useRouter, useSegments } from "expo-router";
import '../global.css';
import { AuthContextProvider, useAuth } from '../context/authContext';
import { MenuProvider } from 'react-native-popup-menu';


const MainLayout = () => {
    const { isAuthenticated } = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        // check user is authenticaed or not

        if (typeof isAuthenticated === 'undefined') return;

        const inApp = segments[0] === '(app)';

        if (isAuthenticated && !inApp) {
            // redirect to home
            router.replace('home')
        }
        else if (isAuthenticated == false) {
            // redirect to signIn
            router.replace('signIn')
        }


    }, [isAuthenticated])

    return <Slot />
}


const _layout = () => {
    return (
        <MenuProvider>
            <AuthContextProvider >
                < MainLayout />
            </AuthContextProvider>
        </MenuProvider>
    )
}

export default _layout

const styles = StyleSheet.create({})


// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, FlatList, StyleSheet, ScrollView } from 'react-native';

// const App = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('http://localhost:8000/users');  // Replace with your local IP address
//                 const data = await response.json();
//                 console.log(data)
//                 setUsers(data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);  // Ensure this effect runs only once when the component mounts


//     return (

//         <ScrollView>
//           {users?.map((item, index) => (
//             <View key={index}>
//               <Text>{item.id}</Text>
//               <Text>{item.userName}</Text>
//               <Text>{item.password}</Text>
//             </View>
//           ))}
//         </ScrollView>

//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingTop: 50,
//     },
//     item: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         padding: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc',
//     },
//     image: {
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//         marginRight: 10,
//     },
//     userName: {
//         fontSize: 18,
//     },
// });

// export default App;