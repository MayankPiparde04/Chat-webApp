import React, { useState, useEffect, useRef } from 'react';
import { View, Button, Image, Text, Alert } from 'react-native';
import { Camera } from 'expo-camera';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        console.log('Camera permission status:', status); // Log permission status
        setHasPermission(status === 'granted');
      } catch (error) {
        console.error('Error requesting camera permissions:', error); // Log permission request errors
      }
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const { uri } = await cameraRef.current.takePictureAsync();
        console.log('Picture taken:', uri); // Log picture URI
        setPhotoUri(uri);
      } catch (error) {
        console.error('Error taking picture:', error); // Log errors during picture taking
        Alert.alert('Error', 'Could not take picture. Please try again.');
      }
    } else {
      Alert.alert('Error', 'Camera reference is not available.');
    }
  };

  if (hasPermission === null) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Requesting camera permissions...</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-500">No access to camera</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center items-center">
      {photoUri ? (
        <Image source={{ uri: photoUri }} className="w-full h-72" />
      ) : (
        <Camera
          ref={cameraRef}
          className="flex-1 w-full"
          type={Camera.Constants.Type.back}
        />
      )}
      <Button title={photoUri ? "Retake" : "Take Picture"} onPress={takePicture} />
    </View>
  );
};

export default CameraScreen;
