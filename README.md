# sitrel-cic-mockup-server

## API

### &#10004; **GET** /connect/_:agent_/_:pass_/_:station_/_:host_

Agrega una sesión del agente al discador.

### &#10004; **GET** /disconnect/_:agent_

Quita la sesión del agente.

### **GET** /status/_:agent_

Obtiene el status del agente.

### &#10004; **GET** /campaing/list/_:agent_

Lista las campañas para el agente. En el mockup, lista los códigos en _mockup-data.js_.

### **GET** /campaing/login/_:agent_/_:campaing_

- &#10004; Conecta el agente a la campaña.
- &#10004; Inyectar llamada tras timeout. Se visualizará un rut en contactData.

### &#10004; **GET** /campaing/logout/_:agent_/_:campaing_

Desconecta el agente a la campaña.

### **GET** /campaing/disposition/_:agent_/_:code_

Marca el termino de una llamada activa para el agente, con el código indicado.

### **GET** /break/_:agent_
### **GET** /endbreak/_:agent_
### **GET** /statusList/_:agent_
### **GET** /status/update/_:agent_/_:status_