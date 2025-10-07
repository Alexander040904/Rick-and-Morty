import { firebaseConfig } from '@/firebase-config';
import { IconSymbol } from '@/src/presentation/components/ui/icon-symbol';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export function LoginView() {
  // Estados para almacenar el email y la contraseña
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  // Función de ejemplo para manejar el login
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert(`Bienvenido de nuevo, ${user.email}`);
        // ...
      })
      .catch((error) => {

        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
      });

  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>Login</Text>
        <Text>Inicia con una cuente existente</Text>
      </View>
      {/* Campo de Correo Electrónico con ícono */}
      <View style={styles.inputContainer}>
        <IconSymbol size={28} name="envelope.fill" color="#989A9B" />
        <TextInput
          style={styles.inputWithIcon}
          placeholder="Correo Electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Campo de Contraseña con ícono */}
      <View style={styles.inputContainer}>
        <IconSymbol size={28} name="lock.fill" color="#989A9B" />
        <TextInput
          style={styles.inputWithIcon}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      {/* Botón de Login */}
      <View style={styles.buttonContainer}>
        <Button

          title="Entrar"
          onPress={handleLogin}
          color="#36B47E"
        />
      </View>

      <Text style={styles.footerText}>
        ¿No tienes una cuenta? <Text style={styles.link}> Registrate</Text>
      </Text>



    </ScrollView>
  );
}

// Estilos básicos para la vista de login
const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Permite que el ScrollView ocupe toda la pantalla
    paddingVertical: 150,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F6F8FA', // Fondo suave
  },
  title: {
    fontSize: 28,

    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  info: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  link: {
    color: '#3BB37B',
    fontWeight: 'bold',
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

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 50,
    elevation: 2,
  },
  inputWithIcon: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  }
});
