import React, { useState } from 'react';
import {
    Button,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

export function LoginView() {
  // Estados para almacenar el email y la contraseña
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función de ejemplo para manejar el login
  const handleLogin = () => {
    // Aquí es donde harías la lógica real de autenticación
    console.log('Intentando iniciar sesión con:', { email, password });
    alert(`Intentando iniciar sesión con Email: ${email}`);
    // Podrías añadir navegación, llamadas a API, etc.
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View  style={styles.info}>
   <Text style={styles.title}>Login 👋</Text>
      <Text>ssssssssssssssssssssssssss</Text>
    </View>
   
      
      {/* Campo de Correo Electrónico */}
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      {/* Campo de Contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry // Oculta la entrada de texto
      />
      
      {/* Botón de Login */}
      <View style={styles.buttonContainer}>
        <Button
        
          title="Entrar"
          onPress={handleLogin}
          color="#0d5f1fff" // Un color azul moderno
          
          
          disabled={!email || !password} // Deshabilita si faltan campos
        />
      </View>



    </ScrollView>
  );
}

// Estilos básicos para la vista de login
const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Permite que el ScrollView ocupe toda la pantalla
    paddingVertical: 50,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffffff', // Fondo suave
  },
  title: {
    fontSize: 28,
  
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  info:{
      paddingVertical:80,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
    borderRadius: 12,
    overflow: 'hidden', // Para que el borde redondeado afecte al botón en Android
    
  },
  footerText: {
    marginTop: 25,
    fontSize: 14,
    color: '#555',
  },
  button:{
    backgroundColor:'#2511d6ff'
  }
});