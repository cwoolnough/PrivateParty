import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import PartyItem from '../PartyItem/PartyItem';

const PartyList = (props) => {
        
    return (
        <FlatList
            style={styles.listContainer}
            data={props.parties}
            renderItem={(info) => (
                <Party 
                    partyName={info.item.name} 
                    onPartyPressed={() => props.onPartySelected(info.item.key)} 
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