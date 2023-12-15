import React from "react";
import MapView from "react-native-maps";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import * as Location from "expo-location";
import { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLocation } from "../../redux/actions/gps"; 
const { width, height } = Dimensions.get('screen')

export default function MapScreen() { 
  const dispatch = useDispatch()

  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);

  const [destination, setDestination] = useState({
    latitude: 36.7604892213023,
    longitude: 10.269946896958375,
  });

  const [origin, setOrigin] = useState({
    latitude: 6.9271,
    longitude: 79.8612,
  });

  React.useEffect(() => {
    (async () => {
      

      let location = await Location.getCurrentPositionAsync({});
       
     
      setLocation(location);
 
      setOrigin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  });

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          showsUserLocation

          zoomEnabled={true}

          style={styles.map}
          initialRegion={{
            latitudeDelta: 0.01, // Example delta values for zoom level
            longitudeDelta: 0.01,
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          mapType="satellite"
        // onPoiClick={(e)=>console.log(e)}
        >
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey="AIzaSyArv0zDFWad2xEFtI9p4nVc-fhocwEHioY"
            strokeWidth={4}
            strokeColor="#1DA1F2"
            mode={"DRIVING"}
          />
          <Marker coordinate={origin} title="Home" >
            <Image
              source={require('../../assets/truck.png')}
              style={{ width: 44, height: 44 }}
            />
          </Marker>
          <Marker
            coordinate={destination}
            title="Iset Rades"
            onPress={() => {
              alert("test");
            }}
          />
          <Marker
            coordinate={{
              latitude: origin.latitude + 0.001, // Adjust the latitude and longitude for the red dot position
              longitude: origin.longitude + 0.001,
            }}
            pinColor={'red'} // Set the color of the marker pin to red
            title="Red Dot"
          />


        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: width,
    height: height,
  },
});
