import React from "react";
import MapView from "react-native-maps";
import { Dimensions, StyleSheet, View } from "react-native";
import * as Location from "expo-location";
import { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useState } from "react";
var { width, height } = Dimensions.get('screen')

export default function MapScreen() {

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
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLocation(location);
      setOrigin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, [location]);

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
          
          zoomEnabled = {true}
          
          style={styles.map}
          initialRegion={{
            latitudeDelta: 0.0922, // Example delta values for zoom level
            longitudeDelta: 0.0421,
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          // onPoiClick={(e)=>console.log(e)}
        >
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey="AIzaSyArv0zDFWad2xEFtI9p4nVc-fhocwEHioY"
            strokeWidth={4}
            strokeColor="blue"
            mode={"DRIVING"}
          />
          <Marker coordinate={origin} title="Home" />
          <Marker
            coordinate={destination}
            title="Iset Rades"
            onPress={() => {
              alert("test");
            }}
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
    width: width ,
    height: height,
  },
});
