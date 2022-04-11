
import json
import unittest
from funciones import *
import requests
URL="http://localhost:3001/"
class TestStringMethods(unittest.TestCase):
    
    def setUp(self):
        
        print("init")

    def tearDown(self):
        print("ntearDown executing after the test case. Result:")
    def test_traerClientes(self):
        respuesta = requests.get(url = URL)
        self.assertFalse(len(respuesta.json())==0)
        
        
    def test_agregarCliente(self):
        cantidadClientesAntes= cantidadClientes()        
        PARAMS = {'id':0, 'compras':'hola','username':'santiago','password_user':1324}
        respuesta = requests.post(url = URL+"add",json = PARAMS)
        cantidadClientesDespues= cantidadClientes()
        self.assertTrue(cantidadClientesAntes<cantidadClientesDespues)
    def test_eliminarCliente(self):
        cantidadClientesAntes= cantidadClientes()                
        respuesta = requests.get(url = URL+"delete/0",)
        cantidadClientesDespues= cantidadClientes()
        self.assertTrue(cantidadClientesAntes>cantidadClientesDespues)


    
if __name__ == "__main__":
    unittest.main()