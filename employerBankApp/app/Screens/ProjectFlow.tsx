import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ProjectBlock from '../components/ProjectBlock';

// Define the Project type
interface Project {
  id: string;
  description: string;
  employee: string;
  progress: number; // Progress as a percentage
}

// Sample data for projects
const projects: Project[] = [
  { id: '1', description: 'Build new feature', employee: 'Jeffery', progress: 75 },
  { id: '2', description: 'Fix bugs in the application', employee: 'Jessica', progress: 50 },
  { id: '3', description: 'Write documentation', employee: 'Harry', progress: 90 },
  { id: '4', description: 'Prepare presentation', employee: 'Chris', progress: 30 },
  { id: '5', description: 'Deploy to production', employee: 'John', progress: 100 },
  { id: '6', description: 'Conduct user testing', employee: 'Ross', progress: 60 },
  { id: '7', description: 'Implement feedback from clients', employee: 'Bradley', progress: 40 },
  { id: '8', description: 'Design new UI', employee: 'Michael', progress: 80 },
  { id: '9', description: 'Update project roadmap', employee: 'David', progress: 20 },
];

const ProjectFlow: React.FC = () => {
  const renderItem = ({ item }: { item: Project }) => (
    <ProjectBlock description={item.description} employee={item.employee} progress={item.progress} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={projects}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent} // Centering the list content
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

export default ProjectFlow;
