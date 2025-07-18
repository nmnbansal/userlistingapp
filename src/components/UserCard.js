import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const UserCard = ({ user }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{`${user.first_name} ${user.last_name}`}</Title>
        <Paragraph>{user.email}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default UserCard;