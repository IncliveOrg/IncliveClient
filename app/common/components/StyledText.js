import React from 'react'
import { Text } from 'react-native'
import styles from '../styles';

class StyledText extends React.Component {
    render() {
        return (
            <Text style={styles.StyledText}>
                {this.props.children}
            </Text>
        )
    }
}

export default StyledText