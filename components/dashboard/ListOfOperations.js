import React, { useMemo, useState } from 'react'
import { Dimensions, SafeAreaView, ScrollView, TextInput, TouchableOpacity, View, FlatList, ActivityIndicator,Text } from 'react-native'
 
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOperations } from '../../axios/dashboard';
import { updateOperationsAction } from '../../redux/actions/operations'; 
import { useEffect } from 'react';
import RunHeader from './runHeader';
import ClientDetail from './cardOfOperation';

function ListOfOperations({ navigation }) {
  const operationsList = useSelector((state) => state.operations?.runDetails);
  React.useEffect(() => {
    setOperationListState(operationsList?.addresses);
  }, []);
   
  const userId = useSelector((state) => state.user.informations.id);
  const [searchInput, setSearchInput] = useState('');
  const [filteredOperationList, setFilteredOperationList] = useState([]);
  const [operationListState, setOperationListState] = useState([])
  const [showClients, setShowClients] = useState(false)
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  React.useEffect(() => {
    setOperationListState(operationsList);
    setFilteredOperationList(operationsList);  
  }, [operationsList]);

  function fetchOperations() {
   
      getAllOperations({ userId: userId }, page)
        .then((res) => {
          
          dispatch(updateOperationsAction(res)); 
          setOperationListState(res.data) 
        })
        .catch((err) => {
          console.log(err);
        });
   

  }
 
  React.useEffect(() => {
    fetchOperations()
  }, [])

  useEffect(() => {
     
   /*  if (searchInput.trim() === '') {
      setFilteredOperationList(operationListState);
    } else {
      const filtered = operationListState.filter(item =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredOperationList(filtered);
      console.log(filtered)
    } */
  }, [searchInput, operationListState]);

  const RenderItem = ({ item, k }) => {  
    return (
      <ClientDetail item={item} navigation={navigation} key={k} id={item.id} />
    );
  }
  
  
  React.useEffect(() => { 
  }, [operationListState]);
  
  return (
    <SafeAreaView style={{ flex: 2 }}>
      <View
        style={{
          alignItems: "center",
          marginVertical: 20,
          flexDirection: "row",
          gap: 12,
          paddingLeft: 12,
          paddingRight: 12,
        }}
      >
        <TextInput
          placeholder="Chercher une opération"
          placeholderTextColor="white"
          style={{
            borderRadius: 5,
            padding: 12,
            fontSize: 12,
            color: "white",
            backgroundColor: "#2B2E36",
            width: 250,
            height: 38,
            justifyContent: "center",
          }}
          onChangeText={(text) => setSearchInput(text)}
        />

        <TouchableOpacity
          style={{
            width: 31,
            height: 30,
            backgroundColor: "#44C01D",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
          }}
        >
          <FontAwesome name="search" size={17} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 31,
            height: 30,
            backgroundColor: "#1DA1F2",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
          }}
        >
          <AntDesign name="filter" size={17} color="white" />
        </TouchableOpacity>
      </View>

      <RunHeader
        setShowClients={setShowClients}
        title={operationsList.runDetails?.nom}
      />

      {showClients && (
        <FlatList
          data={operationListState?.runDetails.addresses}
          renderItem={({ item, k }) => <RenderItem item={item} key={k} />}
          keyExtractor={(item, index) =>
            item?.id?.toString() || index.toString()
          } 
        />
      )}
    </SafeAreaView>
  );
}

export default ListOfOperations;