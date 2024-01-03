import React, { useState, useEffect, useRef } from "react";
import { Dimensions, Image, StyleSheet, View, Modal, Text, Pressable } from "react-native";
import MapView, { Circle, MapCircle, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import * as Location from "expo-location";
import { useDispatch, useSelector } from "react-redux";
import { updateLocation } from "../../redux/actions/gps";


const { width, height } = Dimensions.get("screen");


export default function MapScreen({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [location, setLocation] = useState(null);
  const [locationMarker, setLocationMarker] = useState(null)
  const [operationDetail, setOperationDetail] = useState({})
  const [distination, setDistination] = useState(null);
  const [origin, setOrigin] = useState({
    latitude: 6.9271,
    longitude: 79.8612,
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const mapRef = useRef(null);
  const dispatch = useDispatch();
  const operationsList = useSelector(
    (state) => state.operations.operationsList
  );


  useEffect(() => {
    const getLocation = async () => {
      try {
        const cordsMarkerLocation = await Location.getCurrentPositionAsync({});
        setLocationMarker(cordsMarkerLocation.coords)
        console.log(`from locationMarker ${JSON.stringify(locationMarker)}`)
        console.log(`from cordsMarkerLocation ${JSON.stringify(cordsMarkerLocation.coords)}`)

        let newLocation;
        if (route.params?.operationsCords) {
          newLocation = route.params?.operationsCords;
          setLocation(newLocation);
        } else {
          const { coords } = await Location.getCurrentPositionAsync({});
          newLocation = coords;

          setLocation(newLocation);
        }


      } catch (error) {
        setErrorMsg(error.message);
        console.log(error)
      }
    };

    getLocation();
  }, [route.params]);

  useEffect(() => {

    if (route.params?.operationsCords) {
      setLocation(route.params.operationsCords);
    }
  }, [route.params]);


  useEffect(() => {
    if (location) {
      mapRef.current.setCamera({
        center: {
          latitude: location.latitude,
          longitude: location.longitude,
          heading: 0,
          pitch: 0,
          zoom: 19.1424331665,
        },
      });
    }
  }, [route.params, location]);

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          onMapReady={() => {
            mapRef.current.getCamera().then((res) => {
              // console.log(res);
            });
          }}
          showsUserLocation={false}
          userLocationPriority="high"
          ref={mapRef}
          zoomEnabled={true}
          style={styles.map}
          initialRegion={{
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          mapType="satellite"
        >
          {locationMarker && (
            <Marker
              coordinate={{
                longitude: locationMarker.longitude,
                latitude: locationMarker.latitude,
              }}
            />
          )}
          <MapViewDirections
            origin={locationMarker}
            destination={distination}
            apikey={"AIzaSyArv0zDFWad2xEFtI9p4nVc-fhocwEHioY"}
            strokeWidth={4}
            strokeColor="rgb(15,83,255)"
            mode="DRIVING"
          />
          {operationsList.map((op, k) => (
            <Marker
              onPress={() => {
                setModalVisible(true);
                setOperationDetail(op);
              }}
              key={k}
              coordinate={{ longitude: op.lng, latitude: op.lat }}
              title={op.title}
            >
              <Image
                style={{ width: 50, height: 50, justifyContent: "center" }}
                source={
                  op.is_done === 1
                    ? require("../../assets/map_assets/green_pin.png")
                    : require("../../assets/map_assets/red_pin.png")
                }
              />
            </Marker>
          ))}
        </MapView>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{operationDetail.title}</Text>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => {
                setModalVisible(!modalVisible);
                navigation.navigate("operationDetailScreen", {
                  operationDetail,
                });
              }}
            >
              <Text style={styles.textStyle}>Voir Detail</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonGps]}
              onPress={() => {
                setModalVisible(!modalVisible);
                setDistination({
                  longitude: operationDetail.lng,
                  latitude: operationDetail.lat,
                });
              }}
            >
              <Text style={styles.textStyle}>Itinéraire</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Fermer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 50,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    marginTop: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#468EE5",
  },
  buttonGps: { backgroundColor: "#7FDF4B" },
  buttonClose: {
    backgroundColor: "#e23636",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  map: {
    width: width,
    height: height,
  },
});
