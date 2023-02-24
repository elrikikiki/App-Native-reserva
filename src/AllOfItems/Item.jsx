import { View,Text,Image, FlatList, AspectRatio, Center, Box, Stack, Heading, HStack } from "native-base";
import { Button } from "react-native";
import { Link } from "react-router-native";
export default function ItemListContainer({resto}) {
    return(
        
        <Box alignItems="center" pb='30'>
        <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
      }} _web={{
        shadow: 2,
        borderWidth: 0
      }} _light={{
        backgroundColor: "gray.50"
      }}>
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image 
              source={{uri: resto.img}} alt={resto.nombre} />
            </AspectRatio>
            <Center bg="error.800" _dark={{
            bg: "error.700"
          }} _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs"
          }} position="absolute" bottom="0" px="3" py="1.5">
              FOTOS
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {resto.nombre}
              </Heading>
              <Text fontSize="xs" _light={{
              color: "error.700"
            }} _dark={{
              color: "error.700"
            }} fontWeight="500" ml="-0.5" mt="-1">
                {resto.direccion}
              </Text>
              <Text fontSize="xs" _light={{
              color: "violet.500"
            }} _dark={{
              color: "violet.400"
            }} fontWeight="500" ml="-0.5" mt="-1">
                ⭐⭐⭐⭐
              </Text>
            </Stack>
            <Text fontWeight="400">
              {resto.shortText}
            </Text>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Text color="coolGray.600" _dark={{
                color: "warmGray.200"
              }} fontWeight="400">
                  Últimas mesas
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
       
      </Box> 
      
    )
}