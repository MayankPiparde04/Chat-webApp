import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
// import { useQuery } from 'convex/react';
// import { api } from '../convex/_generated/api';

// <View style={{ flex: 1 }}>
//     {groups.map((group) => (
//         <View key={group._id}>
//             <Text>{group.name}</Text>
//         </View>
//     ))}
// </View>
const StartPage = () => {
  // const groups = useQuery(api.groups.get) || [];

  return (
    <>
      <View className="flex-1 justify-center items-center">
        <View>
          <ActivityIndicator size={"large"} color={"#93f"} />
          {/* <Text>Start Page</Text> */}
        </View>
      </View>
    </>
  );
};

export default StartPage;
