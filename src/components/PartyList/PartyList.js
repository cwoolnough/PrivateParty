import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import PartyItem from '../PartyItem/PartyItem';

const PartyList = (props) => {  
    return (
        <FlatList
            style={styles.listContainer}
            data={props.parties}
            renderItem={(info) => (
                <PartyItem 
                    partyName={info.item.name}
                    partyLocation={info.item.location} 
                    partyDate={info.item.date} 
                    partyTime={info.item.time} 
                    partySecret={info.item.secret} 
                    onItemPressed={() => props.onItemSelected(info.item.key)} 
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default PartyList;