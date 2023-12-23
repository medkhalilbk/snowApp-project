import React, { useMemo, useState } from 'react'
import { Dimensions, SafeAreaView, ScrollView, TextInput, TouchableOpacity, View,FlatList , ActivityIndicator} from 'react-native'
import CardOfOperation from './cardOfOperation' 
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'; 
import { getAllOperations } from '../../axios/dashboard';
import { updateOperationsAction } from '../../redux/actions/operations';
import * as Crypto from "expo-crypto";

function ListOfOperations() { 
  const operationsList = useSelector(
    (state) => state.operations.operationsList
    );
  React.useEffect(() =>{ setOperationListState(operationsList) },[])
  const [maxPage, setMaxPage] = useState(1);
  const userId = useSelector((state) => state.user.informations.id);
  const [operationListState, setOperationListState] = useState([])
  const dispatch = useDispatch();  
  const [page, setPage] = useState(1);
    function fetchOperations() { 
        if (page <= maxPage) {
            getAllOperations({ userId: userId }, page)
              .then((res) => {
                dispatch(updateOperationsAction(res.data));
                setPage(page + 1);
                setMaxPage(res.last_page);
                setOperationListState([...operationListState,...res.data])
              })
              .catch((err) => {
                console.log(err);
              });
        } 
         
   }
   const ListEndLoader = () => {
     
       return <ActivityIndicator size={"large"} />;
      
  };
  
  const RenderItem = ({ item, k }) => {
  
  return useMemo(
    () => (
      <CardOfOperation
        key={k}
        id={item.id}
        isDone={item.is_done}
        title={item.title}
        start_date={item.start_date + " | " + item.start_hour}
        addresse={item.ville + ", " + item.addresse}
        /* description={removeTags(op.description)} */
      />
    ),
    [item]
  );
};

  

    
  return (
    <SafeAreaView style={{ flex: 2 }}>
      <View
        style={{
          alignItems: "center",
          marginBottom: 20,
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
      <FlatList
        data={operationListState}
        renderItem={({ item, k }) => <RenderItem item={item} key={k} />}
        keyExtractor={(item, index) => item?.id?.toString() || index.toString()}
        onEndReached={() => {
          fetchOperations();
        }}
        onEndReachedThreshold={0.8}
        ListFooterComponent={ListEndLoader}
      />
    </SafeAreaView>
  );
}

export default ListOfOperations;