import { Text, View } from 'react-native';
import React from 'react';

export default function MessageItems({ message, currentUser }) {
    // Function to render formatted time based on the message
    const renderTime = () => {
        if (message?.createdAt?.seconds) {
            const messageTime = new Date(message.createdAt.seconds * 1000);
            const formattedTime = messageTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            return formattedTime;
        }
        return 'Time';
    };

    // Compute formatted time
    const formattedTime = renderTime();

    if (currentUser?.userId === message?.userId) {
        // My messages
        return (
            <View className="flex-row justify-end mb-2 mr-2">
                <View className="w-[70%] md:w-[75%]">
                    <View className="flex self-end p-3 rounded-xl bg-green-200 shadow shadow-black">
                        <Text className="text-neutral-800 text-xl md:text-3xl">
                            {message?.text}
                        </Text>
                        <View className="items-end">
                            <Text className="text-neutral-600 text-sm mt-1">
                                {formattedTime}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    } else {
        // Other users' messages
        return (
            <View className="mb-2 ml-2 w-[70%] md:w-[75%]">
                <View className="flex self-start p-3 rounded-xl bg-blue-200 shadow shadow-black">
                    <Text className="text-neutral-800 text-xl md:text-3xl">
                        {message?.text}
                    </Text>
                    <View className="items-end">
                        <Text className="text-neutral-600 text-sm mt-1">
                            {formattedTime}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}
