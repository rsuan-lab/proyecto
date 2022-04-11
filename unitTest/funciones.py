
import requests
MYURL="http://localhost:3001/"
def cantidadClientes():
        respuesta = requests.get(url = MYURL)
        """print(respuesta.json())"""
        return len(respuesta.json())