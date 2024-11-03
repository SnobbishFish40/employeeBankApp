import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ScheduleBlock from '../components/ScheduleBlock';

// Define the Schedule type
interface Schedule {
  id: string;
  name: string;
  location: string;
  project:string
}

// Sample data for the schedules
const schedules: Schedule[] = [
    { id: '1', name: 'Jeffery', location: 'Office', project: 'Project X' },
    { id: '2', name: 'Jessica', location: 'Home', project: 'Internal Tooling App' },
    { id: '3', name: 'Harry', location: 'Home', project: 'Mortgage App' },
    { id: '4', name: 'Chris', location: 'Home', project: 'Mortgage App' },
    { id: '5', name: 'John', location: 'Office', project: 'Project X' },
    { id: '6', name: 'Ross', location: 'Office', project: 'Internal Tooling App' },
    { id: '7', name: 'Bradley', location: 'Office', project: 'Mortgage App' },
    { id: '8', name: 'Michael', location: 'Office', project: 'Project X' },
    { id: '9', name: 'David', location: 'Office', project: 'Internal Tooling App' },
    { id: '10', name: 'Michael', location: 'Office', project: 'Mortgage App' },
    { id: '11', name: 'David', location: 'Office', project: 'Project X' },
    { id: '12', name: 'Alice', location: 'Remote', project: 'Project X' },
    { id: '13', name: 'Eve', location: 'Office', project: 'Internal Tooling App' },
    { id: '14', name: 'Tom', location: 'Home', project: 'Mortgage App' },
    { id: '15', name: 'Lucy', location: 'Home', project: 'Project X' },
    { id: '16', name: 'Brian', location: 'Office', project: 'Internal Tooling App' },
    { id: '17', name: 'Sophia', location: 'Office', project: 'Mortgage App' },
    { id: '18', name: 'Daniel', location: 'Remote', project: 'Project X' },
    { id: '19', name: 'Emma', location: 'Home', project: 'Internal Tooling App' },
    { id: '20', name: 'Liam', location: 'Office', project: 'Mortgage App' },
  ];

  const selectedProject = 'Project X'; // Change this to filter by different projects

  
const SchedulesList: React.FC = () => {
    const filteredSchedules = schedules.filter(schedule => schedule.project === selectedProject);

  const renderItem = ({ item }: { item: Schedule }) => (
    <ScheduleBlock name={item.name} location={item.location} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={schedules}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false} // Optional: to hide the scroll indicator
        contentContainerStyle={styles.listContent} // Center items
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  listContent: {
    alignItems: 'center', // Center items horizontally
    paddingBottom: 16, // Optional: add padding to the bottom
  },
});

export default SchedulesList;
