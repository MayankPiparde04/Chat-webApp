import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MenuOption } from 'react-native-popup-menu';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons';

export const MenuItem = ({ text, action, value, icon }) => {
    return (
        <MenuOption onSelect={() => action(value)}>
            <TouchableOpacity> 
                <View className="px-3 py-1 flex-row justify-between items-center">
                    <Text style={{ fontSize: hp(1.7) }} className="font-semibold  text-neutral-900">{text}
                    </Text>
                    {icon}
                </View>
            </TouchableOpacity>
        </MenuOption>
    );
};
