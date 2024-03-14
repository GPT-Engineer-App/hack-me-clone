import React, { useState } from "react";
import { Box, Heading, Text, VStack, Grid, Image, Button, useColorModeValue } from "@chakra-ui/react";
import { FaLock, FaHeart } from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "Introduction to Cybersecurity",
    description: "Learn the basics of cybersecurity and how to protect your digital assets.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5fGVufDB8fHx8MTcxMDQwMzc1NXww&ixlib=rb-4.0.3&q=80&w=1080",
    difficulty: "Easy",
    likes: 123,
  },
  {
    id: 2,
    title: "Web Application Hacking",
    description: "Discover vulnerabilities in web applications and learn how to exploit them.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYWNraW5nfGVufDB8fHx8MTcxMDQwMzc1NXww&ixlib=rb-4.0.3&q=80&w=1080",
    difficulty: "Medium",
    likes: 89,
  },
  {
    id: 3,
    title: "Network Penetration Testing",
    description: "Master the art of network penetration testing and secure your infrastructure.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHl8ZW58MHx8fHwxNzEwNDAzNTU4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    difficulty: "Hard",
    likes: 56,
  },
];

const Index = () => {
  const [likedCourses, setLikedCourses] = useState([]);

  const handleLike = (courseId) => {
    if (likedCourses.includes(courseId)) {
      setLikedCourses(likedCourses.filter((id) => id !== courseId));
    } else {
      setLikedCourses([...likedCourses, courseId]);
    }
  };

  return (
    <Box>
      <VStack spacing={8} align="stretch" p={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to TryHackMe Clone
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Learn cybersecurity skills through interactive courses and challenges.
        </Text>
        <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={8}>
          {courses.map((course) => (
            <Box key={course.id} borderWidth={1} borderRadius="lg" overflow="hidden" boxShadow="md" bg={useColorModeValue("white", "gray.800")}>
              <Image src={course.image} alt={course.title} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>
                  {course.title}
                </Heading>
                <Text mb={4}>{course.description}</Text>
                <Text fontWeight="bold" mb={4}>
                  Difficulty: {course.difficulty}
                </Text>
                <Button leftIcon={likedCourses.includes(course.id) ? <FaHeart /> : <FaLock />} colorScheme={likedCourses.includes(course.id) ? "red" : "blue"} variant="solid" onClick={() => handleLike(course.id)}>
                  {likedCourses.includes(course.id) ? "Liked" : "Like"} ({course.likes})
                </Button>
              </Box>
            </Box>
          ))}
        </Grid>
      </VStack>
    </Box>
  );
};

export default Index;
