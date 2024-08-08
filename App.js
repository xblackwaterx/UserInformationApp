import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://random-data-api.com/api/users/random_user?size=80');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNext = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {users.length > 0 && (
        <>
          <Image source={{ uri: users[currentIndex].avatar }} style={styles.avatar} />
          <Text style={styles.name}>{users[currentIndex].first_name} {users[currentIndex].last_name}</Text>
          
          <View style={styles.infoContainer}>
            <View style={styles.row}>
              <Icon name="id-card-outline" size={20} color="#000" />
              <TextInput style={styles.input} value={`ID: ${users[currentIndex].id}`} editable={false} />
            </View>
            <View style={styles.row}>
              <Icon name="finger-print-outline" size={20} color="#000" />
              <TextInput style={styles.input} value={`UID: ${users[currentIndex].uid}`} editable={false} />
            </View>
            <View style={styles.row}>
              <Icon name="person-outline" size={20} color="#000" />
              <TextInput style={styles.input} value={`First Name: ${users[currentIndex].first_name}`} editable={false} />
            </View>
            <View style={styles.row}>
              <Icon name="person-outline" size={20} color="#000" />
              <TextInput style={styles.input} value={`Last Name: ${users[currentIndex].last_name}`} editable={false} />
            </View>
            <View style={styles.row}>
              <Icon name="person-circle-outline" size={20} color="#000" />
              <TextInput style={styles.input} value={`Username: ${users[currentIndex].username}`} editable={false} />
            </View>
            <View style={styles.row}>
              <Icon name="mail-outline" size={20} color="#000" />
              <TextInput style={styles.input} value={`Email: ${users[currentIndex].email}`} editable={false} />
            </View>
            <View style={styles.row}>
              <Icon name="lock-closed-outline" size={20} color="#000" />
              <TextInput style={styles.input} value={`Password: ${users[currentIndex].password}`} editable={false} />
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handlePrevious} disabled={currentIndex === 0}>
              <Text style={styles.buttonText}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleNext} disabled={currentIndex === users.length - 1}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  input: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
